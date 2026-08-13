import { useEffect, useState } from 'react';
import ThemeContext from './ThemeContext';

const THEME_STORAGE_KEY = 'travel-agency-theme';

function getInitialTheme() {
  return localStorage.getItem(THEME_STORAGE_KEY) || 'dark';
}

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;