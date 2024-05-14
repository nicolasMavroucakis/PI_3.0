import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const widthHeaderText = screenWidth * 0.75
const widthHeaderButton = screenWidth * 0.25
const widthAddButton = screenWidth * 0.15
const gapText = screenWidth * 0.10

const stylesMedicacao = StyleSheet.create({
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
    header: {
        display: 'flex',
        flexDirection:'row',
        alignItems: "flex-end",
        justifyContent: "flex-start",
        height: 100
    },
    headerText: {
        width: widthHeaderText,
        justifyContent:'center',
        alignItems:'center',
        height: 70
    },
    headerButton: {
        width: widthHeaderButton,
        display: 'flex',
        borderRadius:20,
        justifyContent:'center',
        alignItems: 'center',
    },
    buttonAdd: {
        width: widthAddButton,
        height: widthAddButton,
        display:'flex',
        textAlign:'center',
        backgroundColor: '#A1D5B0',
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textView: {
        alignItems:"center"

    },
    containerTextActive: {
        width: widthHeaderText,
        height: widthHeaderText,
        backgroundColor: '#bdbdbd',
        borderRadius: 20,
        padding: 20,
        margin: 'auto',
        marginBottom: 50
    },
    medicacaoesContainer: {
        marginTop: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems:'center',
        overflow: 'scroll'
    },
    medicacoesInfromacoes: {
        flex: 1,
        display:'flex',
        justifyContent:'space-around',
        fontSize: 15,
        padding: 10
    },
    arrowImage: {
        height: 20,
        width:20,
        transform: 'rotate(90deg)',
    },
    a:{
        display:'flex',
        alignItems:'center'
    },
    medicacaoContainerPequeno: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent:'center',
        alignItems: 'center',
        width: widthHeaderText,
        height: widthHeaderButton,
        backgroundColor: '#bdbdbd',
        borderRadius: 20, 
        marginBottom: 50,
        gap: gapText
        
    },
    arrowImageHorizontal: {
        height: 20,
        width:20,   
    },
    lixoImage: {
        height: 30,
        width: 30,
    }
})

export default stylesMedicacao