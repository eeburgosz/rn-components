import React, { useContext, useState } from 'react';
import { Title } from '../../components/ui/Title';
import { CustomView } from '../../components/ui/CustomView';
import { ScrollView } from 'react-native-gesture-handler';
import { RefreshControl } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../../context/ThemeContext';

export const PullToRefreshScreen = () => {
  const [isRefreshing, setIsRefreshing] = useState(false);
  const { top } = useSafeAreaInsets();
  const onRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      setIsRefreshing(false);
    }, 5000);
  };

  const { colors } = useContext(ThemeContext);

  return (
    <>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            progressViewOffset={top}
            progressBackgroundColor={colors.cardBackground}
            onRefresh={onRefresh}
            colors={[colors.primary, 'red', 'orange', 'green']}
          />
        }>
        <CustomView margin>
          <Title text="Pull to refresh" safe />
        </CustomView>
      </ScrollView>

      {/* //! 1*   Para iOS porque tiene un comportamiento que tapa el indicador de refresh */}
      {/* <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={isRefreshing}
            progressViewOffset={top}
            onRefresh={onRefresh}
            colors={[colors.primary, 'red', 'orange', 'green']}
            style={[globalStyles.mainContainer, globalStyles.globalMargin]}
          />
        }>
        <Title text="Pull to refresh" safe />
      </ScrollView> */}
    </>
  );
};

//! 1* Se eliminó el <CustomView> porque tapaba el indicador de refresh. Los estilos se aplicaron directamente al <ScrollView>
