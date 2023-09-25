import React, { useRef, useState } from "react";
import {
  Button,
  DrawerLayoutAndroid,
  Text,
  StyleSheet,
  View,
  Pressable,
} from "react-native";
import Maps from "../Mapping/Maps";
import { IconButton, TouchableRipple } from "react-native-paper";

const DrawerList = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = React.useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState("right");
  //   const changeDrawerPosition = () => {
  //     if (drawerPosition === "left") {
  //       setDrawerPosition("right");
  //     } else {
  //       setDrawerPosition("left");
  //     }
  //   };

  const navigationView = () => (
    <View style={[styles.container, styles.navigationContainer]}>
      <Text style={styles.paragraph}>I'm in the Drawer!</Text>
      <Button
        title="Close drawer"
        onPress={() => drawer.current.closeDrawer()}
      />
    </View>
  );

  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition={drawerPosition}
      renderNavigationView={navigationView}
    >
      <View style={{ flex: 1 }}>
        <View
          style={{ backgroundColor: "#C0D1E0", width: "100%", height: "100%" }}
        >
          <Maps />
          <View
            style={{
              backgroundColor: "black",
              width: 400,
              height: 100,
            }}
          >
            <TouchableRipple
              onPress={() => console.log("Pressed")}
              rippleColor="rgba(0, 0, 0, .32)"
            >
              {/* <Table /> */}
              <View style={styles.NavBar}>
                <Pressable
                  style={styles.IconBehave}
                  android_ripple={{ borderless: true, radius: 50 }}
                >
                  <View
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <IconButton
                      icon="map-search"
                      // iconColor="black"
                      // style={{ backgroundColor: "#009B90" }}
                      size={22}
                    />
                    <Text style={{ fontWeight: "900" }}>Map</Text>
                  </View>
                </Pressable>
                <Pressable
                  style={styles.IconBehave}
                  android_ripple={{ borderless: true, radius: 50 }}
                >
                  <View
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <IconButton
                      icon="bike"
                      // iconColor="black"
                      // style={{ backgroundColor: "#009B90" }}
                      size={22}
                      // onPress={() => navigation.navigate("BottomMap")}
                      onPress={() => navigation.navigate("My Ride")}
                    />
                    <Text style={{ fontWeight: "900" }}>Ride</Text>
                  </View>
                </Pressable>
                <Pressable
                  style={styles.IconBehave}
                  android_ripple={{ borderless: true, radius: 50 }}
                >
                  <View
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <IconButton
                      icon="book"
                      // iconColor="black"
                      // style={{ backgroundColor: "#009B90" }}
                      size={22}
                    />
                    <Text style={{ fontWeight: "900" }}>Passes</Text>
                  </View>
                </Pressable>
                <Pressable
                  style={styles.IconBehave}
                  android_ripple={{ borderless: true, radius: 50 }}
                >
                  <View
                    style={{ flexDirection: "column", alignItems: "center" }}
                  >
                    <IconButton
                      icon="security"
                      // iconColor="black"
                      // style={{ backgroundColor: "#009B90" }}
                      size={22}
                      onPress={() => navigation.navigate("settings")}
                    />
                    <Text style={{ fontWeight: "900" }}>Settings</Text>
                  </View>
                </Pressable>
              </View>
            </TouchableRipple>
          </View>
        </View>
      </View>
    </DrawerLayoutAndroid>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    zIndex: 120,
  },
  NavBar: {
    flexDirection: "row",
    backgroundColor: "#C0D1E0",
    width: "100%",
    justifyContent: "space-between",
    // borderRadius: 20,
    textAlign: "center",
    height: 100,
  },
  IconBehave: {
    padding: 14,
  },
  navigationContainer: {
    zIndex: 100,
    backgroundColor: "#ecf0f1",
  },
  paragraph: {
    padding: 16,
    fontSize: 15,
    zIndex: 100,
    textAlign: "center",
  },
});

export default DrawerList;
