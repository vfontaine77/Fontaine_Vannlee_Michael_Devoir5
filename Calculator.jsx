import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function Calculator() {
  const [input, setInput] = useState("0");

  const handlePress = (value) => {
    if (value === "AC") {
      setInput("0");
    } else if (value === "⌫") {
      setInput(input.length > 1 ? input.slice(0, -1) : "0");
    } else if (value === "=") {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput("Erreur");
      }
    } else {
      setInput(input === "0" ? value : input + value);
    }
  };

  const buttons = [
    ["AC", "/", "*", "⌫"],
    ["7", "8", "9", "-"],
    ["4", "5", "6", "+"],
    ["1", "2", "3", "."],
    ["0", "="],
  ];

  return (
    <View style={styles.calculator}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input}</Text>
      </View>
      {buttons.map((row, rowIndex) => (
        <View key={rowIndex} style={styles.row}>
          {row.map((btn) => (
            <TouchableOpacity
              key={btn}
              style={[
                styles.button,
                btn === "AC" ? styles.acButton : null,
                ["/", "*", "-", "+", "⌫"].includes(btn)
                  ? styles.opButton
                  : null,
                btn === "=" ? styles.equalButton : null,
              ]}
              onPress={() => handlePress(btn)}
            >
              <Text style={styles.buttonText}>{btn}</Text>
            </TouchableOpacity>
          ))}
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  calculator: {
    width: 300,
    backgroundColor: "#1c1c2b",
    borderRadius: 15,
    padding: 15,
  },
  display: {
    height: 80,
    backgroundColor: "#0d0d26",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "flex-end",
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  displayText: {
    fontSize: 32,
    color: "white",
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  button: {
    flex: 1,
    margin: 5,
    height: 60,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#243447",
  },
  buttonText: {
    fontSize: 22,
    color: "white",
    fontWeight: "bold",
  },
  acButton: {
    backgroundColor: "#f4a261",
  },
  opButton: {
    backgroundColor: "#e63946",
  },
  equalButton: {
    backgroundColor: "#2a9d8f",
    flex: 2,
  },
});