import { StyleSheet, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SIZES } from "../../constants/theme/theme";

const ReusableButton = ({
  onPress,
  text,
  textColor,
  width,
  backgroundColor,
  borderWidth,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      style={styles.button(width, backgroundColor, borderWidth, borderColor)}
      onPress={onPress}
    >
      <Text style={styles.buttonText(textColor)}>{text}</Text>
    </TouchableOpacity>
  );
};

export default ReusableButton;

const styles = StyleSheet.create({
  buttonText: (textColor) => ({
    fontFamily: "medium",
    fontSize: SIZES.m,
    color: textColor,
  }),
  button: (width, backgroundColor, borderWidth, borderColor) => ({
    width: width,
    height: 45,
    borderRadius: SIZES.s,
    backgroundColor: backgroundColor,
    borderWidth: borderWidth,
    borderColor: borderColor,
    alignItems: "center",
    justifyContent: "center",
  }),
});
