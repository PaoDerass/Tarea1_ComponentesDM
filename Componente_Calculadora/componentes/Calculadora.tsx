import React from "react";
import {View, Text, StyleSheet} from "react-native";

interface Props {
    num1: number;
    num2: number;
    operacion: number;
}

const Calculadora: React.FC<Props> = ({ num1, num2, operacion}) => {
    let resultado: string | number;

    switch (operacion) {
        case 1:
            resultado = num1 + num2;
            break;
        case 2:
            resultado = num1 - num2;
            break;
        case 3:
                resultado = num1 * num2;
                break;
        case 4:
                resultado = num2 !== 0 ? num1/num2: "Error: No se puede dividir entre 0";
                break;
        default:
            resultado = "Operacion no valida"
    }
}

export default Calculadora;