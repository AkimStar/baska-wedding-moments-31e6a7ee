"""Generate a 1200x630 OG share image for baskaproduction.com.

Framed wedding-editorial style: real wedding photo as the hero inside a
cream matted photo frame, uniform warm darkening (no bright middle band),
logo + minimal typography overlaid.
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
GOLD_DIM = (160, 130, 85)
MAT_CREAM = (232, 222, 204)     # outer mat color (warm cream)
MAT_SHADOW = (90, 78, 60)       # inner shadow edge

# Frame geometry
FRAME = 22                       # cream mat thickness
INNER_LINE = 2                   # thin dark inner hairline thickness

FONTS_DIR = "C:/Windows/Fonts"
SERIF_REG = os.path.join(FONTS_DIR, "georgia.ttf")
SERIF_ITAL = os.path.join(FONTS_DIR, "georgiai.ttf")
SANS_SBOLD = os.path.join(FONTS_DIR, "segoeuisl.ttf")


def cover_crop(im, target_w, target_h):
    iw, ih = im.size
    scale = max(target_w / iw, target_h / ih)
    nw, nh = int(iw * scale), int(ih * scale)
    im = im.resize((nw, nh), Image.LANCZOS)
    left = (nw - target_w) // 2
    top = (nh - target_h) // 2
    return im.crop((left, top, left + target_w, top + target_h))


def cinematic_grade(im):
    im = ImageEnhance.Color(im).enhance(0.82)
    im = ImageEnhance.Contrast(im).enhance(1.08)
    im = ImageEnhance.Brightness(im).enhance(0.88)
    warm = Image.new("RGB", im.size, (170, 110, 70))
    return Image.blend(im, warm, 0.10)


def uniform_darken(w, h, alpha=120):
    """Single-color dark wash, uniform — no bright middle."""
    return Image.new("RGBA", (w, h), (5, 5, 8, alpha))


def vignette_layer(w, h, intensity=110):
    v = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(v)
    for i in range(160):
        a = int(intensity * (i / 160) ** 2.2)
        d.rectangle([i, i, w - i, h - i], outline=(0, 0, 0, a))
    return v


def draw_centered(draw, text, y, font, fill, w=W, tracking=0, x_offset=0):
    if tracking:
        widths = [draw.textbbox((0, 0), ch, font=font)[2] for ch in text]
        total = sum(widths) + tracking * (len(text) - 1)
        x = (w - total) // 2 + x_offset
        for ch, cw in zip(text, widths):
            draw.text((x, y), ch, font=font, fill=fill)
            x += cw + tracking
    else:
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        draw.text(((w - tw) // 2 - bbox[0] + x_offset, y), text, font=font, fill=fill)


def draw_tracked(draw, text, x, y, font, fill, tracking=4):
    for ch in text:
        draw.text((x, y), ch, font=font, fill=fill)
        x += draw.textbbox((0, 0), ch, font=font)[2] + tracking


# Inner photo area (what's inside the frame)
PX, PY = FRAME, FRAME
PW, PH = W - FRAME * 2, H - FRAME * 2

# --- 1. Hero photo, cropped to inner dimensions ---
hero_full = Image.open(HERO).convert("RGB")
hero_photo = cover_crop(hero_full, PW, PH)
hero_photo = cinematic_grade(hero_photo).convert("RGBA")

# Uniform dark wash (no bright middle band)
hero_photo = Image.alpha_composite(hero_photo, uniform_darken(PW, PH, alpha=115))
# Strong vignette pulls attention to the center
hero_photo = Image.alpha_composite(hero_photo, vignette_layer(PW, PH, intensity=120))

# --- 2. Build the outer frame (cream mat with inner gold hairline) ---
canvas = Image.new("RGB", (W, H), MAT_CREAM)
# Subtle paper texture gradient on the mat (very slight vertical shade)
grad = Image.new("RGBA", (W, H), (0, 0, 0, 0))
gd = ImageDraw.Draw(grad)
for y in range(H):
    t = y / H
    a = int(20 * abs(t - 0.5) * 2)  # slightly darker near edges
    gd.line([(0, y), (W, y)], fill=(60, 50, 35, a))
canvas = Image.alpha_composite(canvas.convert("RGBA"), grad).convert("RGB")

# Paste hero photo inside frame
canvas.paste(hero_photo, (PX, PY), hero_photo)
canvas = canvas.convert("RGBA")

draw = ImageDraw.Draw(canvas)

# --- 3. Frame decorations ---
# Thin dark inner line sitting just inside the mat edge (makes the frame pop)
for i in range(INNER_LINE):
    draw.rectangle(
        [PX - 1 - i, PY - 1 - i, W - PX + i, H - PY + i],
        outline=(30, 22, 14, 255), width=1,
    )
# Gold hairline further out (on the mat itself) — elegant matted-print feel
gold_inset = 8
draw.rectangle(
    [PX - INNER_LINE - gold_inset, PY - INNER_LINE - gold_inset,
     W - PX + INNER_LINE + gold_inset - 1, H - PY + INNER_LINE + gold_inset - 1],
    outline=GOLD_DIM, width=1,
)

# Tiny ornamental corner dots on the mat
for (cx_, cy_) in [
    (PX - INNER_LINE - gold_inset, PY - INNER_LINE - gold_inset),
    (W - PX + INNER_LINE + gold_inset - 1, PY - INNER_LINE - gold_inset),
    (PX - INNER_LINE - gold_inset, H - PY + INNER_LINE + gold_inset - 1),
    (W - PX + INNER_LINE + gold_inset - 1, H - PY + INNER_LINE + gold_inset - 1),
]:
    draw.ellipse([cx_ - 2, cy_ - 2, cx_ + 2, cy_ + 2], fill=GOLD)

# Soft inner shadow (drop shadow into the photo, like glass depth)
shadow = Image.new("RGBA", (W, H), (0, 0, 0, 0))
sd = ImageDraw.Draw(shadow)
for i in range(10):
    a = int(40 * (1 - i / 10))
    sd.rectangle([PX + i, PY + i, W - PX - i, H - PY - i],
                 outline=(0, 0, 0, a), width=1)
canvas = Image.alpha_composite(canvas, shadow)

draw = ImageDraw.Draw(canvas)

cx = W // 2

# --- 4. Top editorial header inside the photo (subtle) ---
f_tag = ImageFont.truetype(SANS_SBOLD, 15)
top_y = PY + 14
draw_tracked(draw, "СВАТБЕНА ФОТОГРАФИЯ", PX + 26, top_y,
             f_tag, (230, 220, 200, 220), tracking=4)
right_tag = "СИЛИСТРА  ·  БЪЛГАРИЯ"
rw = sum(draw.textbbox((0, 0), ch, font=f_tag)[2] for ch in right_tag) + 4 * (len(right_tag) - 1)
draw_tracked(draw, right_tag, W - PX - 26 - rw, top_y,
             f_tag, (230, 220, 200, 220), tracking=4)

# --- 5. Logo centered ---
logo = Image.open(LOGO).convert("RGBA")
r, g, b, a = logo.split()
rgb = Image.merge("RGB", (r, g, b))
inv = ImageChops.invert(rgb)
warm = Image.new("RGB", inv.size, WHITE)
inv_warm = ImageChops.multiply(inv, warm)
logo_light = Image.merge("RGBA", (*inv_warm.split(), a))

# Soft drop shadow for legibility
shadow_rgb = Image.new("RGB", logo_light.size, (0, 0, 0))
shadow_rgba = Image.merge("RGBA", (*shadow_rgb.split(), a))
shadow_blur = shadow_rgba.filter(ImageFilter.GaussianBlur(10))

target_w = 500
ratio = target_w / logo_light.width
logo_resized = logo_light.resize(
    (target_w, int(logo_light.height * ratio)), Image.LANCZOS)
shadow_resized = shadow_blur.resize(
    (target_w, int(shadow_blur.height * ratio)), Image.LANCZOS)

lx = (W - logo_resized.width) // 2
ly = (H - logo_resized.height) // 2 - 34
canvas.paste(shadow_resized, (lx + 2, ly + 5), shadow_resized)
canvas.paste(logo_resized, (lx, ly), logo_resized)

draw = ImageDraw.Draw(canvas)

# --- 6. Tagline below logo ---
tag_y = ly + logo_resized.height + 22
f_serif = ImageFont.truetype(SERIF_ITAL, 26)
draw_centered(draw, "Улавяме Вашите мечтани сватбени моменти",
              tag_y, f_serif, (245, 238, 222, 255))

# --- 7. Bottom URL ---
f_url = ImageFont.truetype(SERIF_REG, 19)
draw_centered(draw, "baskaproduction.com",
              H - PY - 32, f_url, (240, 232, 214, 255))

# --- 8. Save ---
final = canvas.convert("RGB")
os.makedirs(os.path.dirname(OUT), exist_ok=True)
final.save(OUT, "JPEG", quality=92, optimize=True, progressive=True)
print(f"Wrote {OUT} ({os.path.getsize(OUT) / 1024:.1f} KB)")
