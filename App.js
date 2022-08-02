import React from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Entrada from "./src/views/Entrada";
import Saida from "./src/views/Saida";
import Menu from "./src/views/Menu";
import Historico from "./src/views/Historico";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Entrada' screenOptions={{headerShown: false}}>
        <Stack.Screen name='Entrada' component={Entrada}/>
        <Stack.Screen name='Saida' component={Saida}/>
        <Stack.Screen name='Menu' component={Menu}/>
        <Stack.Screen name='Historico' component={Historico}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
