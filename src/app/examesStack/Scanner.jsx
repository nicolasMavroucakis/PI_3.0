import React, { useState } from 'react';
import { Text, View, Button, Image, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { RNTesseractOcr } from 'react-native-tesseract-ocr'

export default function App() {
  const [extractedText, setExtractedText] = useState('');

  const pickImage = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('Desculpe, precisamos de permissões para acessar a galeria de mídia.');
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      try {
        // Realiza o reconhecimento de texto de forma síncrona
        const extractedText = await RNTesseractOcr.recognize(result.uri, 'LANG_ENGLISH', {});

        setExtractedText(extractedText);
      } catch (error) {
        console.error('Erro ao processar imagem:', error);
        setExtractedText('Erro ao processar imagem.');
      }
    }
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Button title="Escolher imagem da galeria" onPress={pickImage} />
      {extractedText !== '' && <Text style={{ marginTop: 20 }}>Texto extraído: {extractedText}</Text>}
    </View>
  );
}
