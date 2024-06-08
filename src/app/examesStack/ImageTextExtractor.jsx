// App.js
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import axios from 'axios';

export default function App() {
  const [pdfText, setPdfText] = useState('');

  const handleExtractText = async () => {
    try {
      const document = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });

      if (document.type === 'success') {
        const formData = new FormData();
        formData.append('pdf', {
          uri: document.uri,
          name: 'pdf',
          type: 'application/pdf',
        });

        const response = await axios.post(
          'http://127.0.0.1:5000/extract-text',
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          }
        );
        setPdfText(response.data);
      }
    } catch (error) {
      console.error('Error extracting text from PDF:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Extract Text" onPress={handleExtractText} />
      <View style={styles.textContainer}>
        <Text style={styles.text}>Extracted Text:</Text>
        <Text>{pdfText}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
  },
});
