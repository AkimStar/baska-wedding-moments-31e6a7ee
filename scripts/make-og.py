"""Generate a 1200x630 OG share image for baskaproduction.com.

Refined framed-print style: wedding photo inside a slim dark-champagne
frame, warm cinematic grade (no teal shift), smaller logo positioned
lower so the couple stays visible, tagline on a soft dark band for
legibility on the white dress.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance, ImageChops
import os

W, H = 1200, 630
HERE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(HERE, "..", "public")
OUT = os.path.join(PUBLIC, "og-image.jpg")
LOGO = os.path.join(PUBLIC, "logo.png")
HERO = os.path.join(PUBLIC, "gallery", "gallery-1.webp")

WHITE = (250, 246, 238)
GOLD = (210, 178, 128)
GOLD_DIM = (150, 120, 78)
# Slim frame colors — layered wood+gold feel (dark champagne)
FRAME_DARK = (28, 22, 18)         # outermost dark band
FRAME_GOLD = (160, 128, 82)       # slim gold
FRAME_INK = (12, 9, 7)            # innermost hairline

# Frame geometry
OUTER = 18     # total frame thickness

FONTS_DIR = "C:/Windows/Fonts"
SERIF_REG = os.path.join(FONTS_DIR, "georgia.ttf")
SERIF_ITAL = os.path.join(FONTS_DIR, "georgiai.ttf")
SERIF_BOLD = os.path.join(FONTS_DIR, "georgiab.ttf")
SANS_SBOLD = os.path.join(FONTS_DIR, "segoeuisl.ttf")


def cover_crop(im, target_w, target_h):
    iw, ih = im.size
    scale = max(target_w / iw, target_h / ih)
    nw, nh = int(iw * scale), int(ih * scale)
    im = im.resize((nw, nh), Image.LANCZOS)
    left = (nw - target_w) // 2
    top = (nh - target_h) // 2
    return im.crop((left, top, left + target_w, top + target_h))


def warm_cinematic_grade(im):
    """Warm cinematic grade — keeps shadows warm-black (no teal cast).

    1) Small desaturation pass
    2) Lower blacks slightly for depth
    3) Pure channel-level warm tint: boost red, reduce blue across the image
    """
    im = ImageEnhance.Color(im).enhance(0.88)
    im = ImageEnhance.Contrast(im).enhance(1.06)
    im = ImageEnhance.Brightness(im).enhance(0.86)
    r, g, b = im.split()
    # multiplicative tone so shadows also go warm (not teal)
    r = r.point(lambda v: min(255, int(v * 1.06) + 6))
    g = g.point(lambda v: min(255, int(v * 0.99)))
    b = b.point(lambda v: max(0, int(v * 0.82) - 4))
    return Image.merge("RGB", (r, g, b))


def bottom_darken_gradient(w, h, peak_alpha=170):
    """Gradient that darkens bottom half for text legibility (no mid-bright band)."""
    g = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    px = g.load()
    for y in range(h):
        t = y / max(1, h - 1)
        # ease-in starting around 35% down
        if t < 0.35:
            a = int(60 * (1 - t / 0.35))  # slight top darkening fades out
        else:
            x = (t - 0.35) / 0.65
            a = int(peak_alpha * (x ** 1.8))
        for x2 in range(w):
            px[x2, y] = (5, 4, 3, a)
    return g


def vignette_layer(w, h, intensity=95):
    v = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(v)
    for i in range(180):
        a = int(intensity * (i / 180) ** 2.2)
        d.rectangle([i, i, w - i, h - i], outline=(0, 0, 0, a))
    return v


def radial_darken(w, h, cx, cy, radius, peak_alpha):
    """Soft dark oval behind center content for legibility."""
    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    steps = 60
    for i in range(steps, 0, -1):
        r = int(radius * (i / steps))
        fade = ((steps - i) / steps) ** 2.4
        a = int(peak_alpha * fade)
        d.ellipse([cx - r, cy - int(r * 0.55), cx + r, cy + int(r * 0.55)],
                  fill=(0, 0, 0, a))
    return layer.filter(ImageFilter.GaussianBlur(50))


def draw_centered(draw, text, y, font, fill, w=W, tracking=0):
    if tracking:
        widths = [draw.textbbox((0, 0), ch, font=font)[2] for ch in text]
        total = sum(widths) + tracking * (len(text) - 1)
        x = (w - total) // 2
        for ch, cw in zip(text, widths):
            draw.text((x, y), ch, font=font, fill=fill)
            x += cw + tracking
    else:
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        draw.text(((w - tw) // 2 - bbox[0], y), text, font=font, fill=fill)


# Inner photo dimensions
PX, PY = OUTER, OUTER
PW, PH = W - OUTER * 2, H - OUTER * 2

# --- 1. Hero photo ---
hero = Image.open(HERO).convert("RGB")
hero = cover_crop(hero, PW, PH)
hero = warm_cinematic_grade(hero).convert("RGBA")

# --- 2. Overlays — uniform dark wash first so nothing in the middle
#        is brighter than the edges (prevents the logo's camera body
#        outline from framing a bright rectangle of photo) ---
hero = Image.alpha_composite(hero, Image.new("RGBA", (PW, PH), (4, 3, 2, 155)))
# Tiny extra vignette on corners only
hero = Image.alpha_composite(hero, vignette_layer(PW, PH, intensity=70))

# Extra radial darkening CENTERED ON THE LOGO so the area the camera body
# outline encloses is even darker than the rest of the photo.
# Logo will sit at photo-local y ~ (PH/2 - 40 - OUTER) ≈ 239
hero = Image.alpha_composite(
    hero,
    radial_darken(PW, PH, PW // 2, PH // 2 - 30, 420, 120),
)

# --- 3. Build the slim frame: outer dark, thin gold, inner ink hairline ---
canvas = Image.new("RGB", (W, H), FRAME_DARK)
canvas.paste(hero, (PX, PY), hero)
canvas = canvas.convert("RGBA")
draw = ImageDraw.Draw(canvas)

# Gold middle band (thin)
draw.rectangle(
    [OUTER - 6, OUTER - 6, W - OUTER + 5, H - OUTER + 5],
    outline=FRAME_GOLD, width=1,
)
# Innermost ink hairline (right against the photo edge)
draw.rectangle(
    [OUTER - 1, OUTER - 1, W - OUTER, H - OUTER],
    outline=FRAME_INK, width=1,
)
# Outer subtle light edge (tiny catchlight on the frame)
draw.rectangle([2, 2, W - 3, H - 3], outline=(60, 48, 36, 255), width=1)

# Subtle inner shadow (glass depth)
sh = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(sh)
for i in range(8):
    a = int(55 * (1 - i / 8))
    sd.rectangle([PX + i, PY + i, W - PX - i, H - PY - i],
                 outline=(0, 0, 0, a), width=1)
canvas = Image.alpha_composite(canvas, sh)
draw = ImageDraw.Draw(canvas)

# --- 4. Full logo centered (smaller, softened so the camera body
#        doesn't read as a hard rectangle competing with the photo) ---
logo = Image.open(LOGO).convert("RGBA")
r, g, b, a = logo.split()
rgb = Image.merge("RGB", (r, g, b))
inv = ImageChops.invert(rgb)
warm_tint = Image.new("RGB", inv.size, WHITE)
inv_warm = ImageChops.multiply(inv, warm_tint)
logo_light = Image.merge("RGBA", (*inv_warm.split(), a))

target_w = 480
ratio = target_w / logo_light.width
logo_resized = logo_light.resize(
    (target_w, int(logo_light.height * ratio)), Image.LANCZOS)

lx = (W - logo_resized.width) // 2
ly = (H - logo_resized.height) // 2 - 40
canvas.paste(logo_resized, (lx, ly), logo_resized)
draw = ImageDraw.Draw(canvas)

# --- 5. Thin gold divider below logo ---
cx = W // 2
div_y = ly + logo_resized.height + 22
draw.line([(cx - 90, div_y), (cx - 10, div_y)], fill=GOLD, width=1)
draw.line([(cx + 10, div_y), (cx + 90, div_y)], fill=GOLD, width=1)
d = 3
draw.polygon([(cx, div_y - d), (cx + d, div_y), (cx, div_y + d), (cx - d, div_y)],
             fill=GOLD)

# --- 6. Tagline (serif italic, warm off-white) ---
tag_y = div_y + 18
f_serif = ImageFont.truetype(SERIF_ITAL, 24)
draw_centered(draw, "Улавяме Вашите мечтани сватбени моменти",
              tag_y, f_serif, (250, 244, 228, 255))

# --- 7. Bottom metadata row (uppercase, subtle) ---
f_meta = ImageFont.truetype(SANS_SBOLD, 14)
meta = "BASKAPRODUCTION.COM   ·   СИЛИСТРА   ·   БЪЛГАРИЯ"
draw_centered(draw, meta, H - PY - 30, f_meta, (220, 200, 168, 230), tracking=5)

# --- 8. Save ---
final = canvas.convert("RGB")
os.makedirs(os.path.dirname(OUT), exist_ok=True)
final.save(OUT, "JPEG", quality=92, optimize=True, progressive=True)
print(f"Wrote {OUT} ({os.path.getsize(OUT) / 1024:.1f} KB)")
