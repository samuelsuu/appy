import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboading from "./navigations/Onboading";
import Reg from "./navigations/Reg"
import MainTabs from "./navigations/MainTabs";

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Onboarding Screens */}
        <Stack.Screen
          name="Onboading"
          component={Onboading}
          options={{ headerShown: false }}
        />


        {/* //sign */}
        <Stack.Screen
          name="Reg"
          component={Reg}
          options={{ headerShown: false }}
        />

        {/* Main App Screens */}
        <Stack.Screen
          name="MainTabs"
          component={MainTabs}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
