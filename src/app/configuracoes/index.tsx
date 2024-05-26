import { Text, View, TouchableOpacity, Image } from "react-native";
import styleMedicacaoAdiciona from "../styles/styleMedicacaoAdiciona";
import React, { useState, useContext } from "react";
import { Link } from "expo-router";
import stylesMedicacao from "../styles/stylesMedicacao";
import styleConfiguracao from "../styles/styleConfigura";
import { useRouter } from "expo-router";
import { GlobalContext } from "../context/aaaa";

export default function Configuracoes() {
    const {modoEscuro, setModoEscuro} = useContext(GlobalContext)

    const toggleAlarm = () => {
        setModoEscuro(prevModoEscuro => !prevModoEscuro); // Alternar entre verdadeiro e falso
    }
    
    const router = useRouter();

    const handleVoltar = () => {
      setModoEscuro(modoEscuro); // Salva a alteração antes de voltar
      router.back();
    };

    return (
        <View>
            <View style={stylesMedicacao.divUsuario}>
                <View style={stylesMedicacao.containerUsuario}>
                    <Image source={require('../../../assets/user.png')} style={stylesMedicacao.imgUsuario} />
                    <Link href={"../../perfil"} style={stylesMedicacao.nomeUsuario}>Nome do Usuário</Link>
                </View>
            </View>
            <View>
                <View>
                    <TouchableOpacity onPress={handleVoltar}>
                            <Image
                            source={require("../../../assets/seta-direita.png")}
                            style={styleMedicacaoAdiciona.ButtonVolta}
                            />
                    </TouchableOpacity>
                </View>
                <View style={styleConfiguracao.viewConfig}>
                    <View style={{marginTop:10, marginBottom:30}}>
                        <Text style={{fontSize:40}}>Configurações</Text>
                    </View>
                    <View style={styleMedicacaoAdiciona.esquerda}>
                        <Text style={{fontSize:20}}>Modo Escuro</Text>
                        <TouchableOpacity style={styleMedicacaoAdiciona.alarme} onPress={toggleAlarm}>
                            {modoEscuro ? (
                                <>
                                    <View style={styleMedicacaoAdiciona.alarmeOn}/>
                                    <Text style={{marginRight:10}}>ON</Text>
                                </>
                            ) : (
                                <>
                                    <Text style={{marginLeft:5}}>OFF</Text>
                                    <View style={styleMedicacaoAdiciona.alarmeOff}/>
                                </>
                            )}
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}
