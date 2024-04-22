import { TextInput, View, Button, Text, Dimensions, ScrollView, KeyboardAvoidingView } from 'react-native';
import { Image } from 'react-native';
import style from './style';
import { Link } from 'expo-router';
import { useState } from 'react';
import StartFirebase from '../../crud/firebaseConfig';
import { ref, set, update, remove, get, child } from 'firebase/database';

export default function LogIn() {
  const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
  const inputWidth = screenWidth * 0.75

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState('')
  const [name, setName] = useState('')
  const [birthDate, setBirthDate] = useState('')
  const [db, setDb] = useState('')

  const [passEmail,setPassEmail] = useState(false)
  const [passPassword,setPassPassword] = useState(false)
  const [passName,setPassName] = useState(false)
  const [passBirth,setPassBirth] = useState(false)

  const handleChange = (key, value) => {
      if (key === 'email') {
          setEmail(value) 
          setPassEmail(true)
      } else if (key === 'password') {
          setPassword(value)
          setPassPassword(true)
      } else if (key === 'passwordConfirm') {
        setPasswordConfirm(value)
      } else if (key === 'name') {
        setName(value)
        setPassName(true)
      } 
      if (key === 'birthDate') {
        setBirthDate(value)
        setPassBirth(true)
      } 
      console.warn(email, password, passwordConfirm, name, birthDate)

      if (passEmail == true && passName == true && passPassword == true && passBirth && true) {
        
      }
  }

  const getAllInputs = () => {
    const userneame = email
    const nameUSer = name
    const passwordUset = password
    const birthUser = birthDate
  }

//   const componentDidMount = () => {
//     setDb(StartFirebase())
// }


  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent:'center'  }}>
        <View style={style.TelaDisplay}>
          <View style={style.TitleImg}>
            <Text style={style.title}>Cadastro</Text>
            <Image source={require('../../../assets/logo.png')} />
          </View>
          <View>
            <TextInput placeholder="Nome" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(text) => handleChange('name', text)} />
            <TextInput placeholder="E-mail" textContentType="emailAddress" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(text) => handleChange('email', text)} />
            <TextInput placeholder="Nascimento" textContentType="d" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(text) => handleChange('birthDate', text)} />
            <TextInput placeholder="Senha" textContentType="password" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(text) => handleChange('password', text)} />
            <TextInput placeholder="Confirmar Senha" textContentType="password" style={[style.InputStyle, { width: inputWidth }]} onChangeText={(text) => handleChange('passwordConfirm', text)} />
          </View>
          <View style={[style.ButtonViewStyle, { width: inputWidth }]}>
            <Link href={"../(tabs)"} asChild style={{width:"100%", height:"100%"}}>
              <Button title="Cadastrar" color={'white'} />
            </Link>
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