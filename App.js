import React, { useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Onboading from "./navigations/Onboading";
import Reg from "./navigations/Reg"
import MainTabs from "./navigations/MainTabs";

const Stack = createNativeStackNavigator();

SplashScreen.preventAutoHideAsync(); // Prevent the splash screen from auto-hiding



function App() {

  useEffect(() => {
    // Simulate a loading process or some other action
    setTimeout(async () => {
      await SplashScreen.hideAsync(); // Hide the splash screen
    }, 3000); // Show the splash screen for 2 seconds
  }, []);

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
