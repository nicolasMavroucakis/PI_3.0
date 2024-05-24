import React, { useState, useEffect } from "react";
import { TextInput, View, Button, Text, Dimensions, ScrollView, KeyboardAvoidingView, Alert } from "react-native";
import { Image } from "react-native";
import style from "./style";
import { Link } from "expo-router";
import StartFirebase from "../../crud/firebaseConfig";
import { ref, set, update, remove, get, child } from 'firebase/database';
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const inputWidth = screenWidth * 0.75;
    const hrWidth = screenWidth * 0.25;

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);  // Adiciona o estado para o usuário

    // Configure the Google ID token auth request
    const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
        clientId: '590527240592-06dab1ijvft1meo0sgdte3auv2t5j7pu.apps.googleusercontent.com', // Insira o seu clientId aqui
    });

    useEffect(() => {
        if (response?.type === 'success') {
            const { id_token } = response.params;
            (async () => {
                const userInfoResponse = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${id_token}`);
                const userInfo = await userInfoResponse.json();
                setUser(userInfo);
                await AsyncStorage.setItem('user', JSON.stringify(userInfo));
            })();
        }
    }, [response]);

    const handleChange = (key, value) => {
        if (key === 'email') {
            setEmail(value);
        } else if (key === 'password') {
            setPassword(value);
        }
    };

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log("Usuário autenticado:", user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.warn("Erro ao autenticar:", errorMessage);
                Alert.alert('Erro', 'Credenciais inválidas. Por favor, verifique seu e-mail e senha.');
            });
    };

    const handleGoogleLogin = async () => {
        try {
            await promptAsync();
        } catch (error) {
            console.warn("Erro ao autenticar com o Google:", error.message);
            Alert.alert('Erro', 'Houve um erro ao autenticar com o Google.');
        }
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
                                    secureTextEntry={true}
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
                    <View style={{ alignItems: 'center', marginTop: 10 }}>
                        <Button title="Login com o Google" onPress={handleGoogleLogin} />
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
    );
}
