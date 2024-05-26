import {StyleSheet, Dimensions} from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const styleMedicacaoAdiciona = StyleSheet.create({
    input: {
        width: screenWidth * 0.75,
        height: 50,
        borderRadius: 20,
        backgroundColor: '#bdbdbd',
        paddingLeft: 5
    },
    center: {
        display: "flex",
        alignItems: "center",
        paddingTop: screenHeight * 0.05,
        height: screenHeight,
        gap: 10
    },
    esquerda: {
        display: "flex",
        alignItems: "flex-start",
        width: screenWidth * 0.75
    },
    alarme: {
        width: screenWidth * 0.2,
        height:40,
        backgroundColor: '#bdbdbd',
        borderRadius: 20,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    alarmeOn: {
        height: 30,
        width: 40,
        marginLeft: 5,
        borderRadius: 50,
        backgroundColor: "green"
    },
    alarmeOff: {
        height: 30,
        width: 40,
        marginRight: 5,
        borderRadius: 50,
        backgroundColor: "red" 
    },
    ButtonViewStyle:{
        marginTop:10,
        justifyContent:'center',
        alignItems:'center',
        width:300,
        height:60,
        color:'white',
        backgroundColor:'#A1D5B0',
        borderRadius:10
    },  
    ButtonVolta: {
        width:40,
        height: 40,
        marginTop:30,
        marginLeft:20,
    }
})

export default styleMedicacaoAdiciona