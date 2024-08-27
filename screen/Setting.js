import { StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

const Setting = () => {
  const [color, setColor] = useState("");
  const [car, setCar] = useState({
    brand: "Ford",
    model: "Mustang",
    year: "1964",
    color: "red"
  });
  return (
    <View style={{paddingHorizontal: "5%"}}>
      <Text>Setting</Text>


      <Text>{color}</Text>
      <Text>{car.brand}</Text>

      <TouchableOpacity onPress={() => setColor("blue")}>
        <Text>blue</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => setColor("red")}>
        <Text>red</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Setting;

const styles = StyleSheet.create({});
