import React, { useContext, useState, useEffect } from "react";
import { Image, Text, View, TextInput, Button, Dimensions, TouchableOpacity, ScrollView, Platform, Keyboard } from "react-native";
import { Link } from 'expo-router';
import stylePerfil from "../styles/stylePerfil";
import auth from 'firebase/database';
import StartFirebase from '../../crud/firebaseConfig';
import { useNavigation } from '@react-navigation/native';
import { UsuarioContext } from "../context/generalContext";


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

export default function Perfil() {
    const { usuario, setUsuario } = useContext(UsuarioContext);
    const navigation = useNavigation();
    const [bottomPadding, setBottomPadding] = useState(0);

    const handleVoltar = () => {
        navigation.goBack();
    };

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

    const editar = true;

    return !editar ? (
        <View>
            
        </View>
    ) : (
      <ScrollView style={{ flex: 1, paddingBottom: bottomPadding }}>
          <View>
              <View style={stylePerfil.TitleImg}>
                  <View style={{ display: "flex", flexDirection: "row", justifyContent: "flex-start", width: screenWidth * 1, alignItems: "flex-start" }}>
                      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between", width: screenWidth * 0.5, alignItems: "center", marginLeft: screenWidth * 0.05 }}>
                          <View>
                              <TouchableOpacity onPress={handleVoltar} style={stylePerfil.goBackDiv}>
                                  <Image source={require('../../../assets/seta-direita.png')} style={stylePerfil.goBack} />
                              </TouchableOpacity>
                          </View>
                          <View>
                              <Text style={stylePerfil.title}>Perfil</Text>
                          </View>
                      </View>
                  </View>
                  <Image source={require('../../../assets/logo.png')} />
              </View>
              <View style={stylePerfil.TelaDisplay}>
                  <TextInput placeholder={usuario.nome} textContentType="name" style={[stylePerfil.InputStyle, { width: screenWidth * 0.75 }]} />
                  <TextInput placeholder={usuario.e_mail} textContentType="emailAddress" style={[stylePerfil.InputStyle, { width: screenWidth * 0.75 }]} />
                  <TextInput placeholder={usuario.nascimento} textContentType="birthdateYear" style={[stylePerfil.InputStyle, { width: screenWidth * 0.75 }]} />
                  <TextInput placeholder={usuario.altura} style={[stylePerfil.InputStyle, { width: screenWidth * 0.75 }]} />
                  <TextInput placeholder={usuario.peso} style={[stylePerfil.InputStyle, { width: screenWidth * 0.75 }]} />
              </View>
              <View style={stylePerfil.TelaDisplay}>
                  <View style={[stylePerfil.ButtonViewStyle, { width: screenWidth * 0.75 }]}>
                      <Link href={"../(tabs)"} asChild style={{ width: "100%", height: "100%" }}>
                          <Button title="Cadastrar" color={'black'} />
                      </Link>
                  </View>
              </View>
          </View>
      </ScrollView>
    );
}
