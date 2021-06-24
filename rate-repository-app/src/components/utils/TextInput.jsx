import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

import theme from '../../theme';

const styles = StyleSheet.create({
  textInput: {
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderWidth: 1,
    borderStyle: "solid",
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    color: theme.colors.textPrimary,
    borderRadius: 4,
    borderColor: "#aab2bb",
  },
});

const TextInput = ({ style, error, ...props }) => {
  const textInputStyle = [styles.textInput, style];

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;