import React from "react";
import { AsyncStorage, Text, KeyboardAvoidingView } from "react-native";
import { Input } from "react-native-elements";
import { ViewAnimatedFade } from "../../../animations/view_fade/fade.animations";

import ButtonComponent from "../../../components/button/action.button";

import styles from "./login.style";

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<any> = props => {
  async function _signInAsync() {
    await AsyncStorage.setItem("userToken", "abc");

    props.navigation.navigate("App");
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ViewAnimatedFade style={styles.form}>
        <Text style={styles.text}>Hello</Text>
        <Input containerStyle={styles.input} label="Username" shake={true} />
        <Input
          secureTextEntry={true}
          containerStyle={styles.input}
          label="Password"
          shake={true}
        />

        <ButtonComponent
          containerStyle={styles.button}
          label={"Login"}
          onPress={_signInAsync}
        />
      </ViewAnimatedFade>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
