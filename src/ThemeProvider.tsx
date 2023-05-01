import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ThemeContext } from "./ThemeContext";
import { dark, blue, purple, green, darkPurple, darkGreen } from "./themes";
import { ThemeProvider } from "styled-components";

interface Props {
  children: any;
}

export const MyThemeProvider = (props: Props) => {
  const { children } = props;

  const location = useLocation();
  const [theme, setTheme] = useState(dark);

  useEffect(() => {
    const path = location.pathname;

    if (path === "/dark") {
      setTheme(dark);
    } else if (path === "/darkPurple") {
      setTheme(darkPurple);
    } else if (path === "/blue") {
      setTheme(blue);
    } else if (path === "/purple") {
      setTheme(purple);
    } else if (path === "/green") {
      setTheme(green);
    } else if (path === "/darkGreen") {
      setTheme(darkGreen);
    }
  }, [location]);

  return (
    <ThemeContext.Provider value={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
