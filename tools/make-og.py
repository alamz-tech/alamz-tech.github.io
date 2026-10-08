#!/usr/bin/env python3
"""Render the Open Graph card for Alamz Tech (1200x630) using headless Google Chrome.

Generates a centered, high-contrast 1200x630 card reflecting the 60-30-10 Studio Color System:
Deep Space Obsidian (#070B18 / #0B132B), Digital Chlorophyll (#10B981 / #34D399), and the 1% Mission.
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
    radial-gradient(circle at 50% 35%, rgba(16, 185, 129, 0.16) 0%, transparent 60%),
    radial-gradient(rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px);
  background-size: 100% 100%, 24px 24px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 48px 80px 42px;
  overflow: hidden;
}}

.top-section {{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
}}

.logo-box {{
  width: 60px;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  filter: drop-shadow(0 6px 14px rgba(0, 0, 0, 0.4));
}}

.logo-box svg {{
  width: 100%;
  height: 100%;
}}

.eyebrow {{
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #34D399;
  display: flex;
  align-items: center;
  gap: 8px;
}}

.dot {{
  width: 7px;
  height: 7px;
  border-radius: 50%;
  background: #10B981;
  box-shadow: 0 0 0 3px rgba(16, 185, 129, 0.35);
}}

.main-block {{
  display: flex;
  flex-direction: column;
  align-items: center;
}}

.title {{
  font-size: 56px;
  font-weight: 800;
  line-height: 1.15;
  letter-spacing: -0.035em;
  color: #FFFFFF;
  max-width: 1040px;
}}

.title em {{
  font-style: normal;
  color: #34D399;
  background: linear-gradient(135deg, #34D399 0%, #10B981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}}

.quote {{
  font-size: 24px;
  font-weight: 600;
  color: #F1F5F9;
  line-height: 1.4;
  margin-top: 36px;
  letter-spacing: -0.01em;
}}

.mission-badges {{
  display: flex;
  justify-content: center;
  gap: 14px;
  margin-top: 20px;
}}

.badge {{
  display: inline-flex;
  align-items: center;
  padding: 8px 18px;
  border-radius: 6px;
  background: rgba(16, 185, 129, 0.14);
  border: 1px solid rgba(16, 185, 129, 0.42);
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #34D399;
}}

.badge--accent {{
  background: #0B132B;
  border: 1px solid #1E293B;
  color: #F8FAFC;
}}

.footer {{
  width: 100%;
  max-width: 960px;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 16px;
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
<div class="top-section">
  <div class="logo-box">{GREEN_LOGO}</div>
  <div class="eyebrow">
    <span class="dot"></span>
    <span>Alamz Tech Ltd · Global AI Product Studio</span>
  </div>
</div>

<div class="main-block">
  <h1 class="title">
    Applied AI products for global<br>
    <em>education and agriculture</em>.
  </h1>
  <p class="quote">“The big dream is the direction. The 1% is the work.”</p>
  <div class="mission-badges">
    <span class="badge">100M PEOPLE FED</span>
    <span class="badge">10M MINDS UPSKILLED</span>
    <span class="badge badge--accent">FROM NIGERIA, FOR THE WORLD</span>
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
