import { View, Text, Button, Image } from "react-native";
import { Link } from "expo-router";
import stylesExame from "../styles/styleExame";
import React, { useContext } from "react";
import { GlobalContext } from "../context/aaaa";
import Header from "../components/Header";

export default function Perfil() {
    const { usuario, modoEscuro } = useContext(GlobalContext);

    return (
        modoEscuro ? (
            <View>
                <Header/>
                <View style={stylesExame.viewPrincipalDark}>
                    <Link href={"../sign_log_pass"}>Cadastro</Link>
                </View>
            </View>
        ) : (
            <View>
                <Header/>
                <View>
                    <Link href={"../sign_log_pass"}>Cadastro</Link>
                </View>
            </View>
        )
    );
}
