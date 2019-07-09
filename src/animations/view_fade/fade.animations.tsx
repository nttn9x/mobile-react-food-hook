import React, { useEffect, ReactNode } from "react";
import { Animated } from "react-native";

import { animated } from "../../styles/theme.constant";

const state = {
  fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
};

interface FadeInViewProps {
  style?: object;
  children: ReactNode;
}

const ViewAnimatedFade: React.FC<FadeInViewProps> = props => {
  useEffect(() => {
    Animated.timing(
      // Animate over time
      state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: animated.duration // Make it take a while
      }
    ).start(); // Starts the animation
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        ...props.style,
        opacity: state.fadeAnim // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};
export { ViewAnimatedFade };
