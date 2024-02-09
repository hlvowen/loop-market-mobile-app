import { StyleSheet } from "react-native";
import { COLORS, SIZES } from "../../constants/theme/theme";

const styles = StyleSheet.create({
  image: {
    resizeMode: "cover",
    width: SIZES.width,
    height: SIZES.height,
  },
  stack: {
    position: "absolute",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    borderRadius: SIZES.s,
    bottom: 0,
    marginBottom: 100,
    width: 350,
    height: 200,
    alignSelf: "center",
    flex: 1,
  },
  title: {
    marginStart: 10,
    marginTop: 5,
    marginBottom: 10,
  },
  description: {
    marginStart: 10,
  },
});

export default styles;
