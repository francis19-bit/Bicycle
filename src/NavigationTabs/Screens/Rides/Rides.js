import { View, Text } from "react-native";
import React from "react";

const Rides = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Rides")}>Rides</Text>
    </View>
  );
};

export default Rides;
