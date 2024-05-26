import React, { useContext, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Button, Image } from "react-native";
import styleMedicacaoAdiciona from "../styles/styleMedicacaoAdiciona";
import { useNavigation } from "expo-router";
import { GlobalContext } from "../context/aaaa";

export default function MedicacaoAdd() {
    const [nome, setNome] = useState("");
    const [quantidade, setQuantidade] = useState("");
    const [hora, setHora] = useState("");
    const [descricao, setDescricao] = useState("");
    const [onOff, setOnOff] = useState(true);

    const { medicacao, setMedicacao } = useContext(GlobalContext);
    const {modoEscuro} = useContext(GlobalContext)
    const navigation = useNavigation();

    const toggleAlarm = () => {
        setOnOff(!onOff);
    };

    const handleVoltar = () => {
        navigation.goBack();
    };

    const handleAddMedicacao = () => {
        const novoMedicamento = {
            nome: nome,
            quantidade: quantidade,
            hora: hora,
            descricao: descricao,
            alarme: onOff,
            grande: false,
            key: Date.now().toString()
        };
        setMedicacao(medicacao => {
            const updatedMedicacao = [...medicacao, novoMedicamento];
            console.log("Medicação antes:", medicacao);
            console.log("Medicação adicionada:", novoMedicamento);
            console.log("Medicação atualizada:", updatedMedicacao);
            console.warn("medicacao atulizada, volte para ver")
            return updatedMedicacao; 
        });
    };

    return !modoEscuro ? (
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
                        <Text style={{ fontSize: 20 }}>Quantidade:</Text>
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
                        <Button title="Adicionar" color={'black'} onPress={handleAddMedicacao}/>
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
                        <Text style={{ fontSize: 40, paddingBottom: 10, color: "white" }}>Adicionar Medicamento</Text>
                        <View>
                            <Text style={{ fontSize: 20, color: "white" }}>Medicação:</Text>
                            <TextInput style={styleMedicacaoAdiciona.input} value={nome} onChangeText={setNome} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, color: "white" }}>Quantidade:</Text>
                            <TextInput style={styleMedicacaoAdiciona.input} value={quantidade} onChangeText={setQuantidade} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, color: "white" }}>Hora:</Text>
                            <TextInput style={styleMedicacaoAdiciona.input} value={hora} onChangeText={setHora} />
                        </View>
                        <View>
                            <Text style={{ fontSize: 20, color: "white" }}>Descrição:</Text>
                            <TextInput style={styleMedicacaoAdiciona.input} value={descricao} onChangeText={setDescricao} />
                        </View>
                        <View style={styleMedicacaoAdiciona.esquerda}>
                            <Text style={{ fontSize: 20, color: "white" }}>Alarme</Text>
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
                            <Button title="Adicionar" color={'black'} onPress={handleAddMedicacao}/>
                        </View>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
    )
}
