"""
Generate all production logo and favicon assets for Argun Software Solutions
from image-removebg-preview.png.
"""
import os
import shutil
from PIL import Image, ImageFilter, ImageDraw

def main():
    src_path = 'image-removebg-preview.png'
    if not os.path.exists(src_path):
        raise FileNotFoundError(f"Source file {src_path} not found.")

    src = Image.open(src_path).convert('RGBA')
    raw_bbox = src.getbbox()
    print(f"Raw source bounding box: {raw_bbox}")

    # 1. Generate argun-logo.png (Full logo for light backgrounds)
    pad = 4
    crop_box = (
        max(0, raw_bbox[0] - pad),
        max(0, raw_bbox[1] - pad),
        min(src.width, raw_bbox[2] + pad),
        min(src.height, raw_bbox[3] + pad)
    )
    logo_light = src.crop(crop_box)
    print(f"Trimmed light logo dimensions: {logo_light.size}")

    # 2. Generate argun-logo-white.png (Full logo with white text for dark navy footers)
    logo_white = logo_light.copy()
    w_pixels = []
    for r, g, b, a in logo_light.getdata():
        if a < 15:
            w_pixels.append((0, 0, 0, 0))
        else:
            # Navy color detection: low red (r < 70) and low green (g < 75)
            # Teal has g > 90; Orange has r > 150
            if r < 70 and g < 75:
                # Convert navy to crisp white, preserving anti-aliasing alpha
                w_pixels.append((255, 255, 255, a))
            else:
                w_pixels.append((r, g, b, a))
    logo_white.putdata(w_pixels)

    # 3. Generate icon crop (Stylized 'A' compass/circuit mark)
    # Icon spans x: 9 to 125, y: 21 to 137
    icon_crop = src.crop((9, 21, 125, 137))
    print(f"Icon crop dimensions: {icon_crop.size}")

    # Generate 512x512 transparent icon with soft subtle glow
    # This guarantees high contrast on both dark browser tabs (#202124) and light browser tabs (#FFFFFF)
    icon_512 = Image.new('RGBA', (512, 512), (0, 0, 0, 0))
    target_size = 440
    scaled_icon = icon_crop.resize((target_size, target_size), Image.Resampling.LANCZOS)
    offset = ((512 - target_size) // 2, (512 - target_size) // 2)
    icon_512.paste(scaled_icon, offset, scaled_icon)

    # Add subtle soft white glow behind icon for dark tab visibility
    alpha_channel = icon_512.split()[3]
    glow_mask = alpha_channel.filter(ImageFilter.GaussianBlur(radius=6))
    glow_layer = Image.new('RGBA', (512, 512), (255, 255, 255, 0))
    glow_alpha = glow_mask.point(lambda p: int(p * 0.7))
    glow_layer.putalpha(glow_alpha)
    favicon_master = Image.alpha_composite(glow_layer, icon_512)

    # 4. Apple Touch Icon & App Icon (180x180 & 512x512 with clean white background)
    apple_touch_master = Image.new('RGBA', (512, 512), (255, 255, 255, 255))
    app_icon_size = 400
    app_icon_scaled = icon_crop.resize((app_icon_size, app_icon_size), Image.Resampling.LANCZOS)
    app_offset = ((512 - app_icon_size) // 2, (512 - app_icon_size) // 2)
    apple_touch_master.paste(app_icon_scaled, app_offset, app_icon_scaled)

    # 5. Social OpenGraph / Twitter Image (1200x630 og-image with clean white card)
    og_master = Image.new('RGB', (1200, 630), (255, 255, 255))
    # Paste centered logo scaled to ~ 680px width
    og_logo_w = 680
    og_logo_h = int(logo_light.height * (og_logo_w / logo_light.width))
    og_logo_scaled = logo_light.resize((og_logo_w, og_logo_h), Image.Resampling.LANCZOS)
    og_logo_offset = ((1200 - og_logo_w) // 2, (630 - og_logo_h) // 2)
    og_master.paste(og_logo_scaled, og_logo_offset, og_logo_scaled)

    # Target directories
    dirs = ['.', 'public', 'dist']

    for d in dirs:
        os.makedirs(d, exist_ok=True)

        # 1. Logos
        logo_light.save(os.path.join(d, 'argun-logo.png'), 'PNG', optimize=True)
        logo_white.save(os.path.join(d, 'argun-logo-white.png'), 'PNG', optimize=True)
        icon_512.save(os.path.join(d, 'argun-icon.png'), 'PNG', optimize=True)
        
        # Overwrite legacy argunlogo.jpeg with high-res new brand social image
        og_master.save(os.path.join(d, 'argunlogo.jpeg'), 'JPEG', quality=95, optimize=True)

        # 2. Favicons PNG
        for sz in [16, 32, 48, 192, 512]:
            fav_sz = favicon_master.resize((sz, sz), Image.Resampling.LANCZOS)
            fav_sz.save(os.path.join(d, f'favicon-{sz}x{sz}.png'), 'PNG', optimize=True)

        # 3. Apple Touch Icon (180x180)
        apple_180 = apple_touch_master.resize((180, 180), Image.Resampling.LANCZOS)
        apple_180.save(os.path.join(d, 'apple-touch-icon.png'), 'PNG', optimize=True)

        # 4. Multi-resolution favicon.ico (16, 32, 48)
        ico_sizes = [(16, 16), (32, 32), (48, 48)]
        ico_images = [favicon_master.resize(s, Image.Resampling.LANCZOS) for s in ico_sizes]
        ico_path = os.path.join(d, 'favicon.ico')
        ico_images[0].save(ico_path, format='ICO', sizes=ico_sizes)

    # Also update favicon.svg
    # Create modern SVG with dark navy rounded background and the new stylized A icon in crisp vectors
    svg_content = '''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="128" height="128">
  <rect width="128" height="128" rx="28" fill="#07233F"/>
  <!-- Stylized Argun Compass / Circuit A Mark -->
  <!-- Left Teal Leg -->
  <line x1="64" y1="22" x2="26" y2="98" stroke="#138F99" stroke-width="12" stroke-linecap="round"/>
  <circle cx="26" cy="98" r="9" fill="#07233F" stroke="#138F99" stroke-width="6"/>
  <!-- Right Navy/White Leg -->
  <line x1="64" y1="22" x2="102" y2="98" stroke="#FFFFFF" stroke-width="12" stroke-linecap="round"/>
  <circle cx="102" cy="98" r="9" fill="#07233F" stroke="#FFFFFF" stroke-width="6"/>
  <!-- Orange Crossbar Node -->
  <line x1="45" y1="62" x2="78" y2="62" stroke="#EA580C" stroke-width="8" stroke-linecap="round"/>
  <circle cx="78" cy="62" r="7" fill="#07233F" stroke="#EA580C" stroke-width="5"/>
  <!-- Apex Join -->
  <circle cx="64" cy="22" r="6" fill="#138F99"/>
</svg>'''
    for d in ['public', 'dist']:
        with open(os.path.join(d, 'favicon.svg'), 'w', encoding='utf-8') as f:
            f.write(svg_content)

    print("All production logo, favicon, and SVG assets successfully generated!")

if __name__ == '__main__':
    main()
