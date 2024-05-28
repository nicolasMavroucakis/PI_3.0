import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";
import stylesExame from "../../styles/styleExame";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/aaaa";
import Header from "../../components/Header";
import stylesMedicacao from "../../styles/stylesMedicacao";

export default function Perfil() {
    const { usuario, modoEscuro } = useContext(GlobalContext);
    return modoEscuro ? (
        <View style={{flex: 1}}>
            <Header/>
            <View style={stylesExame.viewPrincipalDark}>
                <Link href={"../../sign_log_pass"} style={{color:"white"}}><Text>Cadastro</Text></Link>
            </View>
            <View style={{flex: 1, backgroundColor: "#1C1C1E"}}>
                <View style={stylesMedicacao.header}>
                    <View style={stylesMedicacao.headerText}>
                        <Text style={{ fontSize: 30, color: "white" }}>Exames</Text>
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
    ) : (
        <View style={{flex: 1}}>
            <Header/>
            <View>
                <Link href={"../../sign_log_pass"}><Text>Cadastro</Text></Link>
            </View>
        </View>
    )
}
