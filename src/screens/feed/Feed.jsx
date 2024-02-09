import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import reusable from "../../components/Reusable/reusable.style";
import { TEXT } from "../../constants/theme/theme";
import { Post } from "../../components";
import useFetch from "../../hook/useFetch";

const Feed = ({ navigation }) => {
  const { data } = useFetch();

  console.log(data);
  return (
    <SafeAreaView style={reusable.container}>
      <FlatList
        data={data}
        bounces={false}
        decelerationRate={0}
        renderItem={({ item }) => (
          <Post
            data={item}
            onPress={() => {
              navigation.navigate("Modal");
            }}
          />
        )}
      />
    </SafeAreaView>
  );
};

export default Feed;

const styles = StyleSheet.create({});
