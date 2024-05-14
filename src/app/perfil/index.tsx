
import {Image, Text, View, TextInput, Button, Dimensions, TouchableOpacity, KeyboardAvoidingView, ScrollView} from "react-native";
import { Link } from 'expo-router';
import stylePerfil from "../styles/stylePerfil";
import auth from 'firebase/database';
import StartFirebase from '../../crud/firebaseConfig';
import { useState } from 'react';
import React from "react";
import { useNavigation } from '@react-navigation/native';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export default function Perfil(){

    const navigation = useNavigation();

    const handleVoltar = () => {
      navigation.goBack();
    };

    return (
        <View>
            <View style={stylePerfil.TitleImg}>
              <View style={{display:"flex",flexDirection:"row",justifyContent:"flex-start",width:screenWidth * 1,alignItems:"flex-start"}}>
                <View style={{display:"flex",flexDirection:"row", justifyContent:"space-between",width:screenWidth * 0.5, alignItems:"center",marginLeft:screenWidth * 0.05}}>
                  <View>
                    <TouchableOpacity onPress={handleVoltar} style={stylePerfil.goBackDiv}>
                      <Image source={require('../../../assets/seta-direita.png')} style={stylePerfil.goBack}/>
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
                <TextInput placeholder="Nome" textContentType="name" style={[stylePerfil.InputStyle, { width:screenWidth * 0.75  }]} />
                <TextInput placeholder="E-mail" textContentType="emailAddress" style={[stylePerfil.InputStyle, { width:screenWidth * 0.75 }]} />
                <TextInput placeholder="Nascimento" textContentType="birthdateYear" style={[stylePerfil.InputStyle, { width:screenWidth * 0.75 }]} />
                <TextInput placeholder="Senha" textContentType="password" style={[stylePerfil.InputStyle, { width:screenWidth * 0.75 }]}/>
                <TextInput placeholder="Altura" style={[stylePerfil.InputStyle, { width:screenWidth * 0.75 }]} />
                <TextInput placeholder="Peso" style={[stylePerfil.InputStyle, { width:screenWidth * 0.75 }]} />
              </View>
          <View style={stylePerfil.TelaDisplay}>
            <View style={[stylePerfil.ButtonViewStyle, { width:screenWidth * 0.75 }]}>
                <Link href={"../(tabs)"} asChild style={{width:"100%", height:"100%"}}>
                <Button title="Cadastrar" color={'black'} />
                </Link>
            </View>
          </View>
        </View>
    )
}
