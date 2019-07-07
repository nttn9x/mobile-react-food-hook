import { StyleSheet } from "react-native";

import {
  PRIMARY_COLOR,
  PADDING_INSIDE_SCREEN,
  PADDING_BETWEEN_COMPONENT
} from "../../../styles/common.constant";
import layoutStyle from "../../../styles/layout.style";

export default StyleSheet.create({
  container: {
    padding: PADDING_INSIDE_SCREEN,
    backgroundColor: "#fff",
    flex: 1,
    ...layoutStyle.layoutFlexColumnCenter
  },
  form: { width: "100%", ...layoutStyle.layoutFlexColumnCenter },
  text: {
    fontWeight: "bold",
    fontSize: 40,
    marginBottom: 100
  },
  input: {
    marginBottom: PADDING_BETWEEN_COMPONENT
  },
  button: {
    overflow: "hidden",
    borderRadius: 50,
    width: "100%"
  }
});

interface LoginScreenProps {
  navigation: any;
}
