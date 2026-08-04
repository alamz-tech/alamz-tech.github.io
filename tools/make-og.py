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

def mark(x, y, size, color, knockout=None):
    """The founder's Alamz Tech badge, redrawn at any size.

    Geometry is taken directly from assets/logo.svg (a 120x120 viewBox):
    a square brass frame, a filled plate with ALAMZ reversed out of it, and
    TECH beneath. `knockout` is the colour showing through the reversed
    lettering — i.e. whatever the badge is sitting on. (x, y) is top-left.
    """
    s = size / 120.0                       # viewBox unit -> pixels
    if knockout is None:
        knockout = GROUND

    def X(u):
        return x + u * s

    def Y(u):
        return top(y + u * s)

    color.set()

    # frame: <rect x=6 y=6 w=108 h=108 stroke-width=6>
    frame = NSBezierPath.bezierPathWithRect_(
        NSMakeRect(X(6), Y(114), 108 * s, 108 * s))
    frame.setLineWidth_(6 * s)
    frame.stroke()

    # plate: <rect x=18 y=24 w=84 h=32> filled, with ALAMZ masked out
    color.set()
    NSBezierPath.fillRect_(NSMakeRect(X(18), Y(56), 84 * s, 32 * s))

    # The SVG uses a mask; on a flat ground, painting the letters in the
    # knockout colour is visually identical and far simpler here.
    centred("ALAMZ", X(60), y + 47 * s, DISPLAY, 18 * s, knockout, kern=3 * s)
    centred("TECH",  X(60), y + 90 * s, DISPLAY, 21 * s, color,    kern=1.5 * s)


def centred(s, cx, y_baseline, font_name, size, color, kern=0.0):
    """Draw text horizontally centred on cx, positioned by its baseline the way
    SVG's <text y=...> does, so the geometry copied from logo.svg lines up."""
    font = NSFont.fontWithName_size_(font_name, size)
    attrs = {NSFontAttributeName: font, NSForegroundColorAttributeName: color}
    if kern:
        attrs[NSKernAttributeName] = kern
    ns = NSString.stringWithString_(s)
    w = ns.sizeWithAttributes_(attrs).width
    # drawAtPoint anchors the line box's lower-left; the baseline sits
    # |descender| above it, and font.descender() is negative.
    ns.drawAtPoint_withAttributes_(
        NSMakePoint(cx - w / 2, top(y_baseline) + font.descender()), attrs)

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

# --- the badge, full size on the right ------------------------------------
# kept well inside the frame: LinkedIn sometimes crops the sides further
mark(858, 170, 280, BRASS)

# --- wordmark -------------------------------------------------------------
# The badge on the right already says the name, so this is just the eyebrow.
text("ALAMZ TECH", 76, 62, MONO, 17, INK, kern=3.4)
text("PRODUCT STUDIO", 76, 92, MONO, 15, INK_DIM, kern=2.6)

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
