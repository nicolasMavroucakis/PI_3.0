import {StyleSheet, Dimensions} from "react-native";

const { height: screenHeight, width: screenWidth } = Dimensions.get('window');
const stylesExamesManualmente = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: "center"
  },
  input: {
    borderWidth: 1,
    padding: 10,
    width: 200,
    marginVertical: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Cor de fundo da parte de trás do modal
  },
  optionsContainer: {
    backgroundColor: '#f0f0f0', // Cor de fundo da parte de trás das opções
    maxHeight: screenHeight * 0.7, // 70% da altura da tela
  },
  option: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    width: 200,
    alignItems: 'center',
    justifyContent: 'center',
  },
  listTitle: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
  listItem: {
    marginTop: 5,
    overflow: "hidden",
    height: screenHeight * 0.4,
    width: screenWidth * 0.6, 
    alignItems: "center", 
    backgroundColor: "#C9C9C9",
    padding: 10, 
    borderRadius: 10
  },
  addButton: {
    width: 200,
    backgroundColor:"#A1D5B0",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 10
  },
  inputDark: {
    borderWidth: 1,
    borderColor: "white",
    padding: 10,
    width: 200,
    marginVertical: 10,
    color: "white"
  },
  addButtonBottom: {
    width: 200,
    backgroundColor:"#A1D5B0",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20
  },
  inputName: {
    width: 200,
    backgroundColor: "#C9C9C9",
    height: 60,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 10
  }
});

export default stylesExamesManualmente