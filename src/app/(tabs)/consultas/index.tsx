import React, { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Image } from "react-native";
import { useNavigation } from "@react-navigation/native"; 
import { Link } from "expo-router";
import { GlobalContext } from "../../context/aaaa";
import Header from "../../components/Header";
import stylesMedicacao from "../../styles/stylesMedicacao";

export default function Consulta() {
    const { consulta, setConsulta } = useContext(GlobalContext);
    const [reload, setReload] = useState(false);
    const navigation = useNavigation();
    const { usuario, setUsuario } = useContext(GlobalContext);
    const { modoEscuro } = useContext(GlobalContext);

    useEffect(() => {
        const unsubscribe = navigation.addListener('focus', () => {
            setReload(prevState => !prevState);
        });

        return unsubscribe;
    }, [navigation]);

    const handleDelete = (index) => {
        const updatedConsultas = consulta.filter((_, i) => i !== index);
        setConsulta(updatedConsultas);
    };

    const handlePress = (index) => {
        const updatedConsultas = [...consulta];
        updatedConsultas[index].grande = !updatedConsultas[index].grande;
        setConsulta(updatedConsultas);
    };

    return !modoEscuro ? (
        <View style={{ flex: 1 }}>
            <Header/>
            <View style={stylesMedicacao.header}>
                <View style={stylesMedicacao.headerText}>
                    <Text style={{ fontSize: 30 }}>Consulta</Text>
                </View>
                <View style={stylesMedicacao.headerButton}>
                    <TouchableOpacity style={stylesMedicacao.buttonAdd}>
                        <Link href={'../../consultaStack'}>
                            <AntDesign name="plus" size={28} color="white" />
                        </Link>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={stylesMedicacao.medicacaoesContainer}>       
                    {consulta.map((consulta, index) => {
                        if (consulta.grande) {
                            return (
                                <View key={consulta.key} style={stylesMedicacao.containerTextActive}> 
                                    <View style={stylesMedicacao.medicacoesInfromacoes}>
                                        <View>
                                            <Text style={{ fontSize: 16 }}>Nome Consulta: {consulta.nomeConsulta}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 16 }}>Médico: {consulta.nome}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 16 }}>Data: {consulta.data}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 16 }}>Hora: {consulta.hora}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 16 }}>Local: {consulta.local}</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity onPress={() => handleDelete(index)}>
                                                <Image style={stylesMedicacao.lixoImage} source={require('../../../../assets/excluir.png')}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={stylesMedicacao.a}>
                                            <TouchableOpacity onPress={() => handlePress(index)}>
                                                <Image style={stylesMedicacao.arrowImage} source={require('../../../../assets/seta-direita.png')} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        } else {
                            return (
                                <View style={stylesMedicacao.medicacaoContainerPequeno}> 
                                    <View style={stylesMedicacao.textView}>
                                        <Text style={{ fontSize: 20 }}>{consulta.nomeConsulta} : {consulta.data}</Text>
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
    ) : (
        <View style={{ flex: 1, backgroundColor:"#1C1C1E" }}>
            <Header/>
            <View style={stylesMedicacao.header}>
                <View style={stylesMedicacao.headerText}>
                    <Text style={{ fontSize: 30, color:"white" }}>Consulta</Text>
                </View>
                <View style={stylesMedicacao.headerButton}>
                    <TouchableOpacity style={stylesMedicacao.buttonAdd}>
                        <Link href={'../../consultaStack'}>
                            <AntDesign name="plus" size={28} color="white" />
                        </Link>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
                <View style={stylesMedicacao.medicacaoesContainerDark}>       
                    {consulta.map((consulta, index) => {
                        if(consulta.grande) {
                            return (
                                <View key={consulta.key} style={stylesMedicacao.containerTextActive}>     
                                    <View style={stylesMedicacao.medicacoesInfromacoes}>
                                        <View>
                                            <Text style={{ fontSize: 20, color: "black" }}>Nome Consulta: {consulta.nomeConsulta}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 20, color: "black" }}>Médico: {consulta.nome}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 16, color: "black" }}>Data: {consulta.data}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 16, color: "black" }}>Hora: {consulta.hora}</Text>
                                        </View>
                                        <View>
                                            <Text style={{ fontSize: 16, color: "black" }}>Local: {consulta.local}</Text>
                                        </View>
                                        <View>
                                            <TouchableOpacity onPress={() => handleDelete(index)}>
                                                <Image style={stylesMedicacao.lixoImage} source={require('../../../../assets/excluir.png')}/>
                                            </TouchableOpacity>
                                        </View>
                                        <View style={stylesMedicacao.a}>
                                            <TouchableOpacity onPress={() => handlePress(index)}>
                                                <Image style={stylesMedicacao.arrowImage} source={require('../../../../assets/seta-direita.png')} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            )
                        } else {
                            return (
                                <View style={stylesMedicacao.medicacaoContainerPequeno}> 
                                    <View style={stylesMedicacao.textView}>
                                        <Text style={{ fontSize: 20 }}>{consulta.nomeConsulta} : {consulta.data}</Text>
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
    );
}
