import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const stylesConsulta = StyleSheet.create({
    header: {
        backgroundColor: '#c9c9c9',
        alignItems: 'center',
        display: 'flex',
        flexDirection: "row",
        justifyContent: 'center',
        height: 60,
    },
    headerText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: 'black',
    },
    container: {
        marginTop: 20,
        display: 'flex',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    title: {
        fontSize: 36,
        fontWeight: '500',
        marginLeft: '28%'
    },
    img: {
        padding: 10,
        margin: 4,
        marginLeft: '61%'
    },
    addButton: {
        backgroundColor: '#A1D5B0',
        borderRadius: 50,
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
    },
    consultaList: {
        flex: 1,
        marginTop: 20,
        paddingHorizontal: 20,
        display: 'flex',
        fontSize: 40
    },
    consultaItem: {
        marginBottom: 10,
        padding: 10,
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 15,
        backgroundColor: "#c9c9c9",
    },
    detalhesConsulta: {
        backgroundColor: "#c9c9c9",
        padding: 10,
        marginTop: 5,
        borderRadius: 5,
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
        fontSize: 20,
    },
    arrowButton: {
        position: 'absolute',
        top: 10,
        right: 10,
    },
});

export default stylesConsulta
