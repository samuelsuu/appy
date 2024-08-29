import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";



const Second = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Change the Outlook of your Car through Us.
      </Text>

      <Image
        style={{ marginTop: "20%"}}
        source={require("../../assets/second.png")}
      />

      <Text style={{ color: "white", paddingTop: "40%" }}>
        We offer the best services in helping you clean up your car in the best
        possible way.
      </Text>

      <View style={styles.circle}>
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
        <Icon name="circle-thin" color={"gold"} size={20} />
      </View>

      <TouchableOpacity
        style={styles.but}
        onPress={() => navigation.navigate("Reg")}
      >
        <Text style={{ textAlign: "center" }}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Second;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#151B29",
    width: "100%",
    height: "100%",
    paddingHorizontal: "10%",
  },

  circle: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 70,
  },

  icon: {
    backgroundColor: "gold",
    borderRadius: 10,
  },
  but: {
    backgroundColor: "gold",
    marginTop: "15%",
    padding: "3%",
  },
  text: {
    color: "white",
    paddingTop: "20%",
    fontSize: 30,
  },
});
