import React from "react";

import { AsyncStorage } from "react-native";
import {
  createAppContainer,
  createSwitchNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from "react-navigation";

import { Icon } from "react-native-elements";

import BBCScreen from "./private/bbc/App";
import HomeScreen from "./private/home/home.screen";
import AccountScreen from "./private/account/account.screen";
import LoginScreen from "./public/login/login.screen";

const AuthLoadingScreen: React.FC<any> = props => {
  React.useEffect(() => {
    async function _bootstrapAsync() {
      const userToken = await AsyncStorage.getItem("userToken");

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      props.navigation.navigate(userToken ? "Home" : "Auth");
    }

    _bootstrapAsync();
  }, []);

  return <></>;
};

const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let iconName;
  let typeName;
  if (routeName === "Home") {
    iconName = "home";
  } else if (routeName === "BBC") {
    iconName = "folder-video";
    typeName = "entypo";
  } else if (routeName === "Account") {
    iconName = "account";
    typeName = "material-community";
  }

  // You can return any component that you like here!
  return <Icon type={typeName} name={iconName} size={25} color={tintColor} />;
};

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen
    },
    BBC: { screen: BBCScreen },
    Account: { screen: AccountScreen }
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) =>
        getTabBarIcon(navigation, focused, tintColor)
    }),
    tabBarOptions: {
      showLabel: false,
      activeTintColor: "tomato",
      inactiveTintColor: "gray"
    },
    lazy: true
  }
);

const AuthStack = createStackNavigator({
  SignIn: {
    screen: LoginScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AuthLoadingScreen,
      App: MainNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
