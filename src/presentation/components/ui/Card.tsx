import React, { PropsWithChildren, ReactNode } from 'react';
import { View, Text, StyleProp, ViewStyle } from 'react-native';
import { colors } from '../../../config/theme';

// interface Props {
//   style?: StyleProp<ViewStyle>;
//   children: ReactNode;
// }

//! Otra forma de hacer Props con children
interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = ({ style, children }: Props) => {
  return (
    <View
      style={[
        {
          backgroundColor: colors.cardBackground,
          borderRadius: 10,
          padding: 10,
        },
        style,
      ]}>
      {children}
    </View>
  );
};
