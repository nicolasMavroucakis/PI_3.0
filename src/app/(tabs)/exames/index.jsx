import React, { useContext, useEffect, useState } from "react";
import { Text, View, TouchableOpacity, ScrollView, Image, StyleSheet } from "react-native";
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native"; 
import { Link } from "expo-router";
import { GlobalContext } from "../../context/aaaa";
import Header from "../../components/Header";
import styles from "../../styles/stylesMedicacao";

const Item = ({ item, onPress, onDelete, onToggle }) => (
    <View style={styles.containerTextActive}>
        <ScrollView contentContainerStyle={[styles.scrollContent, {justifyContent: "space-between"}]}>
            <View>
                <Text style={{ fontSize: 16, margin: 'auto' }}>Nome: {item.name}</Text>
                {Object.entries(item.options).map(([key, value]) => (
                    <View key={key}>
                    <Text style={{ fontSize: 16 }}>{key}: {value}</Text>
                    </View>
                ))}
            </View>
            <View>
                <View>
                    <TouchableOpacity onPress={onDelete}>
                    <Image style={styles.lixoImage} source={require('../../../../assets/excluir.png')} />
                    </TouchableOpacity>
                </View>
                <View style={styles.a}>
                    <TouchableOpacity onPress={onToggle}>
                    <Image style={styles.arrowImage} source={require('../../../../assets/seta-direita.png')} />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView>
    </View>
);

const Exames = () => {
  const { exames, setExames } = useContext(GlobalContext);
  const [reload, setReload] = useState(false);
  const navigation = useNavigation();
  const { usuario, setUsuario } = useContext(GlobalContext);
  const { modoEscuro } = useContext(GlobalContext);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      setReload(prevState => !prevState);
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
