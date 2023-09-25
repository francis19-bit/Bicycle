import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import MyRides from "../MyRidesComponent/MyRides";
import { Divider } from "react-native-paper";

const RideStatus = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView>
        <View>
          <MyRides
            names={"Ride with Emmanuel"}
            date={"Thus, Oct, 2099"}
            icon={"account-circle"}
          />
        </View>
        <View style={{ width: "100%", height: 200, backgroundColor: "blue" }}>
          <Text>ijbi</Text>
        </View>
        {/* ================================== */}
        <View style={{ width: "100%", height: 300 }}>
          <View
            style={{
              flexDirection: "column",
              marginVertical: 25,
              justifyContent: "space-between",
            }}
          >
            <View
              style={{
                flexDirection: "row",
                gap: 10,
                alignItems: "center",
                padding: 10,
              }}
            >
              <View>
                <Icon size={30} name="adjust" />
              </View>
              <View>
                <Text style={{ fontSize: 18 }}>Virginia Walk</Text>
                <Text style={{ fontSize: 14 }}>Time</Text>
              </View>
            </View>
          </View>
          {/* ================================= */}
          <View
            style={{
              flexDirection: "row",
              gap: 10,
              alignItems: "center",
              padding: 10,
            }}
          >
            <View>
              <Icon size={30} name="adjust" />
            </View>
            <View>
              <Text style={{ fontSize: 18 }}>Virginia Walk</Text>
              <Text style={{ fontSize: 14 }}>Time</Text>
              <Text style={{ fontSize: 16 }}>country</Text>
            </View>
          </View>
          <View>
            <Text style={{ padding: 10, fontSize: 16 }}>
              Additional ride details can be found in your email receipt
            </Text>
          </View>
          <View style={{ padding: 10, alignSelf: "center" }}>
            <Text>BTN</Text>
          </View>
        </View>
        {/* =================================== */}
        <Divider style={{ height: 8 }} />
        <View style={{ width: "100%", height: 350 }}>
          <View style={{ padding: 10, flexDirection: "column", gap: 30 }}>
            <View>
              <Text style={{ fontSize: 15, fontWeight: "900" }}>Payment</Text>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontSize: 15 }}>Payment</Text>
              </View>
              <View>
                <Text style={{ fontSize: 15 }}>Ghc 65.00</Text>
              </View>
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontSize: 15 }}>Payment</Text>
              </View>
              <View>
                <Text style={{ fontSize: 15 }}>Ghc 65.00</Text>
              </View>
            </View>
            <Divider style={{ height: 5 }} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View>
                <Text style={{ fontSize: 15 }}>Total</Text>
              </View>
              <View>
                <Text style={{ fontSize: 15 }}>Ghc 54.00</Text>
              </View>
            </View>
            {/* =============================== */}
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 10,
                }}
              >
                <View>
                  <Icon size={20} name="note" />
                </View>
                <View>
                  <Text style={{ fontSize: 15 }}>cash</Text>
                </View>
              </View>
              <View>
                <Text style={{ fontSize: 15 }}>Ghc 65.00</Text>
              </View>
            </View>
            <View style={{ alignSelf: "center" }}>
              <Text>BTN</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RideStatus;
