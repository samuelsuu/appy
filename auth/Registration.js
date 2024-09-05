import React, { useState } from 'react';
import { View, Text, TextInput, Button, Alert, TouchableOpacity } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';

function Registration() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('')

  const navigation = useNavigation();

  const handleRegistration = async () => {
    try {
      // Get existing users from AsyncStorage
      const usersData = await AsyncStorage.getItem('users');
      const users = usersData ? JSON.parse(usersData) : [];

      // Check if the username or email already exists
      const userExists = users.some(user => user.username === username || user.email === email);

      if (userExists) {
        Alert.alert('Username or email already exists');
      } else {
        // Add new user
        const newUser = { username, email, password };
        users.push(newUser);
        await AsyncStorage.setItem('users', JSON.stringify(users));

        Alert.alert('Registration successful!');
        navigation.replace('Login'); // Navigate to SignIn screen after successful registration
      }
    } catch (error) {
      console.error('Error during registration:', error);
      Alert.alert('An error occurred during registration');
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Register</Text>
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={{ width: 200, borderColor: 'gray', borderWidth: 1, marginBottom: 10, padding: 8 }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      
      <Button title="Register" onPress={handleRegistration} />


      <Text>Dont have an account? <TouchableOpacity onPress={() => navigation.navigate('Login')}><Text>sign-IN</Text></TouchableOpacity></Text>
    </View>
  );
}

export default Registration;
