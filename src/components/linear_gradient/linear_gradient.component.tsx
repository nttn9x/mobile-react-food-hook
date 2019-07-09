import React from "react";

import { LinearGradient } from "expo-linear-gradient";
import { withTheme } from "react-native-elements";

const Linear: React.FC<any> = props => {
  const { theme, ...rest } = props;

  return (
    <LinearGradient
      {...rest}
      colors={[theme.colors.primary, theme.colors.secondary]}
    >
      {props.children}
    </LinearGradient>
  );
};

Linear.defaultProps = {
  start: { x: 0, y: 0 },
  end: { x: 1, y: 1 },
  locations: [0.1, 0.9],
  opacity: 0.8
};

export default withTheme(Linear);
