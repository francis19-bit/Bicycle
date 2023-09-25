import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import { Card, Button, Divider, TouchableRipple } from "react-native-paper";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import InputComponent from "../InputComponent/InputComponent";

const Login = ({ navigation }) => {
  return (
    <View style={[style.default]}>
      <StatusBar />
      <TouchableRipple
        onPress={() => console.log("Pressed")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={[style.defaultView]}>
          {/* <Card style={[style.defaultCard]}> */}
          <Text
            style={[style.defaultText]}
            onPress={() => navigation.navigate("MainMap")}
          >
            Login
          </Text>
          <View>
            <Text style={[style.defaultWelcomeBack]}>Welcome Back!</Text>
          </View>
          <View style={{ marginVertical: 20 }}>
            <View>
              <InputComponent
                label={"Email"}
                iconName={"email-outline"}
                placeholder="Enter your email address"
              />
            </View>
            <View>
              <InputComponent
                label={"Password"}
                iconName={"lock-outline"}
                placeholder="Enter your email address"
                // password={"eye-outline"}
              />
              <Text style={[style.defaultForgot]}>Forgot Password?</Text>
            </View>
            <View style={{ marginVertical: 20 }}>
              <Button
                style={[style.defaultBTN]}
                // icon=""
                mode="contained-tonal"
                onPress={() => {}}
              >
                Sign In
              </Button>
              <Text style={[style.defaultOr]}>OR</Text>
            </View>
            <Divider style={{ backgroundColor: "white" }} />
            <View style={[style.defaultFlex]}>
              <Text style={{ fontSize: 20, color: "#C0D1E0" }}>
                Sign In With
              </Text>
              <Text>
                <Icon
                  name="google"
                  style={[style.defaultIcons]}
                  color={"#C69F66"}
                />
                <Icon
                  name="facebook"
                  style={[style.defaultIcons]}
                  color={"#3C5A7A"}
                />
              </Text>
            </View>

            {/* <Divider /> */}
            <View style={[style.defaultAccSignup]}>
              <Text style={{ fontSize: 20, color: "#C0D1E0" }}>
                Don't have an account?{" "}
                <Text
                  onPress={() => navigation.navigate("SignUp")}
                  style={{ color: "#526596", fontWeight: "900" }}
                >
                  Sign Up
                </Text>{" "}
              </Text>
            </View>
          </View>
          {/* </Card> */}
        </View>
      </TouchableRipple>
    </View>
  );
};

const style = StyleSheet.create({
  default: {
    flex: 1,
    color: "#C0D1E0",
    backgroundColor: "#B0C4A6",
  },
  defaultSIGNUP: {
    color: "#526596",
  },
  defaultText: {
    margin: 20,
    alignSelf: "center",
    fontSize: 30,
    fontWeight: "800",
    color: "#C0D1E0",
  },
  defaultView: {
    marginHorizontal: 15,
    color: "#C0D1E0",
    margin: 50,
  },
  defaultCard: {
    color: "#C0D1E0",
    height: 650,
    backgroundColor: "#009B90",
  },
  defaultWelcomeBack: {
    color: "#C0D1E0",
    fontWeight: "600",
    marginHorizontal: 6,
    fontSize: 20,
  },
  defaultAccSignup: {
    alignSelf: "center",
    color: "#C0D1E0",
    marginVertical: 40,
  },
  defaultIcons: {
    fontSize: 25,
  },
  defaultFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    color: "#C0D1E0",
    gap: 10,
  },
  defaultOr: {
    alignSelf: "center",
    marginVertical: 5,
    fontSize: 15,
    color: "#C0D1E0",
    fontWeight: "700",
  },
  defaultBTN: {
    width: 200,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 5,
    color: "#C0D1E0",
    fontWeight: "900",
  },
  defaultForgot: {
    alignSelf: "flex-end",
    fontSize: 15,
    color: "#C0D1E0",
    fontWeight: "900",
  },
});

export default Login;
