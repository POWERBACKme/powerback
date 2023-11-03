import { useState, createContext } from 'react';

export const ThemeContext = createContext();

export function ThemeProvider(props) {
  const [theme, setTheme] = useState();
  return (
    <ThemeContext.Provider value={{ theme: theme, setTheme: setTheme }}>
      {props.children}
    </ThemeContext.Provider>
  );
}
