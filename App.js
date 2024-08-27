import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import First from "./screen/onboading/First";
import Second from "./screen/onboading/Second";
import Setting from "./screen/Setting";
import Home from "./screen/Home";
import { FontAwesome } from "@expo/vector-icons";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// Tab Navigator for the main app screens
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = focused ? "violet" : "blue"; // Customize these colors

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Setting") {
            iconName = "cog";
          }

          return <FontAwesome name={iconName} size={size} color={iconColor} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Setting" component={Setting} />
      {/* Add other screens here if needed */}
    </Tab.Navigator>
  );
}



function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/* Onboarding Screens */}
        <Stack.Screen
          name="First"
          component={First}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Second"
          component={Second}
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
