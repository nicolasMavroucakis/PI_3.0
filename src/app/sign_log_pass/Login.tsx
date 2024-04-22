import React, { useState } from "react";
import { TextInput, View, Button, Text, Dimensions, ScrollView, KeyboardAvoidingView, Alert } from "react-native";
import { Image } from "react-native";
import style from "./style";
import { Link } from "expo-router";
import StartFirebase from "../../crud/firebaseConfig";
import { ref, set, update, remove, get, child } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';

export default function Log_In() {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
    const inputWidth = screenWidth * 0.75
    const hrWidth = screenWidth * 0.25

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleChange = (key, value) => {
        if (key === 'email') {
            setEmail(value)   
        } else if (key === 'password') {
            setPassword(value)
        }
        console.warn(email, password)
    };

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Usuário autenticado com sucesso
                const user = userCredential.user;
                console.log("Usuário autenticado:", user);
                // Faça a navegação para a próxima tela ou execute outras ações necessárias
            })
            .catch((error) => {
                // Houve um erro durante a autenticação
                const errorCode = error.code;
                const errorMessage = error.message;
                console.warn("Erro ao autenticar:", errorMessage);
                Alert.alert('Erro', 'Credenciais inválidas. Por favor, verifique seu e-mail e senha.');
            });
    };

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
            <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent: 'center' }}>
                <View style={style.TelaDisplay}>
                    <View style={style.TitleImg}>
                        <Image source={require('../../../assets/logo.png')} />
                    </View>
                    <View>
                        <View style={style.DisplaFlex}>
                            <View style={[style.Img, { position: 'relative', left: -10 }]}>
                                <Image source={require('../../../assets/email.png')} style={{ width: 40, height: 40 }} />
                            </View>
                            <View>
                                <TextInput
                                    placeholder="E-mail"
                                    textContentType="emailAddress"
                                    style={[style.InputStyle, { width: inputWidth }]}
                                    onChangeText={(text) => handleChange('email', text)}
                                />
                            </View>
                        </View>
                        <View style={style.DisplaFlex}>
                            <View style={[style.Img, { position: 'relative', left: -8 }]}>
                                <Image source={require('../../../assets/password.png')} style={{ width: 40, height: 40 }} />
                            </View>
                            <View>
                                <TextInput
                                    placeholder="Senha"
                                    textContentType="password"
                                    style={[style.InputStyle, { width: inputWidth }]}
                                    onChangeText={(text) => handleChange('password', text)}
                                />
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end', position: 'relative', top: 10 }}>
                            <Link href={'./Password_forget'} asChild>
                                <Button title="Esqueceu a senha?" />
                            </Link>
                        </View>
                    </View>
                    <View style={[style.ButtonViewStyle, { width: inputWidth }]}>
                        <Link href={'../(tabs)'} asChild>
                            <Button title="Log In" color={'white'} onPress={() => {console.warn('Email:', email, 'Password:', password); handleLogin();}} />
                        </Link>
                    </View>
                    <View style={[style.ButtonLinkStyle, { position: 'relative', top: 15 }]}>
                        <View style={[style.Hr, { width: hrWidth }]}></View>
                        <View>
                            <Text style={{ marginLeft: 5, marginRight: 5 }}>Entre com</Text>
                        </View>
                        <View style={[style.Hr, { width: hrWidth }]}></View>
                    </View>
                    <View style={[style.ButtonViewStyle, style.ButtonGoogle, { width: inputWidth, display: 'flex', flexDirection: 'row', gap: 10 }]}>
                        <Image source={require('../../../assets/google.png')} style={{ width: 40, height: 40 }} />
                        <Link href={'../(tabs)'} asChild>
                            <Button title="Log In" color={'black'} />
                        </Link>
                    </View>
                    <View style={style.ButtonLinkStyle}>
                        <View>
                            <Text>Não Possui conta?</Text>
                        </View>
                        <View>
                            <Link href={'/sign_log_pass'} asChild>
                                <Button title="Cadastre-se" />
                            </Link>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}
