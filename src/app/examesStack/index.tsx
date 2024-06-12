import { SafeAreaView } from "react-native-safe-area-context";
import { View, Text, ScrollView } from "react-native";
import { GlobalContext } from "../context/aaaa";
import { useContext } from "react";
import React from "react";
import Header from "../components/Header";
import { Link } from "expo-router";
import styleExamesStack from "../styles/styleExamesStack";
import { TouchableOpacity } from "react-native";
import { Image } from "react-native";
import styleMedicacaoAdiciona from "../styles/styleMedicacaoAdiciona";
import { useRouter } from "expo-router";

export default function ExamesStack() {
    const { modoEscuro } = useContext(GlobalContext);

    const router = useRouter();
    
    const handleVoltar = () => { 
        router.back();
      };

    return (
        <View style={{ flex: 1, height:"100%" }}>
            <Header />
            <View style={{ flex: 1 }}>
                {!modoEscuro ? (
                    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", backgroundColor: "#FFFFFF" }}>
                        <View>
                            <TouchableOpacity onPress={handleVoltar}>
                                    <Image
                                    source={require("../../../assets/setaBranca.png")}
                                    style={styleMedicacaoAdiciona.ButtonVolta}
                                    />
                            </TouchableOpacity>
                        </View>
                        <View style={styleExamesStack.viewTextoPrincipal}>
                            <Text style={styleExamesStack.textoPrincipalWhite}>Modo de Adicionar Exames</Text>
                        </View>
                        <View style={styleExamesStack.viewSelecionaEscolha}>
                            <View style={styleExamesStack.linkEscolha}>
                                <Link href={"./manualmente"} style={{color: "white", fontSize: 20}}>
                                    Manualmente
                                </Link>
                            </View>
                            <Text style={{color: "white"}}>Ou</Text>
                            <View style={styleExamesStack.linkEscolha}>
                                <Link href={"./ImageTextExtractor"} style={{color: "white", fontSize: 20}}>
                                    Scanner
                                </Link>
                            </View>
                        </View>
                    </ScrollView>
                ) : (
                    <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: 'center', backgroundColor: "#1C1C1E" }}>
                        <View>
                            <TouchableOpacity onPress={handleVoltar}>
                                    <Image
                                    source={require("../../../assets/setaBranca.png")}
                                    style={styleMedicacaoAdiciona.ButtonVolta}
                                    />
                            </TouchableOpacity>
                        </View>
                        <View style={styleExamesStack.viewTextoPrincipal}>
                            <Text style={styleExamesStack.textoPrincipal}>Modo de Adicionar Exames</Text>
                        </View>
                        <View style={styleExamesStack.viewSelecionaEscolha}>
                            <View style={styleExamesStack.linkEscolha}>
                                <Link href={"./manualmente"} style={{color: "white"}}>
                                    Manualmente
                                </Link>
                            </View>
                            <Text style={{color: "white"}}>Ou</Text>
                            <View style={styleExamesStack.linkEscolha}>
                                <Link href={"./ImageTextExtractor"} style={{color: "white"}}>
                                    Scanner
                                </Link>
                            </View>
                        </View>
                    </ScrollView>
                )}
            </View>
        </View>
    )
}
