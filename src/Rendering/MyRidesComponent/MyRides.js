import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

const MyRides = ({
  names,
  date,
  amount,
  belowAmount,
  onpress,
  iconName,
  icon,
  underdate,
}) => {
  return (
    <TouchableOpacity onPress={onpress}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          padding: 20,
          backgroundColor: "white",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
          <View>
            <Icon name={iconName} size={30} />
          </View>
          <View style={{ flexDirection: "column", alignItems: "center" }}>
            <View>
              <Text style={{ fontSize: 17 }}>{names}</Text>
              <Text>{date}</Text>
            </View>
            <View>
              <Text>{underdate}</Text>
            </View>
          </View>
        </View>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View>
            <Text style={{ fontWeight: "900" }}>{amount}</Text>
            <Text>{belowAmount}</Text>
          </View>
          <View>
            <Icon name={icon} size={40} />
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyRides;
