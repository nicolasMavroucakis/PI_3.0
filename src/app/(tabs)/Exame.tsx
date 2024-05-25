import { View, Text, Button, Image } from "react-native";
import { Link } from "expo-router";
import stylesExame from "../styles/styleExame";
import React, { useContext } from "react";
import { GlobalContext } from "../context/aaaa";

export default function Perfil() {
    const { usuario, modoEscuro } = useContext(GlobalContext);

    return (
        modoEscuro ? (
            <View>
                <View style={stylesExame.divUsuario} >
                    <View style={{ marginLeft: 10 }}>
                        <Link href={"../../configuracoes"} style={{color:"white"}}>
                            <View>
                                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/configuracoes.png")} />
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
                <View style={stylesExame.viewPrincipalDark}>
                    <Link href={"../sign_log_pass"}>Cadastro</Link>
                </View>
            </View>
        ) : (
            <View>
                <View style={stylesExame.divUsuario} >
                    <View style={{ marginLeft: 10 }}>
                        <Link href={"../../configuracoes"}>
                            <View>
                                <Image style={{ width: 30, height: 30 }} source={require("../../../assets/configuracoes.png")} />
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
    );
}
