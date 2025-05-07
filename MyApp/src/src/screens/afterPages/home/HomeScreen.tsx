import React, { useEffect, useRef } from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Image,
  Animated,
  ScrollView,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

const AnimatedIcon = Animated.createAnimatedComponent(FontAwesome5);

    {/*-- Array comm informações de cada jogador (alterar o necessário e juntar com o back)--*/ }
const rankingData = [
  {
    id: 1,
    name: "João",
    score: 60,
    avatar: "https://i.postimg.cc/FHRCKxp4/user-1.png",
  },
  {
    id: 2,
    name: "Maria",
    score: 40,
    avatar: "https://i.postimg.cc/FHRCKxp4/user-1.png",
  },
  {
    id: 3,
    name: "Pedro",
    score: 100,
    avatar: "https://i.postimg.cc/FHRCKxp4/user-1.png",
  },
  {
    id: 4,
    name: "Ana",
    score: 20,
    avatar: "https://i.postimg.cc/FHRCKxp4/user-1.png",
  },
  {
    id: 5,
    name: "Lucas",
    score: 50,
    avatar: "https://i.postimg.cc/FHRCKxp4/user-1.png",
  },
  {
    id: 6,
    name: "Carla",
    score: 20,
    avatar: "https://i.postimg.cc/FHRCKxp4/user-1.png",
  },
  {
    id: 7,
    name: "Rafael",
    score: 40,
    avatar: "https://i.postimg.cc/FHRCKxp4/user-1.png",
  },
  {
    id: 8,
    name: "Joana",
    score: 10,
    avatar: "https://i.postimg.cc/FHRCKxp4/user-1.png",
  },
  {
    id: 9,
    name: "Maria",
    score: 15,
    avatar: "https://i.postimg.cc/FHRCKxp4/user-1.png",
  },
  {
    id: 10,
    name: "Antonio",
    score: 14,
    avatar: "https://i.postimg.cc/FHRCKxp4/user-1.png",
  },
  {
    id: 11,
    name: "Malu",
    score: 5,
    avatar: "https://i.postimg.cc/FHRCKxp4/user-1.png",
  },
];

const HomeScreen = () => {
  const translateY1 = useRef(new Animated.Value(0)).current;
  const translateY2 = useRef(new Animated.Value(0)).current;
  const translateY3 = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const createFloatingAnimation = (
      animatedValue: Animated.Value,
      delay: number
    ) => {
      return Animated.loop(
        Animated.sequence([
          Animated.timing(animatedValue, {
            toValue: -15,
            duration: 800,
            delay,
            useNativeDriver: true,
          }),
          Animated.timing(animatedValue, {
            toValue: 0,
            duration: 800,
            useNativeDriver: true,
          }),
        ])
      );
    };

    createFloatingAnimation(translateY1, 0).start();
    createFloatingAnimation(translateY2, 300).start();
    createFloatingAnimation(translateY3, 600).start();

    return () => {
      translateY1.stopAnimation();
      translateY2.stopAnimation();
      translateY3.stopAnimation();
    };
  }, []);

  return (
    <ImageBackground
      style={styles.background}
      source={{
        uri: "https://i.postimg.cc/G2jJCRbL/Whats-App-Image-2025-04-15-at-13-46-50.jpg",
      }}
    >
      <ScrollView>
        <View style={styles.imageContainer}>
          {[...rankingData]
            .sort((a, b) => b.score - a.score) // essa função .sort faz com que ordene de maior a menor pontuação no ranking
            .slice(0, 3)
            .map((player, index) => {//.map e .slice faz com que apenas adicionando um novo player(objeto) na array rankingData, eles já apareçam aqui
              let animatedStyle = {};
              let borderColor = "";
              let size = 70;
              let numberStyle = {};

              if (index === 0) {
                animatedStyle = { transform: [{ translateY: translateY1 }] };
                borderColor = "#e5cb26";
                size = 90;
                numberStyle = styles.number1;
              } else if (index === 1) {
                animatedStyle = { transform: [{ translateY: translateY2 }] };
                borderColor = "#125250";
                size = 70;
                numberStyle = styles.number2;
              } else {
                animatedStyle = { transform: [{ translateY: translateY3 }] };
                borderColor = "#125250";
                size = 70;
                numberStyle = styles.number3;
              }

              return (
                <Animated.View key={player.id} style={animatedStyle}>
                  {index === 0 && (
                    <AnimatedIcon name="crown" size={18} style={styles.icon} />
                  )}
                  <Image
                    style={{
                      width: size,
                      height: size,
                      margin: 20,
                      borderWidth: 4,
                      borderColor: borderColor,
                      borderRadius: 70,
                    }}
                    source={{ uri: player.avatar }}
                  />
                  <Text style={numberStyle}>{index + 1}</Text>
                  <Text style={styles.info}>{player.name}</Text>
                  <Text style={styles.info}>{player.score}</Text>
                </Animated.View>
              );
            })}
        </View>

        <View style={styles.positionsContainer}>
          {[...rankingData]
            .sort((a, b) => b.score - a.score)
            .slice(3)
            .map((player, index) => {
              return (
                <View key={player.id} style={styles.box}>
                  <View style={styles.positionBox}>
                    <View style={styles.user}>
                      <Text>{index + 4}</Text>
                      <Image
                        style={{
                          width: 50,
                          height: 50,
                          borderRadius: 70,
                        }}
                        source={{ uri: player.avatar }}
                      />
                      <Text>{player.name}</Text>
                    </View>
                    <Text>{player.score}</Text>
                  </View>
                </View>
              );
            })}
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 110,
  },
  icon: {
    color: "#e5cb26",
    position: "absolute",
    top: 1,
    left: 53,
  },
  number1: {
    position: "absolute",
    left: 60,
    top: 98,
    backgroundColor: "#e5cb26",
    color: "#fff",
    width: 15,
    height: 15,
    paddingLeft: 3,
    borderRadius: 8,
  },
  number2: {
    position: "absolute",
    left: 49,
    top: 80,
    backgroundColor: "#125250",
    color: "#fff",
    width: 15,
    height: 15,
    paddingLeft: 3,
    borderRadius: 8,
  },
  number3: {
    position: "absolute",
    left: 50,
    top: 80,
    backgroundColor: "#125250",
    color: "#fff",
    width: 15,
    height: 15,
    paddingLeft: 3,
    borderRadius: 8,
  },
  info: {
    textAlign: "center",
    fontSize: 11,
    fontWeight: "bold",
    color: "grey",
  },
  positionsContainer: {
    marginTop: 100,
    marginBottom: 100
  },
  box: {
    marginTop: 30,
  },
  positionBox: {
    flexDirection: "row",
    backgroundColor: "#cbcdcc",
    alignItems: "center",
    paddingRight: 8,
    borderRadius: 15,
  },
  user: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
    width: 290,
    height: 65,
    paddingHorizontal: 20,
    paddingTop: 5,
    borderRadius: 15,
    backgroundColor: "#cbcdcc",
    marginRight: 5,
  },
});
