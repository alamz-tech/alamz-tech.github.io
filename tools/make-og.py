#!/usr/bin/env python3
"""Render the Open Graph card for Alamz Tech (1200x630) using headless Google Chrome.

Generates a pixel-perfect 1200x630 centered card reflecting the 60-30-10 Studio Color System:
Deep Space Blue (#070B18), Digital Chlorophyll (#10B981), and the 1% Mission.
"""
import os
import pathlib
import subprocess
import tempfile

ROOT = pathlib.Path(__file__).resolve().parent.parent
ASSETS = ROOT / "assets"
OUT_PNG = ASSETS / "og-image.png"

CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"

HTML_TEMPLATE = """<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
* { box-sizing: border-box; margin: 0; padding: 0; }
body {
  width: 1200px;
  height: 630px;
  background-color: #070B18;
  background-image: 
    radial-gradient(circle at 50% 210px, rgba(16, 185, 129, 0.16) 0%, transparent 68%),
    radial-gradient(rgba(255, 255, 255, 0.08) 1.5px, transparent 1.5px);
  background-size: 100% 100%, 24px 24px;
  font-family: ui-sans-serif, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  color: #FFFFFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 56px 80px 48px;
  position: relative;
  overflow: hidden;
}

.top-bar {
  display: flex;
  align-items: center;
  gap: 14px;
}

.logo-icon {
  width: 44px;
  height: 44px;
}

.eyebrow {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 14px;
  font-weight: 600;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: #34D399;
}

.title {
  font-size: 58px;
  font-weight: 800;
  line-height: 1.12;
  letter-spacing: -0.035em;
  color: #FFFFFF;
  max-width: 960px;
  margin-top: 10px;
}

.title em {
  font-style: normal;
  color: #34D399;
  background: linear-gradient(135deg, #34D399 0%, #10B981 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.quote {
  font-size: 24px;
  font-weight: 600;
  color: #E2E8F0;
  line-height: 1.35;
  margin-top: 24px;
}

.mission-badges {
  display: flex;
  justify-content: center;
  gap: 12px;
  margin-top: 20px;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 7px 16px;
  border-radius: 6px;
  background: rgba(16, 185, 129, 0.14);
  border: 1px solid rgba(16, 185, 129, 0.42);
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 13px;
  font-weight: 700;
  letter-spacing: 0.06em;
  color: #34D399;
}

.badge--accent {
  background: #0B132B;
  border: 1px solid #1E293B;
  color: #F8FAFC;
}

.footer {
  width: 100%;
  border-top: 1px solid rgba(255, 255, 255, 0.12);
  padding-top: 18px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: ui-monospace, "SF Mono", Menlo, monospace;
  font-size: 13px;
  color: #94A3B8;
  letter-spacing: 0.08em;
}
</style>
</head>
<body>
<div class="top-bar">
  <div class="logo-icon">
    <svg viewBox="0 0 120 120" fill="none" stroke="#10B981" stroke-width="6">
      <rect x="6" y="6" width="108" height="108" stroke="#10B981" stroke-width="6"/>
      <path fill="#10B981" fill-rule="evenodd" d="M18 24H102V56H18ZM23.69 47L28.57 34.65L30.81 34.65L35.7 47L33.85 47L32.65 43.94L26.64 43.94L25.45 47ZM27.2 42.47L32.08 42.47L30.58 38.61C30.54 38.5 30.48 38.35 30.41 38.16C30.34 37.97 30.27 37.76 30.19 37.52C30.1 37.29 30.02 37.05 29.93 36.8C29.85 36.56 29.77 36.33 29.7 36.13L29.58 36.13C29.51 36.37 29.41 36.64 29.3 36.95C29.19 37.26 29.08 37.57 28.98 37.86C28.87 38.16 28.78 38.41 28.7 38.61ZM27.2 42.47M40.38 47L40.38 34.65L42.09 34.65L42.09 45.5L48.24 45.5L48.24 47ZM40.38 47M51.61 47L56.49 34.65L58.73 34.65L63.62 47L61.77 47L60.58 43.94L54.56 43.94L53.37 47ZM55.12 42.47L60 42.47L58.5 38.61C58.46 38.5 58.4 38.35 58.34 38.16C58.27 37.97 58.19 37.76 58.11 37.52C58.02 37.29 57.94 37.05 57.85 36.8C57.77 36.56 57.69 36.33 57.62 36.13L57.5 36.13C57.43 36.37 57.33 36.64 57.22 36.95C57.11 37.26 57 37.57 56.9 37.86C56.79 38.16 56.7 38.41 56.62 38.61ZM55.12 42.47M68.3 47L68.3 34.65L70.95 34.65L73.76 42.67C73.84 42.88 73.91 43.12 73.99 43.37C74.06 43.63 74.13 43.87 74.2 44.1C74.26 44.33 74.31 44.53 74.35 44.69L74.47 44.69C74.51 44.52 74.56 44.31 74.62 44.07C74.68 43.84 74.75 43.59 74.82 43.34C74.89 43.09 74.95 42.86 75.01 42.66L77.83 34.65L80.45 34.65L80.45 47L78.74 47L78.74 39.77C78.74 39.39 78.75 38.99 78.76 38.55C78.77 38.12 78.78 37.71 78.79 37.35C78.8 36.98 78.81 36.71 78.81 36.55L78.67 36.55C78.63 36.72 78.57 36.94 78.49 37.22C78.41 37.5 78.32 37.8 78.23 38.1C78.14 38.41 78.06 38.68 77.98 38.92L75.09 47L73.61 47L70.72 38.93C70.65 38.71 70.57 38.47 70.49 38.2C70.41 37.94 70.34 37.66 70.26 37.37C70.18 37.08 70.1 36.81 70.04 36.55L69.9 36.55C69.91 36.83 69.92 37.16 69.93 37.54C69.94 37.93 69.94 38.32 69.95 38.71C69.96 39.11 69.97 39.46 69.97 39.77L69.97 47ZM68.3 47M85.58 47L85.58 46.12L93.07 36.13L86.05 36.13L86.05 34.65L95.61 34.65L95.61 35.53L88.1 45.52L95.78 45.52L95.78 47ZM85.58 47"/>
      <path fill="#10B981" d="M33.38 90L33.38 78.23L28.74 78.23L28.74 75.58L41.16 75.58L41.16 78.23L36.52 78.23L36.52 90ZM33.38 90M44.8 90L44.8 75.58L56.31 75.58L56.31 78.16L47.94 78.16L47.94 81.37L55.34 81.37L55.34 83.92L47.94 83.92L47.94 87.42L56.44 87.42L56.44 90ZM44.8 90M67.09 90.25C65.58 90.25 64.3 89.99 63.24 89.46C62.18 88.93 61.37 88.12 60.82 87.02C60.26 85.92 59.98 84.51 59.98 82.79C59.98 80.27 60.6 78.4 61.84 77.17C63.08 75.95 64.83 75.33 67.09 75.33C68.32 75.33 69.43 75.54 70.4 75.96C71.38 76.38 72.15 77.01 72.72 77.85C73.29 78.7 73.58 79.76 73.58 81.03L70.43 81.03C70.43 80.37 70.29 79.8 70.01 79.33C69.73 78.86 69.34 78.51 68.85 78.26C68.35 78.02 67.77 77.89 67.11 77.89C66.23 77.89 65.49 78.07 64.91 78.42C64.33 78.77 63.9 79.29 63.63 79.97C63.35 80.65 63.22 81.48 63.22 82.47L63.22 83.12C63.22 84.12 63.35 84.96 63.63 85.63C63.91 86.31 64.33 86.83 64.91 87.17C65.48 87.52 66.21 87.69 67.1 87.69C67.81 87.69 68.42 87.57 68.93 87.33C69.44 87.1 69.84 86.75 70.12 86.28C70.4 85.82 70.54 85.25 70.54 84.58L73.58 84.58C73.58 85.86 73.3 86.91 72.74 87.75C72.18 88.59 71.42 89.22 70.44 89.63C69.47 90.04 68.35 90.25 67.09 90.25ZM67.09 90.25M77.53 90L77.53 75.58L80.67 75.58L80.67 81.32L87.04 81.32L87.04 75.58L90.19 75.58L90.19 90L87.04 90L87.04 83.96L80.67 83.96L80.67 90ZM77.53 90"/>
    </svg>
  </div>
  <div class="eyebrow">Alamz Tech Ltd · AI Product Studio</div>
</div>

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
