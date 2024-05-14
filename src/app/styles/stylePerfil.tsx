import {StyleSheet, Dimensions} from "react-native";
const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const stylePerfil = StyleSheet.create({
    TelaDisplay: {
        textAlign:'center',
        alignItems:'center',
        display:'flex',  
    },
    goBackDiv:{
        backgroundColor:"white",
        borderRadius:50,
        padding: screenWidth * 0.02,
    },
    goBack:{
        height:screenWidth * 0.05,
        width:screenWidth * 0.05,
        transform: 'rotate(180deg)',
    },
    title: {
        fontSize:20,
        fontWeight: '700'
    },
    TitleImg:{
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        backgroundColor:'#A1D5B0',
        paddingTop:screenHeight * 0.02
    },
    InputStyle: {
        height:screenHeight * 0.07,
        width:screenWidth * 0.1,
        borderBottomColor:'black',
        borderBottomWidth:3,
        marginTop:10,
        fontSize:20
    },
    ButtonViewStyle:{
        marginTop:35,
        justifyContent:'center',
        alignItems:'center',
        width:300,
        height:60,
        color:'white',
        backgroundColor:'#A1D5B0',
        borderRadius:10
    },   
    ButtonLinkStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center', 
        marginTop:10
    },
    Hr: {
        borderColor:'black',
        borderBottomWidth:2
    },
    ButtonGoogle: {
        backgroundColor:'#E1DFDF'
    },
    DisplaFlex:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    }
})

export default stylePerfil