import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Finalizado from './src/componentes/pages/Finalizado';
import Cardapio from './src/componentes/pages/Cardapio';
import Pedido from './src/componentes/pages/pedido';
import Loginit from './src/componentes/pages/Loginit';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
       
        <Stack.Screen name="Loginit" component={Loginit} options={{ headerShown: false }} />
        <Stack.Screen name="Cardapio" component={Cardapio} options={{ headerShown: false }}/>
        <Stack.Screen name="Pedido" component={Pedido} options={{ headerShown: false }} />
        <Stack.Screen name="Finalizado" component={Finalizado} options={{ headerShown: false }} />

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
