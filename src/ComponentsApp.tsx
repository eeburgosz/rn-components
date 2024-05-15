import 'react-native-gesture-handler';
import { StackNavigator } from './presentation/navigator/StackNavigator';
import { ThemeProvider } from './presentation/context/ThemeContext';

// const AppNavigation = ({ children }: PropsWithChildren) => {
//   const { isDark } = useContext(ThemeContext);

//   return (
//     <NavigationContainer theme={isDark ? DarkTheme : DefaultTheme}>
//       {children}
//     </NavigationContainer>
//   );
// };

// const AppTheme = ({ children }: PropsWithChildren) => {
//   return (
//     <ThemeProvider>
//       <AppNavigation>{children}</AppNavigation>
//     </ThemeProvider>
//   );
// };

export const App = () => {
  return (
    <ThemeProvider>
      <StackNavigator />
    </ThemeProvider>
  );
};
