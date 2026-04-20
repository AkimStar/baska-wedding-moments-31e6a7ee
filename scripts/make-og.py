"""Generate a 1200x630 OG social share image for baskaproduction.com.

Matches the site's aesthetic: dark near-black background, warm champagne/gold
accent, Playfair-style serif title (Georgia), wide-tracked Montserrat-style
sans (Segoe UI) for supporting text. Outputs /public/og-image.jpg.
"""
from PIL import Image, ImageDraw, ImageFont, ImageFilter
import os

W, H = 1200, 630
OUT = os.path.join(os.path.dirname(__file__), "..", "public", "og-image.jpg")

# Palette
BG_TOP = (18, 18, 20)
BG_BOTTOM = (8, 8, 10)
GOLD = (198, 168, 121)       # warm champagne
GOLD_SOFT = (168, 142, 102)
WHITE = (250, 248, 243)
MUTED = (180, 172, 160)

# Fonts (Windows system fonts)
FONTS_DIR = "C:/Windows/Fonts"
SERIF_BOLD = os.path.join(FONTS_DIR, "georgiab.ttf")
SERIF_REG = os.path.join(FONTS_DIR, "georgia.ttf")
SERIF_ITAL = os.path.join(FONTS_DIR, "georgiai.ttf")
SANS_REG = os.path.join(FONTS_DIR, "segoeui.ttf")
SANS_SBOLD = os.path.join(FONTS_DIR, "segoeuisl.ttf")  # semilight
SANS_BOLD = os.path.join(FONTS_DIR, "segoeuib.ttf")

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

def radial_glow(w, h, cx, cy, radius, color, alpha):
    layer = Image.new("RGBA", (w, h), (0, 0, 0, 0))
    d = ImageDraw.Draw(layer)
    steps = 60
    for i in range(steps, 0, -1):
        r = int(radius * (i / steps))
        a = int(alpha * ((steps - i) / steps) ** 2)
        d.ellipse([cx - r, cy - r, cx + r, cy + r],
                  fill=(color[0], color[1], color[2], a))
    return layer.filter(ImageFilter.GaussianBlur(40))

def spaced(s, sp):
    return (" " * sp).join(list(s))

def draw_text_centered(draw, text, y, font, fill, w=W, letter_space=0):
    if letter_space:
        # Manual letter spacing
        widths = [draw.textbbox((0, 0), ch, font=font)[2] for ch in text]
        total = sum(widths) + letter_space * (len(text) - 1)
        x = (w - total) // 2
        for ch, cw in zip(text, widths):
            draw.text((x, y), ch, font=font, fill=fill)
            x += cw + letter_space
    else:
        bbox = draw.textbbox((0, 0), text, font=font)
        tw = bbox[2] - bbox[0]
        draw.text(((w - tw) // 2 - bbox[0], y), text, font=font, fill=fill)

# --- Build image ---
img = vgrad(W, H, BG_TOP, BG_BOTTOM).convert("RGBA")

# Warm radial glow behind title
glow = radial_glow(W, H, W // 2, H // 2 - 20, 520, GOLD, 55)
img = Image.alpha_composite(img, glow)

# Vignette
vig = Image.new("RGBA", (W, H), (0, 0, 0, 0))
vd = ImageDraw.Draw(vig)
for i in range(140):
    a = int(110 * (i / 140) ** 2)
    vd.rectangle([i, i, W - i, H - i], outline=(0, 0, 0, a))
img = Image.alpha_composite(img, vig)

draw = ImageDraw.Draw(img)

# Thin double frame
frame_pad = 36
draw.rectangle([frame_pad, frame_pad, W - frame_pad, H - frame_pad],
               outline=(255, 255, 255, 28), width=1)
inner_pad = 44
draw.rectangle([inner_pad, inner_pad, W - inner_pad, H - inner_pad],
               outline=(255, 255, 255, 14), width=1)

# Top eyebrow: "СВАТБЕН ФОТОГРАФ · WEDDING PHOTOGRAPHER"
f_eyebrow = ImageFont.truetype(SANS_SBOLD, 18)
draw_text_centered(draw, "СВАТБЕН ФОТОГРАФ   ·   WEDDING PHOTOGRAPHER",
                   92, f_eyebrow, GOLD, letter_space=6)

# Divider short line
cx = W // 2
draw.line([(cx - 32, 130), (cx + 32, 130)], fill=GOLD, width=1)

# Main title BASKA
f_title = ImageFont.truetype(SERIF_BOLD, 148)
draw_text_centered(draw, "BASKA", 170, f_title, WHITE, letter_space=8)

# PRODUCTION — slightly smaller, italic-tracked serif
f_title2 = ImageFont.truetype(SERIF_ITAL, 76)
draw_text_centered(draw, "Production", 330, f_title2, GOLD_SOFT, letter_space=3)

# Divider line with diamond accent
dy = 430
draw.line([(cx - 140, dy), (cx - 14, dy)], fill=GOLD, width=1)
draw.line([(cx + 14, dy), (cx + 140, dy)], fill=GOLD, width=1)
# Small diamond
draw.polygon([(cx, dy - 5), (cx + 5, dy), (cx, dy + 5), (cx - 5, dy)], fill=GOLD)

# Tagline
f_tag = ImageFont.truetype(SERIF_REG, 26)
draw_text_centered(draw, "Улавяме Вашите мечтани сватбени моменти",
                   458, f_tag, WHITE)

# Meta row at bottom
f_meta = ImageFont.truetype(SANS_SBOLD, 17)
draw_text_centered(draw,
                   "BASKAPRODUCTION.COM   ·   СИЛИСТРА   ·   БЪЛГАРИЯ",
                   552, f_meta, MUTED, letter_space=5)

# Save as JPEG (smaller, better for OG than PNG)
final = img.convert("RGB")
os.makedirs(os.path.dirname(OUT), exist_ok=True)
final.save(OUT, "JPEG", quality=92, optimize=True, progressive=True)
print(f"Wrote {OUT} ({os.path.getsize(OUT) / 1024:.1f} KB)")
