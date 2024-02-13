import { Button, TextInput } from "react-native-paper";
import { PhoneAuthProvider, signInWithCredential } from "firebase/auth";
import React, { useState } from "react";
import { RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";
import { StyleSheet, Text, View } from "react-native";

import { auth } from "../../../firebase";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("+44 7448 637926");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState();
  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      auth,
      "recaptcha-container",
      {
        size: "normal",
        callback: (response) => {
          console.log("prepared phone auth process");
        },
        "expired-callback": () => {
          console.log("expired");
        },
      }
    );
  };
  const requestOtp = async () => {
    setVerificationId(1);
    console.log("requesting otp");
    generateRecaptcha();

    const phoneProvider = new PhoneAuthProvider(auth);
    console.log(phoneNumber);
    const verificationId = await phoneProvider.verifyPhoneNumber(phoneNumber);
    console.log(verificationId);
    setVerificationId(verificationId);
  };

  const verifyOtp = async () => {
    const credential = PhoneAuthProvider.credential(verificationId, otp);
    await signInWithCredential(auth, credential);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 20,
      }}
    >
      {!verificationId && (
        <>
          <TextInput
            style={{ marginBottom: 10 }}
            value={phoneNumber}
            onChangeText={setPhoneNumber}
            placeholder="Phone Number"
            keyboardType="phone-pad"
          />

          <Button mode="contained" onPress={requestOtp}>
            Get OTP
          </Button>
        </>
      )}
      {verificationId && (
        <>
          <TextInput
            style={{ marginBottom: 10 }}
            value={otp}
            onChangeText={setOtp}
            placeholder="OTP"
            keyboardType="phone-pad"
          />

          <Button mode="contained" onPress={verifyOtp}>
            Verify OTP
          </Button>
        </>
      )}
    </View>
  );
}
