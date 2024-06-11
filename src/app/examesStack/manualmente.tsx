import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, TextInput, Button, StyleSheet, ScrollView, KeyboardAvoidingView } from 'react-native';

const DropdownInput = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [inputValue, setInputValue] = useState('');
  const [examsList, setExamsList] = useState([]);
  const options = ['Opção 1', 'Opção 2', 'Opção 3'];

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setModalVisible(false);
  };

  const handleAddExame = () => {
    if (selectedOption && inputValue) {
      setExamsList([...examsList, { option: selectedOption, value: inputValue }]);
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
              {options.map((option, index) => (
                <TouchableOpacity
                  key={index}
                  style={styles.option}
                  onPress={() => handleOptionSelect(option)}
                >
                  <Text>{option}</Text>
                </TouchableOpacity>
              ))}
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
          {examsList.map((exam, index) => (
            <View key={index} style={styles.listItem}>
              <Text>{`Opção: ${exam.option}, Valor: ${exam.value}`}</Text>
            </View>
          ))}
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
