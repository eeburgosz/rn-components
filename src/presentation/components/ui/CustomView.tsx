import React, { ReactNode, useContext } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { globalStyles } from '../../../config/theme';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  style?: StyleProp<ViewStyle>; //! Para saber el tipo de dato de un estilo, simplemente hago <View style={{ backgroundColor:"black"}}, pongo el cursor sobre "style" y me da el tipo de dato
  children?: ReactNode;
  margin?: boolean;
}

export const CustomView = ({ children, style, margin = false }: Props) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[
        globalStyles.mainContainer,
        margin ? globalStyles.globalMargin : null,
        { backgroundColor: colors.background },
        style,
      ]}>
      {children}
    </View>
  );
};
