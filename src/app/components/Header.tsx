import { Text, View, Image, TouchableOpacity, } from "react-native";
import { Link } from "expo-router";
import React from "react";
import { StyleSheet, Dimensions } from "react-native";
import { useContext } from "react";
import { GlobalContext } from "../context/aaaa";


export default function () {
    const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
    const {usuario, setUsuario} = useContext(GlobalContext)


    const styleHeader = StyleSheet.create({
        divUsuario:{
            backgroundColor:"#C9C9C9",
            display:"flex",
            flexDirection:"row",
            alignItems:"center",
            justifyContent:"space-between"
    
        },
        imgUsuario:{
            width:screenWidth * 0.055,
            height:screenWidth * 0.055,
            textAlign:"right",
            marginRight: screenWidth * 0.015,
        },
        nomeUsuario:{
            fontSize: screenWidth * 0.035,
            fontStyle:"normal",
            fontWeight:"400",
            color:"#000000",
            textAlign: "right",
            marginRight: screenWidth * 0.01,
        },
        containerUsuario: {
            flexDirection: 'row',
            alignItems: 'center',
            padding:screenWidth * 0.03,
            display:"flex",
        },
    })

    return (
        <View style={styleHeader.divUsuario}>
            <View style={{marginLeft:10,marginTop:5}}>
                <Link href={"../../configuracoes"}>
                    <View>
                        <Image style={{width:30, height:30}} source={require("../../../assets/configuracoes.png")}/>
                    </View>
                </Link>
            </View>
            <View style={styleHeader.containerUsuario}>
                <Image source={require('../../../assets/user.png')} style={styleHeader.imgUsuario} />
                <Link href={"../../perfil"} style={styleHeader.nomeUsuario}><Text>{usuario.nome}</Text></Link>
            </View>
        </View>
    )
}

