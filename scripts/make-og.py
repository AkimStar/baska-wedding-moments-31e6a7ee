"""Generate a 1200x630 OG share image for baskaproduction.com.

Editorial/cinematic wedding-magazine style: real wedding photo as the hero,
warm cinematic grade, strong bottom gradient, logo + minimal editorial
typography overlaid.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageEnhance, ImageChops
import os

W, H = 1200, 630
HERE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(HERE, "..", "public")
OUT = os.path.join(PUBLIC, "og-image.jpg")
LOGO = os.path.join(PUBLIC, "logo.png")
HERO = os.path.join(PUBLIC, "gallery", "gallery-1.webp")  # signature landscape shot

WHITE = (250, 246, 238)
GOLD = (210, 178, 128)

FONTS_DIR = "C:/Windows/Fonts"
SERIF_REG = os.path.join(FONTS_DIR, "georgia.ttf")
SERIF_ITAL = os.path.join(FONTS_DIR, "georgiai.ttf")
SANS_LIGHT = os.path.join(FONTS_DIR, "segoeuil.ttf")
SANS_SBOLD = os.path.join(FONTS_DIR, "segoeuisl.ttf")


def cover_crop(im, target_w, target_h):
    """Crop image to exactly cover target dimensions (object-fit: cover)."""
    iw, ih = im.size
    scale = max(target_w / iw, target_h / ih)
    nw, nh = int(iw * scale), int(ih * scale)
    im = im.resize((nw, nh), Image.LANCZOS)
    left = (nw - target_w) // 2
    top = (nh - target_h) // 2
    return im.crop((left, top, left + target_w, top + target_h))


def cinematic_grade(im):
    """Editorial color grade: slight desaturation + warm tone + deepened blacks."""
    im = ImageEnhance.Color(im).enhance(0.82)          # desaturate a touch
    im = ImageEnhance.Contrast(im).enhance(1.08)       # a little contrast
    im = ImageEnhance.Brightness(im).enhance(0.92)     # darken overall
    # Warm tone overlay (burnt sienna at 18% opacity)
    warm = Image.new("RGB", im.size, (170, 110, 70))
    im = Image.blend(im, warm, 0.10)
    return im


def vertical_gradient_layer(w, h, stops):
    """stops = [(position 0..1, (r,g,b,a)), ...]  linear top->bottom."""
    g = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    px = g.load()
    stops = sorted(stops, key=lambda s: s[0])
    for y in range(h):
        t = y / max(1, h - 1)
        # find bracketing stops
        for i in range(len(stops) - 1):
            p0, c0 = stops[i]
            p1, c1 = stops[i + 1]
            if p0 <= t <= p1:
                f = (t - p0) / max(1e-9, (p1 - p0))
                r = int(c0[0] + (c1[0] - c0[0]) * f)
                gg = int(c0[1] + (c1[1] - c0[1]) * f)
                b = int(c0[2] + (c1[2] - c0[2]) * f)
                a = int(c0[3] + (c1[3] - c0[3]) * f)
                for x in range(w):
                    px[x, y] = (r, gg, b, a)
                break
    return g


def vignette_layer(w, h, intensity=130):
    v = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(v)
    for i in range(180):
        a = int(intensity * (i / 180) ** 2.2)
        d.rectangle([i, i, w - i, h - i], outline=(0, 0, 0, a))
    return v


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


# --- 1. Hero photo background ---
hero = Image.open(HERO).convert("RGB")
hero = cover_crop(hero, W, H)
hero = cinematic_grade(hero).convert("RGBA")

# --- 2. Gradient overlays (editorial: dark top + dark bottom for text legibility) ---
grad = vertical_gradient_layer(W, H, [
    (0.00, (5, 5, 8, 180)),
    (0.18, (5, 5, 8, 60)),
    (0.45, (5, 5, 8, 30)),
    (0.70, (5, 5, 8, 130)),
    (1.00, (5, 5, 8, 230)),
])
hero = Image.alpha_composite(hero, grad)

# Vignette
hero = Image.alpha_composite(hero, vignette_layer(W, H, intensity=110))

draw = ImageDraw.Draw(hero)

# --- 3. Cinematic letterbox-style hairlines (top + bottom thin ticks) ---
# Thin horizontal hairlines near edges
draw.line([(60, 44), (W - 60, 44)], fill=(255, 255, 255, 40), width=1)
draw.line([(60, H - 44), (W - 60, H - 44)], fill=(255, 255, 255, 40), width=1)

# --- 4. Top editorial header: corner tags ---
f_tag = ImageFont.truetype(SANS_SBOLD, 15)
# Left tag
left_tag = "СВАТБЕНА ФОТОГРАФИЯ"
draw.text((60, 22), "", font=f_tag)  # warmup
# Manual tracked draw left-aligned
def draw_tracked(draw, text, x, y, font, fill, tracking=4):
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textbbox((0, 0), ch, font=font)[2] + tracking
    return x

draw_tracked(draw, left_tag, 60, 20, f_tag, (230, 220, 200, 220), tracking=4)

# Right tag: EST + year dot pattern or "BG · BULGARIA"
right_tag = "СИЛИСТРА  ·  БЪЛГАРИЯ"
# compute width first
rw = sum(draw.textbbox((0, 0), ch, font=f_tag)[2] for ch in right_tag) + 4 * (len(right_tag) - 1)
draw_tracked(draw, right_tag, W - 60 - rw, 20, f_tag, (230, 220, 200, 220), tracking=4)

# --- 5. Small centered eyebrow above logo ---
f_eyebrow = ImageFont.truetype(SANS_SBOLD, 13)
draw_centered(draw, "WEDDING  STORYTELLERS  ·  EST.  2014",
              220, f_eyebrow, (220, 200, 165, 255), tracking=6)

# Tiny horizontal hairline above logo
cx = W // 2
draw.line([(cx - 80, 248), (cx - 16, 248)], fill=(210, 178, 128, 200), width=1)
draw.line([(cx + 16, 248), (cx + 80, 248)], fill=(210, 178, 128, 200), width=1)
# Tiny diamond
d = 3
draw.polygon([(cx, 248 - d), (cx + d, 248), (cx, 248 + d), (cx - d, 248)],
             fill=(210, 178, 128, 255))

# --- 6. Logo (inverted to warm off-white) centered ---
logo = Image.open(LOGO).convert("RGBA")
r, g, b, a = logo.split()
rgb = Image.merge("RGB", (r, g, b))
inv = ImageChops.invert(rgb)
warm = Image.new("RGB", inv.size, WHITE)
inv_warm = ImageChops.multiply(inv, warm)
logo_light = Image.merge("RGBA", (*inv_warm.split(), a))

# Subtle drop shadow for legibility on busy photos
shadow = Image.new("RGBA", logo_light.size, (0, 0, 0, 0))
shadow_rgb = Image.new("RGB", logo_light.size, (0, 0, 0))
shadow_rgba = Image.merge("RGBA", (*shadow_rgb.split(), a))
shadow_blur = shadow_rgba.filter(ImageFilter.GaussianBlur(8))

target_w = 520
ratio = target_w / logo_light.width
logo_resized = logo_light.resize(
    (target_w, int(logo_light.height * ratio)), Image.LANCZOS)
shadow_resized = shadow_blur.resize(
    (target_w, int(shadow_blur.height * ratio)), Image.LANCZOS)

lx = (W - logo_resized.width) // 2
ly = 268
# shadow slightly offset
hero.paste(shadow_resized, (lx + 2, ly + 4), shadow_resized)
hero.paste(logo_resized, (lx, ly), logo_resized)

draw = ImageDraw.Draw(hero)  # refresh

# --- 7. Tagline below logo ---
tag_y = ly + logo_resized.height + 24
f_serif = ImageFont.truetype(SERIF_ITAL, 26)
draw_centered(draw, "Улавяме Вашите мечтани сватбени моменти",
              tag_y, f_serif, (245, 238, 222, 255))

# --- 8. Bottom URL block ---
# Thin gold horizontal rule + URL
url_y = H - 70
draw.line([(cx - 210, url_y), (cx - 60, url_y)], fill=(210, 178, 128, 180), width=1)
draw.line([(cx + 60, url_y), (cx + 210, url_y)], fill=(210, 178, 128, 180), width=1)

f_url = ImageFont.truetype(SERIF_REG, 19)
draw_centered(draw, "baskaproduction.com",
              url_y - 12, f_url, (245, 238, 222, 255))

# --- 9. Save ---
final = hero.convert("RGB")
os.makedirs(os.path.dirname(OUT), exist_ok=True)
final.save(OUT, "JPEG", quality=92, optimize=True, progressive=True)
print(f"Wrote {OUT} ({os.path.getsize(OUT) / 1024:.1f} KB)")
