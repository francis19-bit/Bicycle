import React from "react";
import MapView from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { FAB, Portal, PaperProvider } from "react-native-paper";

const Maps = () => {
  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  return (
    <View style={styles.container}>
      <PaperProvider>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 5.653020096630557,
            longitude: -0.18505726936365843,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          <Marker
            coordinate={{
              latitude: 5.653020096630557,
              longitude: -0.18505726936365843,
            }}
          />
          {/* =========== *** ICON ====== */}
          <View
            style={{
              flexDirection: "column-reverse",
              gap: 20,
              marginHorizontal: 20,
              marginVertical: 50,
            }}
          >
            <View>
              <Icon size={20} name="menu" />
            </View>
            <View>
              <Icon size={20} name="magnify-minus" />
            </View>
          </View>
          {/* ====================== */}
          <Portal>
            <FAB.Group
              open={open}
              visible
              icon={open ? "calendar-today" : "plus"}
              actions={[
                { icon: "plus", onPress: () => console.log("Pressed add") },
                {
                  icon: "star",
                  label: "Star",
                  onPress: () => console.log("Pressed star"),
                },
                {
                  icon: "email",
                  label: "Email",
                  onPress: () => console.log("Pressed email"),
                },
                {
                  icon: "bell",
                  label: "Remind",
                  onPress: () => console.log("Pressed notifications"),
                },
              ]}
              onStateChange={onStateChange}
              onPress={() => {
                if (open) {
                  // do something if the speed dial is open
                }
              }}
            />
          </Portal>
          {/* ===================== */}
        </MapView>
      </PaperProvider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: "100%",
    height: "100%",
    borderRadius: 10,
  },
});

export default Maps;
