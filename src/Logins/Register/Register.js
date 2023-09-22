import { View, Text, StyleSheet, StatusBar } from "react-native";
import React from "react";
import InputComponent from "../InputComponent/InputComponent";
import { Card, TouchableRipple } from "react-native-paper";

const Register = ({ navigation }) => {
  return (
    <View style={[style.default]}>
      <StatusBar />
      <TouchableRipple
        onPress={() => console.log("Pressed")}
        rippleColor="rgba(0, 0, 0, .32)"
      >
        <View style={[style.defaultView]}>
          <Card style={[style.defaultCard]}>
            <Text style={[style.defaultText]}>Register</Text>
            <View>
              <Text style={[style.defaultDetails]}>
                Enter Your Details to Register
              </Text>
            </View>
            <View style={{ marginVertical: 5 }}>
              <View>
                <InputComponent
                  label={"Email"}
                  iconName={"email-outline"}
                  placeholder="Enter your email address"
                />
              </View>
              <View>
                <InputComponent
                  label={"Full Name"}
                  iconName={"account-circle"}
                  placeholder="Enter your full name"
                />
              </View>
              <View>
                <InputComponent
                  label={"Phone number"}
                  iconName={"phone"}
                  placeholder="Enter your phone no"
                />
              </View>
              <View>
                <InputComponent
                  label={"Password"}
                  iconName={"lock-outline"}
                  placeholder="Enter your password"
                />
              </View>

              <View style={[style.defaultAccSignup]}>
                <Text style={{ fontSize: 20, color: "#C0D1E0" }}>
                  Already have an account?{" "}
                  <Text
                    onPress={() => navigation.navigate("Login")}
                    style={{ color: "#526596", fontWeight: "900" }}
                  >
                    Login
                  </Text>{" "}
                </Text>
              </View>
            </View>
          </Card>
        </View>
      </TouchableRipple>
    </View>
  );
};

const style = StyleSheet.create({
  default: {
    flex: 1,
    backgroundColor: "#B0C4A6",
  },
  defaultSIGNUP: {
    // color: "#526596",
    color: "#C0D1E0",
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
    margin: 25,
    color: "#C0D1E0",
  },
  defaultCard: {
    height: 700,
    backgroundColor: "#009B90",
    color: "#C0D1E0",
  },
  defaultDetails: {
    fontWeight: "600",
    marginHorizontal: 6,
    fontSize: 20,
    color: "#C0D1E0",
  },
  defaultAccSignup: {
    alignSelf: "center",
    marginVertical: 10,
  },
  defaultIcons: {
    fontSize: 25,
  },
  defaultFlex: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 10,
  },
  defaultOr: {
    alignSelf: "center",
    marginVertical: 5,
    fontSize: 15,
    fontWeight: "700",
  },
  defaultBTN: {
    width: 200,
    alignSelf: "center",
    backgroundColor: "#FFFFFF",
    borderWidth: 5,
    fontWeight: "900",
  },
  defaultForgot: {
    alignSelf: "flex-end",
    fontSize: 15,
    fontWeight: "900",
  },
});

export default Register;
