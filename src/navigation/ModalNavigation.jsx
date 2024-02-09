import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { OrderDetailsModal } from "../screens";

const Stack = createNativeStackNavigator();

const ModalNavigation = () => {
  return (
    <Stack.Navigator screenOptions={{ presentation: "modal" }}>
      <Stack.Screen
        name="OrderDetails"
        component={OrderDetailsModal}
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

export default ModalNavigation;
