export const themeConfig = {
  colors: {
    background: {
      primary: '217 33% 17%',
      secondary: '217 33% 10%',
      card: '217 33% 13%',
      cardHover: '217 33% 15%',
    },
    text: {
      primary: '215 20% 89%',
      secondary: '215 16% 65%',
      muted: '215 16% 50%',
      heading: '0 0% 100%',
    },
    accent: {
      primary: '217 91% 60%',
      secondary: '199 89% 48%',
      tertiary: '173 80% 40%',
    },
    gradient: {
      from: '217 91% 60%',
      via: '199 89% 48%',
      to: '173 80% 40%',
    },
    border: {
      default: '217 33% 23%',
      hover: '217 91% 60%',
      focus: '217 91% 60%',
    },
  },
  typography: {
    fontFamily: {
      primary: 'Space Grotesk',
      fallback: 'sans-serif',
    },
    fontSize: {
      base: '15px',
      sm: '14px',
      lg: '17px',
      h1: {
        mobile: '2.25rem',
        desktop: '3rem',
      },
      h2: {
        mobile: '1.5rem',
        desktop: '1.875rem',
      },
      h3: '1.25rem',
    },
    fontWeight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      normal: 1.5,
      relaxed: 1.75,
    },
    letterSpacing: {
      tight: '-0.025em',
      normal: '0',
      wide: '0.025em',
    },
  },
  spacing: {
    xs: '0.5rem',
    sm: '1rem',
    md: '1.5rem',
    lg: '2rem',
    xl: '3rem',
    '2xl': '4rem',
    '3xl': '5rem',
    section: {
      mobile: '4rem',
      desktop: '5rem',
    },
  },
  effects: {
    transition: {
      fast: '150ms',
      base: '300ms',
      slow: '500ms',
    },
    borderRadius: {
      sm: '0.375rem',
      md: '0.5rem',
      lg: '0.75rem',
      xl: '1rem',
    },
    shadow: {
      sm: '0 1px 2px 0 rgb(0 0 0 / 0.05)',
      md: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
      lg: '0 10px 15px -3px rgb(0 0 0 / 0.1)',
      xl: '0 20px 25px -5px rgb(0 0 0 / 0.1)',
    },
  },
  zIndex: {
    base: 1,
    dropdown: 10,
    sticky: 20,
    fixed: 30,
    modal: 40,
    popover: 50,
    tooltip: 60,
  },
};

export type ThemeConfig = typeof themeConfig;
