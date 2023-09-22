import { View, Text } from "react-native";
import React from "react";

const Maps = ({ navigation }) => {
  return (
    <View>
      <Text onPress={() => navigation.navigate("Maps")}>Maps</Text>
    </View>
  );
};

export default Maps;
