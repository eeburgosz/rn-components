import React, { useContext, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { globalStyles } from '../../../config/theme';
import { Card } from '../../components/ui/Card';
import { ScrollView } from 'react-native-gesture-handler';
import { ThemeContext } from '../../context/ThemeContext';

export const TextInputScreen = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
  });

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
      <ScrollView>
        <CustomView margin>
          <Title text="Text Inputs" safe />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Nombre completo"
              autoCapitalize={'words'}
              autoCorrect={false}
              onChangeText={value => setForm({ ...form, name: value })}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Correo electrónico"
              autoCapitalize={'none'}
              autoCorrect={false}
              keyboardType="email-address"
              onChangeText={value => setForm({ ...form, email: value })}
            />

            <TextInput
              style={globalStyles.input}
              placeholder="Teléfono"
              keyboardType="phone-pad"
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>

          <View style={{ height: 10 }} />

          <Card>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
            <Text>{JSON.stringify(form, null, 2)}</Text>
          </Card>

          <View style={{ height: 20 }} />

          <Card>
            <TextInput
              style={globalStyles.input}
              placeholder="Teléfono"
              keyboardType="phone-pad"
              onChangeText={value => setForm({ ...form, phone: value })}
            />
          </Card>
        </CustomView>

        <View style={{ height: 20 }} />
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

// //! 1* EL KeyboardAvoidingView es para evitar la superposición del teclado sobre el último input. Esto es necesario solo para iOS porque el comportamiento por defecto no superpone el teclado en Android. Al aplicarlo, modifica el comportamiento en Android, por lo que se cambia la propiedad "behavior" de:
// //!   Platform.OS === 'ios' ? 'padding' : 'height';
// //!   Platform.OS === 'ios' ? 'padding' : undefined
// //! De esta forma, mantiene el comportamiento por defecto para Android.

// import {
//   KeyboardAvoidingView,
//   Platform,
//   ScrollView,
//   Text,
//   TextInput,
//   View,
// } from 'react-native';
// import { CustomView } from '../../components/ui/CustomView';
// import { Title } from '../../components/ui/Title';
// import { globalStyles } from '../../../config/theme';
// import { Card } from '../../components/ui/Card';
// import { useState } from 'react';

// export const TextInputScreen = () => {
//   const [form, setForm] = useState({
//     name: '',
//     email: '',
//     phone: '',
//   });

//   return (
//     <KeyboardAvoidingView
//       behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
//       <ScrollView>
//         <CustomView margin>
//           <Title text="Text Inputs" safe />

//           <Card>
//             <TextInput
//               style={globalStyles.input}
//               placeholder="Nombre completo"
//               autoCapitalize={'words'}
//               autoCorrect={false}
//               onChangeText={value => setForm({ ...form, name: value })}
//             />

//             <TextInput
//               style={globalStyles.input}
//               placeholder="Correo electrónico"
//               autoCapitalize={'none'}
//               autoCorrect={false}
//               keyboardType="email-address"
//               onChangeText={value => setForm({ ...form, email: value })}
//             />

//             <TextInput
//               style={globalStyles.input}
//               placeholder="Teléfono"
//               keyboardType="phone-pad"
//               onChangeText={value => setForm({ ...form, phone: value })}
//             />
//           </Card>

//           <View style={{ height: 10 }} />

//           <Card>
//             <Text>{JSON.stringify(form, null, 2)}</Text>
//             <Text>{JSON.stringify(form, null, 2)}</Text>
//             <Text>{JSON.stringify(form, null, 2)}</Text>
//             <Text>{JSON.stringify(form, null, 2)}</Text>
//             <Text>{JSON.stringify(form, null, 2)}</Text>
//             <Text>{JSON.stringify(form, null, 2)}</Text>
//             <Text>{JSON.stringify(form, null, 2)}</Text>
//             <Text>{JSON.stringify(form, null, 2)}</Text>
//             <Text>{JSON.stringify(form, null, 2)}</Text>
//             <Text>{JSON.stringify(form, null, 2)}</Text>
//             <Text>{JSON.stringify(form, null, 2)}</Text>
//           </Card>

//           <View style={{ height: 20 }} />

//           <Card>
//             <TextInput
//               style={globalStyles.input}
//               placeholder="Teléfono"
//               keyboardType="phone-pad"
//               onChangeText={value => setForm({ ...form, phone: value })}
//             />
//           </Card>
//         </CustomView>

//         <View style={{ height: 20 }} />
//       </ScrollView>
//     </KeyboardAvoidingView>
//   );
// };
