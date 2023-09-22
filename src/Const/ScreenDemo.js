import { View } from "react-native";
import React, { useEffect } from "react";
import * as Animatable from "react-native-animatable";

const ScreenDemo = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Login");
    }, 2000);
  }, []);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "peru",
      }}
    >
      <Animatable.Text
        style={{ fontSize: 20 }}
        animation={"fadeInDownBig"}
        duration={2000}
      >
        Capstone System Software
      </Animatable.Text>
    </View>
  );
};

export default ScreenDemo;
