# Theme Configuration Guide

This file explains how to customize your website's appearance using the centralized theme configuration.

## 📁 File Location
**Main Theme Config**: `/src/config/theme.ts`
**CSS Variables**: `/src/index.css`
**Utility Classes**: `/src/index.css` (see `.text-gradient-soft`, `.bg-gradient-soft`, etc.)

## Quick Start

All theme settings are located in `/src/config/theme.ts`. Edit this file to change colors, fonts, and other visual elements across your entire website.

## Color Configuration

### Background Colors
```typescript
background: {
  primary: 'slate-950',      // Main background color
  secondary: 'slate-900',    // Secondary background
  card: 'slate-800/30',      // Card background
  cardHover: 'slate-800/50', // Card hover state
}
```

### Text Colors
```typescript
text: {
  primary: 'slate-200',   // Main text color
  secondary: 'slate-400', // Secondary text
  heading: 'white',       // Heading color
  muted: 'slate-500',     // Muted text
}
```

### Accent Colors
```typescript
accent: {
  primary: 'blue-500',    // Primary accent (links, buttons)
  secondary: 'blue-400',  // Secondary accent
  tertiary: 'blue-600',   // Tertiary accent
}
```

### Gradient Colors
```typescript
gradient: {
  from: 'blue-500',  // Gradient start
  via: 'cyan-500',   // Gradient middle
  to: 'teal-500',    // Gradient end
}
```

### Border Colors
```typescript
border: {
  default: 'slate-800',    // Default border
  hover: 'blue-500/30',    // Border on hover
  focus: 'blue-500',       // Border on focus
}
```

## Typography Configuration

### Font Family
```typescript
fontFamily: {
  primary: 'Space Grotesk',  // Main font
  fallback: 'sans-serif',    // Fallback font
}
```

### Font Sizes
```typescript
fontSize: {
  base: '15px',
  h1: {
    mobile: '2.25rem',   // H1 on mobile
    desktop: '3rem',     // H1 on desktop
  },
  h2: {
    mobile: '1.5rem',    // H2 on mobile
    desktop: '1.875rem', // H2 on desktop
  },
  h3: '1.25rem',
}
```

### Font Weights
```typescript
fontWeight: {
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
}
```

## How to Change Colors

### Example: Change Accent Color from Blue to Green

1. Open `/src/config/theme.ts`
2. Find the `accent` section:
```typescript
accent: {
  primary: 'blue-500',
  secondary: 'blue-400',
  tertiary: 'blue-600',
}
```
3. Change to:
```typescript
accent: {
  primary: 'green-500',
  secondary: 'green-400',
  tertiary: 'green-600',
}
```

### Example: Change Gradient to Purple Theme

1. Find the `gradient` section in `/src/config/theme.ts`
2. Change from:
```typescript
gradient: {
  from: 'blue-500',
  via: 'cyan-500',
  to: 'teal-500',
}
```
3. To:
```typescript
gradient: {
  from: 'purple-500',
  via: 'pink-500',
  to: 'rose-500',
}
```

## CSS Variables

For more advanced customization, you can also edit CSS variables in `/src/index.css`:

```css
:root {
  /* Background colors (HSL format) */
  --bg-primary: 217 33% 17%;
  --bg-secondary: 217 33% 10%;
  --bg-card: 217 33% 13%;

  /* Text colors */
  --text-primary: 215 20% 89%;
  --text-secondary: 215 16% 65%;
  --text-heading: 0 0% 100%;

  /* Accent colors */
  --accent-primary: 217 91% 60%;
  --accent-secondary: 199 89% 48%;

  /* Gradient colors */
  --gradient-from: 217 91% 60%;
  --gradient-via: 199 89% 48%;
  --gradient-to: 173 80% 40%;

  /* Border colors */
  --border-default: 217 33% 23%;
  --border-hover: 217 91% 60%;
}
```

## Available Color Options

Tailwind CSS provides these color options with shades from 50-950:
- slate, gray, zinc, neutral, stone
- red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose

Example: `blue-500`, `emerald-600`, `purple-400`

## Tips

1. **Keep contrast in mind**: Ensure text is readable on backgrounds
2. **Use consistent shades**: Stick to similar number shades (400-600) for cohesion
3. **Test on mobile**: Check how colors look on smaller screens
4. **Gradient harmony**: Choose gradient colors that blend well together
