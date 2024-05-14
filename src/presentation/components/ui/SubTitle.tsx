import React from 'react';
import { View, Text } from 'react-native';
import { colors, globalStyles } from '../../../config/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

interface Props {
  text: string;
  safe?: boolean;
  backgoundColor: string;
}

export const SubTitle = ({
  text,
  safe,
  backgoundColor = colors.background,
}: Props) => {
  const { top } = useSafeAreaInsets();

  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        marginBottom: 10,
        backgroundColor: backgoundColor,
      }}>
      {text}
    </Text>
  );
};
