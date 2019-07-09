import React, { useState } from "react";
import { StyleSheet, Text, FlatList } from "react-native";

import { ViewAnimatedFade } from "../../../animations/view_fade/fade.animations";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

interface HomeScreenProps {
  navigation: any;
  navigationOptions: any;
}

const HomeScreen: React.FC<HomeScreenProps> = props => {
  const [datas, setDatas] = useState<any>([
    { name: "a" },
    { name: "aab" },
    { name: "b" },
    { name: "b" },
    { name: "b" },
    { name: "a" },
    { name: "aab" },
    { name: "b" },
    { name: "b" },
    { name: "b" },
    { name: "a" },
    { name: "aab" },
    { name: "b" },
    { name: "b" },
    { name: "b" },
    { name: "a" },
    { name: "aab" },
    { name: "b" },
    { name: "b" },
    { name: "b" },
    { name: "a" },
    { name: "aab" },
    { name: "b" }
  ]);
  const [loading, setLoading] = useState<boolean>(false);

  function handleLoadMore() {
    setLoading(true);

    console.log("asdsasda");
    setTimeout(() => {
      const a = [...datas];
      a.push({ name: a.length + "asd sad sad " });
      a.push({ name: a.length + "asd sad sad " });
      a.push({ name: a.length + "asd sad sad " });
      a.push({ name: a.length + "asd sad sad " });
      a.push({ name: a.length + "asd sad sad " });

      setDatas(a);
      setLoading(false);
    }, 1000);
  }

  function _keyExtractor(item, index) {
    return index.toString();
  }

  function _renderFooter() {
    return loading ? (
      <Text
        style={{
          height: 150,
          marginBottom: 5,
          backgroundColor: "red",
          width: 100
        }}
      >
        Loading
      </Text>
    ) : null;
  }

  return (
    <ViewAnimatedFade style={styles.container}>
      <FlatList
        data={datas}
        keyExtractor={_keyExtractor}
        renderItem={({ item }: any) => (
          <Text
            style={{
              height: 150,
              marginBottom: 5,
              backgroundColor: "red",
              width: 100
            }}
          >
            {item.name}
          </Text>
        )}
        onEndReached={handleLoadMore}
        onEndReachedThreshold={0.2}
        ListHeaderComponent={() => <Text style={{ height: 400 }}>ahihihi</Text>}
        ListFooterComponent={_renderFooter}
      />
    </ViewAnimatedFade>
  );
};

export default HomeScreen;
