import { TextInput, View, Button, Text, Dimensions } from "react-native";
import { Image } from "react-native";
import style from "./style";
import { Link } from "expo-router";


export default function Sign () {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window');
    const inputWidth = screenWidth * 0.75

    return (
        <View style={style.TelaDisplay}>
            <View style={style.TitleImg}>
                <Text style={style.title}>Cadastro</Text>
                <Image source={require('../../../assets/logo.png')}/>
            </View>
            <View>
                <TextInput placeholder="Nome" style={[style.InputStyle,{width:inputWidth}]}/>
                <TextInput placeholder="E-mail" textContentType="emailAddress" style={[style.InputStyle,{width:inputWidth}]}/>
                <TextInput placeholder="Nascimento" textContentType="birthdate" style={[style.InputStyle,{width:inputWidth}]}/>
                <TextInput placeholder="Senha" textContentType="password" style={[style.InputStyle,{width:inputWidth}]}/>
                <TextInput placeholder="Confirmar Senha" textContentType="password" style={[style.InputStyle,{width:inputWidth}]}/>
            </View>
            <View style={[style.ButtonViewStyle,{width:inputWidth}]}>
                <Button  title="Cadastrar" color={'white'} />
            </View>
            <Text>Ja possui cadastro? 
                
                    <Button title="Faça Login"/>
                
            </Text>
        </View>
    )
}