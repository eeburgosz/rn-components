import React, { useContext } from 'react';
import { View, Text } from 'react-native';
import { globalStyles } from '../../../config/theme';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  text: string;
  safe?: boolean;
  backgroundColor: string;
}

export const SubTitle = ({ text, safe, backgroundColor }: Props) => {
  const { top } = useSafeAreaInsets();
  const { colors } = useContext(ThemeContext);

  return (
    <Text
      style={{
        ...globalStyles.subTitle,
        marginTop: safe ? top : 0,
        color: colors.text,
        marginBottom: 10,
        backgroundColor: backgroundColor ? backgroundColor : colors.background,
      }}>
      {text}
    </Text>
  );
};
