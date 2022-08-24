import React from "react";
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';

import Texto from '../../../componentes/Texto';
import Botao from "../../../componentes/Botao";

export default function Detalhes( {nome, logoFazenda, nomeFazenda, descricao, preco, botao} ) {
    return <>
     
        <Text style={estilos.nome}> {nome} </Text>
        <View style={estilos.fazenda}>
            <Image source= {logoFazenda} style={estilos.imagemFazenda} />
            <Text style={estilos.nomeFazenda}> {nomeFazenda} </Text>
        </View>
        <Texto style={estilos.descricao}> {descricao} </Texto>
        <Text style={estilos.preco}> {preco} </Text>

        <Botao> {botao} </Botao>
    </>
}

const estilos = StyleSheet.create({
    cesta:{
        paddingVertical: 8,
        paddingHorizontal: 16
    },
    nome: {
        color: "#464646",
        fontSize: 26,
        lineHeight: 42,
        fontFamily: "MontserratBold"
    },
    fazenda: {
        flexDirection: "row",
        paddingVertical: 12
    },
    imagemFazenda: {
        width: 32,
        height: 32
    },
    nomeFazenda: {
        fontSize: 16,
        lineHeight: 26,
        marginLeft: 12,
        fontFamily: "MontserratRegular"
    },
    descricao: {
        color: "#A3A3A3",
        fontSize: 16,
        lineHeight: 26
    },
    preco: {
        color: "#2A9F85",
        fontWeight: "bold",
        fontSize: 26,
        lineHeight: 42,
        marginTop: 8
    },
})