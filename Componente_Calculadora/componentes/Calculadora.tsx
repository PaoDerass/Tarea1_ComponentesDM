import React from "react";
import {View, Text, StyleSheet} from "react-native";


type operacion = 1 | 2 | 3 | 4;

interface Props {
  a: number;
  b: number;
  operation: operacion;
}


const CalculatorComponent: React.FC<Props> = ({ a, b, operation }) => {
  let resultado: string | number;
  let operationTexto: string;

  switch (operation) {
    case 1:
      resultado = a + b;
      operationTexto = "Suma";
      break;
    case 2:
      resultado = a - b; 
      operationTexto = "Resta";
      break;
    case 3:
      resultado = a * b; 
      operationTexto = "Multiplicación";
      break;
    case 4:
   
      resultado = b !== 0 ? a / b : "Error: No se puede dividir entre 0";
      operationTexto = "División";
      break;
    default:
      resultado = "Operación no válida"; 
      operationTexto = "Desconocida";
  }

  return (
    <View style={stylesCalculadora.contenedor}>
      <Text style={stylesCalculadora.texto}>
        {operationTexto}: {a} y {b}
      </Text>
      <Text style={stylesCalculadora.resultado}>Resultado: {resultado}</Text>
    </View>
  );
};
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
  
  export default CalculatorComponent;