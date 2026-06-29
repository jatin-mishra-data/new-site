from playwright.sync_api import sync_playwright

URL = "http://localhost:3000"

VIEWPORTS = [
    {"name": "mobile", "width": 390, "height": 844},
    {"name": "tablet", "width": 768, "height": 1024},
    {"name": "desktop", "width": 1440, "height": 900},
]

SECTION_IDS = [
    "nav", "hero", "services", "process", "work",
    "packages", "about", "tools", "contact"
]

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)

    for vp in VIEWPORTS:
        print(f"\n{'='*60}")
        print(f"VIEWPORT: {vp['name']} ({vp['width']}x{vp['height']})")
        print(f"{'='*60}")

        context = browser.new_context(viewport={"width": vp["width"], "height": vp["height"]})
        page = context.new_page()
        page.goto(URL, wait_until="networkidle")
        page.wait_for_timeout(1500)

        # 1. Check for horizontal overflow
        overflow = page.evaluate("""() => {
            const html = document.documentElement;
            return {
                scrollWidth: html.scrollWidth,
                clientWidth: html.clientWidth,
                hasHorizontalScroll: html.scrollWidth > html.clientWidth
            };
        }""")
        print(f"\n  Overflow: scrollW={overflow['scrollWidth']} clientW={overflow['clientWidth']} horizontalScroll={overflow['hasHorizontalScroll']}")

        # 2. Find elements wider than viewport
        overflow_elements = page.evaluate("""(vw) => {
            const all = document.querySelectorAll('*');
            const issues = [];
            for (const el of all) {
                const rect = el.getBoundingClientRect();
                if (rect.width > vw + 1 && el.children.length > 0) {
                    const cn = (el.className || '').toString();
                    issues.push({
                        tag: el.tagName,
                        id: el.id || '(none)',
                        cls: cn.slice(0, 60),
                        width: Math.round(rect.width),
                        vw: Math.round(vw)
                    });
                }
            }
            return issues.sort((a,b) => b.width - a.width).slice(0, 15);
        }""", vp['width'])
        if overflow_elements:
            print(f"  Wide elements:")
            for e in overflow_elements:
                print(f"    <{e['tag']}> #{e['id']} .{e['cls']} — {e['width']}px > {e['vw']}px")

        # 3. Section checks - positions
        print(f"  Sections:")
        for sid in SECTION_IDS:
            info = page.evaluate("""(id) => {
                const el = document.getElementById(id);
                if (!el) return 'NOT FOUND';
                const r = el.getBoundingClientRect();
                return 'w=' + Math.round(r.width) + ' h=' + Math.round(r.height) + ' top=' + Math.round(r.top);
            }""", sid)
            print(f"    #{sid}: {info}")

        # 4. Nav anchor offset check
        print(f"  Anchor offsets:")
        nav_height = page.evaluate("""() => {
            const nav = document.querySelector('nav') || document.getElementById('nav') || document.querySelector('header');
            return nav ? Math.round(nav.getBoundingClientRect().height) : 0;
        }""")
        for sid in ['services', 'process', 'work', 'packages', 'about', 'tools', 'contact']:
            info = page.evaluate("""(id) => {
                const el = document.getElementById(id);
                if (!el) return null;
                return Math.round(el.getBoundingClientRect().top);
            }""", sid)
            if info is not None and abs(info) > nav_height + 15:
                print(f"    #{sid}: top={info}px nav_h={nav_height}px - POSSIBLE OFFSET")
            elif info is not None:
                print(f"    #{sid}: top={info}px (OK)")

        context.close()

    browser.close()
    print(f"\nDone")
