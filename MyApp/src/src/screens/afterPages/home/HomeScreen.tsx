import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet,ImageBackground, Image, Animated, ScrollView} from 'react-native';
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
const AnimatedIcon = Animated.createAnimatedComponent(FontAwesome5);


const HomeScreen = () => {

  const translateY1 = useRef(new Animated.Value(0)).current;
  const translateY2 = useRef(new Animated.Value(0)).current;
  const translateY3 = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      const createFloatingAnimation = (animatedValue: Animated.Value, delay: number) => {
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
        )
      }

      createFloatingAnimation(translateY1, 0).start();
      createFloatingAnimation(translateY2, 300).start();
      createFloatingAnimation(translateY3, 600).start();

      return () => {
        translateY1.stopAnimation();
        translateY2.stopAnimation();
        translateY3.stopAnimation();
      };
    })

  return (
    
      <ImageBackground
        style={styles.background}
        source={{
          uri: "https://i.postimg.cc/G2jJCRbL/Whats-App-Image-2025-04-15-at-13-46-50.jpg",
        }}
      >

      <ScrollView>

        
        <View style={[styles.imageContainer]}>
          <Animated.View style={{ transform: [{ translateY: translateY1 }] }}>
            <Image
              style={{
                width: 70,
                height: 70,
                margin: 20,
                borderWidth: 4,
                borderColor: "#125250",
                borderRadius: 70,
              }}
              source={{ uri: "https://i.postimg.cc/FHRCKxp4/user-1.png" }}
            />
            <Text style={styles.number2}>2</Text>
            <Text style={styles.info}>Player Name</Text>
            <Text style={styles.info}> Score</Text>
          </Animated.View>

          <Animated.View style={{ transform: [{ translateY: translateY2 }] }}>
            <AnimatedIcon name="crown" size={18} style={styles.icon} />
            <Image
              style={{
                width: 90,
                height: 90,
                margin: 20,
                borderWidth: 4,
                borderColor: "#e5cb26",
                borderRadius: 70,
              }}
              source={{ uri: "https://i.postimg.cc/FHRCKxp4/user-1.png" }}
            />
            <Text style={styles.number1}>1</Text>
            <Text style={styles.info}>Player Name</Text>
            <Text style={styles.info}> Score </Text>
          </Animated.View>

          <Animated.View style={{ transform: [{ translateY: translateY3 }] }}>
            <Image
              style={{
                width: 70,
                height: 70,
                margin: 20,
                borderWidth: 4,
                borderColor: "#125250",
                borderRadius: 70,
              }}
              source={{ uri: "https://i.postimg.cc/FHRCKxp4/user-1.png" }}
            />
            <Text style={styles.number3}>3</Text>
            <Text style={styles.info}>Player Name</Text>
            <Text style={styles.info}> Score </Text>
          </Animated.View>
        </View>

        <View style={styles.positionsContainer}>
          <View style={styles.box}>
            <View style={styles.positionBox}>
              <View style={styles.user}>
                <Text>4</Text>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 70,
                  }}
                  source={{ uri: "https://i.postimg.cc/FHRCKxp4/user-1.png" }}
                />
                <Text>Player Name</Text>
              </View>
              <Text>Score</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.positionBox}>
              <View style={styles.user}>
                <Text>5</Text>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 70,
                  }}
                  source={{ uri: "https://i.postimg.cc/FHRCKxp4/user-1.png" }}
                />
                <Text>Player Name</Text>
              </View>
              <Text>Score</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.positionBox}>
              <View style={styles.user}>
                <Text>6</Text>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 70,
                  }}
                  source={{ uri: "https://i.postimg.cc/FHRCKxp4/user-1.png" }}
                />
                <Text>Player Name</Text>
              </View>
              <Text>Score</Text>
            </View>
          </View>

          <View style={styles.box}>
            <View style={styles.positionBox}>
              <View style={styles.user}>
                <Text>7</Text>
                <Image
                  style={{
                    width: 50,
                    height: 50,
                    borderRadius: 70,
                  }}
                  source={{ uri: "https://i.postimg.cc/FHRCKxp4/user-1.png" }}
                />
                <Text>Player Name</Text>
              </View>
              <Text>Score</Text>
            </View>
          </View>

   

        </View>
      </ScrollView>
      </ImageBackground>
  );

}

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
    marginTop: 90,
  },
  icon: {
    color: "#e5cb26",
    position: "absolute",
    top: 1,
    left: 53,
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
    marginTop: 100
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