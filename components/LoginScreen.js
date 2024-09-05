// src/components/LoginScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { signInWithEmail, signInWithGoogle, signInWithFacebook } from '../services/AuthService';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = () => {
    signInWithEmail(email, password)
      .then(() => {
        // Successful login
        navigation.navigate('Home');
      })
      .catch((error) => setError(error.message));
  };

  const handleGoogleSignIn = async () => {
    const userCredential = await signInWithGoogle();
    if (userCredential) {
      navigation.navigate('Home');
    } else {
      setError('Google Sign-In was cancelled or failed.');
    }
  };

  const handleFacebookSignIn = async () => {
    const userCredential = await signInWithFacebook();
    if (userCredential) {
      navigation.navigate('Home');
    } else {
      setError('Facebook Sign-In was cancelled or failed.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
      <Button title="Login" onPress={handleLogin} />
      
      <TouchableOpacity onPress={handleGoogleSignIn} style={styles.googleButton}>
        <Text style={styles.googleText}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={handleFacebookSignIn} style={styles.facebookButton}>
        <Text style={styles.facebookText}>Sign in with Facebook</Text>
      </TouchableOpacity>

      <Text onPress={() => navigation.navigate('SignUp')} style={styles.link}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    marginBottom: 10,
    textAlign: 'center',
  },
  googleButton: {
    backgroundColor: '#4285F4',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  googleText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  facebookButton: {
    backgroundColor: '#3b5998',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
  },
  facebookText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  link: {
    color: 'blue',
    marginTop: 10,
    textAlign: 'center',
  },
});

export default LoginScreen;
