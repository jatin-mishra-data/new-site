from playwright.sync_api import sync_playwright
import os

URL = "http://localhost:3000"
OUTPUT_DIR = r"E:\Freelance\new-site\screenshots"

VIEWPORTS = [
    {"name": "mobile", "width": 390, "height": 844},
    {"name": "tablet", "width": 768, "height": 1024},
    {"name": "desktop", "width": 1440, "height": 900},
]

os.makedirs(OUTPUT_DIR, exist_ok=True)

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    
    for vp in VIEWPORTS:
        context = browser.new_context(
            viewport={"width": vp["width"], "height": vp["height"]}
        )
        page = context.new_page()
        page.goto(URL, wait_until="networkidle")
        page.wait_for_timeout(1000)
        
        # Full page screenshot
        path = os.path.join(OUTPUT_DIR, f"full-{vp['name']}.png")
        page.screenshot(path=path, full_page=True)
        print(f"Saved {path}")
        
        context.close()
    
    browser.close()

print("Done")
