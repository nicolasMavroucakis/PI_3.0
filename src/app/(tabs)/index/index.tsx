import { Text, View, Image, TouchableOpacity, } from "react-native";
import { Link } from "expo-router";
import styleHome from "../../styles/styleHome";
import React from "react";
import { useContext } from "react";
import { GlobalContext } from "../../context/aaaa";
import { useState } from "react";

export default function Home() {
    const {usuario, setUsuario} = useContext(GlobalContext)
    const imc = (parseFloat(usuario.altura) * parseFloat(usuario.altura)) / parseInt(usuario.peso);
    const {modoEscuro} = useContext(GlobalContext)

    return !modoEscuro ? (

        <View >
            <View style={styleHome.divUsuario}>
                <View style={{marginLeft:10,marginTop:5}}>
                    <Link href={"../../configuracoes"}>
                        <View>
                            <Image style={{width:30, height:30}} source={require("../../../../assets/configuracoes.png")}/>
                        </View>
                    </Link>
                </View>
                <View style={styleHome.containerUsuario}>
                    <Image source={require('../../../../assets/user.png')} style={styleHome.imgUsuario} />
                    <Link href={"../../perfil"} style={styleHome.nomeUsuario}><Text>{usuario.nome}</Text></Link>
                </View>
            </View>
            <View>
                <View style={styleHome.divTotal}>
                    <Image source={require('../../../../assets/user.png')} style={styleHome.imgInfo}></Image>
                    <Text style={styleHome.divInfo1}>{usuario.nome}, {usuario.idade}</Text>
                    <Text style={styleHome.divInfo2}>{usuario.altura}M, {usuario.peso}KG</Text>
                </View>
            </View>
            <View style={styleHome.proximosEventos}>
                <Text style={styleHome.divProximo}>Próximos eventos</Text>
                <View>
                    <View style={styleHome.infoProximo}>
                            <Text style={styleHome.infoProximoDetail}>Dipirona 12:00</Text>
                            <Text style={styleHome.infoProximoDetail}>10/05/24</Text>
                    </View>
                    <View style={styleHome.infoProximo}>
                        <Text style={styleHome.infoProximoDetail}>Pediatra 10:30</Text>
                        <Text style={styleHome.infoProximoDetail}>11/07/24</Text>
                    </View>
                </View>
            </View>
            <View>
                <View style={styleHome.statusDivHeader}>
                    <View style={styleHome.statusDiv}>
                        <Text style={styleHome.statusHeader}>IMC</Text>
                        <View style={styleHome.statusFooter}>
                            <Text style={styleHome.statusInfo}>{imc}</Text>
                            <Text style={styleHome.statusInfo}>Obesidade I</Text>
                        </View>
                    </View>
                    <View style={styleHome.statusDiv}>
                        <Text style={styleHome.statusHeader}>Colesterol</Text>
                        <View style={styleHome.statusFooter}>
                            <Text style={styleHome.statusInfo}>39.5</Text>
                            <Text style={styleHome.statusInfo}>Alto</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    ) : (
        <View>
            <View style={styleHome.divUsuarioDark}>
                <View style={{marginLeft:10,marginTop:5}}>
                    <Link href={"../../configuracoes"} style={{color:"white"}}>
                        <View >
                            <Image style={{width:30, height:30}} source={require("../../../../assets/configuracoesDark.png")}/>
                        </View>
                    </Link>
                </View>
                <View style={styleHome.containerUsuario}>
                    <Image source={require('../../../../assets/userDark.png')} style={styleHome.imgUsuario} />
                    <Link href={"../../perfil"} style={styleHome.nomeUsuarioDark}><Text>{usuario.nome}</Text></Link>
                </View>
            </View>
            <View style={styleHome.viewTotal}>
                <View>
                    <View style={styleHome.divTotal}>
                        <Image source={require('../../../../assets/userDark.png')} style={styleHome.imgInfo}></Image>
                        <Text style={styleHome.divInfo1Dark}>{usuario.nome}, {usuario.idade}</Text>
                        <Text style={styleHome.divInfo2Dark}>{usuario.altura}M, {usuario.peso}KG</Text>
                    </View>
                </View>
                <View style={styleHome.proximosEventos}>
                    <Text style={styleHome.divProximo}>Próximos eventos</Text>
                    <View>
                        <View style={styleHome.infoProximo}>
                                <Text style={styleHome.infoProximoDetail}>Dipirona 12:00</Text>
                                <Text style={styleHome.infoProximoDetail}>10/05/24</Text>
                        </View>
                        <View style={styleHome.infoProximo}>
                            <Text style={styleHome.infoProximoDetail}>Pediatra 10:30</Text>
                            <Text style={styleHome.infoProximoDetail}>11/07/24</Text>
                        </View>
                    </View>
                </View>
                <View>
                    <View style={styleHome.statusDivHeader}>
                        <View style={styleHome.statusDiv}>
                            <Text style={styleHome.statusHeader}>IMC</Text>
                            <View style={styleHome.statusFooter}>
                                <Text style={styleHome.statusInfo}>{imc}</Text>
                                <Text style={styleHome.statusInfo}>Obesidade I</Text>
                            </View>
                        </View>
                        <View style={styleHome.statusDiv}>
                            <Text style={styleHome.statusHeader}>Colesterol</Text>
                            <View style={styleHome.statusFooter}>
                                <Text style={styleHome.statusInfo}>39.5</Text>
                                <Text style={styleHome.statusInfo}>Alto</Text>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
