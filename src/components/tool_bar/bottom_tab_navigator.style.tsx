import { StyleSheet } from "react-native";

import { sizes, colors } from "../../styles/theme.constant";

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderTopWidth: 1,
    borderTopColor: colors.grey2
  },
  tabButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  tabButtonText: {
    fontSize: sizes.caption
  }
});

export default styles;
