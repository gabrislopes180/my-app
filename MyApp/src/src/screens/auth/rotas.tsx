import React from 'react';
import { NavigationContainer } from '@react-navigation/native'; // rodando sem problemas
import { createNativeStackNavigator } from '@react-navigation/native-stack'; // rodando sem problemas

import LoginScreen from './LoginScreen'; // renomeado!
import AvatarScreen from './AvatarScreen';
import BarNavigate from '../afterPages/barNavigate/BarNavigate';
import WelcomeScreen from './WelcomeScreen';

export type RootStackParamList = {
  Login: undefined;
  Cadastro: undefined; 
  Avatar: undefined;
  Welcome: undefined;
  Navigate: undefined; // tela Home
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const Rotas = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }}>  
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Avatar" component = {AvatarScreen} />
        <Stack.Screen name="Navigate" component = {BarNavigate} />
        <Stack.Screen name="Welcome" component = {WelcomeScreen} />
     </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Rotas;

