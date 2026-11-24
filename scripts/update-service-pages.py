"""
Update header and footer logos in billing, garage, loan, and ca service pages.
"""
import os
import re

files = [
    'billing-software.html',
    'garage-management-software.html',
    'loan-management-system.html',
    'ca-firm-management-system.html'
]

header_pattern = re.compile(
    r'<!-- Brand Logo -->\s*<a href="index\.html" class="logo-link">\s*<div class="logo-mark">\s*<img src="[^"]+" alt="[^"]*"[^>]*>\s*</div>\s*<div class="logo-text">\s*<span class="logo-title">ARGUN</span>\s*<span class="logo-subtitle">Software Solutions</span>\s*</div>\s*</a>',
    re.MULTILINE
)

new_header = '''<!-- Brand Logo -->
      <a href="index.html" class="logo-link" aria-label="Argun Software Solutions">
        <img src="argun-logo.png" alt="Argun Software Solutions" width="170" height="42" fetchpriority="high" decoding="async" class="brand-logo-img">
      </a>'''

footer_pattern = re.compile(
    r'<div class="footer-brand">\s*<div class="logo-link flex items-center">\s*<div class="logo-mark">\s*<img src="[^"]+" alt="[^"]*"[^>]*>\s*</div>\s*<div class="logo-text">\s*<span class="logo-title text-white">ARGUN</span>\s*<span class="logo-subtitle text-slate">Software Solutions</span>\s*</div>\s*</div>',
    re.MULTILINE
)

new_footer = '''<div class="footer-brand">
          <a href="index.html" class="logo-link flex items-center" aria-label="Argun Software Solutions">
            <img src="argun-logo-white.png" alt="Argun Software Solutions" width="170" height="40" class="brand-logo-footer">
          </a>'''

for fn in files:
    with open(fn, 'r', encoding='utf-8') as f:
        content = f.read()

    new_content, h_count = header_pattern.subn(new_header, content)
    new_content, f_count = footer_pattern.subn(new_footer, new_content)

    print(f"{fn}: header replaced = {h_count}, footer replaced = {f_count}")

    if h_count == 1 and f_count == 1:
        with open(fn, 'w', encoding='utf-8') as f:
            f.write(new_content)
        print(f"  Successfully updated {fn}")
    else:
        print(f"  WARNING: mismatch in {fn}")
