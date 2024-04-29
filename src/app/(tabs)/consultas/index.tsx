import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Modal, TextInput, Button } from 'react-native';
import { Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import stylesConsulta from '../../styles/stylesConsulta';

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
            <View style={stylesConsulta.header}>
                <Image style={stylesConsulta.img} source={require('../../../../assets/user.png')} />
                <Text style={stylesConsulta.headerText}>Gustavo Peres</Text>
            </View>
            <View style={stylesConsulta.container}>
                <Text style={stylesConsulta.title}>
                    Consultas
                </Text>
                <TouchableOpacity style={stylesConsulta.addButton} onPress={() => setModalVisible(true)}>
                    <AntDesign name="plus" size={28} color="white" />
                </TouchableOpacity>
            </View>

            <View style={stylesConsulta.consultaList}>
                {consultas.map((consulta, index) => (
                    <TouchableOpacity key={index} onPress={() => toggleDetalhesConsulta(consulta)} style={stylesConsulta.consultaItem}>
                        <Text>{consulta.nome}</Text>
                        {consultaSelecionada === consulta && (
                            <View style={stylesConsulta.detalhesConsulta}>
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
                <View style={stylesConsulta.modalBackground}>
                    <View style={stylesConsulta.modalContent}>
                        <Text style={stylesConsulta.label}>Nome da Consulta</Text>
                        <TextInput
                            style={stylesConsulta.input}
                            placeholder="Digite o nome da consulta"
                            onChangeText={(text) => setConsultaInfo({ ...consultaInfo, nome: text })}
                        />
                        
                        <Text style={stylesConsulta.label}>Data</Text>
                        <TextInput
                            style={stylesConsulta.input}
                            placeholder="Digite a data da consulta"
                            onChangeText={(text) => setConsultaInfo({ ...consultaInfo, data: text })}
                        />
                        <Text style={stylesConsulta.label}>Horário</Text>
                        <TextInput
                            style={stylesConsulta.input}
                            placeholder="Digite o horário da consulta"
                            onChangeText={(text) => setConsultaInfo({ ...consultaInfo, horario: text })}
                        />
                        <Button title="Salvar Consulta" onPress={handleSalvarConsulta} />
                        <TouchableOpacity style={stylesConsulta.arrowButton} onPress={() => setModalVisible(false)}>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
