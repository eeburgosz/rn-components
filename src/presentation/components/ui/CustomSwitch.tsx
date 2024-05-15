import React, { useContext } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import { Switch } from 'react-native-gesture-handler';
import { ThemeContext } from '../../context/ThemeContext';

interface Props {
  isOn: boolean;
  text?: string;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({ isOn, onChange, text }: Props) => {
  const { colors } = useContext(ThemeContext);

  return (
    <View
      style={[styles.switchRow, { backgroundColor: colors.cardBackground }]}>
      {text && <Text style={{ color: colors.text }}>{text}</Text>}

      <Switch
        thumbColor={Platform.OS === 'android' ? colors.primary : ''}
        //  thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
        onValueChange={onChange}
        value={isOn}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  switchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 5,
  },
});
