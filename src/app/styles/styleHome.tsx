import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const gapTextInfo = screenWidth * 0.15
const statusWidth = screenWidth * 0.25
const statusHeight = screenHeight * 0.08

const styleHome = StyleSheet.create({
    divUsuario:{
        backgroundColor:"#C9C9C9",
        alignItems:"flex-end",
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
    divInfo1:{
        textAlign:"center",
        fontSize:screenWidth * 0.07,
        fontStyle:"normal",
        fontWeight:"400",
        color:"#7F7F7F",
        marginTop:screenWidth * 0.05
    },
    divInfo2:{
        textAlign:"center",
        fontSize:screenWidth * 0.07,
        fontStyle:"normal",
        fontWeight:"400",
        color:"#7F7F7F",
    },
    divTotal:{
        marginTop:screenWidth * 0.1,
        textAlign: 'center',
        display:'flex',
        alignItems:'center'
    },
    divProximo:{
        marginHorizontal:"auto",
        marginTop:screenWidth * 0.15,
        fontSize:screenWidth * 0.05,
        fontWeight:"700",
    },
    imgInfo:{
        width:screenWidth * 0.2,
        height:screenWidth * 0.2,
        margin:"auto",
        marginTop:screenWidth * 0.05,
    },
    infoProximo:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        padding: screenWidth * 0.03,
        marginVertical: screenWidth * 0.04,
        backgroundColor: '#A1D5B0',
        borderRadius: 15,
        width:screenWidth * 0.55,
        marginHorizontal:"auto",
        
    },
    infoProximoDetail:{
        fontSize:screenHeight * 0.015,
        fontWeight:"400",
    },
    statusHeader:{
        fontSize:screenWidth * 0.05,
        fontWeight:"700",
        fontStyle:"normal",
    },
    statusDivHeader:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: screenWidth * 0.02,
        marginTop:screenWidth * 0.05,
    },
    statusInfo:{
        fontSize:screenWidth * 0.03,
        fontWeight:"400"
    },
    statusFooter:{
        backgroundColor: '#A1D5B0',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: screenWidth * 0.01,
        width:statusWidth,
        height:statusHeight,
    },
    statusDiv:{
        alignItems: 'center'
    },
    proximosEventos:{
        display:'flex',
        alignItems:'center'
    },
})

export default styleHome