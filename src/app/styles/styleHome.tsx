import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const gapTextInfo = screenWidth * 0.15
const statusWidth = screenWidth * 0.25
const statusHeight = screenHeight * 0.08

const styleHome = StyleSheet.create({
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
        color: "white"
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
        color:"white"
    },
    statusDivHeader:{
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: screenWidth * 0.02,
        marginTop:screenWidth * 0.05,
    },
    statusInfo:{
        fontSize:screenWidth * 0.03,
        fontWeight:"400",
        textAlign:'center'
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
    divUsuarioDark:{
        backgroundColor:"black",
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    nomeUsuarioDark:{
        fontSize: screenWidth * 0.035,
        fontStyle:"normal",
        fontWeight:"400",
        color:"white",
        textAlign: "right",
        marginRight: screenWidth * 0.01,
    },
    divInfo1Dark:{
        textAlign:"center",
        fontSize:screenWidth * 0.07,
        fontStyle:"normal",
        fontWeight:"400",
        color:"white",
        marginTop:screenWidth * 0.05
    },
    divInfo2Dark:{
        textAlign:"center",
        fontSize:screenWidth * 0.07,
        fontStyle:"normal",
        fontWeight:"400",
        color:"white",
    },
    viewTotal: {
        backgroundColor: "#1C1C1E"
    }, 
    homeSecundaria: { 
        backgroundColor: "#1C1C1E",
        justifyContent: "center",
        alignItems: "center",
        flex: 1, 
        width: "100%"
    },
    linkHomeSecundaria: {
        backgroundColor: "#7F7F7F",
        height: screenHeight * 0.2,
        width: screenWidth * 0.7,
        borderRadius: 10,
        justifyContent: "space-evenly",
        padding: 10
    },
    linkLogin: {
        backgroundColor: "#A1D5B0",
        width: screenWidth * 0.35,
        margin: "auto",
        height: 40,
        justifyContent: "center",
        borderRadius: 10
    }
})

export default styleHome