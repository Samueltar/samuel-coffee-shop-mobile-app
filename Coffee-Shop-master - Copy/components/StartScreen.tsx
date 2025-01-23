import React, { useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Alert,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import Icon from "react-native-vector-icons/FontAwesome"; // Import FontAwesome for the eye icon
//@ts-ignore
import { RootStackParamList } from "../Common/StackNavigator";

type StartScreenNavigationProp = StackNavigationProp<RootStackParamList, "Start">;

const image = require("../assets/main/cofee_cup.jpg");

export default function StartScreen() {
  const navigation = useNavigation<StartScreenNavigationProp>();
  const [isLogin, setIsLogin] = useState(true); // Switch between Login and Signup
  const [username, setUsername] = useState(""); // Username input
  const [password, setPassword] = useState(""); // Password input
  const [storedUsername, setStoredUsername] = useState("samuel"); // Predefined username
  const [storedPassword, setStoredPassword] = useState("password123"); // Predefined password
  const [showPassword, setShowPassword] = useState(false); // Toggle password visibility

  const handleLogin = () => {
    if (username === storedUsername && password === storedPassword) {
      Alert.alert("Login Success", "Welcome back!");
      navigation.navigate("Home");
    } else {
      Alert.alert("Invalid Credentials", "Please check your username or password.");
    }
  };

  const handleSignup = () => {
    // You can store the new username and password (this is just a simulation)
    setStoredUsername(username);
    setStoredPassword(password);
    Alert.alert("Signup Success", "You can now log in with your new credentials.");
    setIsLogin(true); // Switch to login after signup
  };

  return (
    <View style={styles.container}>
      <ImageBackground source={image} resizeMode="cover" style={styles.image}>
        <View style={styles.overlay}>
          <Text style={styles.title}>SAMUEL COFFEE</Text>
          <Text style={styles.subtitle}>የምርጫዎን እየጠጡ ይዝናኑ!!!</Text>

          {/* Conditional rendering for Login and Signup forms */}
          <View style={styles.formContainer}>
            <TextInput
              style={styles.input}
              placeholder="Username"
              placeholderTextColor="orange"
              value={username}
              onChangeText={setUsername}
            />
            <View style={styles.passwordContainer}>
              <TextInput
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="orange"
                secureTextEntry={!showPassword}
                value={password}
                onChangeText={setPassword}
              />
              <TouchableOpacity
                style={styles.eyeIcon}
                onPress={() => setShowPassword((prev) => !prev)}
              >
                <Icon
                  name={showPassword ? "eye-slash" : "eye"} 
                  size={20}
                  color="orange"
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={styles.button}
              onPress={isLogin ? handleLogin : handleSignup}
            >
              <Text style={styles.buttonText}>{isLogin ? "ግባ" : "ተመዝገብ"}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => setIsLogin((prev) => !prev)}
            >
              <Text style={styles.switchText}>
                {isLogin ? "ተመዝገብ" : "መለያ ካለዎት ይግቡ"}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "rgba(223, 209, 209, 0.06)", // Semi-transparent overlay
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    padding: 10,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  formContainer: {
    marginTop: 50, // Adjusted to lower down the form
    width: "80%",
  },
  input: {
    height: 40,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: "black",
    fontSize: 16,
    borderColor: "orange",
    borderWidth: 1,
  },
  passwordContainer: {
    position: "relative",
  },
  eyeIcon: {
    position: "absolute",
    right: 10,
    top: 10,
  },
  button: {
    backgroundColor: "#FF5733", // Orange color for the button
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 25,
    marginTop: 20,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    textAlign: "center",
  },
  switchText: {
    color: "white",
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
  },
});
