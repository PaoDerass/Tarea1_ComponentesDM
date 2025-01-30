import React from "react";
import {View, Text, StyleSheet} from "react-native";

interface Props {
    num1: number;
    num2: number;
    operacion: number;
}

const Calculadora: React.FC<Props> = ({ num1, num2, operacion}) => {
    let resultado: string | number;
    let operacionTexto: string;

    switch (operacion) {
        case 1:
          resultado = num1 + num2;
          operacionTexto = "Suma";
          break;
        case 2:
          resultado = num1 - num2;
          operacionTexto = "Resta";
          break;
        case 3:
          resultado = num1 * num2;
          operacionTexto = "Multiplicación";
          break;
        case 4:
          resultado = num2 !== 0 ? num1 / num2 : "Error: No se puede dividir entre 0";
          operacionTexto = "División";
          break;
        default:
          resultado = "Operación no válida";
          operacionTexto = "Desconocida";
      }
      return (
        <View style={stylesCalculadora.contenedor}>
          <Text style={stylesCalculadora.texto}>{operacionTexto}: {num1} y {num2}</Text>
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
      
      export default Calculadora;