import { StatusBar } from 'expo-status-bar';  //componenente do expo que permite controlar o estilo da barra de status do sistema, como hora, bateria, etc.

import { StyleSheet, Text, View } from 'react-native'; //componentes básicos do react native.


export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({  //cria um objeto de estilos para ser usado no aplicativo. É aplicado na View.
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
