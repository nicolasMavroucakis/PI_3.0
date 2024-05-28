import { TextInput, View, Button, Text, Dimensions, ScrollView, KeyboardAvoidingView  } from "react-native";
import { Image } from "react-native";
import style from "./style";
import { Link } from "expo-router";
import React, { useContext } from "react";
import { GlobalContext, GlobalContextProvider } from "../context/aaaa";

export default function Password_forget () {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
    const inputWidth = screenWidth * 0.75
    const {modoEscuro} = useContext(GlobalContext)

    const handleChange = (text) => {
        const email = text
        console.warn(email)
    }

    return !modoEscuro ? (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent:'center' }}>
                <View style={style.TelaDisplay}>
                    <View style={style.TitleImg}>
                        <Image source={require('../../../assets/logo.png')}/>
                    </View>
                    <View style={{width:inputWidth}}>
                        <Text style={{textAlign:'center'}}>
                            Caso tenha esquecido sua senha, coloque o e-mail da sua conta para conseguir repará-la
                        </Text>
                    </View>
                    <View style={style.ButtonLinkStyle}>
                        <View style={style.Img}>
                            <Image source={require('../../../assets/email.png')} style={{width:40, height:40}}/>
                        </View>
                        <View>
                            <TextInput placeholder="E-mail" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(e) => handleChange(e)}/>
                        </View>
                    </View>
                    <View style={[style.ButtonViewStyle, { width: inputWidth }]}>
                        <Link href={'./Login'} asChild>
                            <Button title="Enviar e-mail" color={'white'} />
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    ) : (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent:'center', backgroundColor: "#1C1C1E" }}>
                <View style={style.TelaDisplay}>
                    <View style={style.TitleImg}>
                        <Image source={require('../../../assets/logo.png')}/>
                    </View>
                    <View style={{width:inputWidth}}>
                        <Text style={{textAlign:'center', color: "white"}}>
                            Caso tenha esquecido sua senha, coloque o e-mail da sua conta para conseguir repará-la
                        </Text>
                    </View>
                    <View style={style.ButtonLinkStyle}>
                        <View style={{marginTop: 10}}>
                            <Text style={{color: 'white'}}>E-mail</Text>
                            <TextInput style={[style.InputStyleDark, { width: inputWidth, paddingLeft: 10 }]} onChangeText={(e) => handleChange(e)}/>
                        </View>
                    </View>
                    <View style={[style.ButtonViewStyle, { width: inputWidth }]}>
                        <Link href={'./Login'} asChild>
                            <Button title="Enviar e-mail" color={'white'} />
                        </Link>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}