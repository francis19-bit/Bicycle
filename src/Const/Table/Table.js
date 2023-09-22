import { View, Text, ScrollView } from "react-native";
import React, { useState } from "react";
import { List } from "react-native-paper";

const Table = () => {
  const [fullData, setFullData] = useState([
    { Months: 1, Principal: 9777, Interest: 300, Balance: 7876 },
    { Months: 1, Principal: 9777, Interest: 300, Balance: 7876 },
  ]);
  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: "peru",
        // padding: 2,
      }}
    >
      <View
        style={{
          flex: 1,
          backgroundColor: "peru",
          padding: 10,
          alignSelf: "center",
        }}
      >
        <View
          style={{
            borderRadius: 5,
            backgroundColor: "blue",
            width: "100%",
            flexDirection: "row",
            padding: 15,
            position: "relative",
          }}
        >
          <View style={{ width: "25%" }}>
            <Text style={{ height: 30, fontSize: 18 }}>Months</Text>
          </View>
          <View style={{ width: "25%" }}>
            <Text style={{ height: 30, fontSize: 18 }}> Months</Text>
          </View>
          <View style={{ width: "25%" }}>
            <Text style={{ height: 30, fontSize: 18 }}> Months</Text>
          </View>
          <View style={{ width: "25%" }}>
            <Text style={{ height: 30, fontSize: 18 }}> Months</Text>
          </View>
        </View>
        {/* ===================== */}

        {/* ========================== */}
        {fullData.map((item, index) => (
          <View
            style={[
              {
                width: "100%",
                flexDirection: "row",
                borderRadius: 10,
                padding: 15,
                marginTop: 9,
              },
              index % 2 == 0
                ? { backgroundColor: "pink" }
                : { backgroundColor: "brown" },
            ]}
            key={index}
          >
            <View style={{ width: "25%" }}>
              <Text style={{ height: 30, color: "red", fontSize: 18 }}>
                {item.Months}
              </Text>
            </View>
            <View style={{ width: "25%" }}>
              <Text style={{ height: 30, color: "red", fontSize: 18 }}>
                {item.Principal}
              </Text>
            </View>
            <View style={{ width: "25%" }}>
              <Text style={{ height: 30, color: "red", fontSize: 18 }}>
                {item.Principal}
              </Text>
            </View>
            <View style={{ width: "25%" }}>
              <Text style={{ height: 30, color: "red", fontSize: 18 }}>
                {item.Principal}
              </Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default Table;
