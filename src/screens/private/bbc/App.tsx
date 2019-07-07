import React from "react";
import { StyleSheet } from "react-native";
import { Button } from "react-native-elements";

import { ViewAnimatedFade } from "../../../animations/view_fade/fade.animations";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  }
});

interface BBCScreenProps {
  navigation: any;
}

const BBCScreen: React.FC<BBCScreenProps> = props => {
  const { navigate } = props.navigation;

  return (
    <ViewAnimatedFade style={styles.container}>
      <Button title="BBC" onPress={() => navigate("BBC", { name: "Jane" })} />
    </ViewAnimatedFade>
  );
};

export default BBCScreen;
