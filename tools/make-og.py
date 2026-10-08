#!/usr/bin/env python3
"""Render the Open Graph card for Alamz Tech (1200x630) using headless Google Chrome.

Generates a stripped-down, high-impact 1200x630 card reflecting the 60-30-10 Studio Color System:
- Top: Logo badge side-by-side with studio eyebrow
- Center: Applied AI products for global education and agriculture.
- Mission: 100M PEOPLE FED, 10M MINDS UPSKILLED
- Footer: Products and domain
"""
import os
import pathlib
import subprocess
import tempfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
LOGO_SVG = (ASSETS / "logo.svg").read_text()
GREEN_LOGO = LOGO_SVG.replace("currentColor", "#10B981")
OUT_PNG = ASSETS / "og-image.png"

CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

HTML_TEMPLATE = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
body {{
  width: 1200px;
  height: 630px;
  background-color: #070B18;
  background-image: 
    radial-gradient(circle at 50% 45%, rgba(16, 185, 129, 0.16) 0%, transparent 65%),
    radial-gradient(rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px);
  background-size: 100% 100%, 24px 24px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 56px 80px 44px;
  overflow: hidden;
}}

.top-bar {{
  display: inline-flex;
  align-items: center;
  gap: 16px;
}}

.logo-box {{
  width: 46px;
  height: 46px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}}

.logo-box svg {{
  width: 100%;
  height: 100%;
}}

.eyebrow {{
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #34D399;
  display: flex;
  align-items: center;
  gap: 10px;
}}

.dot {{
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10B981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.35);
}}

.main-block {{
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -4px;
}}

.title {{
  font-size: 64px;
  font-weight: 800;
  line-height: 1.14;
  letter-spacing: -0.035em;
  color: #FFFFFF;
  max-width: 1060px;
}}

.title em {{
  font-style: normal;
  color: #34D399;
  background: linear-gradient(135deg, #34D399 0%, #10B981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}}

.mission-wrap {{
  margin-top: 38px;
}}

.mission-badge {{
  display: inline-flex;
  align-items: center;
  gap: 12px;
  padding: 11px 26px;
  border-radius: 8px;
  background: rgba(16, 185, 129, 0.12);
  border: 1px solid rgba(16, 185, 129, 0.45);
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 15px;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: #34D399;
}}

.mission-label {{
  color: #FFFFFF;
  opacity: 0.8;
  font-weight: 700;
}}

.footer {{
  width: 100%;
  max-width: 1000px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 13px;
  color: #94A3B8;
  letter-spacing: 0.08em;
}}
</style>
</head>
<body>
<div class="top-bar">
  <div class="logo-box">{GREEN_LOGO}</div>
  <div class="eyebrow">
    <span class="dot"></span>
    <span>ALAMZ TECH LTD · GLOBAL AI PRODUCT STUDIO</span>
  </div>
</div>

<div class="main-block">
  <h1 class="title">
    Applied AI products for global<br>
    <em>education and agriculture</em>.
  </h1>
  <div class="mission-wrap">
    <div class="mission-badge">
      <span class="mission-label">MISSION -</span>
      <span>100M PEOPLE FED, 10M MINDS UPSKILLED</span>
    </div>
  </div>
</div>

<div class="footer">
  <span>EDTECH & AGRITECH · EARNWITHDEVOPS & AGRIYIELD</span>
  <span>ALAMZTECH.COM</span>
</div>
</body>
</html>
"""

def main():
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False) as f:
        f.write(HTML_TEMPLATE)
        temp_html = f.name

    try:
        cmd = [
            CHROME_BIN,
            "--headless",
            "--disable-gpu",
            "--window-size=1200,630",
            f"--screenshot={OUT_PNG}",
            "--allow-file-access-from-files",
            f"file://{temp_html}",
        ]
        res = subprocess.run(cmd, capture_output=True, text=True)
        if res.returncode != 0:
            print("Error rendering OG image:", res.stderr)
        else:
            print(f"Successfully rendered: {OUT_PNG}")
    finally:
        if os.path.exists(temp_html):
            os.remove(temp_html)

if __name__ == "__main__":
    main()
