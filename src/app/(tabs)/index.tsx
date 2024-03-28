import { Button, Text, View } from "react-native";
import { Link } from "expo-router";

export default function Exames() {
    return (
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <Text style={{fontSize: 44, fontWeight:'700'}}>
                Exames
            </Text>
            <Link href={'/sign_log_pass'} asChild>
                <Button title="Sing In"/>
            </Link>
        </View>
    )
}