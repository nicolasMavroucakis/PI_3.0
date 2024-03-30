import React from 'react';
import { TextInput, View, Button, Text, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Image } from 'react-native';
import style from './style';
import { Link } from 'expo-router';

export default function LogIn() {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
  const inputWidth = screenWidth * 0.75

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent:'center'  }}>
        <View style={style.TelaDisplay}>
          <View style={style.TitleImg}>
            <Text style={style.title}>Cadastro</Text>
            <Image source={require('../../../assets/logo.png')} />
          </View>
          <View>
            <TextInput placeholder="Nome" style={[style.InputStyle, { width: inputWidth }]} />
            <TextInput placeholder="E-mail" textContentType="emailAddress" style={[style.InputStyle, { width: inputWidth }]} />
            <TextInput placeholder="Nascimento" textContentType="birthdate" style={[style.InputStyle, { width: inputWidth }]} />
            <TextInput placeholder="Senha" textContentType="password" style={[style.InputStyle, { width: inputWidth }]} />
            <TextInput placeholder="Confirmar Senha" textContentType="password" style={[style.InputStyle, { width: inputWidth }]} />
          </View>
          <View style={[style.ButtonViewStyle, { width: inputWidth }]}>
            <Button title="Cadastrar" color={'white'} />
          </View>
          <View style={style.ButtonLinkStyle}>
            <View>
                <Text>Já possui cadastro?</Text>
            </View>
            <View>
                <Link href={'./Login'} asChild >
                        <Button title="Faça Login" />
                </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
