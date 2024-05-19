import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const stylesExame = StyleSheet.create({
    divUsuario:{
        backgroundColor:"#C9C9C9",
        flexDirection:"row",
        alignItems:"center",
        display:"flex",
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

export default stylesExame