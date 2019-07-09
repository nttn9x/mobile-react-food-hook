import React from "react";
import { AsyncStorage, KeyboardAvoidingView, View, Image } from "react-native";
import { Input, Button } from "react-native-elements";
import { ViewAnimatedFade } from "../../../animations/view_fade/fade.animations";

import styles from "./login.style";

interface LoginScreenProps {
  navigation: any;
}

const LoginScreen: React.FC<LoginScreenProps> = props => {
  async function _signInAsync() {
    await AsyncStorage.setItem("userToken", "abc");

    props.navigation.navigate("App");
  }

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <View style={styles.background}>
        <ViewAnimatedFade style={styles.form}>
          <Image
            style={styles.logo}
            source={require("../../../styles/images/logo.png")}
          />
          <Input
            containerStyle={styles.input}
            labelStyle={styles.inputLabelStyle}
            inputStyle={styles.inputTextStyleStyle}
            label="Username"
            shake={true}
          />
          <Input
            secureTextEntry={true}
            labelStyle={styles.inputLabelStyle}
            containerStyle={styles.input}
            inputStyle={styles.inputTextStyleStyle}
            label="Password"
            shake={true}
          />

          <Button
            title="Login"
            type="solid"
            onPress={_signInAsync}
            containerStyle={styles.buttonContainer}
            buttonStyle={styles.buttonInside}
            titleStyle={styles.buttonTitle}
          />
        </ViewAnimatedFade>
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreen;
