// import React, { useEffect, useRef } from "react";
// import { Animated } from "react-native";
// import { BottomTabBar } from "react-navigation-tabs";

// const BottomTabNavigator: React.FC<any> = props => {
//   const transform = useRef(new Animated.Value(0)).current;

//   useEffect(() => {
//     Animated.timing(
//       // Animate over time
//       transform, // The animated value to drive
//       {
//         toValue: 1,
//         duration: 600 // Make it take a while
//       }
//     ).start(); // Starts the animation
//   }, []);

//   return (
//     <Animated.View // Special animatable View
//       style={{
//         ...props.style,
//         transform: [
//           {
//             translateY: transform.interpolate({
//               inputRange: [0, 1],
//               outputRange: [300, 0]
//             })
//           }
//         ]
//       }}
//     >
//       <BottomTabBar {...props} />
//     </Animated.View>
//   );
// };

// export { BottomTabNavigator };

import React, { useEffect, useRef } from "react";
import { Animated, StyleSheet, TouchableOpacity, Text } from "react-native";

import { sizes } from "../../styles/theme.constant";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 0,
    borderColor: "#fff",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -2
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
    marginRight: -2,
    marginLeft: -2
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 8
  },
  tabButtonText: {
    fontSize: sizes.caption
  }
});

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

function TabComponent({
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
        <TabComponent
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
