import React, { useContext, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Button, Image } from "react-native";
import { useNavigation } from "expo-router";
import { GlobalContext } from "../context/aaaa";
import styleMedicacaoAdiciona from "../styles/styleMedicacaoAdiciona";
import { Dimensions } from "react-native";

export default function ConsultaAdd() {
    const [nomeConsulta, setNomeConsulta] = useState("");
    const [nome, setNome] = useState("");
    const [data, setData] = useState("");
    const [hora, setHora] = useState("");
    const [local, setLocal] = useState("");
    const { modoEscuro, consulta, setConsulta } = useContext(GlobalContext);
    const navigation = useNavigation();

    const handleVoltar = () => {
        navigation.goBack();
    };

    const handleAddConsulta = () => {
        const novaConsulta = {
            nomeConsulta: nomeConsulta,
            nome: nome,
            data: data,
            hora: hora,
            local: local,
            grande: false,
            key: Date.now().toString()
        };
        setConsulta(consultas => {
            const updatedConsultas = [...consultas, novaConsulta];
            console.log("Consultas antes:", consultas);
            console.log("Consulta adicionada:", novaConsulta);
            console.log("Consultas atualizadas:", updatedConsultas);
            console.warn("Consulta atualizada, volte para ver");
            return updatedConsultas;
        });
    };

    return !modoEscuro ? (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <View>
                    <TouchableOpacity onPress={handleVoltar}>
                        <Image
                            source={require("../../../assets/seta-direita.png")}
                            style={styleMedicacaoAdiciona.ButtonVoltaClaro}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styleMedicacaoAdiciona.center}>
                    <Text style={{ fontSize: 40, paddingBottom: 10, width: Dimensions.get('window').width * 0.75, textAlign: 'center' }}>Adicionar Consulta</Text>
                    <View>
                        <Text style={{ fontSize: 20 }}>Nome Consulta:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={nomeConsulta} onChangeText={setNomeConsulta} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20 }}>Médico:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={nome} onChangeText={setNome} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20 }}>Data:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={data} onChangeText={setData} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20 }}>Hora:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={hora} onChangeText={setHora} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20 }}>Local:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={local} onChangeText={setLocal} />
                    </View>
                    <View style={styleMedicacaoAdiciona.ButtonViewStyle}>
                        <Button title="Adicionar" color={'black'} onPress={handleAddConsulta}/>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    ) : (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#1C1C1E" }} behavior="padding">
            <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <View>
                    <TouchableOpacity onPress={handleVoltar}>
                        <Image
                            source={require("../../../assets/setaBranca.png")}
                            style={styleMedicacaoAdiciona.ButtonVolta}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styleMedicacaoAdiciona.center}>
                    <Text style={{ fontSize: 40, paddingBottom: 10, color: "white", width: Dimensions.get('window').width * 0.75, textAlign: 'center'  }}>Adicionar Consulta</Text>
                    <View>
                        <Text style={{ fontSize: 20, color: "white" }}>Nome Consulta:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={nomeConsulta} onChangeText={setNomeConsulta} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, color: "white" }}>Médico:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={nome} onChangeText={setNome} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, color: "white" }}>Data:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={data} onChangeText={setData} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, color: "white" }}>Hora:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={hora} onChangeText={setHora} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, color: "white" }}>Local:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input} value={local} onChangeText={setLocal} />
                    </View>
                    <View style={styleMedicacaoAdiciona.ButtonViewStyle}>
                        <Button title="Adicionar" color={'black'} onPress={handleAddConsulta}/>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
