import typography from "./theme.typography";
interface ThemeType {
  palette: Palette;
  typography: Typography;
}

interface Typography {
  rootFonstSize: number;

  regular: {
    estedaad_regular_11: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_regular_12: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_regular_13: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_regular_14: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_regular_16: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_regular_18: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_regular_20: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };

    estedaad_regular_24: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
  };

  medium: {
    estedaad_medium_11: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_medium_12: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_medium_13: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_medium_14: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_medium_16: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_medium_18: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_medium_20: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };

    estedaad_medium_24: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
  };

  bold: {
    estedaad_bold_11: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_bold_12: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_bold_13: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_bold_14: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_bold_16: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_bold_18: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
    estedaad_bold_20: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };

    estedaad_bold_24: {
      fontWeight: number;
      fontSize: string;
      lineHeight: string;
    };
  };
}

interface Palette {
  background: string;
  white: string;
  primary: {
    100: string;
    300: string;
    500: string;
    700: string;
  };
  secondary: {
    100: string;
    300: string;
    500: string;
    700: string;
    900: string;
  };
  success: {
    main: string;
  };
  errors: {
    main: string;
  };
}

export const theme: ThemeType = {
  typography,
  palette: {
    background: "#1C1C1E",
    white: "#fff",
    primary: {
      100: "#edf4fc",
      300: "#4e91e6",
      500: "#1c66c5",
      700: "#0a56c7",
    },
    secondary: {
      100: "#f1f5f6",
      300: "#bfccd4",
      500: "#718e9c",
      700: "#363b3d",
      900: "#253035",
    },
    success: {
      main: "#00be92",
    },
    errors: {
      main: "#ff0e3b",
    },
  },
};
