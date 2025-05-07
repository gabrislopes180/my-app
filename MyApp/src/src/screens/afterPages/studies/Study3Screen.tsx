import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Image,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import Ionicons from "@expo/vector-icons/Ionicons";

const Study3Screen = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <ScrollView>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="arrow-back"
            size={24}
            color="black"
            style={{ marginLeft: 15 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Conteúdo do Estudo 3</Text>

        <Image
          source={{
            uri: "https://i.postimg.cc/qvYWCqRS/6421045.jpg",
          }}
          style={{ width: 340, height: 225, alignSelf: "center", margin: 35, borderRadius: 15 }}
        />

        <View style={styles.textContainer}>
          <Text style={styles.content}>
            Aqui vai o conteúdo completo do assunto 1 que o aluno vai estudar...{" "}
            <Text>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla a
              dicta laborum reprehenderit voluptatum rerum consequuntur quo
              nihil, nemo consectetur modi sed numquam at tempore distinctio
              sit, in eos ipsa. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla a dicta laborum reprehenderit voluptatum
              rerum consequuntur quo nihil, nemo consectetur modi sed numquam at
              tempore distinctio sit, in eos ipsa. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Nulla a dicta laborum reprehenderit
              voluptatum rerum consequuntur quo nihil, nemo consectetur modi sed
              numquam at tempore distinctio sit, in eos ipsa. Lorem ipsum dolor
              sit amet consectetur adipisicing elit. Nulla a dicta laborum
              reprehenderit voluptatum rerum consequuntur quo nihil, nemo
              consectetur modi sed numquam at tempore distinctio sit, in eos
              ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Nulla a dicta laborum reprehenderit voluptatum rerum consequuntur
              quo nihil, nemo consectetur modi sed numquam at tempore distinctio
              sit, in eos ipsa. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Nulla a dicta laborum reprehenderit voluptatum
              rerum consequuntur quo nihil, nemo consectetur modi sed numquam at
              tempore distinctio sit, in eos ipsa.
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    backgroundColor: "#fff",
    padding: 5,
  },
  title: {
    fontSize: 24,
    textAlign: "center",
    fontWeight: "bold",
    marginVertical: 40,
    color: "#447f78",
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
  },
  backButton: {
    marginTop: 40,
  },
  textContainer: {
    marginHorizontal: 20,
  },
  checkboxContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
    margin: 20,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: "#B0B0B0",
    borderRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 8,
  },
  checked: {
    width: 16,
    height: 16,
    borderColor: "#fff",
    backgroundColor: "#447f78",
    borderRadius: 3,
  },
});

export default Study3Screen;
