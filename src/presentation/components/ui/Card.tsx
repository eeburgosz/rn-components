// import React, { PropsWithChildren, ReactNode, useContext } from 'react';
// import { View, Text, StyleProp, ViewStyle } from 'react-native';
// import { ThemeContext } from '../../context/ThemeContext';
// import { CustomView } from './CustomView';

// // interface Props {
// //   style?: StyleProp<ViewStyle>;
// //   children: ReactNode;
// // }

// //! Otra forma de hacer Props con children
// interface Props extends PropsWithChildren {
//   style?: StyleProp<ViewStyle>;
// }

// export const Card = ({ style, children }: Props) => {
//   const { colors } = useContext(ThemeContext);

//   return (
//     <CustomView
//       style={[
//         {
//           backgroundColor: colors.cardBackground,
//           borderRadius: 10,
//           padding: 10,
//         },
//         style,
//       ]}>
//       {children}
//     </CustomView>
//   );
// };

import { PropsWithChildren, useContext } from 'react';

import { StyleProp, ViewStyle } from 'react-native';
import { View } from 'react-native';
import { ThemeContext } from '../../context/ThemeContext';

interface Props extends PropsWithChildren {
  style?: StyleProp<ViewStyle>;
}

export const Card = ({ style, children }: Props) => {
  const { colors } = useContext(ThemeContext);

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
