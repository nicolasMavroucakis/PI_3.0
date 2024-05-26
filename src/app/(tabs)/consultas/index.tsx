import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Switch, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import stylesConsulta from '../../styles/stylesConsulta';
import { useNavigation } from '@react-navigation/native';
import { Link } from 'expo-router';
import { useContext } from 'react';
import { GlobalContext } from '../../context/aaaa';
import Header from '../../components/Header';

export default function Consultas({ modoEscuro, toggleModoEscuro }) {
    const [modalVisible, setModalVisible] = useState(false)
    const [consultas, setConsultas] = useState([])
    const [consultaInfo, setConsultaInfo] = useState({
        nome: '',
        data: '',
        horario: ''
    });

    const {usuario, setUsuario} =  useContext(GlobalContext)
    const [mostrarDetalhes, setMostrarDetalhes] = useState(false)

    const [excluirModalVisible, setExcluirModalVisible] = useState(false)
    const [consultaParaExcluir, setConsultaParaExcluir] = useState(null)

    const handleSalvarConsulta = () => {
        const novaConsulta = {
            nome: consultaInfo.nome,
            data: consultaInfo.data,
            horario: consultaInfo.horario
        };
        setConsultas([...consultas, novaConsulta])
        setModalVisible(false);
    };

    const toggleDetalhesConsulta = () => {
        setMostrarDetalhes(!mostrarDetalhes);
    };

    const handleExcluirConsulta = (index) => {
        setConsultaParaExcluir(index)
        setExcluirModalVisible(true)
    };

    const confirmarExclusaoConsulta = () => {
        const novasConsultas = [...consultas]
        novasConsultas.splice(consultaParaExcluir, 1)
        setConsultas(novasConsultas)
        setExcluirModalVisible(false)
    };

    const cancelarExclusaoConsulta = () => {
        setExcluirModalVisible(false)
    };

    const navigation = useNavigation()

    const handleVoltar = () => {
        navigation.goBack()
    };

    return (
        <View style={{ flex: 1, backgroundColor: modoEscuro ? '#000000' : '#FFFFFF' }}>
            <Header/>
            <View style={stylesConsulta.container}>
                <Text style={[stylesConsulta.title]}>
                    Consultas
                </Text>
                <TouchableOpacity style={stylesConsulta.addButton} onPress={() => setModalVisible(true)}>
                    <AntDesign name="plus" size={28} color="white" />
                </TouchableOpacity>
            </View>

            <View style={stylesConsulta.consultaList}>
                {consultas.map((consulta, index) => (
                    <View key={index} style={stylesConsulta.consultaItem}>
                        <View style={stylesConsulta.consultaExibition}>
                            <Text style={stylesConsulta.consultaTitle}>{consulta.nome}</Text>
                            <TouchableOpacity onPress={toggleDetalhesConsulta}>
                                <AntDesign name={mostrarDetalhes ? "down" : "right"} size={28} color="black" />
                            </TouchableOpacity>
                        </View>
                        {mostrarDetalhes && (
                            <View style={stylesConsulta.detalhesConsulta}>
                                <Text style={stylesConsulta.detalheText}>Data: {consulta.data}</Text>
                                <Text style={stylesConsulta.detalheText}>Horário: {consulta.horario}</Text>
                                <View>
                                    <TouchableOpacity onPress={() => handleExcluirConsulta(index)}>
                                        <Image style={stylesConsulta.LixoImg} source={require('../../../../assets/excluir.png')} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        )}
                    </View>
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
                            placeholderTextColor={'#C9C9C9'}
                            onChangeText={(text) => setConsultaInfo({ ...consultaInfo, nome: text })}
                        />
                        <Text style={stylesConsulta.label}>Data</Text>
                        <TextInput
                            style={stylesConsulta.input}
                            placeholder="Digite a data da consulta"
                            placeholderTextColor={'#C9C9C9'}
                            onChangeText={(text) => setConsultaInfo({ ...consultaInfo, data: text })}
                        />
                        <Text style={stylesConsulta.label}>Horário</Text>
                        <TextInput
                            style={stylesConsulta.input}
                            placeholder="Digite o horário da consulta"
                            placeholderTextColor={'#C9C9C9'}
                            onChangeText={(text) => setConsultaInfo({ ...consultaInfo, horario: text })}
                        />
                        <TouchableOpacity onPress={handleSalvarConsulta} style={[stylesConsulta.botaoSalvar, { backgroundColor: '#A1D5B0' }]}>
                            <Text style={{ color: 'black', textAlign: 'center', fontSize: 16 }}>Salvar Consulta</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={stylesConsulta.arrowButton} onPress={() => setModalVisible(false)}>
                            <AntDesign name="right" size={24} color="black" />
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>

            <Modal
                animationType="slide"
                transparent={true}
                visible={excluirModalVisible}
                onRequestClose={() => {
                    setExcluirModalVisible(false);
                }}
            >
                <View style={stylesConsulta.modalBackground}>
                    <View style={stylesConsulta.modalContent}>
                        <Text>Deseja realmente excluir esta consulta?</Text>
                        <View style={stylesConsulta.modalButtons}>
                            <TouchableOpacity style={stylesConsulta.modalButton} onPress={cancelarExclusaoConsulta}>
                                <Text>Não</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={stylesConsulta.modalButton} onPress={confirmarExclusaoConsulta}>
                                <Text>Sim</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
}
