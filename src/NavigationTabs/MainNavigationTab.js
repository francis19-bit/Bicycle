import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Maps from "../Const/Mapping/Maps";

const map = "Maps";
const ride = "Riders";

const Tab = createBottomTabNavigator();

const MainNavigationTab = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        //    initialRouteName="MainMap"

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let routeName = route.name;

            if (routeName === map) {
              iconName = focused ? "Maps" : "home-outline";
            } else if (routeName === ride) {
              iconName = focused ? "Riders" : "lock-outline";
            }
            return (
              <Icon
                // onPress={() => {}}
                size={size}
                color={color}
                name={iconName}
              />
            );
          },
        })}
      >
        <Tab.Screen name={map} component={Maps} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default MainNavigationTab;
