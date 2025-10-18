import { themeConfig } from '../config/theme';

export const useTheme = () => {
  const getClass = {
    bg: {
      primary: () => `bg-${themeConfig.colors.background.primary}`,
      secondary: () => `bg-${themeConfig.colors.background.secondary}`,
      card: () => `bg-${themeConfig.colors.background.card}`,
      cardHover: () => `hover:bg-${themeConfig.colors.background.cardHover}`,
    },
    text: {
      primary: () => `text-${themeConfig.colors.text.primary}`,
      secondary: () => `text-${themeConfig.colors.text.secondary}`,
      heading: () => `text-${themeConfig.colors.text.heading}`,
      muted: () => `text-${themeConfig.colors.text.muted}`,
    },
    accent: {
      primary: () => `text-${themeConfig.colors.accent.primary}`,
      bg: () => `bg-${themeConfig.colors.accent.primary}`,
      border: () => `border-${themeConfig.colors.accent.primary}`,
    },
    gradient: () => `from-${themeConfig.colors.gradient.from} via-${themeConfig.colors.gradient.via} to-${themeConfig.colors.gradient.to}`,
    border: {
      default: () => `border-${themeConfig.colors.border.default}`,
      hover: () => `hover:border-${themeConfig.colors.border.hover}`,
    },
  };

  return {
    theme: themeConfig,
    classes: getClass,
  };
};
