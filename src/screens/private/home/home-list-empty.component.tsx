import React from "react";
import { StyleSheet, View } from "react-native";

import Placeholder, { Line } from "rn-placeholder";

import { sizes } from "../../../styles/theme.constant";

const styles = StyleSheet.create({
  container: {
    margin: sizes.paddingComponent
  }
});

const HomeListLoadingComponent: React.FC<any> = props => {
  return (
    <View style={styles.container}>
      <Placeholder isReady={false} animation="fade">
        <Line height={100} />
        <Line width="70%" />
        <Line width="55%" />
        <Line width="55%" />
        <Line width="0%" />
        <Line width="0%" />
        <Line height={100} />
        <Line width="70%" />
        <Line width="55%" />
        <Line width="55%" />
        <Line width="0%" />
        <Line width="0%" />
      </Placeholder>
    </View>
  );
};

export { HomeListLoadingComponent };
