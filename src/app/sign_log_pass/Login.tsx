import { TextInput, View, Button, Text, Dimensions, ScrollView, KeyboardAvoidingView  } from "react-native";
import { Image } from "react-native";
import style from "./style";
import { Link } from "expo-router";


export default function Log_In () {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
    const inputWidth = screenWidth * 0.75
    const hrWidth = screenWidth * 0.25

    return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
        <ScrollView contentContainerStyle={{ flexGrow: 1, display: 'flex', justifyContent:'center' }}>
            <View style={style.TelaDisplay}>
                <View style={style.TitleImg}>
                    <Image source={require('../../../assets/logo.png')} />
                </View>
                <View>
                    <View style={style.DisplaFlex}>
                        <View style={[style.Img,{position:'relative', left:-10, }]}>
                            <Image source={require('../../../assets/email.png')} style={{width:40, height:40}}/>
                        </View>
                        <View>
                            <TextInput placeholder="E-mail" textContentType="emailAddress" style={[style.InputStyle, { width: inputWidth }]} />
                        </View>
                    </View>
                    <View style={style.DisplaFlex}>
                        <View style={[style.Img,{position:'relative', left:-8, }]}>
                            <Image source={require('../../../assets/password.png')} style={{width:40, height:40}}/>
                        </View>
                        <View>
                            <TextInput placeholder="Senha" textContentType="password" style={[style.InputStyle, { width: inputWidth }]} />
                        </View>
                    </View>
                    <View style={{alignItems:'flex-end', position:'relative', top:10}}>
                        <Link href={'./Password_forget'} asChild>
                            <Button title="Esqueceu a senha?" />
                        </Link>
                    </View>
                </View>
                <View style={[style.ButtonViewStyle, { width: inputWidth }]}>
                    <Button title="Log In" color={'white'} />
                </View>
                <View style={[style.ButtonLinkStyle, {position:'relative', top: 15}]}>
                    <View style={[style.Hr, {width:hrWidth}]}></View>
                    <View>
                        <Text style={{marginLeft: 5, marginRight: 5}}>Entre com</Text>
                    </View>
                    <View style={[style.Hr, {width:hrWidth}]}></View>
                </View>
                <View style={[style.ButtonViewStyle, style.ButtonGoogle, { width: inputWidth, display:'flex', flexDirection:'row', gap:10 }]}>
                    <Image source={require('../../../assets/google.png')} style={{width:40, height:40}}/>
                    <Button title="Log In" color={'black'} />
                </View>
                <View style={style.ButtonLinkStyle}>
                    <View>
                        <Text>Não Possui conta?</Text>
                    </View>
                    <View>
                        <Link href={'/sign_log_pass'} asChild >
                                <Button title="Cadastre-se" />
                        </Link>
                    </View>
                </View>
            </View>
        </ScrollView>
    </KeyboardAvoidingView>
    )
}