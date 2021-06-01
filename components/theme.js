import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
      primary: "#000",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    primary: {
      main: '#0C0C0C',
      heading: '#0C0C0C',
    },
    secondary: {
      main: '#19857b',
      heading: '#666666',
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#F5F5F5'
    }
  }
});

// Create a theme instance.
export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    text: {
      disabled: "rgba(255, 255, 255, 0.5)",
      hint: "rgba(255, 255, 255, 0.5)",
      icon: "rgba(255, 255, 255, 0.5)",
      primary: "#fff",
      secondary: "rgba(255, 255, 255, 0.7)",
    },
    primary: {
      main: '#08a6f3',
      heading: '#08a6f3',
    },
    secondary: {
      main: '#19857b',
      heading: '#CDCDCD',
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#171717'
    }
  }
});


export default { darkTheme, lightTheme };
