import { TextInput, View, Button, Text, Dimensions, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Image, } from 'react-native';
import style from './style';
import { Link } from 'expo-router';
import { useState } from 'react';
import StartFirebase from '../../crud/firebaseConfig';
import { ref, set } from 'firebase/database';
import React from 'react';
import { RadioButton } from 'react-native-paper';

export default function Cadastro() {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
  const inputWidth = screenWidth * 0.75

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [gender, setGender] = useState('')

  const db = StartFirebase()

  const [passEmail,setPassEmail] = useState(false)
  const [passPassword,setPassPassword] = useState(false)
  const [passName,setPassName] = useState(false)
  const [passBirth,setPassBirth] = useState(false)
  const [Passheight, setPassHeight] = useState(false)
  const [passweight, setPassWeight] = useState(false)
  const [passGender, setPassGender] = useState(false)


  const handleChange = (key, value) => {
    if (key === 'email') {
      setEmail(value) 
      setPassEmail(true)
    } else if (key === 'password') {
      setPassword(value)
    } else if (key === 'passwordConfirm') {
      if (password == value){
        setPasswordConfirm(value)
        setPassPassword(true)
      } else {
        console.warn("senha e confirmar senha nao batem")
      }
    } else if (key === 'name') {
      setName(value)
      setPassName(true)
    }
    if (key === 'birthDate') {
      setBirthDate(value)
      setPassBirth(true)
    }
    if (key === 'height'){
      setHeight(value)
      setPassHeight(true)
    }  
    if (key === 'weight'){
      setWeight(value)
      setPassWeight(true)
    }  
    console.warn(email, password, passwordConfirm, name, birthDate, weight, height)

  }
  const createUserInDatabase = (database) => {
      const dbRef = db;
      const userData = {
        username: email,
        name: name,
        birthDate: birthDate,
        password: password,
        weight: weight,
        height: height,
        gender: gender,
      };
    
      set(ref(dbRef, 'users/' + email), userData)
        .then(() => {
          console.warn('Usuário criado com sucesso!');
        })
        .catch((error) => {
          console.error('Erro ao criar usuário:', error);
        });
  }

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent:'center'  }}>
        <View style={style.TelaDisplay}>
          <View style={style.TitleImg}>
            <Text style={style.title}>Faça o seu Cadastro</Text>
            <Image source={require('../../../assets/logo.png')}/>
          </View>
          <View>
            <TextInput placeholder="Nome" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(text) => handleChange('name', text)} />
            <TextInput placeholder="E-mail" textContentType="emailAddress" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(text) => handleChange('email', text)} />
            <TextInput placeholder="Nascimento" textContentType="birthdateYear" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(text) => handleChange('birthDate', text)} />
            <TextInput placeholder="Senha" textContentType="password" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(text) => handleChange('password', text)} />
            <TextInput placeholder="Confirmar Senha" textContentType="password" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(text) => handleChange('passwordConfirm', text)} />
            <TextInput placeholder="Altura" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(text) => handleChange('height', text)} />
            <TextInput placeholder="Peso" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(text) => handleChange('weight', text)} />
            <View>
              <View style={{borderBottomColor:'black',borderBottomWidth:3, display:"flex", flexDirection:"row"}}>
                <Text style={{marginTop:25,fontSize:20,marginBottom:20,color:'black'}}>Gênero:</Text>
                {/* Escolha Genero */}
              </View>
            </View>
          </View>
          <View style={[style.ButtonViewStyle, { width: inputWidth }]}>
            <Link href={"../(tabs)"} asChild style={{width:"100%", height:"100%"}} onPress={() => createUserInDatabase(db)}>
              <Button title="Cadastrar" color={'white'} />
            </Link>
          </View>
          <View style={style.ButtonLinkStyle}>
            <View>
                <Text>Já possui cadastro?</Text>
            </View>
            <View>
                <Link href={'./Login'} asChild>
                    <Button title="Faça Login" />
                </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
