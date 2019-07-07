import React from "react";

import { createAppContainer } from "react-navigation";

import MainNavigator from "./src/screens/main.navigations";
import LayoutContainer from "./src/components/layout/layout.container";

const AppContainer = createAppContainer(MainNavigator);

const App: React.FC = () => {
  return (
    <LayoutContainer>
      <AppContainer />
    </LayoutContainer>
  );
};

export default App;
