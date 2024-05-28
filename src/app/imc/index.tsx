import React, { useContext, useState } from "react";
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Button, Image } from "react-native";
import { useNavigation } from "expo-router";
import { GlobalContext } from "../context/aaaa";
import styleMedicacaoAdiciona from "../styles/styleMedicacaoAdiciona";
import { Dimensions } from "react-native";

export default function IMC() {
    const { modoEscuro} = useContext(GlobalContext);
    const navigation = useNavigation();

    const handleVoltar = () => {
        navigation.goBack();
    };

    const [idadeIMC, setIdadeIMC] = useState('')
    const [alturaIMC, setAlturaIMC] = useState('')
    const [pesoIMC, setPesoIMC] = useState('')
    const [imc, setImc] = useState(null)
    const [classIMC, setclassIMC] = useState('')

    const calculoIMC = () => {
        const valorImc = (parseFloat(pesoIMC) / (parseFloat(alturaIMC) * parseFloat(alturaIMC))).toFixed(2)
        setImc(valorImc)
    }

    const classificacao = () => {
        if (imc <= 16.9) setclassIMC('Muito abaixo do peso') 
        else if (17 < imc && imc <= 18.9) setclassIMC('Abaixo do peso') 
        else if (18.5 <= imc && imc <= 24.9) setclassIMC('Peso normal') 
        else if (25 <= imc && imc <= 29.9) setclassIMC('Acima do peso') 
        else if (30 <= imc && imc <= 34.9) setclassIMC('Obesidade grau I') 
        else if (35 <= imc && imc <= 40.0) setclassIMC('Obesidade grau II') 
        else setclassIMC('Obesidade grau III')
    }

    const tudo = () => {
        calculoIMC()
        classificacao()
    }

    return !modoEscuro ? (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <View>
                    <TouchableOpacity onPress={handleVoltar}>
                        <Image
                            source={require("../../../assets/seta-direita.png")}
                            style={styleMedicacaoAdiciona.ButtonVoltaClaro}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styleMedicacaoAdiciona.center}>
                    <Text style={{ fontSize: 40, paddingBottom: 10, width: Dimensions.get('window').width * 0.75, textAlign: 'center' }}>Calcule seu IMC</Text>
                    <View>
                        <Text style={{ fontSize: 20 }}>Idade:</Text>
                        <TextInput placeholder=" 27 anos" style={styleMedicacaoAdiciona.input} value={idadeIMC} onChangeText={text => setIdadeIMC(text)} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20 }}>Altura:</Text>
                        <TextInput placeholder=" 1.82m" style={styleMedicacaoAdiciona.input} value={alturaIMC} onChangeText={text => setAlturaIMC(text)} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20 }}>Peso:</Text>
                        <TextInput placeholder=" 100kg" style={styleMedicacaoAdiciona.input} value={pesoIMC} onChangeText={text => setPesoIMC(text)} />
                    </View>
                    <View style={styleMedicacaoAdiciona.ButtonViewStyle}>
                        <Button title="Calcular IMC" color={'black'} onPress={tudo}/>
                    </View>
                    <View>
                        <Text style={{marginTop:30, fontSize: 20,textAlign:"center"}}>Seu Resultado:</Text>
                        <Text style={{textAlign:"center", fontSize: 20, padding:5}}>{imc} - {classIMC}</Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    ) : (
        <KeyboardAvoidingView style={{ flex: 1, backgroundColor: "#1C1C1E" }} behavior="padding">
            <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <View>
                    <TouchableOpacity onPress={handleVoltar}>
                        <Image
                            source={require("../../../assets/setaBranca.png")}
                            style={styleMedicacaoAdiciona.ButtonVolta}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styleMedicacaoAdiciona.center}>
                    <Text style={{ fontSize: 40, paddingBottom: 10, width: Dimensions.get('window').width * 0.75, textAlign: 'center', color:'white' }}>Calcule seu IMC</Text>
                    <View>
                        <Text style={{ fontSize: 20, color:'white' }}>Idade:</Text>
                        <TextInput placeholder=" 27 anos" style={styleMedicacaoAdiciona.input} value={idadeIMC} onChangeText={text => setIdadeIMC(text)} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, color:'white' }}>Altura:</Text>
                        <TextInput placeholder=" 1.82m" style={styleMedicacaoAdiciona.input} value={alturaIMC} onChangeText={text => setAlturaIMC(text)} />
                    </View>
                    <View>
                        <Text style={{ fontSize: 20, color:'white' }}>Peso:</Text>
                        <TextInput placeholder=" 100kg" style={styleMedicacaoAdiciona.input} value={pesoIMC} onChangeText={text => setPesoIMC(text)} />
                    </View>
                    <View style={styleMedicacaoAdiciona.ButtonViewStyle}>
                        <Button title="Calcular IMC" color={'black'} onPress={tudo}/>
                    </View>
                    <View>
                        <Text style={{marginTop:30, fontSize: 20,textAlign:"center"}}>Seu Resultado:</Text>
                        <Text style={{textAlign:"center", fontSize: 20, padding:5}}>{imc} - {classIMC}</Text>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}
