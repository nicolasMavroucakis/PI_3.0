import { Link, useNavigation } from 'expo-router';
import React, { useContext, useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView } from 'react-native';
import { GlobalContext } from '../context/aaaa';

const AddExamScreen = () => {
  const [examName, setExamName] = useState('');
  const [examOptions, setExamOptions] = useState([]);
  const [optionName, setOptionName] = useState('');
  const [optionValue, setOptionValue] = useState('');
  const {exames, setExames} = useContext(GlobalContext);

  const addOption = () => {
    if (optionName !== '' && optionValue !== '') {
      setExamOptions([...examOptions, { [optionName]: optionValue }]);
      setOptionName('');
      setOptionValue('');
    }
  };

  const addExam = () => {
    if (examName !== '' && examOptions.length > 0) {
      const newExam = {
        name: examName,
        options: examOptions.reduce((acc, option) => {
          const [key, value] = Object.entries(option)[0];
          acc[key] = value;
          return acc;
        }, {})
      };
      // Adiciona o novo exame ao array de exames
      setExames([...exames, newExam]);
      // Reinicializa os campos após adicionar o exame
      setExamName('');
      setExamOptions([]);
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View style={{justifyContent: "center", alignItems:"center", marginTop: 40}}>
        <Text style={{fontSize: 30}}>Adicionar</Text>
      </View>
      <View style={styles.container}>
        <Link href={'../(tabs)/exames'} style={{marginBottom: 10, color: "blue"}}>Voltar para Exames.</Link>
        <TextInput
          style={styles.input}
          placeholder="Nome do exame"
          value={examName}
          onChangeText={text => setExamName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Nome da opção"
          value={optionName}
          onChangeText={text => setOptionName(text)}
        />
        <TextInput
          style={styles.input}
          placeholder="Valor da opção"
          value={optionValue}
          onChangeText={text => setOptionValue(text)}
        />
        <TouchableOpacity style={styles.button} onPress={addOption}>
          <Text style={styles.buttonText}>Adicionar Opção</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={addExam}>
          <Text style={styles.buttonText}>Adicionar Exame</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    width: '100%'
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
    width: '100%'
  },
  buttonText: {
    color: 'white',
    textAlign: 'center'
  }
});

export default AddExamScreen;
