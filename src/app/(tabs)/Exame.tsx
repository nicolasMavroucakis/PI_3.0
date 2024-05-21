import { View, Text, Button, Image } from "react-native";
import { Link } from "expo-router";
import stylesExame from "../styles/styleExame";
import React from "react";
import { UsuarioContext } from "../context/generalContext";
import {useContext} from "react"

export default function Perfil() {
    const {usuario, setUsuario} = useContext(UsuarioContext)
    return (
        <View>
            <View style={stylesExame.divUsuario} >
                <View style={{marginLeft:10}}>
                    <Link href={"../../configuracoes"}>
                        <View>
                            <Image style={{width:30, height:30}} source={require("../../../assets/configuracoes.png")}/>
                        </View>
                    </Link>
                </View>
                <View style={stylesExame.divUsuario}>
                    <View style={stylesExame.containerUsuario}>
                        <Image source={require('../../../assets/user.png')} style={stylesExame.imgUsuario} />
                        <Link href={"../../perfil"} style={stylesExame.nomeUsuario}><Text>{usuario.nome}</Text></Link>
                    </View>
                </View>
            </View>
            <View>
                <Link href={"../sign_log_pass"}>Cadastro</Link>
            </View>
        </View>
        
    )
}