import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function App() {
  const [day, setDay] = useState(1);
  const [show, setShow] = useState(false);

  const increase = () => {
    setDay(day + 1);
  };

  const toggleShow = () => {
    setShow(!show);
  };

  return (
    <View style={styles.container}>
      {/* <Text>Hello {day}! :)</Text>
      <Button onPress={increase} title="Increment " /> */}
      {show ? <Text>Suhani Pagal ;P</Text> : null}
      <Button onPress={toggleShow} title="CLick Me! " />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
