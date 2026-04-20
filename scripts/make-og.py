"""Generate a 1200x630 OG share image for baskaproduction.com.

Wedding-photographer aesthetic: deep charcoal background with a warm
champagne glow, thin gold art-deco corner flourishes, the inverted
logo.png at center, italic serif tagline below.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter, ImageChops
import os
import random

W, H = 1200, 630
HERE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(HERE, "..", "public")
OUT = os.path.join(PUBLIC, "og-image.jpg")
LOGO = os.path.join(PUBLIC, "logo.png")

# Palette — matches site (--primary 36 20% 50% ≈ warm gold/taupe on dark)
BG_TOP = (22, 18, 16)       # warm charcoal
BG_BOT = (10, 8, 7)         # near black
GOLD = (200, 170, 120)      # champagne
GOLD_SOFT = (168, 140, 95)
GOLD_FAINT = (120, 100, 72)
WHITE = (248, 244, 236)     # warm off-white
MUTED = (170, 160, 145)

FONTS_DIR = "C:/Windows/Fonts"
SERIF_REG = os.path.join(FONTS_DIR, "georgia.ttf")
SERIF_ITAL = os.path.join(FONTS_DIR, "georgiai.ttf")
SANS_LIGHT = os.path.join(FONTS_DIR, "segoeuil.ttf")
SANS_SBOLD = os.path.join(FONTS_DIR, "segoeuisl.ttf")


def vgrad(w, h, top, bot):
    img = Image.new("RGB", (w, h), top)
    d = ImageDraw.Draw(img)
    for y in range(h):
        t = y / max(1, h - 1)
        r = int(top[0] + (bot[0] - top[0]) * t)
        g = int(top[1] + (bot[1] - top[1]) * t)
        b = int(top[2] + (bot[2] - top[2]) * t)
        d.line([(0, y), (w, y)], fill=(r, g, b))
    return img


def radial_glow(w, h, cx, cy, radius, color, peak_alpha):
    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    steps = 80
    for i in range(steps, 0, -1):
        r = int(radius * (i / steps))
        fade = ((steps - i) / steps) ** 2.2
        a = int(peak_alpha * fade)
        d.ellipse([cx - r, cy - r, cx + r, cy + r],
                  fill=(color[0], color[1], color[2], a))
    return layer.filter(ImageFilter.GaussianBlur(60))


def add_noise(img, strength=6):
    random.seed(7)
    noise = Image.new("RGB", img.size)
    px = noise.load()
    w, h = img.size
    for y in range(h):
        for x in range(w):
            n = random.randint(-strength, strength)
            px[x, y] = (128 + n, 128 + n, 128 + n)
    return ImageChops.overlay(img, noise)


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


def art_deco_corner(draw, x, y, size, color, flip_x=False, flip_y=False):
    """Draw a thin art-deco style corner ornament."""
    dx = -1 if flip_x else 1
    dy = -1 if flip_y else 1
    # Outer L
    draw.line([(x, y), (x + size * dx, y)], fill=color, width=1)
    draw.line([(x, y), (x, y + size * dy)], fill=color, width=1)
    # Inner parallel line
    off = 10
    draw.line([(x + off * dx, y + off * dy),
               (x + (size - 14) * dx, y + off * dy)], fill=color, width=1)
    draw.line([(x + off * dx, y + off * dy),
               (x + off * dx, y + (size - 14) * dy)], fill=color, width=1)
    # Small diamond accent at the bend
    d = 4
    cx_, cy_ = x + off * dx, y + off * dy
    draw.polygon([(cx_, cy_ - d), (cx_ + d, cy_), (cx_, cy_ + d), (cx_ - d, cy_)],
                 fill=color)


def fancy_divider(draw, cx, y, width, color):
    draw.line([(cx - width, y), (cx - 12, y)], fill=color, width=1)
    draw.line([(cx + 12, y), (cx + width, y)], fill=color, width=1)
    # Diamond center
    d = 5
    draw.polygon([(cx, y - d), (cx + d, y), (cx, y + d), (cx - d, y)], fill=color)
    # Outer dots
    draw.ellipse([cx - width - 6, y - 2, cx - width - 2, y + 2], fill=color)
    draw.ellipse([cx + width + 2, y - 2, cx + width + 6, y + 2], fill=color)


# --- Base ---
base = vgrad(W, H, BG_TOP, BG_BOT)
base = add_noise(base, strength=4)
img = base.convert("RGBA")

# Warm radial glow behind center (champagne)
glow1 = radial_glow(W, H, W // 2, H // 2 - 10, 560, GOLD, 70)
img = Image.alpha_composite(img, glow1)

# Subtle second glow lower, cooler
glow2 = radial_glow(W, H, W // 2, H + 80, 500, (90, 70, 50), 50)
img = Image.alpha_composite(img, glow2)

# Vignette
vig = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd = ImageDraw.Draw(vig)
for i in range(160):
    a = int(120 * (i / 160) ** 2)
    vd.rectangle([i, i, W - i, H - i], outline=(0, 0, 0, a))
img = Image.alpha_composite(img, vig)

draw = ImageDraw.Draw(img)

# Double frame
pad = 32
draw.rectangle([pad, pad, W - pad, H - pad], outline=(255, 255, 255, 26), width=1)
pad2 = 42
draw.rectangle([pad2, pad2, W - pad2, H - pad2], outline=GOLD_FAINT, width=1)

# Art-deco corner ornaments inside the inner frame
c_off = 62
c_size = 42
art_deco_corner(draw, c_off, c_off, c_size, GOLD)
art_deco_corner(draw, W - c_off, c_off, c_size, GOLD, flip_x=True)
art_deco_corner(draw, c_off, H - c_off, c_size, GOLD, flip_y=True)
art_deco_corner(draw, W - c_off, H - c_off, c_size, GOLD, flip_x=True, flip_y=True)

# Top eyebrow
f_eyebrow = ImageFont.truetype(SANS_SBOLD, 17)
draw_centered(draw, "СВАТБЕН ФОТОГРАФ   ·   WEDDING PHOTOGRAPHER",
              92, f_eyebrow, GOLD, tracking=7)
fancy_divider(draw, W // 2, 128, 42, GOLD)

# --- Logo (invert to white, preserving alpha) ---
logo = Image.open(LOGO).convert("RGBA")
r, g, b, a = logo.split()
rgb = Image.merge("RGB", (r, g, b))
inv = ImageChops.invert(rgb)
# Tint slightly toward warm off-white
wr, wg, wb = inv.split()
# Multiply by warm color
warm = Image.new("RGB", inv.size, WHITE)
inv_warm = ImageChops.multiply(inv, warm)
logo_light = Image.merge("RGBA", (*inv_warm.split(), a))

# Resize logo to fit center nicely — target width ~620px
target_w = 620
ratio = target_w / logo_light.width
logo_resized = logo_light.resize(
    (target_w, int(logo_light.height * ratio)),
    Image.LANCZOS,
)

# Paste logo centered, slightly above vertical middle to leave room for tagline
lx = (W - logo_resized.width) // 2
ly = (H - logo_resized.height) // 2 - 48
img.paste(logo_resized, (lx, ly), logo_resized)

# --- Tagline ---
# Position below logo
tag_y = ly + logo_resized.height + 32
draw = ImageDraw.Draw(img)  # refresh after paste
f_tag = ImageFont.truetype(SERIF_ITAL, 30)
draw_centered(draw, "Улавяме Вашите мечтани сватбени моменти",
              tag_y, f_tag, WHITE)

# Divider below tagline
fancy_divider(draw, W // 2, tag_y + 56, 70, GOLD_SOFT)

# Bottom meta
f_meta = ImageFont.truetype(SANS_SBOLD, 17)
draw_centered(draw,
              "BASKAPRODUCTION.COM   ·   СИЛИСТРА   ·   БЪЛГАРИЯ",
              H - 72, f_meta, MUTED, tracking=6)

# Save
final = img.convert("RGB")
os.makedirs(os.path.dirname(OUT), exist_ok=True)
final.save(OUT, "JPEG", quality=92, optimize=True, progressive=True)
print(f"Wrote {OUT} ({os.path.getsize(OUT) / 1024:.1f} KB)")
