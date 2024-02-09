import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./post.style";
import ReusableButton from "../Reusable/ReusableButton";
import { COLORS, TEXT } from "../../constants/theme/theme";
import ReusableText from "../Reusable/ReusableText";

const Post = ({ onPress, data }) => {
  return (
    <View>
      <Image source={{ uri: data.photo }} style={styles.image} />
      <View style={styles.stack}>
        <View style={{ alignItems: "center", marginVertical: 5 }}>
          <ReusableButton
            onPress={onPress}
            width={340}
            backgroundColor={COLORS.primaryVariant}
            text={`${data.prix} $ - Acheter`}
            textColor={COLORS.onPrimary}
          />
        </View>
        <View style={styles.title}>
          <ReusableText
            text={data.titre}
            family="bold"
            size={TEXT.m}
            color={COLORS.background}
          />
        </View>
        <View style={styles.description}>
          <ReusableText
            text={data.desc}
            family="regular"
            size={TEXT.s}
            color={COLORS.background}
          />
        </View>
      </View>
    </View>
  );
};

export default Post;
