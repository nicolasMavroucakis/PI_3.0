import { View, Text } from "react-native";
import { Button } from "react-native";
import { Link } from "expo-router";

export default function Perfil() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
        <Text style={{fontSize: 44, fontWeight:'700'}}>
            Exames
        </Text>
        <Link href={'/sign_log_pass'} asChild>
            <Button title="Sing In"/>
        </Link>
        <Link href={'/sign_log_pass/Login'} asChild>
            <Button title="Log In"/>
        </Link>
        <Link href={'/sign_log_pass/Password_forget'} asChild>
            <Button title="Forget Password"/>
        </Link>
    </View>
    )
}