import React, { useContext, useEffect } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
import { GlobalContext } from "../../context/aaaa"; // Ajuste o caminho conforme necessário
import Header from "../../components/Header"; // Ajuste o caminho conforme necessário
import styles from "../../styles/stylesMedicacao"; // Ajuste o caminho conforme necessário
import { Link } from 'expo-router'; // Certifique-se de que o Link está sendo importado corretamente
import Item from "../../components/item"; // Ajuste o caminho conforme necessário

const Exames = () => {
  const { exames, setExames } = useContext(GlobalContext);
  const navigation = useNavigation();

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      // Recarregar a lista quando a página ganhar o foco
    });

    return unsubscribe;
  }, [navigation]);

  const handleDelete = (index) => {
    const updatedExames = exames.filter((_, i) => i !== index);
    setExames(updatedExames);
  };

  const handlePress = (index) => {
    const updatedExames = [...exames];
    updatedExames[index].grande = !updatedExames[index].grande;
    setExames(updatedExames);
  };

  return (
    <View style={{ flex: 1 }}>
      <Header />
      <View style={styles.header}>
        <View style={styles.headerText}>
          <Text style={{ fontSize: 30 }}>Exames</Text>
        </View>
        <View style={styles.headerButton}>
          <TouchableOpacity style={styles.buttonAdd}>
            <Link href={'../../examesStack'}>
              <AntDesign name="plus" size={28} color="white" />
            </Link>
          </TouchableOpacity>
        </View>
      </View>
      <ScrollView>
        <View style={styles.medicacaoesContainer}>
          {exames.map((exame, index) => (
            <Item
              key={index}
              item={exame}
              onDelete={() => handleDelete(index)}
              onToggle={() => handlePress(index)}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

export default Exames;
