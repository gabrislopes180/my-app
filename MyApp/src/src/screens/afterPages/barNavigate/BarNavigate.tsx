import React, {useRef, useEffect} from 'react';
import { Animated } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../../App';
import {Ionicons} from '@expo/vector-icons';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';

import HomeScreen from '../home/HomeScreen';
import ProfileScreen from '../profile/ProfileScreen';
import PlayScreen from '../play/PlayScreen';
import StudiesScreen from '../studies/StudiesScreen';

type CadastroScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Navigate'>;

const Tab = createBottomTabNavigator();


const BarNavigate = () => {

  const translateY = useRef(new Animated.Value(100)).current;

  useEffect(() => {
    Animated.timing(translateY, {
      toValue: 0,
      duration: 500,
      useNativeDriver: true,
    }).start();
  }, []);

    return (
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#fff",
          tabBarInactiveTintColor: "#cecccd",
          tabBarStyle: {
            backgroundColor: "#2b6864",
            position: "absolute",
            elevation: 0,
            marginBottom: 25,
            marginHorizontal: 10,
            height: 54,
            borderRadius: 28,
            paddingTop: 9,
            transform: [{ translateY }], // <-- animação aplicada aqui
          },
        }}
      >
        <Tab.Screen
          name="Home"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color, focused }) => {
              if (focused) {
                return <Ionicons name="home" size={size} color={color} />;
              }
              return <Ionicons name="home-outline" size={size} color={color} />;
            },
          }}
        />

        <Tab.Screen
          name="Play"
          component={PlayScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color, focused }) => {
              if (focused) {
                return (
                  <Ionicons name="play-circle" size={size} color={color} />
                );
              }
              return (
                <Ionicons
                  name="play-circle-outline"
                  size={size}
                  color={color}
                />
              );
            },
          }}
        />

        <Tab.Screen
          name="Studies"
          component={StudiesScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color, focused }) => {
              if (focused) {
                return <Ionicons name="book" size={size} color={color} />;
              }
              return <Ionicons name="book-outline" size={size} color={color} />;
            },
          }}
        />
        <Tab.Screen
          name="Profile"
          component={ProfileScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ size, color, focused }) => {
              if (focused) {
                return (
                  <FontAwesome5 name="user-alt" size={size} color={color} />
                );
              }
              return <FontAwesome5 name="user" size={size} color={color} />;
            },
          }}
        />
      </Tab.Navigator>
    );
};

export default BarNavigate;