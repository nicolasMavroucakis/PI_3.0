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
    ButtonViewStyle:{
        marginTop:35,
        justifyContent:'center',
        alignItems:'center',
        width:300,
        height:60,
        color:'white',
        backgroundColor:'#71A981',
        borderRadius:10
    },
    ButtonViewStyle2:{
        marginTop:35,
        justifyContent:'center',
        alignItems:'center',
        width:300,
        height:60,
        color:'white',
        backgroundColor:'#C9C9C9',
        borderRadius:10
    },      
    ButtonLinkStyle:{
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center', 
        marginTop:10,
        marginBottom:10
    },
    Hr: {
        borderColor:'black',
        borderBottomWidth:2
    },
    ButtonGoogle: {
        backgroundColor:'#E1DFDF'
    },
    Img: {
        position:'relative',
        top:10,
        marginRight:6 
    },
    DisplaFlex:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    InputStyleDark: {
        height:60,
        width:300,
        borderBottomColor:'white',
        borderBottomWidth:3,
        marginTop:10,
        fontSize:20
    },
    InputStyle: {
        height:60,
        width:300,
        borderBottomColor:'black',
        borderBottomWidth:3,
        marginTop:10,
        fontSize:20
    },
    InputStyleDark2: {
        height:30,
        width:300,
        borderBottomColor:'white',
        borderBottomWidth:3,
        marginTop:10,
        fontSize:20
    },
    InputStyle2: {
        height:30,
        width:300,
        borderBottomColor:'black',
        borderBottomWidth:3,
        marginTop:10,
        fontSize:20
    },
    HrDark: {
        borderColor:'white',
        borderBottomWidth:2
    },
})

export default style