import { useCallback } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//#region Expo imports
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { Ionicons } from "@expo/vector-icons";
//#endregion

import { Feed, OrderDetailsModal } from "./src/screens";
import { BottomTabNavigation, ModalNavigation } from "./src/navigation";

const Stack = createNativeStackNavigator();

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
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Bottom"
          component={BottomTabNavigation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Modal"
          component={OrderDetailsModal}
          options={({ navigation }) => ({
            presentation: "modal",
            animation: "slide_from_bottom",
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="close-outline" size={28} />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
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
