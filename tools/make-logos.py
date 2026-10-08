#!/usr/bin/env python3
"""Generate high-resolution PNG logos (800x800) for LinkedIn and social profiles."""
import pathlib
import subprocess
import tempfile

CHROME_BIN = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
ROOT = pathlib.Path(__file__).resolve().parent.parent
LOGO_SVG = (ROOT / "assets/logo.svg").read_text()
GREEN_LOGO = LOGO_SVG.replace("currentColor", "#10B981")

variants = [
    ("logo-linkedin-dark.png", "#0B132B", False),
    ("logo-linkedin-light.png", "#FFFFFF", False),
    ("logo-transparent.png", "transparent", True),
]

for filename, bg, is_transparent in variants:
    html = f"""<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<style>
* {{ box-sizing: border-box; margin: 0; padding: 0; }}
body {{
  width: 800px;
  height: 800px;
  background: {bg};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}}
.logo {{
  width: 540px;
  height: 540px;
  display: flex;
  align-items: center;
  justify-content: center;
}}
.logo svg {{
  width: 100%;
  height: 100%;
}}
</style>
</head>
<body>
<div class="logo">
  {GREEN_LOGO}
</div>
</body>
</html>
"""
    with tempfile.NamedTemporaryFile("w", suffix=".html", delete=False) as f:
        f.write(html)
        tmp_path = f.name

    out_path = ROOT / "assets" / filename
    args = [
        CHROME_BIN,
        "--headless",
        "--disable-gpu",
        "--default-background-color=00000000" if is_transparent else "--default-background-color=ffffffff",
        "--window-size=800,800",
        f"--screenshot={out_path}",
        f"file://{tmp_path}",
    ]
    subprocess.run(args, check=True)
    pathlib.Path(tmp_path).unlink(missing_ok=True)
    print(f"Rendered: {out_path}")
