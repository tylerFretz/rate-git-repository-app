import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";

import Text from "./Text";
import theme from "../../theme";

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    minWidth: 64,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.colors.primary,
    borderRadius: 4,
  },
  text: {
    color: "white",
  },
});

const Button = ({ children, style, ...props }) => {
  const buttonStyle = [styles.container, style];

  return (
    <TouchableOpacity {...props}>
      <View style={buttonStyle}>
        <Text style={styles.text} fontWeight='bold'>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button;