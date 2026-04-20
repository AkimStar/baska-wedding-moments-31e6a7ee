"""Generate a 1200x630 OG share image for baskaproduction.com.

Wedding-invitation style: warm ivory background, centered full logo in
its original black ink, gold hairline frame, classic serif typography.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os
import random

W, H = 1200, 630
HERE = os.path.dirname(os.path.abspath(__file__))
PUBLIC = os.path.join(HERE, "..", "public")
OUT = os.path.join(PUBLIC, "og-image.jpg")
LOGO = os.path.join(PUBLIC, "logo.png")

# Palette — ivory wedding invitation
IVORY = (246, 240, 228)
IVORY_DEEP = (234, 224, 204)
INK = (46, 36, 24)              # warm dark charcoal
INK_SOFT = (90, 74, 52)
GOLD = (164, 130, 72)
GOLD_SOFT = (196, 166, 112)

FONTS_DIR = "C:/Windows/Fonts"
SERIF_REG = os.path.join(FONTS_DIR, "georgia.ttf")
SERIF_ITAL = os.path.join(FONTS_DIR, "georgiai.ttf")
SERIF_BOLD = os.path.join(FONTS_DIR, "georgiab.ttf")
SANS_SBOLD = os.path.join(FONTS_DIR, "segoeuisl.ttf")


def paper_bg(w, h):
    """Uniform ivory paper with fine grain only.

    No vignette and no radial glow — those were drawing concentric
    rectangles / a central ellipse that created a visible bright band
    in the middle of the image.
    """
    img = Image.new("RGB", (w, h), IVORY)
    random.seed(11)
    grain = Image.new("RGB", (w, h))
    gp = grain.load()
    for y in range(h):
        for x in range(w):
            n = random.randint(-4, 4)
            gp[x, y] = (128 + n, 128 + n, 128 + n)
    img = Image.blend(img, grain, 0.04)
    return img.convert("RGBA")


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


def ornament(draw, cx, cy, color):
    """Small floral-diamond centerpiece ornament (wedding-invite style)."""
    # Horizontal hairline extending both sides
    draw.line([(cx - 120, cy), (cx - 20, cy)], fill=color, width=1)
    draw.line([(cx + 20, cy), (cx + 120, cy)], fill=color, width=1)
    # Center diamond
    d = 5
    draw.polygon([(cx, cy - d), (cx + d, cy), (cx, cy + d), (cx - d, cy)],
                 fill=color)
    # Flanking mini diamonds
    for dx in (-14, 14):
        draw.polygon([(cx + dx, cy - 2), (cx + dx + 2, cy),
                      (cx + dx, cy + 2), (cx + dx - 2, cy)], fill=color)
    # Outer tiny dots
    for dx in (-130, 130):
        draw.ellipse([cx + dx - 2, cy - 2, cx + dx + 2, cy + 2], fill=color)


def filigree_corner(draw, x, y, size, color, flip_x=False, flip_y=False):
    """Elegant corner flourish — two thin nested lines + small diamond."""
    dx = -1 if flip_x else 1
    dy = -1 if flip_y else 1
    # Outer L
    draw.line([(x, y), (x + size * dx, y)], fill=color, width=1)
    draw.line([(x, y), (x, y + size * dy)], fill=color, width=1)
    # Inner parallel L
    inset = 8
    draw.line([(x + inset * dx, y + inset * dy),
               (x + (size - 10) * dx, y + inset * dy)], fill=color, width=1)
    draw.line([(x + inset * dx, y + inset * dy),
               (x + inset * dx, y + (size - 10) * dy)], fill=color, width=1)
    # Diamond at inner corner
    cx_, cy_ = x + inset * dx, y + inset * dy
    d = 3
    draw.polygon([(cx_, cy_ - d), (cx_ + d, cy_), (cx_, cy_ + d), (cx_ - d, cy_)],
                 fill=color)


# --- Build ---
canvas = paper_bg(W, H)
draw = ImageDraw.Draw(canvas)

# Hairline gold frame
pad = 44
draw.rectangle([pad, pad, W - pad, H - pad], outline=GOLD, width=1)
# Inner very-faint ink line
draw.rectangle([pad + 8, pad + 8, W - pad - 8, H - pad - 8],
               outline=(*INK, 60), width=1)

# Filigree corners (gold)
c_off = 74
c_size = 40
filigree_corner(draw, c_off, c_off, c_size, GOLD)
filigree_corner(draw, W - c_off, c_off, c_size, GOLD, flip_x=True)
filigree_corner(draw, c_off, H - c_off, c_size, GOLD, flip_y=True)
filigree_corner(draw, W - c_off, H - c_off, c_size, GOLD, flip_x=True, flip_y=True)

cx = W // 2

# Top label
f_top = ImageFont.truetype(SANS_SBOLD, 17)
draw_centered(draw, "СВАТБЕНА ФОТОГРАФИЯ   ·   WEDDING PHOTOGRAPHY",
              104, f_top, INK_SOFT, tracking=6)
# Tiny divider under the label
draw.line([(cx - 40, 138), (cx - 10, 138)], fill=GOLD, width=1)
draw.line([(cx + 10, 138), (cx + 40, 138)], fill=GOLD, width=1)
d = 3
draw.polygon([(cx, 138 - d), (cx + d, 138), (cx, 138 + d), (cx - d, 138)],
             fill=GOLD)

# --- Logo (original black ink, perfect on ivory) ---
logo = Image.open(LOGO).convert("RGBA")
# Slight warm-ink tone (not pure black — match INK)
r, g, b, a = logo.split()
# Where logo is present (alpha > 0), replace color with warm INK
ink_layer = Image.new("RGB", logo.size, INK)
logo_warm = Image.merge("RGBA", (*ink_layer.split(), a))

target_w = 520
ratio = target_w / logo_warm.width
logo_resized = logo_warm.resize(
    (target_w, int(logo_warm.height * ratio)), Image.LANCZOS)

lx = (W - logo_resized.width) // 2
ly = (H - logo_resized.height) // 2 - 18
canvas.paste(logo_resized, (lx, ly), logo_resized)
draw = ImageDraw.Draw(canvas)

# Ornamental divider below logo
orn_y = ly + logo_resized.height + 36
ornament(draw, cx, orn_y, GOLD)

# Italic serif tagline (wedding-invite feel)
tag_y = orn_y + 28
f_tag = ImageFont.truetype(SERIF_ITAL, 27)
draw_centered(draw, "Улавяме Вашите мечтани сватбени моменти",
              tag_y, f_tag, INK)

# Bottom meta row
f_meta = ImageFont.truetype(SANS_SBOLD, 15)
draw_centered(draw, "BASKAPRODUCTION.COM    ·    СИЛИСТРА    ·    БЪЛГАРИЯ",
              H - 96, f_meta, INK_SOFT, tracking=7)

# Save
final = canvas.convert("RGB")
os.makedirs(os.path.dirname(OUT), exist_ok=True)
final.save(OUT, "JPEG", quality=94, optimize=True, progressive=True)
print(f"Wrote {OUT} ({os.path.getsize(OUT) / 1024:.1f} KB)")
