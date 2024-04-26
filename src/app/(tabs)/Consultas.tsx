import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Consultas() {
    const [modalVisible, setModalVisible] = useState(false)
    const [consultas, setConsultas] = useState([])
    const [consultaInfo, setConsultaInfo] = useState({
        nome: '',
        data: '',
        horario: ''
    });

    const handleSalvarConsulta = () => {
        const novaConsulta = {
            nome: consultaInfo.nome,
            data: consultaInfo.data,
            horario: consultaInfo.horario
        };

        setConsultas([...consultas, novaConsulta]);
        setModalVisible(false);
    };

    return (
        <View style={{ flex: 1 }}>
            <View style={styles.header}>
                <Image style={styles.img} source={require('../../../assets/perfil.png')} />
                <Text style={styles.headerText}>Gustavo Peres</Text>
            </View>
            <View style={styles.container}>
                <Text style={styles.title}>
                    Consultas
                </Text>
                <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
                    <AntDesign name="plus" size={28} color="white" />
                </TouchableOpacity>
            </View>

            {/* Lista de consultas */}
            <View style={styles.consultaList}>
                {consultas.map((consulta, index) => (
                    <View key={index} style={styles.consultaItem}>
                        <Text>{consulta.nome}</Text>
                        <Text>{consulta.data}</Text>
                        <Text>{consulta.horario}</Text>
                    </View>
                ))}
            </View>

            {/* Modal para adicionar consulta */}
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.modalBackground}>
                    <View style={styles.modalContent}>
                        <Text style={styles.label}>Nome da Consulta</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o nome da consulta"
                            onChangeText={(text) => setConsultaInfo({ ...consultaInfo, nome: text })}
                        />
                        <Text style={styles.label}>Data</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite a data da consulta"
                            onChangeText={(text) => setConsultaInfo({ ...consultaInfo, data: text })}
                        />
                        <Text style={styles.label}>Horário</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Digite o horário da consulta"
                            onChangeText={(text) => setConsultaInfo({ ...consultaInfo, horario: text })}
                        />
                        <Button title="Salvar Consulta" onPress={handleSalvarConsulta} />
                    </View>
                </View>
            </Modal>
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
        marginLeft: 130,
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
        marginLeft: 60,
    },
    consultaList: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
        display: 'flex',
    },
    consultaItem: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        backgroundColor: "#c9c9c9",
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    label: {
        fontSize: 17,
        marginBottom: 5,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
});