import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Animated,
  Easing,
} from 'react-native';
import { colors } from '../../../config/theme';
import { useAnimation } from '../../hooks/useAnimation';

export const Animation101Screen = () => {
  const {
    animatedOpacity,
    animatedTop,
    fadeIn,
    fadeOut,
    startMovingTopPosition,
  } = useAnimation();

  return (
    <View style={styles.container}>
      {/* // !1* */}
      <Animated.View
        style={[
          styles.purpleBox,
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
        <Text>Fade In</Text>
      </Pressable>
      <Pressable onPress={() => fadeOut({})} style={{ marginTop: 10 }}>
        <Text>Fade Out</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    flex: 1,
    alignItems: 'center',
  },
  purpleBox: {
    backgroundColor: colors.primary,
    width: 150,
    height: 150,
  },
});

//! 1* El componente <Animated.View /> es el mismo <View /> pero cuando hago animaciones, debo importar el Animated de react-native
//! porque cuando trabajo con "opacity", el valor debe ser un número. En este caso, el tipo de "animatedOpacity" no es "number" sino
//! que es de tipo "Animated.Value".
//! https://reactnative.dev/docs/animated
