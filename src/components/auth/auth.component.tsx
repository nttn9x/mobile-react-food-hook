import React from "react";

import { AsyncStorage, StyleSheet, View } from "react-native";

import { colors } from "../../styles/theme.constant";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary
  }
});

const AuthComponent: React.FC<any> = props => {
  React.useEffect(() => {
    async function _bootstrapAsync() {
      const userToken = await AsyncStorage.getItem("userToken");

      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      props.navigation.navigate(userToken ? "Home" : "Auth");
    }

    _bootstrapAsync();
  }, []);

  return <View style={styles.container} />;
};

export { AuthComponent };
