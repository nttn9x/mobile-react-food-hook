import React, { ReactElement } from "react";

import { ThemeProvider } from "react-native-elements";

import { colors } from "../../styles/theme.constant";

const theme = {
  colors: {
    primary: colors.primary,
    secondary: colors.secondary
  }
};

interface LayoutProps {
  children: ReactElement;
}

const Layout: React.FC<LayoutProps> = props => {
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default Layout;
