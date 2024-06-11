import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { Link } from "expo-router";
import stylesExame from "../../styles/styleExame";
import React, { useContext } from "react";
import { GlobalContext } from "../../context/aaaa";
import Header from "../../components/Header";
import stylesMedicacao from "../../styles/stylesMedicacao";
import styleHome from "../../styles/styleHome";

export default function Exames() {
    const { usuario, modoEscuro } = useContext(GlobalContext);

    if (usuario.nome === "" || usuario.e_mail == "") {
        return (
            <View style={styleHome.homeSecundaria}>
                <View style={styleHome.linkHomeSecundaria}>
                    <View>
                        <Text style={{fontSize: 25, textAlign: "center"}}>
                            Você ainda nao fez Login.
                        </Text>
                    </View>
                    <View style={styleHome.linkLogin}>
                        <Link href={"../../sign_log_pass/Login"} style={{textAlign:"center", fontSize: 20, color: "white"}}>
                            Login
                        </Link>
                    </View>
                </View>
            </View>
        )
    }

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
            <View style={stylesExame.viewPrincipalWhite}>
                <Link href={"../../sign_log_pass"} style={{color:"black"}}><Text>Cadastro</Text></Link>
            </View>
            <View style={{flex: 1, backgroundColor: "trasnparent"}}>
                <View style={stylesMedicacao.header}>
                    <View style={stylesMedicacao.headerText}>
                        <Text style={{ fontSize: 30, color: "black" }}>Exames</Text>
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
    )
}
