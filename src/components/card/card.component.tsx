import React from "react";
import { StyleSheet, View } from "react-native";

import { colors } from "../../styles/theme.constant";

const styles = StyleSheet.create({
  banner: {
    width: "100%",
    height: 200,
    backgroundColor: "#fff",
    borderColor: colors.grey3,
    borderWidth: 1,
    borderRadius: 4,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  }
});

const CardComponent: React.FC<any> = props => {
  return <View style={styles.banner}>{props.children}</View>;
};

export { CardComponent };
