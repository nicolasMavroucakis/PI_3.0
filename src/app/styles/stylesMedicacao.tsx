import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')
const widthHeaderText = screenWidth * 0.75
const widthHeaderButton = screenWidth * 0.25

const stylesMedicacao = StyleSheet.create({
    header: {
        display: 'flex',

    },
    headerText: {
        width: widthHeaderText,

    },
    headerButton: {
        width: widthHeaderButton
    }
})

export default stylesMedicacao