import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenDemo from "./src/Const/ScreenDemo";
import Login from "./src/Logins/Logins/Login";
import Register from "./src/Logins/Register/Register";
import DrawerList from "./src/Const/Drawer/Drawer";
import Container from "./src/NavigationTabs/Container/Container";
import BottomMap from "./src/Const/BottomTabs/BottomMap";
// import MainSreen from "./src/MainScreen/MainSreen";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="splash">
        <Stack.Screen
          name="Home"
          component={ScreenDemo}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SignUp"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MainMap"
          component={DrawerList}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="BottomMap"
          component={BottomMap}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
