import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const widthHeaderText = screenWidth * 0.75
const widthHeaderButton = screenWidth * 0.25
const widthAddButton = screenWidth * 0.15

const stylesMedicacao = StyleSheet.create({
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
        justifyContent:'center',
        alignItems: 'center'
    },
    buttonAdd: {
        width: widthAddButton,
        height: widthAddButton,
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
    }
})

export default stylesMedicacao