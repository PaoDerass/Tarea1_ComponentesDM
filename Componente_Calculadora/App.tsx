import React from "react";
import { View, Text, StyleSheet } from "react-native";
import CalculatorComponent from "./componentes/calculadora";

export default function App() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Calculadora</Text>
      {}
      <CalculatorComponent a={10} b={5} operation={1} /> {}
      <CalculatorComponent a={10} b={5} operation={2} /> {}
      <CalculatorComponent a={10} b={5} operation={3} /> {}
      <CalculatorComponent a={10} b={5} operation={4} /> {}
      <CalculatorComponent a={10} b={0} operation={4} /> {}
    </View>
  );
}

const stylesCalculadora = StyleSheet.create({
  contenedor: {
    padding: 10,
    margin: 5,
    backgroundColor: "#D8BFD8", 
    borderRadius: 10,
    alignItems: "center",
  },
  texto: {
    fontSize: 18,
    color: "#4B0082", 
  },
  resultado: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#6A0DAD", 
  },
});

const styles = StyleSheet.create({
  contenedor: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#E6E6FA", 
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#9370DB", 
  },
});