---
name: Heavy Duty Corporate
colors:
  surface: '#f8f9ff'
  surface-dim: '#cbdbf5'
  surface-bright: '#f8f9ff'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#eff4ff'
  surface-container: '#e5eeff'
  surface-container-high: '#dce9ff'
  surface-container-highest: '#d3e4fe'
  on-surface: '#0b1c30'
  on-surface-variant: '#444557'
  inverse-surface: '#213145'
  inverse-on-surface: '#eaf1ff'
  outline: '#757589'
  outline-variant: '#c5c5db'
  surface-tint: '#2c3fff'
  primary: '#0015be'
  on-primary: '#ffffff'
  primary-container: '#0020ff'
  on-primary-container: '#bbc0ff'
  inverse-primary: '#bdc2ff'
  secondary: '#bb0013'
  on-secondary: '#ffffff'
  secondary-container: '#e71520'
  on-secondary-container: '#fffbff'
  tertiary: '#3b3a3a'
  on-tertiary: '#ffffff'
  tertiary-container: '#525151'
  on-tertiary-container: '#c6c4c3'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#e0e0ff'
  primary-fixed-dim: '#bdc2ff'
  on-primary-fixed: '#000767'
  on-primary-fixed-variant: '#001be1'
  secondary-fixed: '#ffdad6'
  secondary-fixed-dim: '#ffb4ab'
  on-secondary-fixed: '#410002'
  on-secondary-fixed-variant: '#93000d'
  tertiary-fixed: '#e5e2e1'
  tertiary-fixed-dim: '#c8c6c5'
  on-tertiary-fixed: '#1c1b1b'
  on-tertiary-fixed-variant: '#474746'
  background: '#f8f9ff'
  on-background: '#0b1c30'
  surface-variant: '#d3e4fe'
typography:
  h1:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  h2:
    fontFamily: Inter
    fontSize: 36px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  h3:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Work Sans
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Work Sans
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '600'
    lineHeight: '1.0'
    letterSpacing: 0.05em
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  base: 8px
  xs: 4px
  sm: 12px
  md: 24px
  lg: 48px
  xl: 80px
  gutter: 24px
  margin: 32px
---

## Brand & Style
This design system is engineered to project a sense of structural integrity, precision, and industrial power. The visual language bridges the gap between raw construction strength and high-end technical engineering. 

Drawing from **Bauhaus and Modernist** influences, the system prioritizes functionalism and a rigorous grid-based order. The aesthetic is "Heavy Duty" yet "Technically Advanced," utilizing clean lines and a disciplined layout to convey reliability. The target audience—contractors, project managers, and enterprise stakeholders—will experience a UI that feels as stable and well-built as the machinery the company operates.

## Colors
The palette is rooted in the high-contrast signals found on a construction site. The **Bold Blue** (derived from the logo) serves as the primary brand anchor, used for navigation, primary actions, and trust-building elements. The **Signal Red** is utilized sparingly as a secondary accent for critical alerts, status indicators, and high-priority call-to-actions, ensuring it maintains its visual impact without overwhelming the user.

Neutral tones move from professional blacks and deep "Iron" greys to clean, clinical whites. This spectrum provides the "Technical" backdrop necessary to make data and specifications easily scannable. Surfaces use subtle grey tints to separate content blocks without relying on heavy lines.

## Typography
The typography strategy utilizes a pairing of two high-performance sans-serifs. **Inter** is used for headings and UI labels; its geometric precision and "ink traps" provide an authoritative, technical feel that remains legible even at massive scales or tight weights. Headings should utilize "Extra Bold" or "Black" weights to mimic the heaviness of industrial branding.

**Work Sans** is selected for body copy. Its slightly wider apertures and optimized spacing ensure high readability for technical documentation, equipment specs, and long-form corporate reports. All caps labels are used for metadata and category tags to reinforce the systematic, architectural nature of the design system.

## Layout & Spacing
This design system employs a **Fixed Grid** model for desktop environments to maintain a sense of rigid, engineered control. A 12-column grid is the standard, with generous 24px gutters that provide "breathing room" between heavy content blocks.

The spacing rhythm is strictly mathematical, built on an 8px baseline. This ensures that every element—from the height of a button to the margin of a container—feels intentional and aligned. Large vertical spacing (48px+) is encouraged between major sections to prevent the "Heavy Duty" components from feeling cluttered.

## Elevation & Depth
Depth in this design system is communicated through **Tonal Layers** and **Low-Contrast Outlines** rather than dramatic shadows. To maintain the Modernist aesthetic, surfaces are kept mostly flat. 

When elevation is required to denote interactivity (such as a card hover), a very tight, high-opacity "Industrial Shadow" is used—simulating a heavy object sitting close to a surface rather than floating. Distinct service blocks or equipment cards should use a 1px solid border in a light grey (#E2E8F0) to define their boundaries, creating a "blueprinted" look that emphasizes structure.

## Shapes
The shape language is dominated by **Soft** (0.25rem) corners. This subtle rounding suggests precision-machined edges—enough to feel modern and "finished," but sharp enough to retain a masculine, industrial character. 

Avoid completely circular or pill-shaped elements, as they contradict the "Heavy Duty" narrative. Buttons, input fields, and card containers should all adhere to this disciplined corner radius to maintain a cohesive, "bolted-down" appearance across the interface.

## Components
- **Buttons:** Primary buttons use the Bold Blue with white text, featuring a subtle bottom border (2px) in a darker shade to give them a tactile, "pressed" feel. Secondary buttons use a heavy 2px outline.
- **Cards:** Used for service blocks and equipment listings. They feature a white background, a 1px neutral border, and a very slight shadow on hover to indicate clickability.
- **Input Fields:** Rectangular with a 1px slate border. Labels sit strictly above the field in "label-caps" style to maximize clarity.
- **Chips/Badges:** For status (e.g., "In Stock", "On Site"). These use high-saturation background tints with dark text, mirroring safety signage found in construction zones.
- **Data Tables:** Highly structured with alternating row stripes in the surface color. Headers are Bold Inter and use a darker grey background to anchor the information.
- **Progress Bars:** Use thick, 8px bars with the secondary Red to indicate load or capacity, emphasizing the "Heavy Duty" nature of the data.