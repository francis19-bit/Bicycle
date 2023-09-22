import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const ButtonComponent = ({ title, imoji, onPress = () => {} }) => {
  return (
    <View style={{ marginHorizontal: -20 }}>
      <TouchableOpacity
        onPress={onPress}
        style={{
          height: 55,
          backgroundColor: "#009B90",
          justifyContent: "center",
          alignItems: "center",
          marginLeft: 100,
          width: 200,
          alignSelf: "center",
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: "#C0D1E0",
            fontWeight: "600",
            fontSize: 18,
            marginHorizontal: 20,
            padding: 5,
          }}
        >
          <Icon size={20} name={imoji} />
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ButtonComponent;
