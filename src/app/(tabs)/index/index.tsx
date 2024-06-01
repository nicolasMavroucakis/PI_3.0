import React, { useContext } from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { Link } from "expo-router";
import styleHome from "../../styles/styleHome";
import { GlobalContext } from "../../context/aaaa";

export default function Home() {
    const { usuario, modoEscuro } = useContext(GlobalContext);

    return !modoEscuro ? (
        <View>
            <View style={styleHome.divUsuario}>
                <View style={{ marginLeft: 10, marginTop: 5 }}>
                    <Link href={"../../configuracoes"}>
                        <View>
                            <Image style={{ width: 30, height: 30 }} source={require("../../../../assets/configuracoes.png")} />
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
                    <Text style={styleHome.divInfo2}>{usuario.altura}m, {usuario.peso}kg</Text>
                </View>
            </View>
            <View style={styleHome.proximosEventos}>
                <Text style={[styleHome.divProximo, { color: "black" }]}>Próximos eventos</Text>
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
                        <Text style={[styleHome.statusHeader, { color: "black" }]}>IMC</Text>
                        <View>
                            <View style={styleHome.statusFooter}>
                                <Text style={styleHome.statusInfo}>{usuario.imc}</Text>
                                <Text style={styleHome.statusInfo}>{usuario.classIMC}</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styleHome.statusDiv}>
                        <Text style={[styleHome.statusHeader, { color: "black" }]}>Colesterol</Text>
                        <View style={styleHome.statusFooter}>
                            <Text style={styleHome.statusInfo}>39.5</Text>
                            <Text style={styleHome.statusInfo}>Alto</Text>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    ) : (
        <View style={{ flex: 1, backgroundColor: "#1C1C1E" }}>
            <View style={styleHome.divUsuarioDark}>
                <View style={{ marginLeft: 10, marginTop: 5 }}>
                    <Link href={"../../configuracoes"} style={{ color: "white" }}>
                        <View>
                            <Image style={{ width: 30, height: 30 }} source={require("../../../../assets/configuracoesDark.png")} />
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
                        <Text style={styleHome.divInfo2Dark}>{usuario.altura}m, {usuario.peso}kg</Text>
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
                            <View>
                                <View style={styleHome.statusFooter}>
                                    <Text style={styleHome.statusInfo}>{usuario.imc}</Text>
                                    <Text style={styleHome.statusInfo}>{usuario.classIMC}</Text>
                                </View>
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
    );
}
