import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";

const InputComponent = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}) => {
  const [isFocuse, setIsFocuse] = React.useState(false);
  const [hidePassword, setHidePassword] = React.useState(password);
  return (
    <View style={{ marginBottom: 20 }}>
      <Text style={style.label}>{label} </Text>
      <View
        style={[
          style.inputContainer,
          {
            borderColor: error ? "red" : isFocuse ? "darkBlue" : "white",
          },
        ]}
      >
        <Icon
          name={iconName}
          style={{
            fontSize: 22,
            marginRight: 10,
            fontWeight: "900",
            color: "#C0D1E0",
          }}
        />
        <TextInput
          secureTextEntry={hidePassword}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocuse(true);
          }}
          onBlur={() => {
            setIsFocuse(false);
          }}
          style={{ color: "voilet", flex: 1 }}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            style={{ fontSize: 22, color: "green", fontWeight: "700" }}
            name={hidePassword ? "eye-outline" : "eye-off-outline"}
          />
        )}
      </View>
      {error && (
        <Text style={{ color: "red", fontSize: 12, marginTop: 7 }}>
          {error}
        </Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  label: {
    marginVertical: 10,
    fontSize: 15,
    color: "#ADB8C2",
    marginLeft: 10,
    fontWeight: "600",
    borderRadius: 200,
  },
  inputContainer: {
    height: 60,
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    paddingHorizontal: 15,
    borderWidth: 0.9,
    borderRadius: 10,
    fontWeight: "900",
    alignItems: "center",
    // marginLeft: 50,
    width: "100%",
  },
});

export default InputComponent;
