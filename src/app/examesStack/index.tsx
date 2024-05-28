import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, Button, Image, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native";
import { GlobalContext } from "../context/aaaa";
import { useContext } from "react";
import React from "react";
import Header from "../components/Header";
import { Link } from "expo-router";
import { white } from "react-native-paper/lib/typescript/styles/themes/v2/colors";
import styleExamesStack from "../styles/styleExamesStack";

export default function examesStack () {
    const {modoEscuro} = useContext(GlobalContext)

    return !modoEscuro ? (
        <SafeAreaView>
            <View>
                <Header/>
            </View>
            <View>
                <View style={styleExamesStack.viewTextoPrincipal}>
                    <Text style={{color: "white"}}>Modo de Adicionar Exames</Text>
                </View>
                <View>
                    <View>
                        <Link href={""}>
                            <Text style={{color: "white"}}>Manualmente</Text>
                        </Link>
                    </View>
                    <View>
                        <Link href={""}>
                            <Text style={{color: "white"}}>Scanner</Text>
                        </Link>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    ) : (
        <View style={{height: "100%"}}>
            <Header/>
            <View>
                <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent: 'center', backgroundColor: "#1C1C1E" }}>
                    <View style={styleExamesStack.viewTextoPrincipal}>
                        <Text style={styleExamesStack.textoPrincipal}>Modo de Adicionar Exames</Text>
                    </View>
                    <View style={styleExamesStack.viewSelecionaEscolha}>
                        <View style={styleExamesStack.viewEscolha}>
                            <Link href={""} style={{textAlign: "center", backgroundColor:"#A1D5B0", height: "40%", paddingTop: "10%", borderRadius: 20}}>
                                <Text style={{color: "white", fontSize: 20}}>Manualmente</Text>
                            </Link>
                        </View>
                        <Text style={{color: "white"}}>
                            ou
                        </Text>
                        <View style={styleExamesStack.viewEscolha}> 
                            <Link href={""} style={{textAlign: "center", backgroundColor:"#A1D5B0", height: "40%", paddingTop: "10%", borderRadius: 20}}>
                                <Text style={{color: "white", fontSize: 20}}>Scanner</Text>
                            </Link>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
    )
}