// Providers.tsx
import React from 'react';
import { lightTheme, darkTheme } from './theme';
import { ThemeProvider } from '@material-ui/styles';
import useDarkMode from 'use-dark-mode';
import ThemeToggle from './ThemeToggle';

const Providers =  ({ children }) => {
  const darkMode = useDarkMode(false, { storageKey: 'darkMode', onChange: null });

  const theme = darkMode.value ? darkTheme : lightTheme;

  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  const body =
        <ThemeProvider theme={theme}>
          <ThemeToggle darkMode={darkMode} />
          {children}
        </ThemeProvider>;

  // prevents ssr flash for mismatched dark mode
  if (!mounted) {
    return <div style={{ visibility: 'hidden' }}>{body}</div>;
  }

  return body;
};

export default Providers;