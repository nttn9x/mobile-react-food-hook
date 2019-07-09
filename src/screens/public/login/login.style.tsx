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
  logo: {},
  input: {
    marginBottom: PADDING_BETWEEN_COMPONENT,
    paddingHorizontal: 0
  },
  inputTextContainerStyle: {
    borderBottomColor: colors.grey0
  },
  inputLabelStyle: {
    color: colors.grey2
  },
  inputTextStyleStyle: {
    color: colors.grey0
  },
  buttonContainer: {
    width: "100%"
  },
  buttonInside: {
    borderRadius: 50,
    backgroundColor: "#ffffff"
  },
  buttonTitle: {
    color: colors.primary
  }
});

interface LoginScreenProps {
  navigation: any;
}
