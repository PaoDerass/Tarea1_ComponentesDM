import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Calculadora from "./componentes/calculadora";

export default function App() {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>Calculadora</Text>
      <Calculadora num1={10} num2={5} operacion={1} />
      <Calculadora num1={10} num2={5} operacion={2} />
      <Calculadora num1={10} num2={5} operacion={3} />
      <Calculadora num1={10} num2={5} operacion={4} />
      <Calculadora num1={10} num2={0} operacion={4} /> 
    </View>
  );
}

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
