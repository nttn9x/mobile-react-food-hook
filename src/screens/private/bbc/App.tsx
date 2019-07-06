import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Header } from "react-native-elements";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

interface BBCScreenProps {
  navigation: any;
}

const BBCScreen: React.FC<BBCScreenProps> = props => {
  const { navigate } = props.navigation;

  return (
    <View style={styles.container}>
      <>
        <Header
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "BBC", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
        />
        <Button title="BBC" onPress={() => navigate("BBC", { name: "Jane" })} />
      </>
    </View>
  );
};

export default BBCScreen;
