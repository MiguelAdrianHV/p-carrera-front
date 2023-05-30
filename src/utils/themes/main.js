import { main, neutral, text } from "utils/colors";
export const mainTheme = {
  primaryColor: main[100],
  secondaryColor: main[300],
  tertiaryColor: main[200],
  background: neutral[100],
  textColor: "#333",
  borderText: main[200],
  links: {
    color: main[500],
    hover: {
      color: main[600],
    },
  },
  // * Navbar
  navbar: {
    background: main[100],
    color: neutral[100],
    hover: {
      background: main[500],
      color: main[500],
    },
    mobile: {
      hover: {
        background: main[100],
        color: main[500],
      },
    },
  },
  // * Dashboard nav
  dashboardNav: {
    background: main[200],
    color: text.textInverted,
    hover: {
      background: main[300],
      color: text.textInverted,
    },
  },
  // *  Buttons
  buttons: {
    primary: {
      background: main[100],
      color: text.textInverted,
      hover: {
        background: main[600],
        color: text.text,
      },
    },
    secondary: {
      background: main[200],
      color: text.textInverted,
      hover: {
        background: main[400],
        color: text.text,
      },
    },
    tertiary: {
      background: main[500],
      color: main[200],

      hover: {
        background: main[200],
        color: main[600],
      },
    },
    social: {
      background: main[200],
      color: text.textInverted,
      hover: {
        background: main[300],
        color: text.textInverted,
      },
    },
  },
  // * Header text
  headerHero: {
    color: neutral[100],
    background: main[200],
  },
  // * Product cards
  productCard: {
    background: main[200],
    color: main[400],
    hover: {
      background: main[200],
      color: text.textInverted,
    },
  },
  // * About
  about: {
    background: main[400],
    border: main[500],
    color: text.textInverted,
  },
  // * Loader
  loader: {
    background: main[300],
    backgroundDashboard: neutral[100],
    loader: main[100],
  },

  // * Paragraph text
  paragraphText: neutral[100],
  // * Footer
  footer: {
    background: main[100],
    color: text.textInverted,
    border: main[600],
    bottom: {
      background: main[200],
      color: text.textInverted,
    },
  },
  // * Forms
  form: {
    background: neutral[100],
    color: text.text,
    borderColor: neutral[300],
    accentColor: main[300],
    inputFile: {
      background: main[200],
      color: text.textInverted,
    },
  },
  // * Filter container
  filterContainer: {
    background: main[600],
    selected: main[200],
  },
  // * tables
  table: {
    background: neutral[100],
    color: text.text,
    border: neutral[300],
    thead: {
      background: main[100],
      color: text.textInverted,
    },
    tr: {
      hover: {
        background: neutral[200],
      },
    },
  },
  // * Dashboard
  dashboard: {
    sidebar: {
      background: main[100],
      color: text.textInverted,
      items: {
        hover: {
          background: main[200],
          color: text.text,
        },
      },
    },
    navbar: {
      background: "#f7fafc",
      color: text.textInverted,
    },
  },
  modal: {
    background: neutral[100],
  },
};
