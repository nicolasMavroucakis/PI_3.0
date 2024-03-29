import { StyleSheet } from "react-native";




const style = StyleSheet.create({
    TelaDisplay: {
        justifyContent:'space-between',
        textAlign:'center',
        alignItems:'center',
        display:'flex',
        
    },
    title: {
        fontSize:20,
        fontWeight: '700'
    },
    TitleImg:{
        justifyContent:'center',
        textAlign:'center',
        alignItems:'center',
        marginTop:20
    },
    InputStyle: {
        height:60,
        width:300,
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
})

export default style