
import {Image, Text, View, TextInput, Button, Dimensions} from "react-native";
import { Link } from 'expo-router';
import stylePerfil from "../styles/stylePerfil";
import auth from 'firebase/database';
import StartFirebase from '../../crud/firebaseConfig';
import { useState } from 'react';

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

export default function Perfil(){
    return (
        <View>
            <View style={stylePerfil.TitleImg}>
            <Text style={stylePerfil.title}>Perfil</Text>
            <Image source={require('../../../assets/logo.png')} />
          </View>
          <View style={stylePerfil.TelaDisplay}>
            <TextInput placeholder="Nome" style={[stylePerfil.InputStyle, { width:screenWidth * 0.75  }]} />
            <TextInput placeholder="E-mail" textContentType="emailAddress" style={[stylePerfil.InputStyle, { width:screenWidth * 0.75 }]} />
            <TextInput placeholder="Nascimento" textContentType="birthdateYear" style={[stylePerfil.InputStyle, { width:screenWidth * 0.75 }]} />
            <TextInput placeholder="Senha" textContentType="password" style={[stylePerfil.InputStyle, { width:screenWidth * 0.75 }]}/>
            <TextInput placeholder="Altura" style={[stylePerfil.InputStyle, { width:screenWidth * 0.75 }]} />
            <TextInput placeholder="Peso" style={[stylePerfil.InputStyle, { width:screenWidth * 0.75 }]} />
          </View>
          <View style={stylePerfil.TelaDisplay}>
            <View style={[stylePerfil.ButtonViewStyle, { width:screenWidth * 0.75 }]}>
                <Link href={"../(tabs)"} asChild style={{width:"100%", height:"100%"}}>
                <Button title="Cadastrar" color={'white'} />
                </Link>
            </View>
          </View>
        </View>
    )
}
