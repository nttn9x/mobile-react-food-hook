import React, { useState, useEffect } from "react";
import { StyleSheet, Text, FlatList } from "react-native";
import { Card } from "react-native-elements";

import CardImage from "../../../styles/images/card.jpg";

import { ViewAnimatedFade } from "../../../animations/view_fade/fade.animations";
import { HomeHeaderComponent } from "./home-header.component";
import { HomeListLoadingComponent } from "./home-list-empty.component";

import { ScrollViewComponent } from "../../../components/scrollview/scroll_view.component";

import { sizes } from "../../../styles/theme.constant";

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  flatlist: {
    flex: 1
  }
});

interface HomeScreenProps {
  navigation: any;
  navigationOptions: any;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const [datas, setDatas] = useState<any>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [isRefreshing, setRefreshing] = useState<boolean>(false);

  useEffect(() => {
    handleLoadMore();
  }, []);

  function handleLoadMore() {
    setLoading(true);

    setTimeout(() => {
      const a = [...datas];
      a.push({ name: a.length + "asd sad sad " });
      a.push({ name: a.length + "asd sad sad " });

      setDatas(a);
      setLoading(false);
    }, 1000);
  }

  function handleRefresh() {
    setRefreshing(true);
  }

  function _keyExtractor(item, index) {
    return index.toString();
  }

  function _renderHeader() {
    return <HomeHeaderComponent />;
  }

  function _renderFooter() {
    return loading ? <HomeListLoadingComponent /> : null;
  }

  return (
    <ViewAnimatedFade style={styles.container}>
      <ScrollViewComponent
        isRefreshing={isRefreshing}
        contentView={
          <FlatList
            style={styles.flatlist}
            data={datas}
            keyExtractor={_keyExtractor}
            renderItem={({ item }: any) => (
              <Card
                image={CardImage}
                containerStyle={{ marginBottom: sizes.paddingLayout }}
              >
                <Text>
                  The idea with React Native Elements is more about component
                  structure than actual design.
                </Text>
              </Card>
            )}
            refreshing={isRefreshing}
            onRefresh={handleRefresh}
            onEndReached={handleLoadMore}
            onEndReachedThreshold={0.2}
            ListHeaderComponent={_renderHeader}
            ListFooterComponent={_renderFooter}
          />
        }
      />
    </ViewAnimatedFade>
  );
};

export default HomeScreen;
