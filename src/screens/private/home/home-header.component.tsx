import React from "react";
import { StyleSheet, Text, ImageBackground, View } from "react-native";
import { Divider, Icon } from "react-native-elements";

import { CardComponent } from "../../../components/card/card.component";

import layout from "../../../styles/layout.style";
import { sizes, colors } from "../../../styles/theme.constant";

const styles = StyleSheet.create({
  imgBackground: {
    height: 200,
    marginBottom: 80,
    paddingHorizontal: sizes.paddingLayout,
    backgroundColor: "blue"
  },
  title: {
    paddingTop: sizes.paddingLayout,
    paddingBottom: sizes.paddingLayout,
    fontSize: sizes.title,
    color: "#00695c",
    textAlign: "center"
  },
  fullname: {
    fontWeight: "bold"
  },
  mainMenu: {
    paddingTop: sizes.paddingLayout,
    paddingBottom: sizes.paddingLayout,
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  mainMenuContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "25%",
    height: 80
  },
  divider: {
    height: sizes.paddingComponent / 2,
    backgroundColor: colors.grey2
  }
});

const HomeHeaderComponent: React.FC<any> = props => {
  return (
    <>
      <ImageBackground
        source={require("../../../styles/images/header.jpg")}
        style={styles.imgBackground}
      >
        <Text style={styles.title}>
          <Text>Good Afternoon, </Text>
          <Text style={styles.fullname}>Nguyen</Text>
        </Text>

        <CardComponent />
      </ImageBackground>
      <View style={styles.mainMenu}>
        <View style={styles.mainMenuContainer}>
          <Icon reverse name="rowing" color={colors.grey4} />
        </View>
        <View style={styles.mainMenuContainer}>
          <Icon reverse name="rowing" color={colors.grey4} />
        </View>
        <View style={styles.mainMenuContainer}>
          <Icon reverse name="rowing" color={colors.grey4} />
        </View>
        <View style={styles.mainMenuContainer}>
          <Icon reverse name="rowing" color={colors.grey4} />
        </View>
        <View style={styles.mainMenuContainer}>
          <Icon reverse name="rowing" color={colors.grey4} />
        </View>
        <View style={styles.mainMenuContainer}>
          <Icon reverse name="rowing" color={colors.grey4} />
        </View>
        <View style={styles.mainMenuContainer}>
          <Icon reverse name="rowing" color={colors.grey4} />
        </View>
        <View style={styles.mainMenuContainer}>
          <Icon reverse name="rowing" color={colors.grey4} />
        </View>
      </View>
      <Divider style={styles.divider} />
    </>
  );
};

export { HomeHeaderComponent };
