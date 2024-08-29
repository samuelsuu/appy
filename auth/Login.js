import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

function SignIn() {
  const [usernameOrEmail, setUsernameOrEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleSignIn = async () => {
    try {
      // Get users from AsyncStorage
      const usersData = await AsyncStorage.getItem("users");
      const users = usersData ? JSON.parse(usersData) : [];

      // Check if the user exists and the password matches
      const user = users.find(
        (user) =>
          (user.username === usernameOrEmail ||
            user.email === usernameOrEmail) &&
          user.password === password
      );

      if (user) {
        Alert.alert("Sign in successful!");
        navigation.replace("MainTabs"); // Navigate to MainTabs after successful login
      } else {
        Alert.alert("Invalid credentials");
      }
    } catch (error) {
      console.error("Error during sign in:", error);
      Alert.alert("An error occurred during sign in");
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Sign In</Text>
      <TextInput
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
        }}
        placeholder="Username or Email"
        autoCapitalize="false"
        autoCorrect="false"
        value={usernameOrEmail}
        onChangeText={setUsernameOrEmail}
      />
      <TextInput
        style={{
          width: 200,
          borderColor: "gray",
          borderWidth: 1,
          marginBottom: 10,
          padding: 8,
        }}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign In" onPress={handleSignIn} />

      <Text>
        Don't have an account?{" "}
        <TouchableOpacity onPress={() => navigation.navigate("Registration")}>
          <Text>signUp</Text>
        </TouchableOpacity>
      </Text>
    </View>
  );
}

export default SignIn;
