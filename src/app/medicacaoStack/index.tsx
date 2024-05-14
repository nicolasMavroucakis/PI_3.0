import React, { useState } from "react"
import { Text, View, TextInput, TouchableOpacity, ScrollView, KeyboardAvoidingView, Button } from "react-native"
import styleMedicacaoAdiciona from "../styles/styleMedicacaoAdiciona"
import { Link } from "expo-router";

export default function medicacaoAdd () {
    const [onOff, setOnOff] = useState(true);

    const toggleAlarm = () => {
        setOnOff(!onOff); // Alterna entre ligado e desligado
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent:'center'  }}>
                <View style={styleMedicacaoAdiciona.center}>
                    <Text style={{fontSize:40, paddingBottom: 10}}>Adicionar Medicamento</Text>
                    <View>
                        <Text style={{fontSize:20}}>Medicação:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input}/>
                    </View>
                    <View>
                        <Text style={{fontSize:20}}>Quantidade</Text>
                        <TextInput style={styleMedicacaoAdiciona.input}/> 
                    </View>
                    <View>
                        <Text style={{fontSize:20}}>Hora:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input}/> 
                    </View>
                    <View>
                        <Text style={{fontSize:20}}>Descrição:</Text>
                        <TextInput style={styleMedicacaoAdiciona.input}/> 
                    </View>
                    <View style={styleMedicacaoAdiciona.esquerda}>
                        <Text style={{fontSize:20}}>Alarme</Text>
                        <TouchableOpacity style={styleMedicacaoAdiciona.alarme} onPress={toggleAlarm}>
                            {onOff ? (
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
                    <View style={styleMedicacaoAdiciona.ButtonViewStyle}>
                        <Link href={'./Login'} asChild>
                            <Button title="Adicionar" color={'black'} />
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
