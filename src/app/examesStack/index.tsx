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

    const renderContent = () => {
        const backgroundColor = modoEscuro ? "#1C1C1E" : "#FFFFFF";
        const textColor = modoEscuro ? "white" : "black";
        const setaImage = modoEscuro
            ? require("../../../assets/setaBranca.png")
            : require("../../../assets/seta-direita.png");
        const buttonVoltaStyle = modoEscuro
            ? styleMedicacaoAdiciona.ButtonVolta
            : styleMedicacaoAdiciona.ButtonVoltaClaro;
        const textoPrincipalStyle = modoEscuro
            ? styleExamesStack.textoPrincipal
            : styleExamesStack.textoPrincipalWhite;

        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1, backgroundColor }}>
                <View style={{ alignItems: 'flex-start' }}>
                    <TouchableOpacity onPress={handleVoltar}>
                        <Image source={setaImage} style={buttonVoltaStyle} />
                    </TouchableOpacity>
                </View>
                <View style={{alignItems:'center'}}>
                    <View style={styleExamesStack.viewTextoPrincipal}>
                        <Text style={textoPrincipalStyle}>Modo de Adicionar Exames</Text>
                    </View>
                    <View style={styleExamesStack.viewSelecionaEscolha}>
                        <View style={styleExamesStack.linkEscolha}>
                            <Link href={"./manualmente"} style={{ color: textColor, fontSize: 20 }}>
                                Manualmente
                            </Link>
                        </View>
                        <Text style={{ color: textColor }}>Ou</Text>
                        <View style={styleExamesStack.linkEscolha}>
                            <Link href={"./ImageTextExtractor"} style={{ color: textColor, fontSize: 20 }}>
                                Scanner
                            </Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    };

    return (
        <View style={{ flex: 1, height: "100%" }}>
            <Header />
            <View style={{ flex: 1 }}>
                {renderContent()}
            </View>
        </View>
    );
}
