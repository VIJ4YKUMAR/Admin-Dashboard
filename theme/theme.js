import { Palette, PaletteOptions } from "@mui/material/styles";
import { ThemeOptions } from "@mui/material/styles/createTheme";
import { TypographyOptions } from "@mui/material/styles/createTypography";
import "@fontsource/inter";
import { fontFamily } from "@mui/system";

const themeOptions = {
  palette: {
    secondary: {
      main: "#2196F3",
    },
    alert: {
      main: "#E53935",
    },
    success: {
      main: "#43A047",
    },
    grey: {
      100: "#E6E6E6",
      200: "#CCCCCC",
      300: "#B3B3B3",
      400: "#7A7A7A",
      500: "#000000",
    },
    common: {
      black: "#1A1A1A",
      white: "#FFFFFF",
    },
    warning: {
      main: "#FFA500",
    },

    darkBlue: { main: "#002D4E" },

    neonTangerine: { main: "#F48C06" },

    persimmon: { main: "#E85D04" },

    celestialBlue: { main: "#069EF4" },

    accentOrange: { main: "#FB5621" },

    accentOrangeTint: { main: "#FFEEE9" },

    azure: { main: "#047BE8" },

    sunset: { main: "#FFD4A4" },

    uranianBlue: { main: "#C2E8FF" },

    matterhorn: { main: "#4E4E4E" },

    lightBlue: { main: "#D3DEFF" },
    greyLight: { main: "#4E4E4E" },
    lavenderPink: { main: "#E0C0F5" },
    vividTangerine: { main: "#F5C0DC" },
    coral: { main: "#F5C0C0" },
    lightPeach: { main: "#F5E6C0" },
    lightGreen: { main: "#D7F5C0" },
    keyLime: { main: "#D1F5C0" },
    magicMint: { main: "#C0F5E2" },
    lightPeriwinkle: { main: "#C0D8F5" },
    babyBlue: { main: "#C0EBF5" },
    thistle: { main: "#DDC0F5" },
    pinkLace: { main: "#F5C0E9" },
    aliceBlue: { main: "#D3DEFF" },

    semiTransparentBlack: { main: "#0000001f" },

    dark: { main: "#2E2E2E" },
    white: { main: "#FFFFFF" },
    black: { main: "#1A1A1A" },
    deepBlue: { main: "#3655B3" },
  },

  color: {
    secondary: "#2196F3",
    alert: "#E53935",
    darkBlue: "#002D4E",
    deepBlue: "#3655B3",
    success: "#43A047",
    neonTangerine: "#F48C06",
    persimmon: "#E85D04",
    celestialBlue: "#069EF4",
    accentOrange: "#FB5621",
    accentOrangeTint: "#FFEEE9",
    azure: "#047BE8",
    sunset: "#FFD4A4",
    uranianBlue: "#C2E8FF",
    white: "#ffffff",
    black: "#1A1A1A",
    greyPlatinum: "#E6E6E6",
    neonSilver: "#CCCCCC",
    gray70: "#B3B3B3",
    darkGray: "#444444",
    grey: "#7A7A7A",
    warning: "#FFA500",
    greyLight: "#4E4E4E",
    matterhorn: "#4E4E4E",
    lavenderPink: "#E0C0F5",
    vividTangerine: "#F5C0DC",
    coral: "#F5C0C0",
    lightPeach: "#F5E6C0",
    lightGreen: "#D7F5C0",
    keyLime: "#D1F5C0",
    magicMint: "#C0F5E2",
    lightPeriwinkle: "#C0D8F5",
    babyBlue: "#C0EBF5",
    semiTransparentBlack: "#0000001f",
    thistle: "#DDC0F5",
    pinkLace: "#F5C0E9",
    aliceBlue: "#D3DEFF",
    teaGreen: "#C6FFB3",
    brightRed: "#E53935",
    forestGreen: "#36B370",
    skyBlue: "#1ca0f2",
    infernoOrange: "#ff4400",
    whatsAppGreen: "#25d466",
    cyanBlue: "#1876f2",
    lightGrayBorderShadow: "rgba(0, 14, 51, 0.05)",
    pattensBlue: "#E2F0FC",
    greenCyan: "#198754",
    limeGreen: "#449d44",
    pink20: "#F8D7DA",
    pink40: "#F1AEB5",
    gray50: "#DDDDDD",
    whiteSmoke: "#F5F5F5",
    seaGreen: "#5EB336",
    brightOrange: "#eea236",
    fireBrickRed: "#B33636",
    lochmaraBlue: "#2e6da4",
    grayBorderShadow: "rgba(100, 100, 111, 0.2)",
    lightBlue2: "#d5f5ff",
    lightBlue3: "#46b8da",
    lightBlue4: "#31b0d5",
    lightBlue5: "#269abc",
    lightGrey: "#DEE2E6",
    greyBlue: "#212529",
    cursedGrey: "#666666",
    screechWhite: "#EEEEEE",
    lightGreyShade: "#f0f0f0",
    lightCoral: "#FF7F50",
    darkOrange: "#C63000",
    lightOrange: "#FB6F21",
    lightBlueShade: "#EFF9FF",
    whiteOpacity: "rgba(255, 255, 255, 0.9)",
    accentOrangeOpacity: "rgba(238, 82, 34, 0.8)",
    darkShadeGrey: "#5C5C5C",
    greyShade: "rgba(0,0,0,0.3)",
    strongOrange: "#d34c0b",
    lightShadeOrange: "#FFD0C2",
    lightSkyBlueShade: "#C4E9FF",
    lightBlackShade: "rgba(0, 0, 0, 0.5)",
    blackShade: "rgba(0, 0, 0, 0.7)",
    lightShade: "rgba(0, 0, 0, 0.54)",
    semiBlackTransparent: " rgba(0, 0, 0, 0.2)",
  },
  card: {
    variant: {
      lightBlue: "#D3DEFF",
      purpleRain: "#8336B3",
      crimsonTide: "#B33663",
      fireBrickRed: "#B33636",
      mustardSeed: "#B38136",
      oliveGrove: "#93B336",
      seaGreen: "#5EB336",
      forestGreen: "#36B370",
      turquoiseBlue: "#36B3A4",
      royalBlue: "#4736B3",
      sapphireBlue: "#367EB3",
      orchidPurple: "#A936B3",
      rosyPink: "#B33654",
      deepBlue: "#3655B3",
    },
    dark: "#2E2E2E",
  },
  typography: {
    fontFamily: "Inter, sans-serif",
    fontWeight: {
      thin: 200,
      light: 300,
      regular: 400,
      semibold: 500,
      bold: 600,
      medium: 700,
      extraBold: 800,
    },
    lineHeight: {
      medium: "24px",
      extraSmall: "16px",
    },
    h1: {
      fontSize: "40px",
      "@media (max-width:900px)": {
        fontSize: "35px",
      },
      "@media (max-width:600px)": {
        fontSize: "30px",
      },
      fontFamily: "Inter, sans-serif",
    },
    h2: {
      fontSize: "30px",
      "@media (max-width:900px)": {
        fontSize: "27px",
      },
      "@media (max-width:600px)": {
        fontSize: "24px",
      },
      fontFamily: "Inter, sans-serif",
    },
    h3: {
      fontSize: "22px",
      "@media (max-width:900px)": {
        fontSize: "20px",
      },
      "@media (max-width:600px)": {
        fontSize: "18px",
      },
      fontWeight: 800,
      fontFamily: "Inter, sans-serif",
    },
    h4: {
      fontSize: "20px",
      "@media (max-width:900px)": {
        fontSize: "18px",
      },
      "@media (max-width:600px)": {
        fontSize: "16px",
      },
      fontFamily: "Inter, sans-serif",
      fontWeight: 500,
      lineHeight: "21px",
    },
    h5: {
      fontSize: "18px",
      "@media (max-width:900px)": {
        fontSize: "16px",
      },
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
      fontFamily: "Inter, sans-serif",
      fontWeight: 600,
      lineHeight: "19px",
    },
    h6: {
      fontSize: "16px",
      "@media (max-width:1200px)": {
        fontSize: "15px",
      },
      "@media (max-width:900px)": {
        fontSize: "15px",
      },
      "@media (max-width:600px)": {
        fontSize: "14px",
      },
      fontFamily: "Inter, sans-serif",
    },
    subtitle1: {
      fontSize: "16px",
      "@media (max-width:1200px)": {
        fontSize: "12px",
      },
      "@media (max-width:900px)": {
        fontSize: "10px",
      },
      "@media (max-width:730px)": {
        fontSize: "8px",
      },
      "@media (max-width:600px)": {
        fontSize: "6px",
      },
      fontFamily: "Inter, sans-serif",
    },
    xlarge: {
      fontSize: "36px",
    },
    large: {
      fontSize: "32px",
    },
    medium: {
      fontSize: "24px",
    },
    subtitle2: {
      fontSize: "12px",
    },
    body1: {
      fontSize: "14px",
    },
    caption: {
      fontSize: "12px",
    },
    p: {
      fontFamily: "Inter, sans-serif",
    },
  },
};

export default themeOptions;
