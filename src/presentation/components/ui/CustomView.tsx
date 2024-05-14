import React, { ReactNode } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme';

interface Props {
  style?: StyleProp<ViewStyle>; //! Para saber el tipo de dato de un estilo, simplemente hago <View style={{ backgroundColor:"black"}}, pongo el cursor sobre "style" y me da el tipo de dato
  children?: ReactNode;
  margin?: boolean;
}

export const CustomView = ({ children, style, margin = false }: Props) => {
  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        style,
      ]}>
      {children}
    </View>
  );
};
