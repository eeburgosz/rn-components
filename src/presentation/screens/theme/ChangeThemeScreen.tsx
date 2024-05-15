import React, { useContext } from 'react';
import { Text, View } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';
import { ThemeContext } from '../../context/ThemeContext';

export const ChangeThemeScreen = () => {
  const { setTheme, currentTheme, colors } = useContext(ThemeContext);

  return (
    <CustomView margin>
      <Title text={`Cambiar tema: ${currentTheme}`} safe />
      <View style={{ height: 10 }} />
      <Button text="Tema Light" onPress={() => setTheme('Light')} />
      <View style={{ height: 10 }} />
      <Button text="Tema Dark" onPress={() => setTheme('Dark')} />
      <View style={{ height: 10 }} />
      <Text style={{ color: colors.text }}>
        {JSON.stringify(colors, null, 2)}
      </Text>
    </CustomView>
  );
};
