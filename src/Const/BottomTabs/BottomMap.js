import { View, Text, ScrollView } from "react-native";
import React from "react";
import BottomSheet from "react-native-simple-bottom-sheet";
import Maps from "../Mapping/Maps";
import { Button, IconButton } from "react-native-paper";
import { ProgressBar } from "react-native-paper";

const BottomMap = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "peru" }}>
      <View style={{ flex: 1 }}>
        <Maps />
      </View>
      <BottomSheet isOpen>
        {(onScrollEndDrag) => (
          <ScrollView onScrollEndDrag={onScrollEndDrag}>
            <View
              style={{
                height: 100,
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  gap: 20,
                }}
              >
                <View>
                  <Text
                    style={{
                      fontWeight: "900",
                      fontSize: 25,
                      color: "#C0D1E0",
                    }}
                  >
                    Wellington St West
                  </Text>
                  <Text style={{ fontWeight: "300", fontSize: 20 }}>
                    {" "}
                    0.4 km away
                  </Text>
                </View>
              </View>
              <View>
                <IconButton
                  icon="star"
                  size={30}
                  iconColor="wheat"
                  style={{ backgroundColor: "#CBD1D7" }}
                  onPress={() => console.log("Pressed")}
                />
              </View>
            </View>
            {/* ====================== */}
            <View
              style={{
                flexDirection: "row",
                gap: 150,
                height: 200,
                // justifyContent: "space-between",
              }}
            >
              <View style={{ flexDirection: "column", gap: 10 }}>
                <IconButton
                  icon="bicycle"
                  size={30}
                  iconColor="wheat"
                  style={{ backgroundColor: "#4E4EC2" }}
                  onPress={() => console.log("Pressed")}
                />
                <Text style={{ fontWeight: "900", fontSize: 20 }}>Bikes</Text>
                <Text style={{ fontWeight: "300", fontSize: 15 }}>
                  26/30 available
                </Text>
                <ProgressBar progress={0.7} color="blue" />
              </View>
              <View style={{ flexDirection: "column", gap: 10 }}>
                <IconButton
                  icon="book"
                  size={30}
                  style={{ backgroundColor: "#D74E4E" }}
                  iconColor="white"
                  onPress={() => console.log("Pressed")}
                />
                <Text style={{ fontWeight: "900", fontSize: 20 }}>Docks</Text>
                <Text style={{ fontWeight: "300", fontSize: 15 }}>
                  2/30 available
                </Text>
                <ProgressBar progress={0.7} color="red" />
              </View>
            </View>
            {/* ========================= */}
            <View style={{ height: 60, alignSelf: "center" }}>
              <Button
                icon="lock-outline"
                mode="elevated"
                onPress={() => console.log("Pressed")}
                style={{ width: "100%" }}
              >
                {" "}
                Unlock
              </Button>
            </View>
          </ScrollView>
        )}
      </BottomSheet>
    </View>
  );
};

export default BottomMap;
