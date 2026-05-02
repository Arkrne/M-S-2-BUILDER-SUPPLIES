---
name: Industrial Modernism System
colors:
  surface: '#141313'
  surface-dim: '#141313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2b2a2a'
  surface-container-highest: '#353434'
  on-surface: '#e5e2e1'
  on-surface-variant: '#c4c7c7'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#8e9192'
  outline-variant: '#444748'
  surface-tint: '#c9c6c5'
  primary: '#c9c6c5'
  on-primary: '#313030'
  primary-container: '#0a0a0a'
  on-primary-container: '#7b7979'
  inverse-primary: '#5f5e5e'
  secondary: '#c6c6c7'
  on-secondary: '#2f3131'
  secondary-container: '#454747'
  on-secondary-container: '#b4b5b5'
  tertiary: '#cac6c3'
  on-tertiary: '#32302f'
  tertiary-container: '#0b0a09'
  on-tertiary-container: '#7c7977'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#e5e2e1'
  primary-fixed-dim: '#c9c6c5'
  on-primary-fixed: '#1c1b1b'
  on-primary-fixed-variant: '#474646'
  secondary-fixed: '#e2e2e2'
  secondary-fixed-dim: '#c6c6c7'
  on-secondary-fixed: '#1a1c1c'
  on-secondary-fixed-variant: '#454747'
  tertiary-fixed: '#e6e1df'
  tertiary-fixed-dim: '#cac6c3'
  on-tertiary-fixed: '#1d1b1a'
  on-tertiary-fixed-variant: '#484645'
  background: '#141313'
  on-background: '#e5e2e1'
  surface-variant: '#353434'
typography:
  display:
    fontFamily: Inter
    fontSize: 96px
    fontWeight: '800'
    lineHeight: '1.0'
    letterSpacing: -0.04em
  headline-lg:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
    letterSpacing: '0'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
    letterSpacing: '0'
  label-bold:
    fontFamily: Inter
    fontSize: 12px
    fontWeight: '700'
    lineHeight: '1.0'
    letterSpacing: 0.05em
  label-mono:
    fontFamily: monospace
    fontSize: 12px
    fontWeight: '400'
    lineHeight: '1.0'
    letterSpacing: '0'
spacing:
  base: 8px
  grid-columns: '12'
  gutter: 16px
  margin: 40px
  stack-sm: 4px
  stack-md: 16px
  stack-lg: 32px
  stack-xl: 64px
---

## Brand & Style

The design system is rooted in the principles of Industrial Modernism and the International Typographic Style. It projects an aura of absolute precision, structural integrity, and utilitarian authority. The target audience values efficiency, clarity, and a no-nonsense approach to information density. 

The aesthetic is strictly two-dimensional, rejecting all 3D effects, gradients, or skeuomorphism in favor of a flat, high-contrast architecture. Every element must feel like it was machined rather than grown. The emotional response should be one of "functional intensity"—where the UI recedes to let the data and actions take center stage through a rigorous Swiss grid.

## Colors

This design system utilizes a "Dark Mode First" philosophy. The primary surface is a deep, non-reflective Carbon Black, which serves as the void for information to inhabit. Typography is strictly White to ensure maximum legibility and "vibration" against the dark background.

Accents are used sparingly but with high intensity. Safety Red is reserved for critical actions, errors, and primary call-to-actions. Deep Blue is used for secondary interactive elements and navigational highlights. There are no shades of gray used for surfaces; hierarchy is achieved through lines and typography rather than tonal shifts.

## Typography

Typography is the structural backbone of this design system. Using **Inter**, the system relies on extreme scale and weight contrast to establish hierarchy. Headings are massive and "heavy," often set with tight tracking to mimic mid-century industrial signage. 

Body text remains clean and highly scannable, prioritizing functional readability over ornamentation. Labels are frequently set in all-caps with slight letter spacing to act as "metadata" markers within the grid. Monospace fonts may be used for technical data points to reinforce the industrial aesthetic.

## Layout & Spacing

This design system adheres to a strict 12-column Swiss Grid. All elements must align to the grid lines without exception. The layout model is fixed-width centered for desktop, ensuring that the "industrial" proportions are preserved across various screen sizes.

Spacing is governed by an 8px modular scale. Alignment is predominantly left-aligned to create a strong vertical "axis" that guides the eye. Whitespace is not used for "airiness" but as a functional separator—it is either "active" (containing a grid line) or "passive" (structural void).

## Elevation & Depth

In keeping with minimalist modernism, this design system rejects all shadows and blurs. Depth is conveyed through **Bold Borders** and high-contrast color blocking. 

Hierarchy is established by:
1.  **1px White Strokes:** To define containers and section boundaries against the carbon background.
2.  **Inversion:** Highlighting active states by swapping background and foreground colors (e.g., white background with black text).
3.  **Layered Lines:** Using vertical and horizontal hair-lines to create a "blueprint" feel, where elements appear as part of a single, structured plane rather than floating objects.

## Shapes

The shape language of the design system is strictly orthogonal. All containers, buttons, and input fields feature 0px border radii. This "sharp" approach reinforces the industrial, machined nature of the interface. Circles are only permitted for specific functional status indicators or iconography, never for structural containers.

## Components

### Buttons
Buttons are rectangular blocks with no rounding. Primary buttons use a solid Safety Red background with white text. Secondary buttons use a solid Deep Blue. Ghost buttons use a 1px white border. Hover states should trigger a full color inversion (e.g., Red becomes White with Red text).

### Inputs
Input fields are defined by a 1px white bottom-border or a full 1px white outline. Backgrounds remain Carbon Black. Focused states should switch the border color to Deep Blue.

### Chips & Tags
Chips are small, rectangular outlines. They should look like industrial labels. Use all-caps for tag text to maintain a "serial number" aesthetic.

### Lists
Lists are separated by 1px white horizontal rules. Each list item must align strictly to the grid, with icons or labels occupying the first 1-2 columns.

### Cards
Cards are not used in the traditional sense; instead, use "Grid Sections" defined by 1px borders. There is no "elevation" or shadow; a "card" is simply a partitioned area of the global grid.

### Additional Components
- **Data Tables:** High-density tables with thin borders, using mono fonts for numerical data.
- **Progress Bars:** Solid blocks of color (Red or Blue) against a high-contrast background, with no rounded ends.
- **Status Indicators:** Square pips (Red, Green, Blue) to indicate system states.