import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const styleExamesStack = StyleSheet.create({
    textoPrincipal: {
        fontSize: 25,
        color: "white"
    },
    viewTextoPrincipal: {
        display: "flex",
        alignItems: "center",
        marginTop: 40,
        marginBottom: 40
    }, 
    viewSelecionaEscolha: {
        flex: 1,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "grey",
        width: screenWidth * 0.9,
        borderRadius: 20, 
        margin: "auto"
    },
    viewEscolha: {
        height: screenHeight * 0.25,
        width: screenWidth * 0.75,
        justifyContent: "center"
    },
    linkEscolha: {
        height: "100%",
        width: "100%",
        backgroundColor: "grey"
    }
})

export default styleExamesStack