import React, { useState } from 'react';
import { View, Text, Modal, Platform } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { Button } from '../../components/ui/Button';

export const ModalScreen = () => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <CustomView margin>
      <Title text="Modal" safe />

      <Button text="Abrir modal" onPress={() => setIsVisible(true)} />

      <Modal visible={isVisible} animationType="fade">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(0,0,0,0.1)',
          }}>
          <View style={{ paddingHorizontal: 10 }}>
            <Title text="Modal Content" safe />
          </View>
          <View style={{ flex: 1 }} />
          <Button
            text="Cerrar modal"
            onPress={() => setIsVisible(false)}
            styles={{
              height: Platform.OS === 'android' ? 40 : 60,
            }}
          />
        </View>
      </Modal>
    </CustomView>
  );
};
