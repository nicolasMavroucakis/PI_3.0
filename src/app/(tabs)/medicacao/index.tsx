import React, { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import stylesMedicacao from "../../styles/stylesMedicacao";
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import { Link } from "expo-router";
import { MedicacaoContext } from "../../context/generalContext";

export default function Medicacao() {
    const { medicacao, setMedicacao } = useContext(MedicacaoContext);
    const [reload, setReload] = useState(false);
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setReload(prevState => !prevState);
        });

        return unsubscribe;
    }, [navigation]);

    const handlePress = (index) => {
        const updatedMedicacao = [...medicacao];
        const novoValorGrande = !updatedMedicacao[index].grande;
        updatedMedicacao[index] = { ...updatedMedicacao[index], grande: novoValorGrande };
        setMedicacao(updatedMedicacao);
    };

    const handleDelete = (index) => {
        const updatedMedicacao = medicacao.filter((_, i) => i !== index);
        setMedicacao(updatedMedicacao);
    };

    return (
            <View style={{ flex: 1 }}>
                <View style={stylesMedicacao.divUsuario}>
                    <View style={{marginLeft:10}}>
                        <Link href={"../../configuracoes"}>
                            <View>
                                <Image style={{width:30, height:30}} source={require("../../../../assets/configuracoes.png")}/>
                            </View>
                        </Link>
                    </View>
                    <View style={stylesMedicacao.containerUsuario}>
                        <Image source={require('../../../../assets/user.png')} style={stylesMedicacao.imgUsuario} />
                        <Link href={"../../perfil"} style={stylesMedicacao.nomeUsuario}>Nome do Usuário</Link>
                    </View>
                </View>
                <View style={stylesMedicacao.header}>
                    <View style={stylesMedicacao.headerText}>
                        <Text style={{ fontSize: 30 }}>
                            Medicação
                        </Text>
                    </View>
                    <View style={stylesMedicacao.headerButton}>
                        <TouchableOpacity style={stylesMedicacao.buttonAdd}>
                            <Link href={'../../medicacaoStack'}>
                                <AntDesign name="plus" size={28} color="white" />
                            </Link>
                        </TouchableOpacity>
                    </View>
                </View>
                <ScrollView>
                <View style={stylesMedicacao.medicacaoesContainer}>       
                        {medicacao.map((medicamento, index) => {  
                            if (medicamento.grande) {
                                return (
                                    <View key={medicamento.key} style={stylesMedicacao.containerTextActive}>
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
