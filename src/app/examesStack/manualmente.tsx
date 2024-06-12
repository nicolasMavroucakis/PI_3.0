import { Link } from 'expo-router';
import React, { useContext, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, FlatList, TextInput, Dimensions, Image } from 'react-native';
import { GlobalContext } from '../context/aaaa';
import { useNavigation } from "expo-router";


const { width: screenWidth, height: screenHeight } = Dimensions.get('window');

// Importe os dados do JSON
import examData from './exames_traduzidos.json';
import styleMedicacaoAdiciona from '../styles/styleMedicacaoAdiciona';

const AddExamScreen = () => {
  const [examName, setExamName] = useState('');
  const [examValue, setExamValue] = useState('');
  const [isListVisible, setIsListVisible] = useState(false);
  const { exames, setExames } = useContext(GlobalContext);
  const navigation = useNavigation();


  // Use os dados importados do JSON para preencher a lista de exames
  const examItems = examData.map((exam, index) => ({
    id: index.toString(),
    name: exam["Nome Exame"]
  }));

  const handleAddExame = () => {
    if (examName && examValue) {
      const novoExame = {
        nomeExame: examName,
        valor: examValue,
      };
      setExames(prevExames => [...prevExames, novoExame]);
      console.log("Exames atualizados:", [...exames, novoExame]);
      setExamName('');
      setExamValue('');
    } else {
      console.warn("Por favor, selecione um exame e insira um valor.");
    }
  };

  const handleSelectItem = (item) => {
    setExamName(item.name);
    setIsListVisible(false);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => handleSelectItem(item)}>
      <Text style={styles.itemText}>{item.name}</Text>
    </TouchableOpacity>
  );

  const handleVoltar = () => {
    navigation.goBack();
};

  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding">
      <View>
        <TouchableOpacity onPress={handleVoltar}>
          <Image source={require("../../../assets/seta-direita.png")} style={styleMedicacaoAdiciona.ButtonVoltaClaro}/>
          </TouchableOpacity>
      </View>
      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 40 }}>
        <Text style={{ fontSize: 30 }}>Adicionar</Text>
      </View>
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.input}
          onPress={() => setIsListVisible(!isListVisible)}
        >
          <Text style={styles.inputText}>{examName || "Selecione um exame"}</Text>
        </TouchableOpacity>
        {isListVisible && (
          <FlatList
            data={examItems}
            renderItem={renderItem}
            keyExtractor={item => item.id}
            style={styles.flatList}
          />
        )}
        <TextInput
          style={styles.input}
          placeholder="Valor do Exame"
          value={examValue}
          onChangeText={setExamValue}
        />
        <TouchableOpacity style={styles.button} onPress={handleAddExame}>
          <Text style={styles.buttonText}>Adicionar Exame</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    alignItems: "center",
    paddingTop: screenHeight * 0.05,
    height: screenHeight,
    gap: 10
  },
  input: {
    width: screenWidth * 0.75,
    height: 50,
    borderRadius: 20,
    backgroundColor: '#bdbdbd',
    paddingLeft: 5,
    marginTop: 10
  },
  inputText: {
    color: '#333',
    margin: 'auto',
  },
  flatList: {
    maxHeight: 150,
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  item: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  itemText: {
    fontSize: 18,
  },
  button: {
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 300,
    height: 60,
    color: 'white',
    backgroundColor: '#71A981',
    borderRadius: 10
  },
  buttonText: {
    color: 'black',
    textAlign: 'center'
  }
});

export default AddExamScreen;
