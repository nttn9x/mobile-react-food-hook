import React from "react";
import { createAppContainer } from "react-navigation";
import { ThemeProvider } from "react-native-elements";

import MainNavigator from "./src/navigations/main.navigations";

const AppContainer = createAppContainer(MainNavigator);

const theme = {
  colors: {
    primary: "#673AB7",
    secondary: "#536DFE"
  }
};

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />
    </ThemeProvider>
  );
};

export default App;
