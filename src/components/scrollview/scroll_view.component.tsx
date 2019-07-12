import React, { useState, useEffect } from "react";
import {
  View,
  PanResponder,
  ScrollView,
  Dimensions,
  StyleSheet
} from "react-native";
import { Text } from "react-native-elements";

const styles = StyleSheet.create({
  animationStyle: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "red",
    width: Dimensions.get("window").width,
    height: 100
  },
  animationStyle1: {
    position: "absolute",
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
    backgroundColor: "blue",
    width: Dimensions.get("window").width,
    height: 100
  }
});

const ScrollViewComponent: React.FC<any> = props => {
  const [ownState, setOwnState] = useState<any>({
    scrollY: 0,
    isScrollFree: false
  });
  let _panResponder;

  if (!_panResponder) {
    _panResponder = PanResponder.create({
      onStartShouldSetPanResponder: function(e, gestureState) {
        console.log("onStartShouldSetPanResponder" + ownState.isScrollFree);

        return !ownState.isScrollFree;
      },
      onMoveShouldSetPanResponder: function(e, gestureState) {
        console.log("onMoveShouldSetPanResponder" + ownState.isScrollFree);
        return !ownState.isScrollFree;
      }
      //   onPanResponderMove: this._handlePanResponderMove.bind(this),
      //   onPanResponderRelease: this._handlePanResponderEnd.bind(this),
      //   onPanResponderTerminate: this._handlePanResponderEnd.bind(this)
    });
  }

  function _onScrollEvent(e: any) {
    console.log(e.nativeEvent.contentOffset.y);

    setOwnState({
      scrollY: e.nativeEvent.contentOffset.y
    });
  }

  function _isScrolledToTop() {
    if (ownState.scrollY._value === 0 && ownState.isScrollFree) {
      console.log("_isScrolledToTop: false");
      setOwnState({
        ...ownState,
        isScrollFree: false
      });
    }
  }

  return (
    <View style={{ flex: 1 }} {..._panResponder.panHandlers}>
      <View
        style={[
          styles.animationStyle1,
          { opacity: props.isRefreshing ? 1 : 0 }
        ]}
      >
        <Text>a</Text>
      </View>
      <ScrollView
        scrollEnabled={ownState.isScrollFree}
        onScroll={_onScrollEvent}
        onTouchEnd={() => {
          _isScrolledToTop();
        }}
        onScrollEndDrag={() => {
          _isScrolledToTop();
        }}
      >
        {props.contentView}
      </ScrollView>
    </View>
  );
};

export { ScrollViewComponent };
