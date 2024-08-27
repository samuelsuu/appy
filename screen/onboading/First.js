import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";

// Ensure you are using the correct icon import from react-native-vector-icons
import Icon from "react-native-vector-icons/FontAwesome";


const First = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <View style={{ marginTop: "60%" }}>
        <Image source={require("../../assets/Group.png")} />
        <Text style={{ color: "white" }}>The App that cleans your Car.</Text>
      </View>


      <Text style={styles.text}>
        Welcome to Members Only Car wash where your vehicle receives the best
        attention it deserves & where every service is an experience.
      </Text>

      <View style={styles.circle}>
        <Icon name="circle" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
      </View>

      <TouchableOpacity style={styles.but} onPress={() => navigation.navigate('Second')}>
        <Text style={{ textAlign: "center" }}>Get Started</Text>
      </TouchableOpacity>

    </View>
  );
};

export default First;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151B29",
    width: "100%",
    height: "100%",
    paddingHorizontal: "10%",
  },

  text: {
    color: "white",
    marginTop: "70%",
  },
  but: {
    backgroundColor: "gold",
    marginTop: "15%",
    padding: "3%",
  },
  circle : {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 70,
  },
});
