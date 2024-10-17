import React, { createContext, useState, useContext } from 'react';
import colors from '../theme/colors';

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const theme = {
    textColor: isDarkMode ? '#FFFFFF' : colors.textColor,
    backgroundColor: isDarkMode ? '#000000' : colors.backgroundColor,
    buttonColor: isDarkMode ? '#FFFFFF' : '#000000',
    buttonTextColor: isDarkMode ? '#000000' : '#FFFFFF', 
  };

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
