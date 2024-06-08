import { StyleSheet, Dimensions  } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const styleAdiciona = StyleSheet.create({
    textPrincipla: {
        justifyContent: "center",
        alignItems: "center",
        height: screenHeight * 0.2
    },
    viewsAdicionar: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: screenHeight * 0.14,
        gap: 10
    },
    escolha: {
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        width: screenWidth * 0.8,
        height: '100%',
    },
    textEscolha: {
        width: screenWidth * 0.5,
        height: 70,
        backgroundColor: '#bdbdbd',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent:'center'
    }
})

export default styleAdiciona