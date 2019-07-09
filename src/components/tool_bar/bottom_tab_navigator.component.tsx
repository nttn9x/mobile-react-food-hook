import React, { useEffect, useRef } from "react";
import { Animated } from "react-native";

import styles from "./bottom_tab_navigator.style";

import { TabItemComponent } from "./bottom_tab_navigator-item.component";

function useTransform() {
  const transform = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(transform, {
      toValue: 1,
      duration: 500
    }).start();
  }, []);

  return transform.interpolate({
    inputRange: [0, 1],
    outputRange: [300, 0]
  });
}

const BottomTabNavigator: React.FC<any> = ({ navigation, ...rest }) => {
  const { routes, index: activeRouteIndex } = navigation.state;
  const transform = useTransform();

  return (
    <Animated.View
      style={[
        styles.container,
        {
          transform: [
            {
              translateY: transform
            }
          ]
        }
      ]}
    >
      {routes.map((route, routeIndex) => (
        <TabItemComponent
          {...rest}
          key={routeIndex}
          route={route}
          routeIndex={routeIndex}
          activeRouteIndex={activeRouteIndex}
        />
      ))}
    </Animated.View>
  );
};

export { BottomTabNavigator };
