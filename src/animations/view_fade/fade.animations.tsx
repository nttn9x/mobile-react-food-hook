import React, { useEffect, ReactElement } from "react";
import { Animated } from "react-native";

const state = {
  fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
};

interface FadeInViewProps {
  children: ReactElement;
}

const FadeInView: React.FC<FadeInViewProps> = props => {
  useEffect(() => {
    Animated.timing(
      // Animate over time
      state.fadeAnim, // The animated value to drive
      {
        toValue: 1, // Animate to opacity: 1 (opaque)
        duration: 300 // Make it take a while
      }
    ).start(); // Starts the animation
  }, []);

  return (
    <Animated.View // Special animatable View
      style={{
        // ...this.props.style,
        opacity: state.fadeAnim // Bind opacity to animated value
      }}
    >
      {props.children}
    </Animated.View>
  );
};
export default FadeInView;

// class FadeInView extends React.Component {
//   state = {
//     fadeAnim: new Animated.Value(0) // Initial value for opacity: 0
//   };

//   componentDidMount() {
//     Animated.timing(
//       // Animate over time
//       this.state.fadeAnim, // The animated value to drive
//       {
//         toValue: 1, // Animate to opacity: 1 (opaque)
//         duration: 10000 // Make it take a while
//       }
//     ).start(); // Starts the animation
//   }

//   render() {
//     let { fadeAnim } = this.state;

//     return (
//       <Animated.View // Special animatable View
//         style={{
//           ...this.props.style,
//           opacity: fadeAnim // Bind opacity to animated value
//         }}
//       >
//         {this.props.children}
//       </Animated.View>
//     );
//   }
// }
