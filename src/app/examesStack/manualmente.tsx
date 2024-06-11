import React, { useContext, useState, useEffect } from 'react';
import { GlobalContext } from '../context/aaaa';
import { View, Text, TouchableOpacity, Modal, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView, Dimensions } from 'react-native';
import examesData from './exames_traduzidos.json'; // Importar o arquivo JSON

const DropdownInput = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const { exames, setExames } = useContext(GlobalContext);
  const [examNames, setExamNames] = useState([]); // Lista de nomes de exames

  useEffect(() => {
    // Mapear os nomes dos exames quando o componente for montado
    const names = examesData.map(item => item['Nome Exame']);
    setExamNames(names);
  }, []); // Executar apenas uma vez

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  const handleAddExame = () => {
    if (selectedOption && inputValue) {
      setExames([...exames, { option: selectedOption, value: inputValue }]);
      setSelectedOption(null);
      setInputValue('');
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <ScrollView contentContainerStyle={{ flexGrow: 1, alignItems: "center", backgroundColor: "#FFFFFF" }}>
        <View style={styles.container}>
          <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.input}>
            <Text>{selectedOption || 'Selecione uma opção'}</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(false);
            }}
          >
            <View style={styles.modalContainer}>
              <ScrollView style={styles.optionsContainer}>
                {examNames.map((name, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.option}
                    onPress={() => handleOptionSelect(name)}
                  >
                    <Text>{name}</Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
          </Modal>
          <TextInput
            style={styles.input}
            value={inputValue}
            onChangeText={setInputValue}
            placeholder="Digite um valor"
          />
          <Button title="Adicionar Exame" onPress={handleAddExame} />
          <Text style={styles.listTitle}>Lista de Exames:</Text>
          {exames.map((exam, index) => (
            <View key={index} style={styles.listItem}>
              <Text>{`Opção: ${exam.option}, Valor: ${exam.value}`}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const { height } = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
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
    maxHeight: height * 0.7, // 70% da altura da tela
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
  },
});

export default DropdownInput;
