import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { Button } from "react-native-elements";

import ViewFadeAnimation from "../../../animations/view_fade/fade.animations";

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
    <View style={styles.container}>
      <ViewFadeAnimation>
        <ScrollView>
          <Text>aaaa</Text>
          <Text>aaaa</Text>
          <Text>aaaa</Text>
          <Text>aaaa</Text>
          <Button
            title="Solid Button"
            onPress={() => navigate("BBC", { name: "Jane" })}
          />
        </ScrollView>
      </ViewFadeAnimation>
    </View>
  );
};

export default HomeScreen;
