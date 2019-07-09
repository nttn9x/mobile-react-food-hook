import React, { useEffect, useRef } from "react";
import { Animated, TouchableOpacity, Text } from "react-native";

import styles from "./bottom_tab_navigator.style";

function TabItemComponent({
  route,
  routeIndex,
  renderIcon,
  activeRouteIndex,
  activeTintColor,
  inactiveTintColor,
  onTabPress,
  onTabLongPress,
  getLabelText,
  getAccessibilityLabel
}: any) {
  const isRouteActive = routeIndex === activeRouteIndex;
  const tintColor = isRouteActive ? activeTintColor : inactiveTintColor;

  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    if (isRouteActive) {
      Animated.sequence([
        Animated.timing(scale, { toValue: 1.2, duration: 300 }),
        Animated.timing(scale, { toValue: 1, duration: 150 })
      ]).start();
    }
  }, [isRouteActive]);

  return (
    <TouchableOpacity
      key={routeIndex}
      style={styles.tabButton}
      onPress={() => {
        onTabPress({ route });
      }}
      onLongPress={() => {
        onTabLongPress({ route });
      }}
      accessibilityLabel={getAccessibilityLabel({ route })}
    >
      <Animated.View
        style={[
          {
            transform: [{ scale }]
          }
        ]}
      >
        {renderIcon({ route, focused: isRouteActive, tintColor })}
      </Animated.View>

      <Text style={styles.tabButtonText}>{getLabelText({ route })}</Text>
    </TouchableOpacity>
  );
}

export { TabItemComponent };
