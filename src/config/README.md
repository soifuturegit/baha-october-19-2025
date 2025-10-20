# Design System Configuration Guide

This directory contains the centralized design system configuration for the entire application. All colors, typography, spacing, and other design tokens are managed here.

## File Locations

- **Main Theme Config**: `/src/config/theme.ts` - TypeScript configuration object
- **CSS Variables**: `/src/index.css` - CSS custom properties for styling
- **Utility Classes**: `/src/index.css` - Reusable CSS utility classes

## Quick Start

All design system variables are defined in `/src/index.css` using CSS custom properties. Edit the `:root` section to change colors, fonts, spacing, and other visual elements across your entire website.

## Color System

Colors use HSL format (Hue Saturation Lightness) for easier manipulation and consistency.

### Background Colors
```css
--bg-primary: 217 33% 17%;        /* Main background */
--bg-secondary: 217 33% 10%;      /* Secondary background */
--bg-card: 217 33% 13%;           /* Card backgrounds */
--bg-card-hover: 217 33% 15%;     /* Card hover state */
```

### Text Colors
```css
--text-primary: 215 20% 89%;      /* Main text */
--text-secondary: 215 16% 65%;    /* Secondary text */
--text-muted: 215 16% 50%;        /* Muted text */
--text-heading: 0 0% 100%;        /* Headings (white) */
```

### Accent Colors
```css
--accent-primary: 217 91% 60%;    /* Primary accent (blue) */
--accent-secondary: 199 89% 48%;  /* Secondary accent (cyan) */
--accent-tertiary: 173 80% 40%;   /* Tertiary accent (teal) */
```

### Gradient Colors
```css
--gradient-from: 217 91% 60%;     /* Gradient start */
--gradient-via: 199 89% 48%;      /* Gradient middle */
--gradient-to: 173 80% 40%;       /* Gradient end */
```

### Border Colors
```css
--border-default: 217 33% 23%;    /* Default borders */
--border-hover: 217 91% 60%;      /* Border hover state */
--border-focus: 217 91% 60%;      /* Border focus state */
```

## Typography System

### Font Family
```css
--font-primary: 'Space Grotesk', sans-serif;
```

### Font Sizes
```css
--font-size-base: 15px;
--font-size-sm: 14px;
--font-size-lg: 17px;
--font-size-h1: 3rem;
--font-size-h1-mobile: 2.25rem;
--font-size-h2: 1.875rem;
--font-size-h2-mobile: 1.5rem;
--font-size-h3: 1.25rem;
```

### Font Weights
```css
--font-weight-normal: 400;
--font-weight-medium: 500;
--font-weight-semibold: 600;
--font-weight-bold: 700;
```

## Spacing System (8px Grid)

```css
--spacing-xs: 0.5rem;    /* 8px */
--spacing-sm: 1rem;      /* 16px */
--spacing-md: 1.5rem;    /* 24px */
--spacing-lg: 2rem;      /* 32px */
--spacing-xl: 3rem;      /* 48px */
--spacing-2xl: 4rem;     /* 64px */
--spacing-3xl: 5rem;     /* 80px */
```

## Border Radius

```css
--radius-sm: 0.375rem;   /* 6px */
--radius-md: 0.5rem;     /* 8px */
--radius-lg: 0.75rem;    /* 12px */
--radius-xl: 1rem;       /* 16px */
```

## Transitions

```css
--transition-fast: 150ms;
--transition-base: 300ms;
--transition-slow: 500ms;
```

## Shadows

```css
--shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
--shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1);
--shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1);
--shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1);
```

## Z-Index Scale

```css
--z-base: 1;
--z-dropdown: 10;
--z-sticky: 20;
--z-fixed: 30;
--z-modal: 40;
--z-popover: 50;
--z-tooltip: 60;
```

## Available Utility Classes

### Background Colors
```css
.bg-primary       /* Main background */
.bg-secondary     /* Secondary background */
.bg-card          /* Card background */
.bg-accent        /* Accent background */
```

### Text Colors
```css
.text-primary     /* Main text color */
.text-secondary   /* Secondary text color */
.text-muted       /* Muted text color */
.text-heading     /* Heading color */
.text-accent      /* Accent color */
```

### Borders
```css
.border-default   /* Default border color */
.border-hover     /* Hover border color */
.border-accent    /* Accent border color */
```

### Gradients
```css
.bg-gradient-soft      /* Soft gradient background */
.text-gradient-soft    /* Soft gradient text */
.text-gradient-green   /* Green gradient text */
```

### Effects
```css
.card-hover         /* Card hover effect */
.section-padding    /* Standard section padding */
```

## Usage Examples

### Using Utility Classes in JSX
```tsx
<div className="bg-card text-primary border-default rounded-lg p-6">
  <h2 className="text-heading font-bold mb-4">Title</h2>
  <p className="text-secondary">Content here</p>
</div>
```

### Using CSS Variables Directly
```tsx
<div style={{
  backgroundColor: 'hsl(var(--bg-card))',
  color: 'hsl(var(--text-primary))',
  padding: 'var(--spacing-lg)',
  borderRadius: 'var(--radius-lg)'
}}>
  Content
</div>
```

### Using in Custom CSS
```css
.custom-component {
  background-color: hsl(var(--bg-card));
  color: hsl(var(--text-primary));
  border: 1px solid hsl(var(--border-default));
  padding: var(--spacing-md);
  border-radius: var(--radius-lg);
  transition: all var(--transition-base);
}

.custom-component:hover {
  background-color: hsl(var(--bg-card-hover));
  border-color: hsl(var(--border-hover));
}
```

## How to Change the Theme

### Example 1: Change to Purple Theme

Edit `/src/index.css` and update the accent and gradient colors:

```css
:root {
  /* Accent Colors */
  --accent-primary: 270 91% 60%;    /* Purple */
  --accent-secondary: 280 89% 48%;  /* Deep purple */
  --accent-tertiary: 290 80% 40%;   /* Violet */

  /* Gradient Colors */
  --gradient-from: 270 91% 60%;
  --gradient-via: 280 89% 48%;
  --gradient-to: 290 80% 40%;

  /* Border Colors */
  --border-hover: 270 91% 60%;
  --border-focus: 270 91% 60%;
}
```

### Example 2: Change to Green Theme

```css
:root {
  /* Accent Colors */
  --accent-primary: 142 71% 45%;    /* Green */
  --accent-secondary: 160 84% 39%;  /* Teal */
  --accent-tertiary: 173 80% 40%;   /* Cyan */

  /* Gradient Colors */
  --gradient-from: 142 71% 45%;
  --gradient-via: 160 84% 39%;
  --gradient-to: 173 80% 40%;

  /* Border Colors */
  --border-hover: 142 71% 45%;
  --border-focus: 142 71% 45%;
}
```

### Example 3: Change Font to Inter

```css
:root {
  --font-primary: 'Inter', sans-serif;
}
```

Don't forget to update the font import in your HTML file or use a web font service.

### Example 4: Adjust Spacing Scale

```css
:root {
  --spacing-xs: 0.25rem;   /* 4px */
  --spacing-sm: 0.5rem;    /* 8px */
  --spacing-md: 1rem;      /* 16px */
  --spacing-lg: 1.5rem;    /* 24px */
  --spacing-xl: 2rem;      /* 32px */
  --spacing-2xl: 3rem;     /* 48px */
  --spacing-3xl: 4rem;     /* 64px */
}
```

## Converting HSL Colors

To convert a color to HSL format:
1. Use a color picker tool or website (e.g., hslpicker.com)
2. Find the HSL values (Hue, Saturation, Lightness)
3. Format as: `H S% L%` (without commas)

Example conversions:
- Blue (#3B82F6) = `217 91% 60%`
- Cyan (#06B6D4) = `199 89% 48%`
- Teal (#14B8A6) = `173 80% 40%`
- Purple (#A855F7) = `270 91% 60%`
- Green (#10B981) = `142 71% 45%`

## Best Practices

1. **Always use CSS variables** instead of hardcoded color values
2. **Use utility classes** for consistency across components
3. **Follow the 8px spacing system** for visual rhythm
4. **Test accessibility** - ensure sufficient color contrast ratios
5. **Keep the theme.ts file in sync** with CSS variables for TypeScript access
6. **Use semantic names** (primary, secondary, accent) instead of color names
7. **Test on multiple devices** to ensure responsive design works well

## Theme Testing Checklist

When changing the theme, verify:
- [ ] Text is readable on all backgrounds
- [ ] Hover states are visible and intuitive
- [ ] Focus states meet accessibility standards
- [ ] Gradients transition smoothly
- [ ] Colors work well in both light and dark contexts
- [ ] Mobile and desktop views look consistent
