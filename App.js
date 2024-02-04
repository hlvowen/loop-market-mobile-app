import { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";

//#region Expo imports
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
//#endregion

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    regular: require("./src/assets/fonts/Montserrat-Regular.ttf"),
    medium: require("./src/assets/fonts/Montserrat-Medium.ttf"),
    bold: require("./src/assets/fonts/Montserrat-Bold.ttf"),
    light: require("./src/assets/fonts/Montserrat-Light.ttf"),
    xtrabold: require("./src/assets/fonts/Montserrat-ExtraBold.ttf"),
  });

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Open up App.js to start working on your app!
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontFamily: "bold",
  },
});
