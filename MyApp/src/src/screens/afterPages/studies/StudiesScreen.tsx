import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Animated, ScrollView, TouchableOpacity} from 'react-native';
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import FontAwesome from "@expo/vector-icons/FontAwesome";

type RootStackParamList = {
  Studies: undefined;
  Study1: undefined;
  Study2: undefined;
  Study3: undefined
  Study4: undefined;
  Study5: undefined;
};

 type NavigationProp = StackNavigationProp<RootStackParamList, "Studies">;
 

 const totalNumbers = 5;

const StudiesScreen = () => {
  
  const navigation = useNavigation<NavigationProp>();

  {/*função para a barra de progresso funcionar responsivamente com os botões */}
  const [currentStep, setCurrentStep] = useState(0)
  
    const addPress = () => {
      if (currentStep < totalNumbers) {
        setCurrentStep(prev => prev + 1);
      }
    };

    const backPress = () => {
      if ( currentStep > 0) {
        setCurrentStep(prev => prev - 1);
      }
    }
  
    const progress = currentStep / totalNumbers;

    {/* animação para suavizar a linha de progresso dos estudos */}
    const animatedProgress = useRef(new Animated.Value(0)).current;

    useEffect(() => {
      Animated.timing(animatedProgress, {
        toValue: progress,
        duration: 350,
        useNativeDriver: false,
      }).start();
    }, [progress]);

    const progressWidth = animatedProgress.interpolate({
      inputRange: [0, 1],
      outputRange: ["0%", "100%"],
    });


    {/* aqui se iniciam os useStates, para definirem true or false nos botoes de confirmação daquele estudo */}

    {/* useState do Assunto 1 */}
  const [checkStudy, setCheckStudy] = useState(true)
   const [checkStudyPressed, setCheckStudyPressed] =useState(false);

    { /* useState do Assunto 2 */}
   const [checkStudy2, setCheckStudy2] = useState(true);
   const [checkStudyPressed2, setCheckStudyPressed2] = useState(false);

   { /* useState do Assunto 3 */}
   const [checkStudy3, setCheckStudy3] = useState(true);
   const [checkStudyPressed3, setCheckStudyPressed3] = useState(false);

   {/* useState do Assunto 4 */}
   const [checkStudy4, setCheckStudy4] = useState(true);
   const [checkStudyPressed4, setCheckStudyPressed4] = useState(false);

   {/* useState do Assunto 5 */}
   const [checkStudy5, setCheckStudy5] = useState(true);
   const [checkStudyPressed5, setCheckStudyPressed5] = useState(false);

  return (
    <View style={styles.container}>
      <ScrollView horizontal = {false}>
        <Text style={styles.title}>Meus estudos</Text>
        <View style={styles.studiesContainer}>
          {/* -------------------Aqui se inicia a box do assunto 1------------------------ */}

          <View style={[styles.studiesBox]}>
            <View style={styles.studiesDivision}>
              <View>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "bold",
                    marginBottom: 7,
                    color: "#606060",
                  }}
                >
                  Assunto 1 de estudo
                </Text>
                <Text style={{ marginRight: 60, color: "#404040" }}>
                  Algum assunto especifico que será lido pelo aluno paraa
                  melhorar seus conhecimentos que ainda nao foi definido.
                </Text>
              </View>

              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => {
                  setCheckStudyPressed(true);
                  setCheckStudy(false);
                  addPress();
                }}
              >
                <Text>
                  {checkStudy && (
                    <FontAwesome name="check-circle-o" size={32} color="grey" />
                  )}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => {
                  setCheckStudyPressed(false);
                  setCheckStudy(true);
                  backPress();
                }}
              >
                <Text>
                  {checkStudyPressed && (
                    <FontAwesome name="check-circle" size={32} color="green" />
                  )}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Study1")}
            >
              <Text style={styles.buttonText}>Verificar Estudo</Text>
            </TouchableOpacity>
          </View>

          {/* ---------------Aqui se inicia a box do assunto 2------------------- */}
          <View style={[styles.studiesBox]}>
            <View style={styles.studiesDivision}>
              <View>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "bold",
                    marginBottom: 7,
                    color: "#606060",
                  }}
                >
                  Assunto 2 de estudo
                </Text>
                <Text style={{ marginRight: 60, color: "#404040" }}>
                  Algum assunto especifico que será lido pelo aluno paraa
                  melhorar seus conhecimentos que ainda nao foi definido.
                </Text>
              </View>

              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => {
                  setCheckStudyPressed2(true);
                  setCheckStudy2(false);
                  addPress();
                }}
              >
                <Text>
                  {checkStudy2 && (
                    <FontAwesome name="check-circle-o" size={32} color="grey" />
                  )}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => {
                  setCheckStudyPressed2(false);
                  setCheckStudy2(true);
                  backPress();
                }}
              >
                <Text>
                  {checkStudyPressed2 && (
                    <FontAwesome name="check-circle" size={32} color="green" />
                  )}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Study2")}
            >
              <Text style={styles.buttonText}>Verificar Estudo</Text>
            </TouchableOpacity>
          </View>

          {/* -----------------Aqui se inicia a box do assunto 3--------------------- */}
          <View style={[styles.studiesBox]}>
            <View style={styles.studiesDivision}>
              <View>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "bold",
                    marginBottom: 7,
                    color: "#606060",
                  }}
                >
                  Assunto 3 de estudo
                </Text>
                <Text style={{ marginRight: 60, color: "#404040" }}>
                  Algum assunto especifico que será lido pelo aluno paraa
                  melhorar seus conhecimentos que ainda nao foi definido.
                </Text>
              </View>

              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => {
                  setCheckStudyPressed3(true);
                  setCheckStudy3(false);
                  addPress();
                }}
              >
                <Text>
                  {checkStudy3 && (
                    <FontAwesome name="check-circle-o" size={32} color="grey" />
                  )}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => {
                  setCheckStudyPressed3(false);
                  setCheckStudy3(true);
                  backPress();
                }}
              >
                <Text>
                  {checkStudyPressed3 && (
                    <FontAwesome name="check-circle" size={32} color="green" />
                  )}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Study3")}
            >
              <Text style={styles.buttonText}>Verificar Estudo</Text>
            </TouchableOpacity>
          </View>

          {/* -----------------Aqui se inicia a box do assunto 4--------------------- */}
          <View style={[styles.studiesBox]}>
            <View style={styles.studiesDivision}>
              <View>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "bold",
                    marginBottom: 7,
                    color: "#606060",
                  }}
                >
                  Assunto 4 de estudo
                </Text>
                <Text style={{ marginRight: 60, color: "#404040" }}>
                  Algum assunto especifico que será lido pelo aluno paraa
                  melhorar seus conhecimentos que ainda nao foi definido.
                </Text>
              </View>

              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => {
                  setCheckStudyPressed4(true);
                  setCheckStudy4(false);
                  addPress();
                }}
              >
                <Text>
                  {checkStudy4 && (
                    <FontAwesome name="check-circle-o" size={32} color="grey" />
                  )}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => {
                  setCheckStudyPressed4(false);
                  setCheckStudy4(true);
                  backPress();
                }}
              >
                <Text>
                  {checkStudyPressed4 && (
                    <FontAwesome name="check-circle" size={32} color="green" />
                  )}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Study4")}
            >
              <Text style={styles.buttonText}>Verificar Estudo</Text>
            </TouchableOpacity>
          </View>

          {/* -----------------Aqui se inicia a box do assunto 5--------------------- */}
          <View style={[styles.studiesBox]}>
            <View style={styles.studiesDivision}>
              <View>
                <Text
                  style={{
                    fontSize: 19,
                    fontWeight: "bold",
                    marginBottom: 7,
                    color: "#606060",
                  }}
                >
                  Assunto 5 de estudo
                </Text>
                <Text style={{ marginRight: 60, color: "#404040" }}>
                  Algum assunto especifico que será lido pelo aluno paraa
                  melhorar seus conhecimentos que ainda nao foi definido.
                </Text>
              </View>

              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => {
                  setCheckStudyPressed5(true);
                  setCheckStudy5(false);
                  addPress();
                }}
              >
                <Text>
                  {checkStudy5 && (
                    <FontAwesome name="check-circle-o" size={32} color="grey" />
                  )}
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.checkButton}
                onPress={() => {
                  setCheckStudyPressed5(false);
                  setCheckStudy5(true);
                  backPress();
                }}
              >
                <Text>
                  {checkStudyPressed5 && (
                    <FontAwesome name="check-circle" size={32} color="green" />
                  )}
                </Text>
              </TouchableOpacity>
            </View>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigation.navigate("Study5")}
            >
              <Text style={styles.buttonText}>Verificar Estudo</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ------Aqui se inicia a barra de progresso com a porcentagem dos estudos------ */}
        <View>
          <Text style={styles.text}>
            Progresso do estudo: {Math.round(progress * 100)}%
          </Text>

          <View style={styles.progressBar}>
            <Animated.View
              style={[styles.progressLine, { width: progressWidth }]}
            />
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default StudiesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#cafaef"
  },
  title: {
    alignSelf: "flex-start",
    marginVertical: 60,
    fontSize: 23,
    fontWeight: "bold",
    color: "grey",
  },
  studiesContainer: {
    gap: 50,
  },
  studiesBox: {
    width: "93%",
    padding: 0,
    borderRadius: 10,
    backgroundColor: "#fff",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    alignSelf: "center",
  },
  studiesDivision: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 10,
  },
  button: {
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "bold",
    color: "#2b6864",
  },
  checkButton: {
    alignItems: "center",
    position: "absolute",
    left: 260,
  },
  text: {
    alignSelf: "flex-start",
    fontSize: 16,
    fontWeight: "bold",
    color: "grey",
    marginVertical: 25,
  },
  progressBar: {
    height: 8,
    width: "92%",
    backgroundColor: "#BEBEBE",
    borderRadius: 15,
    overflow: "hidden",
    marginBottom: 215,
  },
  progressLine: {
    height: "100%",
    backgroundColor: "green",
  },
});