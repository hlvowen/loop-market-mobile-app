import { Text, StyleSheet } from "react-native";
import React from "react";

const ReusableText = ({ text, family, size, color }) => {
  return (
    <Text
      numberOfLines={4}
      ellipsizeMode="tail"
      style={styles.textStyle(family, size, color)}
    >
      {text}
    </Text>
  );
};

export default ReusableText;

const styles = StyleSheet.create({
  textStyle: (family, size, color) => ({
    fontFamily: family,
    fontSize: size,
    color: color,
  }),
});
