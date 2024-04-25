import {StyleSheet, Text, View} from "react-native";
import {NativeStackHeaderProps} from "@react-navigation/native-stack";
import {MaterialIcons} from "@expo/vector-icons";
import { Image } from 'react-native';


const Header = (props: NativeStackHeaderProps) => {
    const canGoBack = props.navigation.canGoBack();

    const handleBack = () => {
        props.navigation.goBack();
    };

    return(
        <View style={styles.container}>
            {canGoBack ?
            <MaterialIcons 
            name="arrow-back-ios" 
            size={24} 
            color="black" 
            onPress={handleBack}/>
            : null}
            <Text style={styles.title}>Cabeçalho</Text>

            <Image style={styles.img} source={require('../../../assets/perfil.png')}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        padding: 5,
        marginLeft: 8,
        backgroundColor: '#ccc',
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
    },
    title: {
        fontSize: 25,
        fontWeight: 'bold',
    },
    img: {
        marginLeft: 80,
    },
});

export default Header;