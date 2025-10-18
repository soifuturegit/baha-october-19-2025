export const themeConfig = {
  colors: {
    background: {
      primary: 'slate-950',
      secondary: 'slate-900',
      card: 'slate-800/30',
      cardHover: 'slate-800/50',
    },
    text: {
      primary: 'slate-200',
      secondary: 'slate-400',
      heading: 'white',
      muted: 'slate-500',
    },
    accent: {
      primary: 'blue-500',
      secondary: 'blue-400',
      tertiary: 'blue-600',
    },
    gradient: {
      from: 'blue-500',
      via: 'cyan-500',
      to: 'teal-500',
    },
    border: {
      default: 'slate-800',
      hover: 'blue-500/30',
      focus: 'blue-500',
    },
  },
  typography: {
    fontFamily: {
      primary: 'Space Grotesk',
      fallback: 'sans-serif',
    },
    fontSize: {
      base: '15px',
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
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
    },
  },
  spacing: {
    section: {
      mobile: '4rem',
      desktop: '5rem',
    },
  },
  effects: {
    transition: 'duration-300',
    borderRadius: {
      card: 'rounded-xl',
      button: 'rounded-lg',
      small: 'rounded-md',
    },
  },
};

export type ThemeConfig = typeof themeConfig;
