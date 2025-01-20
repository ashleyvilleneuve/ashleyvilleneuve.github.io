import { merge } from "theme-ui"
import originalTheme from "@lekoarts/gatsby-theme-cara/src/gatsby-plugin-theme-ui/index"

// Ensure we have all required color values
const theme = {
  config: {
    initialColorModeName: 'dark',
    useColorSchemeMediaQuery: false,
    useLocalStorage: false,
  },
  colors: {
    text: "#fff",
    background: "#141821",
    primary: originalTheme.colors.primary,
    secondary: originalTheme.colors.secondary,
    divider: originalTheme.colors.divider,
    textMuted: "rgba(255, 255, 255, 0.75)",
    icon_brightest: "rgba(255, 255, 255, 0.95)",
    icon_darker: "rgba(255, 255, 255, 0.7)",
    icon_darkest: "rgba(255, 255, 255, 0.5)",
    icon_red: "#ff5252",
    icon_blue: "#5252ff",
    icon_orange: "#ff9552",
    icon_yellow: "#ffd952",
    icon_pink: "#ff52b7",
    icon_purple: "#9952ff",
    icon_green: "#52ff89",
    icon_teal: "#52ffdb",
  },
  breakpoints: originalTheme.breakpoints,
  styles: originalTheme.styles,
}

export default merge(originalTheme, theme)