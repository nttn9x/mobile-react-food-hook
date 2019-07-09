import { StyleSheet } from "react-native";

import {
  PADDING_INSIDE_SCREEN,
  PADDING_BETWEEN_COMPONENT
} from "../../../styles/common.constant";
import layoutStyle from "../../../styles/layout.style";
import { colors } from "../../../styles/theme.constant";

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1
  },
  background: {
    flex: 1,
    padding: PADDING_INSIDE_SCREEN,
    ...layoutStyle.layoutFlexColumnCenter
  },
  form: { width: "100%", ...layoutStyle.layoutFlexColumnCenter },
  logo: {
    marginBottom: 30
  },
  input: {
    marginBottom: PADDING_BETWEEN_COMPONENT
  },
  inputLabelStyle: {
    color: colors.grey2
  },
  inputTextStyleStyle: {
    color: colors.grey0
  },
  buttonContainer: {
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10
  },
  buttonInside: {
    backgroundColor: "#ffffff"
  },
  buttonTitle: {
    color: colors.primary
  }
});

interface LoginScreenProps {
  navigation: any;
}
