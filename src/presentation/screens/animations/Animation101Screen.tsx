import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import { useAnimation } from '../../hooks/useAnimation';
import { ThemeContext } from '../../context/ThemeContext';
import { useContext } from 'react';
import { CustomView } from '../../components/ui/CustomView';

export const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  const { colors } = useContext(ThemeContext);

  return (
    <CustomView style={styles.container}>
      {/* // !1* */}
      <Animated.View
        style={[
          styles.purpleBox,
          { backgroundColor: colors.primary },
          {
            opacity: animatedOpacity,
            transform: [
              {
                translateY: animatedTop,
              },
            ],
          },
        ]}
      />
      <Pressable
        onPress={() => {
          fadeIn({});
          startMovingTopPosition({
            initialPosition: -100,
            easing: Easing.elastic(1),
            duration: 1000,
          });
        }}
        style={{ marginTop: 10 }}>
        <Text style={{ color: colors.text }}>Fade In</Text>
      </Pressable>
      <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
        <Text style={{ color: colors.text }}>Fade Out</Text>
      </Pressable>
    </CustomView>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    width: 150,
    height: 150,
  },
});

//! 1* El componente <Animated.View /> es el mismo <View /> pero cuando hago animaciones, debo importar el Animated de react-native
//! porque cuando trabajo con "opacity", el valor debe ser un número. En este caso, el tipo de "animatedOpacity" no es "number" sino
//! que es de tipo "Animated.Value".
//! https://reactnative.dev/docs/animated
