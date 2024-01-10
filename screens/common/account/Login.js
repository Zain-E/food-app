import { Button, Input } from "react-native-elements";
import { Controller, useForm } from "react-hook-form";
import { StyleSheet, Text, View } from "react-native";

import React from "react";

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <View style={styles.container}>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <Input
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
            placeholder="Mobile Number"
            keyboardType="phone-pad"
            errorMessage={errors.mobileNumber && "This is required."}
          />
        )}
        name="mobileNumber"
        rules={{ required: true }}
        defaultValue=""
      />
      <Button title="Continue" onPress={handleSubmit(onSubmit)} />

      <Text style={styles.separator}>or</Text>

      {/* <AppleButton
        buttonStyle={AppleButton.Style.WHITE}
        buttonType={AppleButton.Type.SIGN_IN}
        style={styles.button}
        onPress={() => console.log("Apple sign in")}
      />

      <GoogleSigninButton
        style={styles.button}
        size={GoogleSigninButton.Size.Wide}
        color={GoogleSigninButton.Color.Dark}
        onPress={() => console.log("Google sign in")}
      />

      <LoginButton
        style={styles.button}
        onLoginFinished={() => console.log("Facebook sign in")}
      /> */}
      <Button
        style={{ marginBottom: 10 }}
        title="Continue with Google"
        onPress={() => console.log("Email sign in")}
      />
      <Button
        title="Continue with Email"
        onPress={() => console.log("Email sign in")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  button: {
    width: 200,
    height: 48,
    marginBottom: 10,
  },
  separator: {
    marginVertical: 20,
    textAlign: "center",
  },
});
