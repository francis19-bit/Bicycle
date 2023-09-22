import { View, Text, StatusBar } from "react-native";
import React from "react";
import DrawerList from "../Const/Drawer/Drawer";
// import { Card } from "react-native-paper";

const MainSreen = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "peru" }}>
      <StatusBar />
      <DrawerList />
    </View>
  );
};

export default MainSreen;
