import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Switch } from "react-native-paper";

const ToggleSwitch = ({ names, belowNames, onPress }) => {
  const [isSwitchOn, setIsSwitchOn] = React.useState(false);

  const onToggleSwitch = () => {
    setIsSwitchOn(!isSwitchOn);
    onPress(isSwitchOn);
  };
  return (
    <TouchableOpacity onPress={onToggleSwitch}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          backgroundColor: "white",
          height: 80,
          padding: 20,
          width: "100%",
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text style={{ fontSize: 20 }}>{names}</Text>
          <Text style={{ fontSize: 15 }}>{belowNames}</Text>
        </View>
        <Text>
          <Switch value={isSwitchOn} />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ToggleSwitch;
