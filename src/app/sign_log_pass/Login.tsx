import React, { useState, useEffect, useContext } from "react";
import { TextInput, View, Button, Text, Dimensions, ScrollView, KeyboardAvoidingView, Alert } from "react-native";
import { Image } from "react-native";
import style from "./style";
import { Link, useRouter } from "expo-router";
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import * as Google from 'expo-auth-session/providers/google';
import * as WebBrowser from 'expo-web-browser';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { GlobalContext, UsuarioType } from "../context/aaaa"; // Certifique-se de que o caminho está correto
import { getUserData } from "./userdata"; // Certifique-se de colocar o caminho correto para o getUserData

WebBrowser.maybeCompleteAuthSession();

export default function Login() {
  const { width: screenWidth } = Dimensions.get('window');
  const inputWidth = screenWidth * 0.75;
  const hrWidth = screenWidth * 0.25;
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  const { setUsuario } = useContext(GlobalContext); // Use o contexto global
  const { modoEscuro } = useContext(GlobalContext);

  // Configure the Google ID token auth request
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: '590527240592-06dab1ijvft1meo0sgdte3auv2t5j7pu.apps.googleusercontent.com', // Insira o seu clientId aqui
    redirectUri: 'https://auth.expo.io/@gabrielxavier04/PI_3.0', // Adicione o redirectUri correto aqui
  });

  useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      (async () => {
        try {
          const userInfoResponse = await fetch(`https://www.googleapis.com/oauth2/v3/tokeninfo?id_token=${id_token}`);
          const userInfo = await userInfoResponse.json();
          setUser(userInfo);
          console.log(userInfo);
          await AsyncStorage.setItem('user', JSON.stringify(userInfo));
          // Atualize o contexto global com as informações do usuário
          setUsuario({
            nome: userInfo.name,
            e_mail: userInfo.email,
            senha: 'GoogleOAuth', // Placeholder para a senha
            altura: "",  // Adicione os valores reais ou deixe vazio para preenchimento posterior
            peso: "",
            nascimento: "",
            idade: 0,
            imc: 0,
            classIMC: ""
          });
          router.push('/CompleteProfile'); // Redireciona para completar o cadastro
        } catch (error) {
          console.error("Erro ao obter informações do usuário Google:", error);
          Alert.alert("Erro", "Houve um problema ao fazer login com o Google. Por favor, tente novamente.");
        }
      })();
    }
  }, [response]);

  const handleChange = (key: string, value: string) => {
    if (key === 'email') {
      setEmail(value);
    } else if (key === 'password') {
      setPassword(value);
    }
  };

  const handleLogin = () => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const user = userCredential.user;
        console.log("Usuário autenticado:", user);
        // Buscar informações do usuário no banco de dados
        const userData = await getUserData(user.email.replace('.', '_'));
        if (userData) {
          // Atualize o contexto global com as informações do usuário
          setUsuario({
            nome: userData.name,
            e_mail: user.email,
            altura: userData.height,
            peso: userData.weight,
            nascimento: userData.birthDate,
            idade: calcularIdade(userData.birthDate),
            imc: calcularIMC(userData.height, userData.weight),
            classIMC: classificarIMC(calcularIMC(userData.height, userData.weight)),
            senha: '' // Adicione a senha se necessário
          });
          router.push('../(tabs)'); // Redireciona para /tabs após login bem-sucedido
        } else {
          Alert.alert('Erro', 'Não foi possível obter as informações do usuário.');
        }
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.warn("Erro ao autenticar:", errorMessage);
        Alert.alert('Erro', 'Credenciais inválidas. Por favor, verifique seu e-mail e senha.');
      });
  };

  const handleGoogleLogin = async () => {
    try {
        await promptAsync({ useProxy: true, showInRecents: true });
    } catch (error) {
      console.warn("Erro ao autenticar com o Google:", error.message);
      Alert.alert('Erro', 'Houve um erro ao autenticar com o Google.');
    }
  };

  const containerStyle = modoEscuro ? { backgroundColor: "#1C1C1E" } : {};
  const inputStyle = modoEscuro ? style.InputStyleDark : style.InputStyle;
  const hr = modoEscuro ? style.HrDark : style.Hr;
  const buttonTextColor = modoEscuro ? 'white' : 'black';

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent: 'center', ...containerStyle }}>
        <View style={style.TelaDisplay}>
          <View style={style.TitleImg}>
            <Image source={require('../../../assets/logo.png')} />
          </View>
          <View>
            <View style={style.DisplaFlex}>
              <View style={[style.Img, { position: 'relative', left: -10 }]}>
                <Image source={require('../../../assets/email.png')} style={{ width: 40, height: 40, tintColor: buttonTextColor }} />
              </View>
              <View>
                <TextInput
                  textContentType="emailAddress"
                  placeholder="Digite seu email" // Adicionado o placeholder
                  placeholderTextColor={buttonTextColor} // Define a cor do texto do placeholder   
                  style={{ width: inputWidth, ...inputStyle }}
                  onChangeText={(text) => handleChange('email', text)}
                />
              </View>
            </View>
            <View style={style.DisplaFlex}>
              <View style={[style.Img, { position: 'relative', left: -8 }]}>
                <Image source={require('../../../assets/password.png')} style={{ width: 40, height: 40, tintColor: buttonTextColor }} />
              </View>
              <View>
                <TextInput
                  textContentType="password"
                  placeholder="Digite sua senha" // Adicionado o placeholder
                  placeholderTextColor={buttonTextColor} // Define a cor do texto do placeholder                  
                  secureTextEntry={true}
                  style={{ width: inputWidth, ...inputStyle }}
                  onChangeText={(text) => handleChange('password', text)}
                />
              </View>
            </View>
            <View style={{ alignItems: 'flex-end', position: 'relative', top: 10 }}>
              <Link href={'./Password_forget'} asChild>
                <Button color={buttonTextColor} title="Esqueceu a senha?" />
              </Link>
            </View>
          </View>
          <View style={[style.ButtonViewStyle, { width: inputWidth }]}>
            <Button title="Login" color={'white'} onPress={() => { console.warn('Email:', email, 'Password:', password); handleLogin(); }} />
          </View>
          <View style={[style.ButtonLinkStyle, { position: 'relative', top: 15 }]}>
            <View style={{ width: hrWidth, ...hr }}></View>
            <View>
              <Text style={{ marginLeft: 5, marginRight: 5, color: buttonTextColor }}>Entre com</Text>
            </View>
            <View style={{ width: hrWidth, ...hr }}></View>
          </View>
          <View style={[style.ButtonViewStyle2, { width: inputWidth }]}>
            <Button title="Google" color={'black'} onPress={() => handleGoogleLogin()}/>
          </View>
          <View style={style.ButtonLinkStyle}>
            <View>
              <Text style={{ color: buttonTextColor }}>Não Possui conta?</Text>
            </View>
            <View>
              <Link href={'/sign_log_pass'} asChild>
                <Button title="Cadastre-se" color={'#71A981'}/>
              </Link>
            </View>
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

// Funções auxiliares para calcular idade, IMC e classificar IMC

const calcularIdade = (nascimento: string): number => {
  const [dia, mes, ano] = nascimento.split('/').map(Number);
  const hoje = new Date();
  const dataNascimento = new Date(ano, mes - 1, dia); // Mês é zero-indexado em JavaScript
  let idade = hoje.getFullYear() - dataNascimento.getFullYear();
  const diferencaMes = hoje.getMonth() - dataNascimento.getMonth();
  if (diferencaMes < 0 || (diferencaMes === 0 && hoje.getDate() < dataNascimento.getDate())) {
    idade--;
  }
  return idade;
};

const calcularIMC = (altura: string, peso: string): number => {
  const alturaMetros = parseFloat(altura);
  const pesoKg = parseFloat(peso);
  if (alturaMetros && pesoKg) {
    return parseFloat((pesoKg / (alturaMetros * alturaMetros)).toFixed(2));
  }
  return 0;
};

const classificarIMC = (imc: number): string => {
  if (imc < 18.5) return "Abaixo do peso";
  if (imc >= 18.5 && imc < 24.9) return "Peso normal";
  if (imc >= 25 && imc < 29.9) return "Sobrepeso";
  if (imc >= 30 && imc < 34.9) return "Obesidade grau I";
  if (imc >= 35 && imc < 39.9) return "Obesidade grau II";
  return "Obesidade grau III";
};
