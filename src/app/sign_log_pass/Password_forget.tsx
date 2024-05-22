import { TextInput, View, Button, Text, Dimensions, ScrollView, KeyboardAvoidingView  } from "react-native";
import { Image } from "react-native";
import style from "./style";
import { Link } from "expo-router";
import React from "react";

export default function Password_forget () {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
    const inputWidth = screenWidth * 0.75

    const handleChange = (text) => {
        const email = text
        console.warn(email)
    }

    return (
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
    )
}