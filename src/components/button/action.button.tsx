import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";
import { withTheme } from "react-native-elements";
import layoutStyle from "../../styles/layout.style";

const styles = StyleSheet.create({
  button: {
    height: 50
  },
  buttonText: {
    color: "#fff",
    fontSize: 14,
    fontWeight: "bold"
  },
  linearGradient: {
    height: "100%",
    ...layoutStyle.layoutFlexColumnCenter
  }
});

const Button: React.FC<any> = props => {
  const {
    containerStyle,
    theme,
    start,
    end,
    locations,
    activeOpacity,
    textStyle,
    label,
    ...rest
  } = props;

  const buttonStyles = [containerStyle, styles.button];

  return (
    <TouchableOpacity
      style={buttonStyles}
      activeOpacity={activeOpacity}
      {...rest}
    >
      <LinearGradient
        style={styles.linearGradient}
        start={start}
        end={end}
        locations={locations}
        colors={[theme.colors.primary, theme.colors.secondary]}
      >
        <Text style={[textStyle, styles.buttonText]}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

Button.defaultProps = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8
};

export default withTheme(Button);
