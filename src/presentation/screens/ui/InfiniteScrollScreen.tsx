import React, { useState } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
import { CustomView } from '../../components/ui/CustomView';
import { Title } from '../../components/ui/Title';
import { FlatList } from 'react-native-gesture-handler';
import { colors } from '../../../config/theme';
import { FadeInImage } from '../../components/ui/FadeInImage';

export const InfiniteScrollScreen = () => {
  const [numbers, setNumbers] = useState([0, 1, 2, 3, 4, 5]);

  const loadMore = () => {
    //Todo: Añadir números al arreglo
    //  console.log('Loading more...');
    const newArray = Array.from({ length: 5 }, (_, i) => numbers.length + i);

    setTimeout(() => {
      setNumbers([...numbers, ...newArray]);
    }, 3000);

    //  setNumbers([...numbers, ...newArray]);
  };

  return (
    <View style={{ backgroundColor: 'black' }}>
      <FlatList
        data={numbers}
        onEndReached={loadMore}
        onEndReachedThreshold={0.7}
        keyExtractor={item => item.toString()}
        renderItem={({ item }) => <ListItem number={item} />}
        ListFooterComponent={() => (
          <View style={{ height: 150, justifyContent: 'center' }}>
            <ActivityIndicator color={colors.primary} size={40} />
          </View>
        )}
      />
    </View>
  );
};

interface ListItemsProps {
  number: number;
}
const ListItem = ({ number }: ListItemsProps) => {
  return (
    <FadeInImage
      uri={`https://picsum.photos/id/${number}/200/300`}
      style={{ height: 400, width: '100%' }}
    />
    //  <Image
    //    source={{ uri: `https://picsum.photos/id/${number}/200/300` }}
    //    style={{ height: 400, width: '100%' }}
    //  />
  );
};
