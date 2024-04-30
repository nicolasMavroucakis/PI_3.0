import React from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import stylesMedicacao from "../../styles/stylesMedicacao";
import { useState } from "react";
import { Image } from "react-native";

export default function Medicacao() {
    const [medicacao, setMedicacao] = useState([
        { hora: "8:00", nome: "Losartana", quantidade: "150ml", alarme: true, discricao: "Remédio de uso anal", grande: false },
        { hora: "8:00", nome: "Losartana", quantidade: "150ml", alarme: true, discricao: "Remédio de uso anal", grande: true },
        { hora: "8:00", nome: "Losartana", quantidade: "150ml", alarme: true, discricao: "Remédio de uso anal", grande: true }
    ]);

    const handlePress = (index) => {
        const updatedMedicacao = [...medicacao]
        const novoValorGrande = !updatedMedicacao[index].grande
        updatedMedicacao[index] = { ...updatedMedicacao[index], grande: novoValorGrande }
        setMedicacao(updatedMedicacao)
    }

    const handleDelete = (index) => {
        console.log("Index a ser excluído:", index); // Verifica o índice
        const updatedMedicacao = medicacao.filter((_, i) => i !== index);
        console.log("Medicação atualizada:", updatedMedicacao); // Verifica o array de medicacao atualizado
        setMedicacao(updatedMedicacao);
    }
    
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
                    {medicacao.map((medicamento, index) => {  
                        if (medicamento.grande) {
                            return (
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
                                        <View>
                                            <TouchableOpacity onPress={() => handleDelete(index)}>
                                                <Image style={stylesMedicacao.lixoImage}source={require('../../../../assets/excluir.png')}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={stylesMedicacao.a}>
                                            <TouchableOpacity onPress={() => handlePress(index)}>
                                                <Image style={stylesMedicacao.arrowImage} source={require('../../../../assets/seta-direita.png')} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            );
                        } else {
                            return (
                                <View style={stylesMedicacao.medicacaoContainerPequeno}> 
                                    <View style={stylesMedicacao.textView}>
                                        <Text style={{ fontSize: 20 }}>{medicamento.nome} : {medicamento.hora}</Text>
                                    </View>
                                    <View style={stylesMedicacao.a}>
                                            <TouchableOpacity onPress={() => handlePress(index)}>
                                                <Image source={require('../../../../assets/seta-direita.png')} style={stylesMedicacao.arrowImageHorizontal}/>
                                            </TouchableOpacity>
                                    </View>
                                </View>
                            )
                        }
                    })}
                </View>

            </ScrollView>
        </View>
    )
}
