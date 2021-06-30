import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
export const lightTheme = createMuiTheme({
  palette: {
    type: 'light',
    text: {
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
      primary: '#393E43',
      secondary: 'rgba(255, 255, 255, 0.7)',
    },
    primary: {
      main: '#08a6f3',
      heading: '#08a6f3',
    },
    secondary: {
      main: '#19857b',
      heading: '#666666',
    },
    error: {
      main: red.A400
    },
    background: {
      default: '#EFEFEF',
      card: '#EFEFEF'
    }
  }
});

// Create a theme instance.
export const darkTheme = createMuiTheme({
  palette: {
    type: 'dark',
    text: {
      disabled: 'rgba(255, 255, 255, 0.5)',
      hint: 'rgba(255, 255, 255, 0.5)',
      icon: 'rgba(255, 255, 255, 0.5)',
      primary: '#AEBCCB',
      secondary: 'rgba(255, 255, 255, 0.7)',
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
      default: '#22272E',
      card: '#22272E'
    }
  }
});


export default { darkTheme, lightTheme };
