import React, { useEffect, useRef } from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Animated, ImageBackground} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../auth/rotas';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Welcome'>;


const Welcome = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();

  const scaleAnim = useRef(new Animated.Value(0)).current; // começa pequeno

     useEffect(() => {
        Animated.timing(scaleAnim, {
          toValue: 1,
           duration: 1000,
           useNativeDriver: true,
        }).start();
      }, []);  

      const translateY = useRef(new Animated.Value(0)).current;

      useEffect(() => {
        const animation = Animated.loop(
          Animated.sequence([
            Animated.timing(translateY, {
              toValue: -15, // sobe 10 unidades
              duration: 800,
              useNativeDriver: true,
            }),
            Animated.timing(translateY, {
              toValue: 0, // volta à posição original
              duration: 800,
              useNativeDriver: true,
            }),
          ])
        );
    
        animation.start();
    
        return () => animation.stop(); // limpa ao desmontar
      }, [translateY]);
     

    return(
        <View style = {styles.container}>

           <ImageBackground source={{uri: "https://i.postimg.cc/TPb5pF5d/welcome.jpg"}} style = {styles.imageBackGround}>

             
              <Animated.Text style ={[styles.welcomeText, {transform: [{ scale: scaleAnim }]}]}>
                  Olá! {`\n`} Bem vindo ao nosso App!
              </Animated.Text>

              <Animated.Text style= {[styles.secondText, {transform: [{ scale: scaleAnim }]}]}>
              Esse é um projeto feito por alunos da Unisagrado, com o intuito de ajudá-los a estudar de uma forma assertiva e descontraída! {`\n`} E aí, Bora lá?
              </Animated.Text>

             <Animated.View style={{ transform: [{ translateY }] }}>
                    <TouchableOpacity style={styles.button}   onPress={() => navigation.navigate('Navigate')}>
                        <Text style={styles.buttonText}>Vamos começar</Text>
                    </TouchableOpacity> 
             </Animated.View>
             
          </ImageBackground>
            
        </View>
    )
}

export default Welcome

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "flex-start",
      alignItems: "center",
    },
    imageBackGround: {
     flex: 1,
     justifyContent: "center",
      alignItems: "center",
      width: 390
    },
    welcomeText: {
        fontSize: 28,
        fontWeight:600,
        textAlign: 'center',
        color: "#0d4941",
    },
    secondText: {
      fontSize: 25,
      marginTop: 150,
      color: "#0d4941",
      marginHorizontal: 10,
      textAlign: "center",
    },
    buttonText: {
        fontSize: 20,
        fontWeight: 700,
        color: "#fff",
        backgroundColor: "#176c65",
        padding: 14,
        borderRadius: 29,
    },
    button: {
    marginTop: 120,
    },
})