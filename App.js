import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import First from "./screen/onboading/First";
import Second from "./screen/onboading/Second";
import Setting from "./screen/Setting";
import Home from "./screen/Home";
import { FontAwesome } from "@expo/vector-icons";
import { Text } from "react-native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();


//MainTabs
function MainTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let iconColor = focused ? "#6a0dad" : "#1e90ff"; // Customize these colors

          if (route.name === "Home") {
            iconName = "home";
          } else if (route.name === "Setting") {
            iconName = "cog";
          }

          return (
            <FontAwesome name={iconName} size={size} color={iconColor} />
          );
        },
        tabBarLabel: ({ focused }) => {
          if (focused) {
            let labelColor = focused ? "#6a0dad" : "#1e90ff";
            return (
              <Text style={{ color: labelColor, fontSize: 12, marginBottom: 5 }}>
                {route.name}
              </Text>
            );
          } else {
            return null; // Hide label when not focused
          }
        },
        tabBarStyle: {
          backgroundColor: "#f8f8f8", // Light background color
          paddingBottom: 5,
          height: 60,
          borderTopLeftRadius: 20,
          borderTopRightRadius: 20,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.2,
          shadowRadius: 2,
          elevation: 5,
        },
        tabBarItemStyle: {
          justifyContent: "center",
          alignItems: "center",
        },
      })}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Setting" component={Setting} />
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
