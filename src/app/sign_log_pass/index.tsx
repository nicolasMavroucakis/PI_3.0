import { TextInput, View, Button, Text, Dimensions, ScrollView, KeyboardAvoidingView, TouchableOpacity } from 'react-native';
import { Image } from 'react-native';
import style from './style';
import { Link } from 'expo-router';
import { useState, useContext } from 'react';
import StartFirebase from '../../crud/firebaseConfig';
import { ref, set } from 'firebase/database';
import React from 'react';
import { RadioButton } from 'react-native-paper';
import { GlobalContext } from '../context/aaaa';
import { getAuth, createUserWithEmailAndPassword } from 'firebase/auth';

export default function Cadastro() {
  const { width: screenWidth } = Dimensions.get('window');
  const inputWidth = screenWidth * 0.75;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [name, setName] = useState('');
  const [birthDate, setBirthDate] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [gender, setGender] = useState('');
  const { modoEscuro } = useContext(GlobalContext);

  const db = StartFirebase();
  const auth = getAuth();

  const handleChange = (key, value) => {
    if (key === 'email') {
      setEmail(value);
    } else if (key === 'password') {
      setPassword(value);
    } else if (key === 'passwordConfirm') {
      if (password === value) {
        setPasswordConfirm(value);
      } else {
        console.warn("senha e confirmar senha não batem");
      }
    } else if (key === 'name') {
      setName(value);
    } else if (key === 'birthDate') {
      setBirthDate(value);
    } else if (key === 'height') {
      setHeight(value);
    } else if (key === 'weight') {
      setWeight(value);
    }
  };

  const createUserInDatabase = (database, email) => {
    const sanitizedEmail = email.replace(/\./g, '_');
    const userData = {
      username: email,
      name: name,
      birthDate: birthDate,
      password: password,
      weight: weight,
      height: height,
      gender: gender,
    };

    set(ref(database, 'users/' + sanitizedEmail), userData)
      .then(() => {
        console.warn('Usuário criado com sucesso!');
      })
      .catch((error) => {
        console.error('Erro ao criar usuário:', error);
      });
  };

  const handleRegister = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Usuário criado com sucesso
        const user = userCredential.user;
        console.warn('Usuário autenticado com sucesso!');
        // Agora crie o usuário no Realtime Database
        createUserInDatabase(db, email);
      })
      .catch((error) => {
        console.error('Erro ao criar usuário:', error);
      });
  };

  const containerStyle = modoEscuro ? { backgroundColor: "#1C1C1E" } : {};
  const textStyle = modoEscuro ? { color: "white" } : {color: "#c0c0c0"};
  const inputStyle = modoEscuro ? style.InputStyleDark : style.InputStyle;
  const buttonTextColor = modoEscuro ? 'white' : 'black';
  const radioButtonColor = modoEscuro ? 'white' : 'black';
  const textStyle2 = modoEscuro ? { color: "white" } : {color: "black"};

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent: 'center', ...containerStyle }}>
        <View style={style.TelaDisplay}>
          <View style={style.TitleImg}>
            <Text style={[style.title, textStyle2]}>Faça o seu Cadastro</Text>
            <Image source={require('../../../assets/logo.png')} />
          </View>
          <View>
            <TextInput placeholder="Nome" placeholderTextColor={textStyle.color} style={[inputStyle, { width: inputWidth, color:buttonTextColor }]} onChangeText={(text) => handleChange('name', text)} />
            <TextInput placeholder="E-mail" placeholderTextColor={textStyle.color} textContentType="emailAddress" style={[inputStyle, { width: inputWidth, color:buttonTextColor }]} onChangeText={(text) => handleChange('email', text)} />
            <TextInput placeholder="Nascimento" placeholderTextColor={textStyle.color} textContentType="birthdateYear" style={[inputStyle, { width: inputWidth, color:buttonTextColor }]} onChangeText={(text) => handleChange('birthDate', text)} />
            <TextInput placeholder="Senha" placeholderTextColor={textStyle.color} textContentType="password" style={[inputStyle, { width: inputWidth, color:buttonTextColor }]} onChangeText={(text) => handleChange('password', text)} />
            <TextInput placeholder="Confirmar Senha" placeholderTextColor={textStyle.color} textContentType="password" style={[inputStyle, { width: inputWidth, color:buttonTextColor }]} onChangeText={(text) => handleChange('passwordConfirm', text)} />
            <TextInput placeholder="Altura" placeholderTextColor={textStyle.color} style={[inputStyle, { width: inputWidth, color:buttonTextColor }]} onChangeText={(text) => handleChange('height', text)} />
            <TextInput placeholder="Peso" placeholderTextColor={textStyle.color} style={[inputStyle, { width: inputWidth, color:buttonTextColor }]} onChangeText={(text) => handleChange('weight', text)} />
            <View>
              <View style={{ borderBottomColor: buttonTextColor, borderBottomWidth: 3, display: "flex", flexDirection: "row", alignItems: 'center' }}>
                <Text style={{ marginTop: 25, fontSize: 20, marginBottom: 20, ...textStyle}}>Gênero:</Text>
                <RadioButton.Group onValueChange={newValue => setGender(newValue)} value={gender}>
                  <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent:"center"}}>
                    <RadioButton value="Masculino" uncheckedColor={radioButtonColor} color={radioButtonColor} />
                    <Text style={{fontSize:15, ...textStyle2}}>Masculino</Text>
                    <RadioButton value="Feminino" uncheckedColor={radioButtonColor} color={radioButtonColor} />
                    <Text style={{fontSize:15, ...textStyle2, }}>Feminino</Text>
                  </View>
                </RadioButton.Group>
              </View>
            </View>
          </View>
          <View style={[style.ButtonViewStyle, { width: inputWidth }]}>
            <TouchableOpacity style={{}} onPress={handleRegister}>
              <Text style={{ color: buttonTextColor, fontSize:20 }}>Cadastrar</Text>
            </TouchableOpacity>
          </View>
          <View style={style.ButtonLinkStyle}>
            <View>
              <Text style={textStyle2}>Já possui cadastro?</Text>
            </View>
            <View>
              <Link href={'./Login'} asChild style={{fontSize: 20, ...textStyle }}>
                <Button title="Faça Login"/>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}
