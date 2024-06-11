import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import * as FileSystem from 'expo-file-system';
import axios from 'axios';

export default function App() {
  const [pdfText, setPdfText] = useState('');

  const handleExtractText = async () => {
    try {
      console.log('Document Picker started');
      const document = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });

      console.log('Document Picker result:', document);

      if (!document.canceled && document.assets && document.assets.length > 0) {
        const pdfUri = document.assets[0].uri;
        console.log('Document selected:', pdfUri);

        const pdfBase64 = await FileSystem.readAsStringAsync(pdfUri, {
          encoding: FileSystem.EncodingType.Base64,
        });

        const pdfData = `data:application/pdf;base64,${pdfBase64}`;
        const blob = await fetch(pdfData).then(res => res.blob());

        const formData = new FormData();
        formData.append('pdf', {
          uri: pdfUri,
          name: document.assets[0].name,
          type: document.assets[0].mimeType,
        });

        // Log the backend URL
        const backendURL = 'http://192.168.5.227:5000/extract-text';
        console.log('Backend URL:', backendURL);

        console.log('Sending PDF to backend');
        const response = await axios.post(backendURL, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });

        console.log('Text extraction complete');
        setPdfText(response.data.text);
      } else {
        console.log('Document selection cancelled or failed');
      }
    } catch (error) {
      console.error('Error extracting text from PDF:', error.message);
      if (error.response) {
        console.error('Response data:', error.response.data);
        console.error('Response status:', error.response.status);
        console.error('Response headers:', error.response.headers);
      } else if (error.request) {
        console.error('Request data:', error.request);
      } else {
        console.error('Error message:', error.message);
      }
    }
  };

  return (
    <View style={styles.container}>
      <Button title="Extract Text" onPress={handleExtractText} />
      <ScrollView style={styles.textContainer}>
        <Text style={styles.text}>Extracted Text:</Text>
        <Text style={styles.extractedText}>{pdfText}</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  textContainer: {
    marginTop: 20,
    alignSelf: 'stretch',
    paddingHorizontal: 16,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  extractedText: {
    marginTop: 10,
    color: 'black',
    textAlign: 'left',
  },
});
