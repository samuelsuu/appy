import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import {useState} from 'react'

const Home = () => {

    const [band, setBand] = useState("");

    const [car, setCar] = useState({
        brand: "Ford",
        model: "Mustang",
        year: "1964",
        color: "red"
    });

  return (
    <View>
      <Text>Home {band} {car.year} </Text>

      <TouchableOpacity onPress={() => setBand("man")}>
        <Text>band</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => setCar("toy")}>
        <Text>car</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({})