import { Button, Header } from "react-native-elements";
import { createStackNavigator } from "react-navigation";

import BBCScreen from "../screens/private/bbc/App";
import HomeScreen from "../screens/private/home/App";

const MainNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      headerTitle: (
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
      )
    }
  },
  BBC: { screen: BBCScreen }
});

export default MainNavigator;
