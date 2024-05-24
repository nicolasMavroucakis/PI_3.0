import React from 'react';
import { Button } from 'react-native';
import * as Google from 'expo-auth-session/providers/google';

export default function AuthScreen() {
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId: 'YOUR_GOOGLE_CLIENT_ID.apps.googleusercontent.com',
  });

  React.useEffect(() => {
    if (response?.type === 'success') {
      const { id_token } = response.params;
      // Aqui você pode enviar o token para o seu servidor para autenticação do usuário
    }
  }, [response]);

  return (
    <Button
      disabled={!request}
      title="Fazer login com Google"
      onPress={() => {
        promptAsync();
      }}
    />
  );
}
