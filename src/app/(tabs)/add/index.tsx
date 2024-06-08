import { View, Text,  TouchableOpacity } from "react-native";
import React, { useContext } from "react";
import styleAdiciona from "../../styles/styleAdicionaar";
import { Button } from "react-native-paper";
import { useNavigation, Link } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import stylesMedicacao from "../../styles/stylesMedicacao";
import { GlobalContext } from "../../context/aaaa";
import Header from "../../components/Header";

export default function Add() {
    const {modoEscuro} = useContext(GlobalContext)

    return modoEscuro ? (
        <View style={{backgroundColor: '#1C1C1E', flex: 1}}>
            <Header/>
            <View>
                <View style={styleAdiciona.textPrincipla}>
                    <Text style={{fontSize: 40, color: 'white'}}>
                        Adicionar
                    </Text>
                </View>
                <View style={styleAdiciona.viewsAdicionar}>
                    <View style={styleAdiciona.viewsAdicionar}>
                        <View style={styleAdiciona.escolha}>
                            <View style={styleAdiciona.textEscolha}>
                                <Text>Medicamento</Text>
                            </View>
                            <View style={stylesMedicacao.headerButton}>
                                <TouchableOpacity style={stylesMedicacao.buttonAdd}>
                                    <Link href={'../../medicacaoStack'}>
                                        <AntDesign name="plus" size={28} color="white" />
                                    </Link>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styleAdiciona.escolha}>
                            <View style={styleAdiciona.textEscolha}>
                                <Text>Consulta</Text>
                            </View>
                            <View style={stylesMedicacao.headerButton}>
                                <TouchableOpacity style={stylesMedicacao.buttonAdd}>
                                    <Link href={'../../consultaStack'}>
                                        <AntDesign name="plus" size={28} color="white" />
                                    </Link>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={styleAdiciona.escolha}>
                            <View style={styleAdiciona.textEscolha}>
                                <Text>Exames</Text>
                            </View>
                            <View style={stylesMedicacao.headerButton}>
                                <TouchableOpacity style={stylesMedicacao.buttonAdd}>
                                    <Link href={'../../examesStack'}>
                                        <AntDesign name="plus" size={28} color="white" />
                                    </Link>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    ) : (
        <View style={{justifyContent:'center', alignItems:'center'}}>
            <View style={styleAdiciona.textPrincipla}>
                <Text style={{fontSize: 40, }}>
                    Adicionar
                </Text>
            </View>
            <View style={styleAdiciona.viewsAdicionar}>
                <View style={styleAdiciona.viewsAdicionar}>
                    <View style={styleAdiciona.escolha}>
                        <View style={styleAdiciona.textEscolha}>
                            <Text>Medicamento</Text>
                        </View>
                        <View style={stylesMedicacao.headerButton}>
                            <TouchableOpacity style={stylesMedicacao.buttonAdd}>
                                <Link href={'../../medicacaoStack'}>
                                    <AntDesign name="plus" size={28} color="white" />
                                </Link>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styleAdiciona.escolha}>
                        <View style={styleAdiciona.textEscolha}>
                            <Text>Consulta</Text>
                        </View>
                        <View style={stylesMedicacao.headerButton}>
                            <TouchableOpacity style={stylesMedicacao.buttonAdd}>
                                <Link href={'../../consultaStack'}>
                                    <AntDesign name="plus" size={28} color="white" />
                                </Link>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styleAdiciona.escolha}>
                        <View style={styleAdiciona.textEscolha}>
                            <Text>Exames</Text>
                        </View>
                        <View style={stylesMedicacao.headerButton}>
                            <TouchableOpacity style={stylesMedicacao.buttonAdd}>
                                <Link href={'../../examesStack'}>
                                    <AntDesign name="plus" size={28} color="white" />
                                </Link>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
