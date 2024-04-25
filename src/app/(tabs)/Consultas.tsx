import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";
import Header from '../componentes/Header'
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Consultas() {
    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <  Image style={styles.img} source={require('../../../assets/perfil.png')}/>
                <Text style={styles.headerText}>Gustavo Peres</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Consultas
                </Text>
                <TouchableOpacity style={styles.addButton}>
                    <AntDesign name="plus" size={28} color="white" />
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#c9c9c9',
        alignItems: 'center',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        height: 60,
    },
    headerText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    container: {
        flex: 1,
        marginTop: 20,
        display: 'flex',
        flexDirection: "row",
    },
    title: {
        fontSize: 36,
        fontWeight: '500',
    },
    img: {
        padding: 10,
        margin: 4,
        marginLeft: 270,
    },
    addButton: {
        backgroundColor: '#A1D5B0',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 180,
    },
});
