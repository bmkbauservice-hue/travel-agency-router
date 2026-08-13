import { useContext } from 'react';
import ThemeContext from './ThemeContext';

function useTheme() {
  const context = useContext(ThemeContext);

  if (!context) {
    throw new Error(
      'useTheme muss innerhalb des ThemeProvider verwendet werden.',
    );
  }

  return context;
}

export default useTheme;