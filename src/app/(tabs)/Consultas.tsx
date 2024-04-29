import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

export default function Consultas() {
    const [modalVisible, setModalVisible] = useState(false);
    const [consultas, setConsultas] = useState([]);
    const [consultaInfo, setConsultaInfo] = useState({
        nome: '',
        data: '',
        horario: ''
    });
    const [consultaSelecionada, setConsultaSelecionada] = useState(null);

    const handleSalvarConsulta = () => {
        const novaConsulta = {
            nome: consultaInfo.nome,
            data: consultaInfo.data,
            horario: consultaInfo.horario
        };
        setConsultas([...consultas, novaConsulta]);
        setModalVisible(false);
    };

    const toggleDetalhesConsulta = (consulta) => {
        setConsultaSelecionada(consultaSelecionada === consulta ? null : consulta);
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

            <View style={styles.consultaList}>
                {consultas.map((consulta, index) => (
                    <TouchableOpacity key={index} onPress={() => toggleDetalhesConsulta(consulta)} style={styles.consultaItem}>
                        <Text>{consulta.nome}</Text>
                        {consultaSelecionada === consulta && (
                            <View style={styles.detalhesConsulta}>
                                <Text>Data: {consulta.data}</Text>
                                <Text>Horário: {consulta.horario}</Text>
                            </View>
                        )}
                    </TouchableOpacity>
                ))}
            </View>

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
                        <TouchableOpacity style={styles.arrowButton} onPress={() => setModalVisible(false)}>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
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
        marginTop: 20,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: '500',
        marginLeft: '28%'
    },
    img: {
        padding: 10,
        margin: 4,
        marginLeft: '61%'
    },
    addButton: {
        backgroundColor: '#A1D5B0',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    consultaList: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
        display: 'flex',
        fontSize: 40
    },
    consultaItem: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        backgroundColor: "#c9c9c9",
    },
    detalhesConsulta: {
        backgroundColor: "#c9c9c9",
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
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
        fontSize: 20,
    },
    arrowButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});
