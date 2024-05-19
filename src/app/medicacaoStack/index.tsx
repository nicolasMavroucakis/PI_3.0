import React, { useState, useContext } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Button, Image } from "react-native";
import styleMedicacaoAdiciona from "../styles/styleMedicacaoAdiciona";
import { useNavigation, Link } from "expo-router";
import { MedicacaoContext } from "../context/generalContext";


export default function MedicacaoAdd() {
    const [nome, setNome] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [hora, setHora] = useState("");
    const [descricao, setDescricao] = useState("");
    const [onOff, setOnOff] = useState(true);

    const { medicacao, setMedicacao } = useContext(MedicacaoContext);
    const navigation = useNavigation();

    const toggleAlarm = () => {
        setOnOff(!onOff);
    };

    const handleVoltar = () => {
        navigation.goBack();
    };

    const handleAddMedicacao = () => {
        const novoMedicamento = {
            nome,
            quantidade,
            hora,
            descricao,
            alarme: onOff,
            grande: false
        };
        setMedicacao([...medicacao, novoMedicamento]);
        handleVoltar()
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <View>
                    <TouchableOpacity onPress={handleVoltar}>
                        <Image
                            source={require("../../../assets/seta-direita.png")}
                            style={styleMedicacaoAdiciona.ButtonVolta}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styleMedicacaoAdiciona.center}>
                    <Text style={{ fontSize: 40, paddingBottom: 10 }}>Adicionar Medicamento</Text>
                    <View>
                        <Text style={{ fontSize: 20 }}>Medicação:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={nome} onChangeText={setNome} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20 }}>Quantidade</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={quantidade} onChangeText={setQuantidade} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20 }}>Hora:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={hora} onChangeText={setHora} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20 }}>Descrição:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={descricao} onChangeText={setDescricao} />
                    </View>
                    <View style={styleMedicacaoAdiciona.esquerda}>
                        <Text style={{ fontSize: 20 }}>Alarme</Text>
                        <TouchableOpacity style={styleMedicacaoAdiciona.alarme} onPress={toggleAlarm}>
                            {onOff ? (
                                <>
                                    <View style={styleMedicacaoAdiciona.alarmeOn} />
                                    <Text style={{ marginRight: 10 }}>ON</Text>
                                </>
                            ) : (
                                <>
                                    <Text style={{ marginLeft: 5 }}>OFF</Text>
                                    <View style={styleMedicacaoAdiciona.alarmeOff} />
                                </>
                            )}
                        </TouchableOpacity>
                    </View>
                    <View style={styleMedicacaoAdiciona.ButtonViewStyle}>
                        <Button title="Adicionar" color={'black'} onPress={handleAddMedicacao} />
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
