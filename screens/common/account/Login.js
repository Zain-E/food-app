import { Alert, Text, View } from "react-native";
import { Button, TextInput } from "react-native-paper";
import React, { useEffect, useState } from "react";

import { supabase } from "../../../lib/supabase";

export default function Login() {
  const [phoneNumber, setPhoneNumber] = useState("+44 7448 637926");
  const [otp, setOtp] = useState("");
  const [verificationId, setVerificationId] = useState(false);
  const [loading, setLoading] = useState(false);
  const [session, setSession] = useState(null);
  const [canResend, setCanResend] = useState(true);
  const [timer, setTimer] = useState(60);

  useEffect(() => {
    setSession(supabase.auth.getSession());

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  useEffect(() => {
    let interval = null;
    if (timer > 0 && canResend === false) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && canResend === false) {
      setCanResend(true);
      setTimer(60);
    }
    return () => clearInterval(interval);
  }, [timer, canResend]);

  const requestOtp = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase.auth.signInWithOtp({
        phone: phoneNumber,
      });
      if (error) throw error;

      setVerificationId(true);
      setCanResend(false);
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async () => {
    try {
      setLoading(true);
      const { error } = await supabase.auth.verifyOtp({
        phone: phoneNumber,
        token: otp,
        type: "sms",
      });
      if (error) throw error;
      Alert.alert('Success', 'You are now logged in!');
      setVerificationId(false);
    } catch (error) {
      Alert.alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const resendOtp = async () => {
    if (canResend) {
      await requestOtp();
      setTimer(60);
      setCanResend(false);
    }
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

          <Button mode="contained" onPress={requestOtp} loading={loading}>
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

          <Button mode="contained" onPress={verifyOtp} loading={loading}>
            Verify OTP
          </Button>
          {!canResend && <Text>Resend OTP in {timer} seconds</Text>}
          <Button mode="outlined" onPress={resendOtp} disabled={!canResend}>
            Resend OTP
          </Button>
        </>
      )}

      {session && session.user && (
        <Text>Logged in as {session.user.phone}</Text>
      )}
    </View>
  );
}
