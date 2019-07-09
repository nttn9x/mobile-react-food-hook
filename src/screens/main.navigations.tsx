import React from "react";

import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator
} from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import { Icon } from "react-native-elements";

import BBCScreen from "./private/bbc/App";
import HomeScreen from "./private/home/home.screen";
import AccountScreen from "./private/account/account.screen";
import LoginScreen from "./public/login/login.screen";

import { AuthComponent } from "../components/auth/auth.component";
import { BottomTabNavigator } from "../components/tool_bar/bottom_tab_navigator.component";

import { sizes, colors } from "../styles/theme.constant";

const MainNavigator = createBottomTabNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon name="home" size={sizes.iconNav} color={tintColor} />
        )
      }
    },
    BBC: {
      screen: BBCScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="entypo"
            name="folder-video"
            size={sizes.iconNav}
            color={tintColor}
          />
        )
      }
    },
    Account: {
      screen: AccountScreen,
      navigationOptions: {
        tabBarIcon: ({ tintColor }) => (
          <Icon
            type="material-community"
            name="account"
            size={sizes.iconNav}
            color={tintColor}
          />
        )
      }
    }
  },
  {
    tabBarOptions: {
      showLabel: false,
      activeTintColor: colors.primary,
      inactiveTintColor: "gray"
    },
    tabBarComponent: props => <BottomTabNavigator {...props} />
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
      AuthLoading: AuthComponent,
      App: MainNavigator,
      Auth: AuthStack
    },
    {
      initialRouteName: "AuthLoading"
    }
  )
);
