import React from 'react';
import { View, Text, Alert } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme';
import { Button } from '../../components/ui/Button';

import prompt from 'react-native-prompt-android';
import { showPrompt } from '../../../config/adapters/prompt.adapter';

export const AlertScreen = () => {
  const createTwoButtonAlert = () =>
    Alert.alert('Alert Title', 'My Alert Msg', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      { text: 'OK', onPress: () => console.log('OK Pressed') },
    ]);

  const createThreeButtonAlert = () =>
    Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => console.log('OK Pressed') },
      ],
      // {
      //   //! Para que se cierre tocando fuera del alert. No sirve en iOS. El onDismiss es para crear una acción si es necesario
      //   cancelable: true,
      //   onDismiss() {
      //     console.log('onDismiss');
      //   },
      // },
    );

  const onShowPrompt = () => {
    //! Los prompts nativos por alguna razón no funcionan para Android. Por ahora se utiliza un paquete de terceros.
    //  Alert.prompt(
    //    'Cuál es tu mail?',
    //    'Commodo voluptate nisi sit ea aute laborum eu.',
    //    (valor: string) => console.log(valor),
    //    'secure-text',
    //    'Soy el valor por defecto',
    //    'number-pad',
    //  );
    //! Paquete de 3ros para que funciona en Android.
    //  prompt(
    //    'Enter password',
    //    'Enter your password to claim your $1.5B in lottery winnings',
    //    [
    //      {
    //        text: 'Cancel',
    //        onPress: () => console.log('Cancel Pressed'),
    //        style: 'cancel',
    //      },
    //      {
    //        text: 'OK',
    //        onPress: password => console.log('OK Pressed, password: ' + password),
    //      },
    //    ],
    //    {
    //      type: 'secure-text',
    //      cancelable: false,
    //      defaultValue: 'test',
    //      placeholder: 'placeholder',
    //    },
    //  );

    showPrompt({
      title: 'Enim exercitation irure.',
      subTitle: 'Duis occaecat ea enim veniam.',
      buttons: [{ text: 'Ok', onPress: () => console.log('Ok') }],
      placeholder: 'Placeholder',
    });
  };

  return (
    <CustomView style={globalStyles.globalMargin}>
      <Title text="Alertas" safe />
      <Button text="Alerta - 2 botones" onPress={createTwoButtonAlert} />
      <View style={{ height: 10 }} />
      <Button text="Alerta - 3 botones" onPress={createThreeButtonAlert} />
      <View style={{ height: 10 }} />
      <Button text="Prompt - Input" onPress={onShowPrompt} />
    </CustomView>
  );
};
