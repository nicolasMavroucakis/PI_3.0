import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import styles from "../styles/stylesMedicacao"; // Ajuste o caminho conforme necessário
import data from '../examesStack/exames_traduzidos.json'; // Ajuste o caminho conforme necessário

const Item = ({ item, onDelete, onToggle }) => {
  const exameData = data.find(exame => exame["Nome Exame"] === item.nomeExame);

  if (!exameData) {
    return null;
  }

  const quantidadeMaxima = exameData["Quantidade Maxima"];
  const quantidadeMinima = exameData["Quantidade Minima"];
  
  let statusText = '';
  if (item.valor < quantidadeMinima) {
    statusText = 'Abaixo do recomendado';
  } else if (item.valor > quantidadeMaxima) {
    statusText = 'Acima do recomendado';
  } else {
    statusText = 'Dentro do intervalo aceito';
  }

  return (
    <View style={styles.containerTextActive2}>
      <View>
        <Text style={{ fontSize: 16 }}>Nome: {item.nomeExame}</Text>
        <Text style={{ fontSize: 16, marginTop: 10 }}>Valor: {item.valor}</Text>
        <Text style={{ fontSize: 16, marginTop: 10, marginBottom: 10 }}>{statusText}</Text>
      </View>
      <View>
        <TouchableOpacity onPress={onDelete}>
          <Image style={styles.lixoImage} source={require('../../../assets/excluir.png')} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Item;
