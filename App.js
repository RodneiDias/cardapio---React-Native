import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Finalizado from './src/Finalizado';
import Cardapio from './src/Cardapio';
import Pedido from './src/pedido';
import Loginit from './src/Loginit';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Loginit" component={Loginit}  />
        <Stack.Screen name="Cardapio" component={Cardapio} />
        <Stack.Screen name="Pedido" component={Pedido} options={{ headerShown: false }} />
        <Stack.Screen name="Finalizado" component={Finalizado}  />

      </Stack.Navigator> 

    </NavigationContainer>
    
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
