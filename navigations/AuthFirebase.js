// App.js
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from '../components/LoginScreen';
import SignUpScreen from '../components/SignUpScreen';
import TodoScreen from '../components/TodoScreen'; // Add the Todo screen

const Stack = createStackNavigator();

const AuthFirebase = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Authentication state

  // Function to handle login success
  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        {!isAuthenticated ? (
          <>
            <Stack.Screen name="Login">
              {props => <LoginScreen {...props} onLoginSuccess={handleLoginSuccess} />}
            </Stack.Screen>
            <Stack.Screen name="SignUp" component={SignUpScreen} />
          </>
        ) : (
          <Stack.Screen name="Todo" component={TodoScreen} /> // Redirect to the Todo screen after login
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthFirebase;
