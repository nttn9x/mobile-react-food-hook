import React from "react";
import { StyleSheet, Text } from "react-native";
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

interface HomeScreenProps {
  navigation: any;
  navigationOptions: any;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const { navigate } = props.navigation;

  return (
    <ViewAnimatedFade style={styles.container}>
      <Text>aaaa</Text>
      <Button
        title="Solid Button"
        onPress={() => navigate("BBC", { name: "Jane" })}
      />
    </ViewAnimatedFade>
  );
};

export default HomeScreen;
