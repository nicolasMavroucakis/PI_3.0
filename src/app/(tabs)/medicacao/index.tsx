import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import stylesMedicacao from "../../styles/stylesMedicacao";
import { useState } from "react";

export default function Medicacao() {
    const [medicacao, setMedicacao] = useState([
        { hora: "8:00", nome: "Losartana", quantidade: "150ml", alarme: true, discricao: "Remédio de uso oral" },
        { hora: "8:00", nome: "Losartana", quantidade: "150ml", alarme: true, discricao: "Remédio de uso oral" },
        { hora: "8:00", nome: "Losartana", quantidade: "150ml", alarme: true, discricao: "Remédio de uso oral" }
    ]);

    return (
        <View style={{ flex: 1 }}>
            <View style={stylesMedicacao.header}>
                <View style={stylesMedicacao.headerText}>
                    <Text style={{ fontSize: 30 }}>
                        Medicação
                    </Text>
                </View>
                <View style={stylesMedicacao.headerButton}>
                    <TouchableOpacity style={stylesMedicacao.buttonAdd}>
                        <AntDesign name="plus" size={28} color="white" />
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={stylesMedicacao.medicacaoesContainer}>
                    {medicacao.map((medicamento, index) => (
                        <View key={index} style={stylesMedicacao.containerTextActive}>
                            <View style={stylesMedicacao.textView}>
                                <Text style={{ fontSize: 20 }}>Remédio: {medicamento.nome}</Text>
                            </View>
                            <View style={stylesMedicacao.medicacoesInfromacoes}>
                                <View>
                                    <Text style={{ fontSize: 16 }}>Hora: {medicamento.hora}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 16 }}>Discrição: {medicamento.discricao}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 16 }}>Quantidade: {medicamento.quantidade}</Text>
                                </View>
                                <View>
                                    <Text style={{ fontSize: 16 }}>Alarme: {medicamento.alarme ? "Ativo" : "Inativo"}</Text>
                                </View>
                                <TouchableOpacity>
                                    <AntDesign name="arrowup"/>
                                </TouchableOpacity>
                            </View>
                        </View>
                    ))}
                </View>
            </ScrollView>
        </View>
    )
}
