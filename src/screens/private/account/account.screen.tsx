import React from "react";
import { StyleSheet, AsyncStorage } from "react-native";
import { Button } from "react-native-elements";

import { ViewAnimatedFade } from "../../../animations/view_fade/fade.animations";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

interface AccountScreenProps {
  navigation: any;
  navigationOptions: any;
}

const AccountScreen: React.FC<AccountScreenProps> = props => {
  async function _signOutAsync() {
    await AsyncStorage.clear();
    props.navigation.navigate("Auth");
  }

  return (
    <ViewAnimatedFade style={styles.container}>
      <Button title="singout" onPress={_signOutAsync} />
    </ViewAnimatedFade>
  );
};

export default AccountScreen;
