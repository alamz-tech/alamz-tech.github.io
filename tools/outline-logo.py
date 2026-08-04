#!/usr/bin/env python3
"""Convert the Alamz badge lettering to SVG paths using the real Archivo font.

The badge SVG shipped with live <text> in Archivo. Archivo is not installed on
visitors' machines and the site ships no webfonts, so it fell back to the system
sans and the letterforms shifted per platform. This bakes the real outlines in.

Reproduces the original <text> geometry exactly:
  ALAMZ  font-size 18, letter-spacing 3,   weight 400, baseline y=47, centred x=60
  TECH   font-size 21, letter-spacing 1.5, weight 700, baseline y=90, centred x=60
"""
import CoreText as CT
from Foundation import NSURL, NSAttributedString, NSMutableDictionary
from AppKit import NSFontAttributeName, NSKernAttributeName, NSBezierPath
import Quartz

FONT = "/private/tmp/claude-501/-Users-husseinalamutu-Desktop-Development/64dbe093-0799-4c68-b933-595dd3a8a88c/scratchpad/Archivo.ttf"

url = NSURL.fileURLWithPath_(FONT)
ok, err = CT.CTFontManagerRegisterFontsForURL(url, CT.kCTFontManagerScopeProcess, None)
if not ok:
    raise SystemExit("font registration failed: %s" % err)

WGHT = 0x77676874  # 'wght' as a FourCharCode


def font_at(size, weight):
    desc = CT.CTFontDescriptorCreateWithAttributes({
        CT.kCTFontNameAttribute: "Archivo",
        CT.kCTFontVariationAttribute: {WGHT: weight},
    })
    return CT.CTFontCreateWithFontDescriptor(desc, size, None)


def fmt(v):
    """Trim float noise so the path data stays readable."""
    s = "%.2f" % v
    s = s.rstrip("0").rstrip(".")
    return "0" if s in ("-0", "") else s


def glyph_paths(text, size, weight, kern, cx, baseline):
    font = font_at(size, weight)
    attrs = NSMutableDictionary.dictionary()
    attrs.setObject_forKey_(font, NSFontAttributeName)
    attrs.setObject_forKey_(kern, NSKernAttributeName)
    astr = NSAttributedString.alloc().initWithString_attributes_(text, attrs)
    line = CT.CTLineCreateWithAttributedString(astr)

    # Cocoa applies kern after every glyph including the last; drop that
    # trailing space so the run is optically centred, as text-anchor=middle is.
    width = CT.CTLineGetTypographicBounds(line, None, None, None)[0] - kern
    x0 = cx - width / 2.0

    out = []
    for run in CT.CTLineGetGlyphRuns(line):
        n = CT.CTRunGetGlyphCount(run)
        glyphs = CT.CTRunGetGlyphs(run, (0, n), None)
        positions = CT.CTRunGetPositions(run, (0, n), None)
        rfont = CT.CTRunGetAttributes(run)[NSFontAttributeName]

        for g, pos in zip(glyphs, positions):
            cg = CT.CTFontCreatePathForGlyph(rfont, g, None)
            if cg is None:
                continue
            bp = NSBezierPath.bezierPathWithCGPath_(cg)
            dx, dy = x0 + pos.x, baseline - pos.y

            for i in range(bp.elementCount()):
                kind, pts = bp.elementAtIndex_associatedPoints_(i)
                # SVG y grows downward; glyph outlines grow upward from baseline
                p = [(dx + q.x, dy - q.y) for q in pts]
                if kind == 0:
                    out.append("M%s %s" % (fmt(p[0][0]), fmt(p[0][1])))
                elif kind == 1:
                    out.append("L%s %s" % (fmt(p[0][0]), fmt(p[0][1])))
                elif kind == 2:
                    out.append("C%s %s %s %s %s %s" % (
                        fmt(p[0][0]), fmt(p[0][1]), fmt(p[1][0]), fmt(p[1][1]),
                        fmt(p[2][0]), fmt(p[2][1])))
                elif kind == 3:
                    out.append("Z")
                elif kind == 4:
                    out.append("Q%s %s %s %s" % (
                        fmt(p[0][0]), fmt(p[0][1]), fmt(p[1][0]), fmt(p[1][1])))
    return "".join(out)


alamz = glyph_paths("ALAMZ", 18, 400, 3.0, 60.0, 47.0)
tech = glyph_paths("TECH", 21, 700, 1.5, 60.0, 90.0)

print("ALAMZ_PATH=%s" % alamz)
print()
print("TECH_PATH=%s" % tech)
print()
print("# lengths: alamz=%d tech=%d" % (len(alamz), len(tech)))
