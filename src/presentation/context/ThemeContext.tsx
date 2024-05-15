import { PropsWithChildren, createContext, useEffect, useState } from 'react';
import {
  ThemeColors,
  colors,
  darkColors,
  lightColors,
} from '../../config/theme';
import { AppState, Appearance, useColorScheme } from 'react-native';
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from '@react-navigation/native';

type ThemeColor = 'Light' | 'Dark';

interface ThemeContextPorps {
  currentTheme: ThemeColor;
  colors: ThemeColors;
  isDark: boolean;
  setTheme: (theme: ThemeColor) => void;
}

export const ThemeContext = createContext({} as ThemeContextPorps);

export const ThemeProvider = ({ children }: PropsWithChildren) => {
  //! Para tomar el tema predeterminado del sistema operativo
  const colorScheme = useColorScheme();
  const [currentTheme, setCurrentTheme] = useState<ThemeColor>('Light');

  const isDark = currentTheme === 'Dark';
  const colors = isDark ? darkColors : lightColors;

  useEffect(() => {
    // console.log(colorScheme);
    if (colorScheme === 'dark') {
      setCurrentTheme('Dark');
    } else {
      setCurrentTheme('Light');
    }
  }, [colorScheme]);
  //! Otra forma: -------------------------------------------

  // useEffect(() => {
  //   const subscription = AppState.addEventListener('change', nextAppState => {
  //     // console.log({ nextAppState });
  //     const colorSchema = Appearance.getColorScheme();
  //     setCurrentTheme(colorSchema === 'dark' ? 'Dark' : 'Light');
  //   });

  //   return () => {
  //     subscription.remove();
  //   };
  // }, []); //* Esta forma no me funciona bien...

  const setTheme = (theme: ThemeColor) => {
    setCurrentTheme(theme);
  };

  return (
    <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
      <ThemeContext.Provider
        value={{
          currentTheme: currentTheme,
          colors: colors,
          setTheme: setTheme,
          isDark: isDark,
        }}>
        {children}
      </ThemeContext.Provider>
    </NavigationContainer>
  );
};
