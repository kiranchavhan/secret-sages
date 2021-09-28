const GREY_BODY = '#212121';
const BOLD_FONT_WEIGHT = 700;
const REGULAR_FONT_WEIGHT = 400;
const HTML_FONT_SIZE = 10;
const FONT_FAMILY = ['regular', 'Inter', 'Arial', 'sans-serif'].join(',');
const SIDE_DRAWER_WIDTH = '28rem';

const PRIMARY_BLUE = '#001787';
const PRIMARY_BLUE_LIGHT = '#192b81';
const WHITE = '#FFFFFF';
const BLACK = '#000000';
const BLACK_TRANSPARENT_33 = '#00000033';

const SECONDARY_MAIN = '#05ffa3';

// const GREY_TRANSPARENT_80 = 'rgba(131, 140, 158, 0.8)';
const GREY_TRANSPARENT_20 = 'rgba(255, 255, 255, 0.2)';
const GREY_TRANSPARENT_16 = 'rgba(255, 255, 255, 0.16)';
const GREY_LIGHT = '#E1E1E1';
const GREY_TEXT = '#777777';
const GREY_LINK = '#9A9A9A';

const RED_PRIMARY = '#DF1642';

const appTheme = {
  sideDrawerWidth: SIDE_DRAWER_WIDTH,
  common: {
    white: WHITE,
    black: BLACK,
    primaryBlue: PRIMARY_BLUE,
    secondaryMain: SECONDARY_MAIN,
    primaryBlueLight: PRIMARY_BLUE_LIGHT,
    greyTransparent20: GREY_TRANSPARENT_20,
    greyTransparent16: GREY_TRANSPARENT_16,
    greyLight: GREY_LIGHT,
    greyText: GREY_TEXT,
    boxShadow: `0 0.1rem 9rem 0.4rem ${BLACK_TRANSPARENT_33}`,
  },
  palette: {
    primary: {
      main: PRIMARY_BLUE,
      contrastText: WHITE,
    },
    secondary: {
      main: SECONDARY_MAIN,
      contrastText: WHITE,
    },
    text: {
      primary: GREY_BODY,
      secondary: GREY_TEXT,
      hint: GREY_BODY,
      link: GREY_LINK,
    },
    error: {
      main: RED_PRIMARY,
    },
  },
  typography: {
    fontFamily: FONT_FAMILY,
    fontSize: HTML_FONT_SIZE,
    boldFontWeight: BOLD_FONT_WEIGHT,
    useNextVariants: true,
    h1: {
      fontSize: '4.8rem',
      color: GREY_BODY,
      fontWeight: REGULAR_FONT_WEIGHT,
    },
    h2: {
      fontSize: '3.7rem',
      color: WHITE,
      fontWeight: REGULAR_FONT_WEIGHT,
    },
    h3: {
      fontSize: '3.1rem',
      color: GREY_BODY,
    },
    h4: {
      fontSize: '2.6rem',
      color: GREY_BODY,
    },
    h5: {
      fontSize: '2.4rem',
      color: GREY_BODY,
    },
    h6: {
      fontSize: '2.1rem',
      color: GREY_BODY,
      fontWeight: REGULAR_FONT_WEIGHT,
    },
    body1: {
      fontSize: '1.8rem',
      color: GREY_BODY,
    },
    body2: {
      fontSize: '1.6rem',
      color: GREY_BODY,
    },
    caption: {
      fontSize: '1.4rem',
      color: GREY_BODY,
    },
    subtitle1: {
      fontSize: '1.2rem',
      color: GREY_BODY,
    },
    subtitle2: {
      fontSize: '1.0rem',
      color: GREY_BODY,
      fontWeight: REGULAR_FONT_WEIGHT,
    },
    button: {
      fontSize: '1.6rem',
      fontFamily: 'bold',
      fontWeight: BOLD_FONT_WEIGHT,
      textTransform: 'capitalize',
    },
    custom: {
      fontSize: '2.2rem',
      fontFamily: 'bold',
      color: PRIMARY_BLUE,
      fontWeight: BOLD_FONT_WEIGHT,
      textTransform: 'capitalize',
    },
  },
  overrides: {
    MuiChip: {
      root: {
        fontSize: '1.2rem',
        lineHeight: '1.8rem',
      },
    },
    MuiSnackbarContent: {
      root: {
        backgroundColor: WHITE,
        border: `0.1rem solid ${GREY_LIGHT}`,
        color: PRIMARY_BLUE_LIGHT,
        boxShadow: `0 0.1rem 9rem 0.4rem ${BLACK_TRANSPARENT_33}`,
      },
      message: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
    },
    MuiFilledInput: {
      input: {
        background: '#eaeeff',
      },
    },
    MuiButton: {
      contained: {
        boxShadow: 'unset',
      },
    },
  },
};

export default appTheme;
