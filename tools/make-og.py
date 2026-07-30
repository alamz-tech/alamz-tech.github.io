#!/usr/bin/env python3
"""Render the Open Graph card for Alamz Tech (1200x630) using AppKit/CoreGraphics.

Colours and type mirror the site's light theme so the link preview and the
landing page read as one thing.
"""
import math
from AppKit import (
    NSBitmapImageRep, NSGraphicsContext, NSColor, NSFont, NSString,
    NSDeviceRGBColorSpace, NSBitmapImageFileTypePNG, NSBezierPath,
    NSFontAttributeName, NSForegroundColorAttributeName, NSKernAttributeName,
    NSMakeRect, NSMakePoint,
)

W, H = 1200, 630

# --- site tokens -----------------------------------------------------------
def rgb(hexstr, a=1.0):
    h = hexstr.lstrip('#')
    return NSColor.colorWithDeviceRed_green_blue_alpha_(
        int(h[0:2], 16) / 255.0, int(h[2:4], 16) / 255.0, int(h[4:6], 16) / 255.0, a)

GROUND   = rgb('#FCFBF9')
SURFACE  = rgb('#FFFFFF')
INK      = rgb('#17140F')
INK_DIM  = rgb('#736A5D')
BRASS    = rgb('#C6851C')
BRASS_D  = rgb('#A9651A')
LINE     = rgb('#E3DFD6')
DOT      = rgb('#B07820', 0.22)

DISPLAY = "HelveticaNeue-Bold"
MONO    = "Menlo-Regular"

rep = NSBitmapImageRep.alloc().initWithBitmapDataPlanes_pixelsWide_pixelsHigh_bitsPerSample_samplesPerPixel_hasAlpha_isPlanar_colorSpaceName_bytesPerRow_bitsPerPixel_(
    None, W, H, 8, 4, True, False, NSDeviceRGBColorSpace, 0, 0)
ctx = NSGraphicsContext.graphicsContextWithBitmapImageRep_(rep)
NSGraphicsContext.saveGraphicsState()
NSGraphicsContext.setCurrentContext_(ctx)

# NSBitmapImageRep is bottom-left origin; helper takes a top-left y.
def top(y):
    return H - y

def text(s, x, y_top, font_name, size, color, kern=0.0):
    """Draw with a top-left anchor."""
    font = NSFont.fontWithName_size_(font_name, size)
    attrs = {NSFontAttributeName: font, NSForegroundColorAttributeName: color}
    if kern:
        attrs[NSKernAttributeName] = kern
    ns = NSString.stringWithString_(s)
    # ascender puts the visual top of the glyphs at y_top
    ns.drawAtPoint_withAttributes_(NSMakePoint(x, top(y_top) - font.ascender()), attrs)
    return ns.sizeWithAttributes_(attrs).width

def triangle(cx, cy, r, fill=None, stroke=None, width=3.0):
    p = NSBezierPath.bezierPath()
    pts = [(cx, cy - r), (cx + r * math.cos(math.radians(30)), cy + r * math.sin(math.radians(30))),
           (cx - r * math.cos(math.radians(30)), cy + r * math.sin(math.radians(30)))]
    p.moveToPoint_(NSMakePoint(pts[0][0], top(pts[0][1])))
    for px, py in pts[1:]:
        p.lineToPoint_(NSMakePoint(px, top(py)))
    p.closePath()
    p.setLineWidth_(width)
    p.setLineJoinStyle_(1)  # round
    if fill:
        fill.set(); p.fill()
    if stroke:
        stroke.set(); p.stroke()

# --- ground ---------------------------------------------------------------
GROUND.set()
NSBezierPath.fillRect_(NSMakeRect(0, 0, W, H))

# coverage-falloff dot matrix, echoing the site hero
DOT.set()
step = 26
for gx in range(60, W, step):
    for gy in range(60, H, step):
        d = math.hypot((gx - 210) / 780.0, (gy - 90) / 520.0)
        if d < 1.0:
            a = (1.0 - d) ** 1.7 * 0.30
            rgb('#B07820', a).set()
            NSBezierPath.bezierPathWithOvalInRect_(NSMakeRect(gx, top(gy), 2.6, 2.6)).fill()

# --- brand mark, faint, right side ---------------------------------------
# keep the whole mark inside the frame — a triangle clipped flush to the edge
# reads as a rendering mistake, and LinkedIn sometimes crops the sides further
triangle(980, 318, 210, fill=rgb('#C6851C', 0.055), stroke=rgb('#C6851C', 0.32), width=3.0)
triangle(980, 381, 87, fill=rgb('#C6851C', 0.32))

# --- wordmark -------------------------------------------------------------
triangle(92, 82, 17, fill=rgb('#C6851C', 0.20), stroke=BRASS, width=2.6)
triangle(92, 90, 7.5, fill=BRASS)
text("Alamz Tech", 120, 66, DISPLAY, 30, INK, kern=-0.4)

# eyebrow
text("VENTURE STUDIO", 120, 104, MONO, 15, INK_DIM, kern=2.6)

# --- headline -------------------------------------------------------------
lines = [("Offline-first AI", INK), ("for the places technology", INK), ("reaches last.", BRASS_D)]
y = 196
for s, col in lines:
    text(s, 76, y, DISPLAY, 68, col, kern=-2.2)
    y += 80

# --- rule + spec strip ----------------------------------------------------
LINE.set()
NSBezierPath.fillRect_(NSMakeRect(76, top(500), 660, 1))

specs = "100% OFFLINE   ·   8 GB RAM   ·   NO GPU   ·   BUILT FOR AFRICA"
text(specs, 76, 526, MONO, 17, INK_DIM, kern=1.5)

text("Back-office operations  ·  Agriculture  ·  Education", 76, 566, DISPLAY, 19, BRASS_D, kern=-0.2)

NSGraphicsContext.restoreGraphicsState()

data = rep.representationUsingType_properties_(NSBitmapImageFileTypePNG, {})
out = "/Users/husseinalamutu/Desktop/Development/alamz-site/assets/og-image.png"
ok = data.writeToFile_atomically_(out, True)
print("written:", ok, out)
