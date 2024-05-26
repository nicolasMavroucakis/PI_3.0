import React, { useContext, useState, useEffect } from "react";
import { Image, Text, View, TextInput, Button, Dimensions, TouchableOpacity, ScrollView, Platform, Keyboard } from "react-native";
import { Link } from 'expo-router';
import stylePerfil from "../styles/stylePerfil";
import StartFirebase from '../../crud/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import style from "../sign_log_pass/style";
import { GlobalContext } from "../context/aaaa";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Perfil() {
    const { usuario, setUsuario } = useContext(GlobalContext);
    const navigation = useNavigation();
    const [bottomPadding, setBottomPadding] = useState(0);
    const [editar, setEditar] = useState(false);
    const [inputName, setInputName] = useState(usuario.nome);
    const [inputEmail, setInputEmail] = useState(usuario.e_mail);
    const [inputNascimento, setInputNascimento] = useState(usuario.nascimento);
    const [inputAltura, setInputAltura] = useState(usuario.altura);
    const [inputPeso, setInputPeso] = useState(usuario.peso);

    const handleVoltar = () => {
        navigation.goBack();
    }

    const handleEditar = () => { 
        setEditar(!editar);
    }

    useEffect(() => {
        const keyboardDidShowListener = Keyboard.addListener(
            "keyboardDidShow",
            ({ endCoordinates }) => {
                setBottomPadding(endCoordinates.height);
            }
        );

        const keyboardDidHideListener = Keyboard.addListener(
            "keyboardDidHide",
            () => {
                setBottomPadding(0);
            }
        );

        return () => {
            keyboardDidShowListener.remove();
            keyboardDidHideListener.remove();
        };
    }, []);

    const handleChange = (type, text) => {
        if (type === "email") {
            setInputEmail(text);
        } else if (type === "name") {
            setInputName(text);
        } else if (type === "altura") {
            setInputAltura(text);
        } else if (type === "peso") {
            setInputPeso(text);
        } else {
            setInputNascimento(text);
        }
    }

    const handleCadastrar = () => {
        setUsuario({
            ...usuario,
            nome: inputName,
            e_mail: inputEmail,
            altura: inputAltura,
            peso: inputPeso,
            nascimento: inputNascimento
        });
    }

    useEffect(() => {
        if (!editar) {
            handleCadastrar();
        }
    }, [editar]);

    return !editar ? (
        <ScrollView>
            <View>
                <View style={stylePerfil.TitleImg}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: screenWidth * 1, alignItems: "flex-start" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                            <View style={{ marginLeft: screenWidth * 0.05 }}>
                                <TouchableOpacity onPress={handleVoltar} style={stylePerfil.goBackDiv}>
                                    <Image source={require('../../../assets/seta-direita.png')} style={stylePerfil.goBack} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={stylePerfil.title}>Perfil</Text>
                            </View>
                            <View style={{ marginRight: screenWidth * 0.05 }}>
                                <TouchableOpacity onPress={handleEditar} style={stylePerfil.goBackDiv}>
                                    <Image source={require('../../../assets/ferramenta-lapis.png')} style={stylePerfil.editPen} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Image source={require('../../../assets/logo.png')} />
                </View>
            </View>
            <View style={stylePerfil.TelaDisplayText}>
                <View style={[stylePerfil.ViewTextStyle, { width: screenWidth * 0.75 }]}>
                    <View>
                        <Text style={stylePerfil.TextPrincipalStyle}>
                            Name:
                        </Text>
                    </View>
                    <View>
                        <Text style={stylePerfil.TextStyle}>
                            {usuario.nome}
                        </Text>
                    </View>
                </View>
                <View style={[stylePerfil.ViewTextStyle, { width: screenWidth * 0.75 }]}>
                    <View>
                        <Text style={stylePerfil.TextPrincipalStyle}>
                            E-mail:
                        </Text>
                    </View>
                    <View>
                        <Text style={stylePerfil.TextStyle}>
                            {usuario.e_mail}
                        </Text>
                    </View>
                </View>
                <View style={[stylePerfil.ViewTextStyle, { width: screenWidth * 0.75 }]}>
                    <View>
                        <Text style={stylePerfil.TextPrincipalStyle}>
                            Birth Date Year:
                        </Text>
                    </View>
                    <View>
                        <Text style={stylePerfil.TextStyle}>
                            {usuario.nascimento}
                        </Text>
                    </View>
                </View>
                <View style={[stylePerfil.ViewTextStyle, { width: screenWidth * 0.75 }]}>
                    <View>
                        <Text style={stylePerfil.TextPrincipalStyle}>
                            Altura:
                        </Text>
                    </View>
                    <View>
                        <Text style={stylePerfil.TextStyle}>
                            {usuario.altura}
                        </Text>
                    </View>
                </View>
                <View style={[stylePerfil.ViewTextStyle, { width: screenWidth * 0.75 }]}>
                    <View>
                        <Text style={stylePerfil.TextPrincipalStyle}>
                            Peso:
                        </Text>
                    </View>
                    <View>
                        <Text style={stylePerfil.TextStyle}>
                            {usuario.peso}
                        </Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    ) : (
        <ScrollView style={{ flex: 1, paddingBottom: bottomPadding }}>
            <View>
                <View style={stylePerfil.TitleImg}>
                    <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: screenWidth * 1, alignItems: "flex-start" }}>
                        <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: "100%", alignItems: "center" }}>
                            <View style={{ marginLeft: screenWidth * 0.05 }}>
                                <TouchableOpacity onPress={handleVoltar} style={stylePerfil.goBackDiv}>
                                    <Image source={require('../../../assets/seta-direita.png')} style={stylePerfil.goBack} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <Text style={stylePerfil.title}>Perfil</Text>
                            </View>
                            <View style={{ marginRight: screenWidth * 0.05 }}>
                                <TouchableOpacity onPress={handleEditar} style={stylePerfil.goBackDiv}>
                                    <Image source={require('../../../assets/ferramenta-lapis.png')} style={stylePerfil.editPen} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <Image source={require('../../../assets/logo.png')} />
                </View>
            </View>
            <View style={stylePerfil.TelaDisplay}>
                <TextInput
                    placeholder={usuario.nome}
                    textContentType="name"
                    style={[stylePerfil.InputStyle, { width: screenWidth * 0.75 }]}
                    onChangeText={(text) => handleChange("name", text)}
                    value={inputName}
                />
                <TextInput
                    placeholder={usuario.e_mail}
                    textContentType="emailAddress"
                    style={[stylePerfil.InputStyle, { width: screenWidth * 0.75 }]}
                    onChangeText={(text) => handleChange("email", text)}
                    value={inputEmail}
                />
                <TextInput
                    placeholder={usuario.nascimento}
                    textContentType="birthdateYear"
                    style={[stylePerfil.InputStyle, { width: screenWidth * 0.75 }]}
                    onChangeText={(text) => handleChange("nascimento", text)}
                    value={inputNascimento}
                />
                <TextInput
                    placeholder={usuario.altura}
                    style={[stylePerfil.InputStyle, { width: screenWidth * 0.75 }]}
                    onChangeText={(text) => handleChange("altura", text)}
                    value={inputAltura}
                />
                <TextInput
                    placeholder={usuario.peso}
                    style={[stylePerfil.InputStyle, { width: screenWidth * 0.75 }]}
                    onChangeText={(text) => handleChange("peso", text)}
                    value={inputPeso}
                />
            </View>
            <View style={stylePerfil.TelaDisplay}>
                <View style={[stylePerfil.ButtonViewStyle, { width: screenWidth * 0.75 }]}>
                    <Button title="Salvar" color={'black'} onPress={handleCadastrar} />
                </View>
            </View>
        </ScrollView>
    );
}
