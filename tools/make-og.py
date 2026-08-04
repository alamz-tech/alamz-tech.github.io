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

def mark(x, y, size, color, weight_ratio=0.085):
    """The Alamz mark: square frame with a bold A. Mirrors assets/logo.svg.
    (x, y) is the top-left corner; `size` is the outer square's side."""
    w = size * weight_ratio
    color.set()

    frame = NSBezierPath.bezierPathWithRect_(
        NSMakeRect(x + w / 2, top(y + size) + w / 2, size - w, size - w))
    frame.setLineWidth_(w)
    frame.stroke()

    def pt(fx, fy):
        return NSMakePoint(x + size * fx, top(y + size * fy))

    a = NSBezierPath.bezierPath()
    a.moveToPoint_(pt(0.258, 0.717))
    a.lineToPoint_(pt(0.5, 0.287))
    a.lineToPoint_(pt(0.742, 0.717))
    a.moveToPoint_(pt(0.346, 0.588))
    a.lineToPoint_(pt(0.654, 0.588))
    a.setLineWidth_(w)
    a.setLineCapStyle_(1)   # round
    a.setLineJoinStyle_(1)
    a.stroke()

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
# kept well inside the frame: LinkedIn sometimes crops the sides further
mark(852, 178, 286, rgb('#C6851C', 0.28))

# --- wordmark -------------------------------------------------------------
mark(76, 56, 42, BRASS, weight_ratio=0.11)
text("Alamz Tech", 134, 60, DISPLAY, 30, INK, kern=-0.4)
text("PRODUCT STUDIO", 134, 98, MONO, 15, INK_DIM, kern=2.6)

# --- headline -------------------------------------------------------------
lines = [("AI products and integration", INK),
         ("for business, built to work", INK),
         ("in the real world.", BRASS_D)]
y = 200
for s, col in lines:
    text(s, 76, y, DISPLAY, 58, col, kern=-1.8)
    y += 70

# --- rule + capability strip ---------------------------------------------
LINE.set()
NSBezierPath.fillRect_(NSMakeRect(76, top(500), 660, 1))

text("GROUNDED   ·   DEPLOYED   ·   OPERATED   ·   OFFLINE WHERE NEEDED",
     76, 526, MONO, 15, INK_DIM, kern=1.3)

text("AI products for business  ·  AI integration, run in production",
     76, 566, DISPLAY, 19, BRASS_D, kern=-0.2)

NSGraphicsContext.restoreGraphicsState()

data = rep.representationUsingType_properties_(NSBitmapImageFileTypePNG, {})
out = "/Users/husseinalamutu/Desktop/Development/alamz-site/assets/og-image.png"
ok = data.writeToFile_atomically_(out, True)
print("written:", ok, out)
