import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const { width: screenWidth, height: screenHeight } = Dimensions.get('window')

const stylesConsulta =  StyleSheet.create({
    header: {
        backgroundColor: '#c9c9c9',
        alignItems: 'center',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        height: 60,
        width: "100%"
    },
    headerText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    container: {
        flex: 1,
        marginTop: 20,
        display: 'flex',
        flexDirection: "row",
        marginLeft: 130,
    },
    title: {
        fontSize: 36,
        fontWeight: '500',
    },
    img: {
        padding: 10,
        margin: 4,
        marginLeft: 270,
        width:40, 
        height:40
    },
    addButton: {
        backgroundColor: '#A1D5B0',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 60,
    },
    consultaList: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
        display: 'flex',
    },
    consultaItem: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        backgroundColor: "#c9c9c9",
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalContent: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        elevation: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    label: {
        fontSize: 17,
        marginBottom: 5,
    },
    input: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
    },
})

export default stylesConsulta