import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Calculator from "./Calculator";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <Calculator />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2d1f47",
    justifyContent: "center",
    alignItems: "center",
  },
});