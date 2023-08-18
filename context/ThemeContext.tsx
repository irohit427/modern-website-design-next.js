"use client"

import { createContext, useState } from "react";

export const ThemeContext = createContext<any>({} as any);

export const ThemeProvider = ({ children }: {
  children: React.ReactNode;
}) => {
  const [theme, setTheme] = useState("dark");
  
  const toggle = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      <div className={`theme ${theme}`}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
}