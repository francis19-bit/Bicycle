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
// =====================================================
// import React, { useState, useEffect, useRef } from "react";
// import MapView, { Animated } from "react-native-maps";
// import { StyleSheet, View } from "react-native";
// import { Marker } from "react-native-maps";
// import { AnimatedRegion } from "react-native-maps";
// import { Platform } from "react-native";
// // import bikeImage from "../../../assets/Image/bike.png";

// const LATITUDE = 5.653020096630557;
// const LONGITUDE = -0.18505726936365843;
// // const bikeIcon = require("../../../assets/Image/bike.png");

// let locationOfInterest = [
//   {
//     title: "Docks",
//     location: {
//       latitude: 5.653020096630557,
//       longitude: -0.18505726936365843,
//     },
//     description: "My first marker",
//   },
// ];

// const onRegionChange = (region) => {
//   console.log(region);
// };

// const Maps = () => {
//   const [coordinate] = useState(
//     new AnimatedRegion({
//       latitude: LATITUDE,
//       longitude: LONGITUDE,
//     })
//   );

//   const mapRef = useRef(null);

//   useEffect(() => {
//     const duration = 700;
//     const newCoordinate = {
//       latitude: 5.653020096630557,
//       longitude: -0.18505726936365843,
//     };

//     if (Platform.OS === "android") {
//       if (mapRef.current) {
//         mapRef.current.animateToRegion(
//           {
//             latitude: newCoordinate.latitude,
//             longitude: newCoordinate.longitude,
//             latitudeDelta: 0.0922,
//             longitudeDelta: 0.0421,
//           },
//           duration
//         );
//       }
//     } else {
//       coordinate
//         .timing({
//           ...newCoordinate,
//           useNativeDriver: true,
//           duration,
//         })
//         .start();
//     }
//   }, []);

//   const showLocationOfInterest = () => {
//     return locationOfInterest.map((item, index) => {
//       return (
//         <Marker
//           key={index}
//           coordinate={item.location}
//           title={item.title}
//           description={item.description}
//         />
//       );
//     });
//   };

//   return (
//     <View style={styles.container}>
//       <MapView
//         style={styles.map}
//         // initialRegion={{
//         //   latitude: LATITUDE,
//         //   longitude: LONGITUDE,
//         //   latitudeDelta: 0.0922,
//         //   longitudeDelta: 0.0421,
//         // }}
//         ref={mapRef}
//         onRegionChange={onRegionChange}
//       >
//         {showLocationOfInterest()}
//         {/* <Marker.Animated coordinate={coordinate} /> */}
//       </MapView>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//   },
//   map: {
//     width: "100%",
//     height: "100%",
//     borderRadius: 10,
//   },
// });

// export default Maps;

// =================================================================

import React, { useState } from "react";
import MapView, { Callout } from "react-native-maps";
import { StyleSheet, View, Text } from "react-native";
import { Marker } from "react-native-maps";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import { Modal, Portal, PaperProvider } from "react-native-paper";

const Maps = () => {
  const [visible, setVisible] = React.useState(false);

  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  // const containerStyle = { backgroundColor: "white", padding: 20 };

  const [state, setState] = React.useState({ open: false });

  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;

  let locationOfInterest = [
    {
      title: "Docks",
      location: {
        latitude: 5.653020096630557,
        longitude: -0.18505726936365843,
      },
      description: "My first marker",
    },
    {
      title: "First",
      location: {
        latitude: 9.877253168123442,
        longitude: -13.550711050629616,
      },
      description: "My first marker",
    },
  ];

  const onRegionChange = (region) => {
    console.log(region);
  };

  const showLocationOfInterest = () => {
    return locationOfInterest.map((item, index) => {
      return (
        <Marker
          key={index}
          coordinate={item.location}
          title={item.title}
          description={item.description}
          onPress={showModal}
        />
      );
    });
  };

  // ==========================

  // ===========================

  return (
    <PaperProvider>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 3.2473712421789678,
            latitudeDelta: 101.0463614544131,
            longitude: 3.8342824950814247,
            longitudeDelta: 70.31246580183506,
          }}
          onRegionChange={onRegionChange}
        >
          {/* =========== *** ICON ====== */}
          {showLocationOfInterest()}
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              // contentContainerStyle={containerStyle}
              style={{
                width: "50%",
                height: 200,
                backgroundColor: "white",

                marginHorizontal: 50,
                marginVertical: 50,
              }}
            >
              {/* <Text>
                Example Modal. Click outside this area to dismiss. Example
                Modal. Click outside this area to dismiss. Example Modal. Click
                outside this area to dismiss. Example Modal. Click outside this
                area to dismiss.
              </Text> */}
            </Modal>
          </Portal>
          {/* ===================== */}
        </MapView>
      </View>
    </PaperProvider>
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
