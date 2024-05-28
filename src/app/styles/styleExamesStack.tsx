import { StyleSheet, Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

const styleExamesStack = StyleSheet.create({
    textoPrincipal: {
        fontSize: 25,
        color: "white"
    },
    viewTextoPrincipal: {
        alignItems: "center",
        marginTop: 40,
        marginBottom: 40
    },
    viewSelecionaEscolha: {
        alignItems: "center",
        justifyContent: "space-around",
        backgroundColor: "grey",
        width: screenWidth * 0.9,
        height: screenHeight * 0.4,
        borderRadius: 20,
        marginTop: 20
    },
    linkEscolha: {
        backgroundColor: "#A1D5B0",
        height: screenHeight * 0.1,
        width: screenWidth * 0.75,
        borderRadius: 20,
        justifyContent:"center",
        alignItems: "center", 
    }
});

export default styleExamesStack;
