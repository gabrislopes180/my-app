import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import { useUser } from "../../../../userContext";
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../../App';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Ionicons from '@expo/vector-icons/Ionicons';

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Avatar'>;

const AvatarScreen = () => {
  const navigation = useNavigation<LoginScreenNavigationProp>();
  const { setAvatarUri, setNicknameProvider } = useUser();

  const avatars = [
    { uri: 'https://i.postimg.cc/cHrDSh5G/avatar1.png' },
    { uri: 'https://i.postimg.cc/J4KwQ6JR/avatar2.png' },
    { uri: 'https://i.postimg.cc/rynCC5mv/avatar3.png' },
    { uri: 'https://i.postimg.cc/SxpXWKWB/avatar4.png' },
    { uri: 'https://i.postimg.cc/MKtHgJN4/avatar5.png' },
    { uri: 'https://i.postimg.cc/NFzVrMLS/avatar6.png' },
    { uri: 'https://i.postimg.cc/x1w24sfh/avatar7.png' },
    { uri: 'https://i.postimg.cc/nVDwdHjF/avatar8.png' },
    { uri: 'https://i.postimg.cc/65HRnZWy/avatar9.png' },
    { uri: 'https://i.postimg.cc/MHHZSvhF/avatar10.png' },
    { uri: 'https://i.postimg.cc/SNjLZdtW/avatar11.png' },
    { uri: 'https://i.postimg.cc/Pr8ppRRF/avatar12.png' },
    { uri: 'https://i.postimg.cc/65RVJqt3/avatar13.png' },
    { uri: 'https://i.postimg.cc/9QC76BL8/avatar14.png' },
    { uri: 'https://i.postimg.cc/RhwW83Kx/avatar15.png' },
    { uri: 'https://i.postimg.cc/wTHMMjD3/avatar16.png' },
    { uri: 'https://i.postimg.cc/TPZY6dRd/avatar17.png' },
    { uri: 'https://i.postimg.cc/63fsmtq1/avatar18.png' },
    { uri: 'https://i.postimg.cc/HxHR5Rz0/avatar19.png' },
    { uri: 'https://i.postimg.cc/vBdMK1my/bottts-1744605532872.png' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [nickname, setNickName] = useState('');
  const [showError, setShowError] = useState(false);
  const [confirmAvatar, setconfirmAvatar] = useState(false);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? avatars.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((next) => (next === avatars.length - 1 ? 0 : next + 1));
  };

  const validateNickname = () => {
    if (nickname.trim() === "") {
      setShowError(true);
    } else {
      setShowError(false);
      setAvatarUri(avatars[currentIndex].uri); // salvar avatar
      setNicknameProvider(nickname); // salvar nickname
      navigation.navigate("Welcome");
    }
  };

  return (
    // faz com que a tela acompanhe o teclado a subir
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "android" ? 20 : 0}
    >
      {/*  possibilita rolagem pela tela, para acessar a todo o conteúdo mesmo
          com o teclado ativo  */}
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        <View style={styles.gradient}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <Ionicons name="arrow-back" size={24} color="black" />
          </TouchableOpacity>

          <Text style={styles.loginAdvice}>
            Obs: Esta tela é apenas para o primeiro acesso ao quiz! Caso já a
            tenha utilizado retorne e faça login com o email e senha que te
            forneceram.
          </Text>

          <Text style={styles.text}>Escolha um Avatar!</Text>

          <View style={styles.avatarContainer}>
            <TouchableOpacity
              onPress={() => {
                handlePrev();
                setconfirmAvatar(false);
              }}
            >
              <Ionicons name="chevron-back-circle" size={30} color="#333" />
            </TouchableOpacity>

            <Image source={avatars[currentIndex]} style={styles.avatar} />

            <TouchableOpacity
              onPress={() => {
                handleNext();
                setconfirmAvatar(false);
              }}
            >
              <Ionicons name="chevron-forward-circle" size={30} color="#333" />
            </TouchableOpacity>

            {confirmAvatar && (
              <Text style={styles.confirmAvatar}>Avatar selecionado!</Text>
            )}
          </View>

          <TouchableOpacity
            onPress={() => {
              setconfirmAvatar(true);
            }}
          >
            <Text style={styles.buttonText2}>Confirmar Avatar</Text>
          </TouchableOpacity>

          <View>
            <Text style={styles.inputLabel}>
              Escolha um nickName para jogar
            </Text>
            <TextInput
              style={styles.input}
              placeholder="Seu nickName"
              placeholderTextColor="grey"
              value={nickname}
              onChangeText={setNickName}
            />
          </View>

          {showError && (
            <Text style={styles.error}>
              Preencha o campo acima e selecione um Avatar
            </Text>
          )}

          <TouchableOpacity
            style={styles.startButton}
            onPress={validateNickname}
          >
            <Text style={styles.buttonText}>Próximo</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default AvatarScreen;

const styles = StyleSheet.create({
  keyboardAvoiding: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    alignItems: "center"
  },
  container: {
    alignItems: "center",
    justifyContent: "flex-start",
    paddingBottom: 40,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 20,
    color: "grey",
  },
  backButton: {
    marginTop: 45,
    marginRight: 320,
  },
  avatarContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 60,
  },
  avatar: {
    width: 140,
    height: 140,
    borderRadius: 75,
    backgroundColor: "#dddbdc",
    padding: 15,
  },
  confirmAvatar: {
    position: "absolute",
    top: wp("40%"),
    right: wp("6%"),
    fontSize: 17,
    fontWeight: "bold",
    color: "grey",
  },
  buttonText2: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#448078",
  },
  inputLabel: {
    marginBottom: 5,
    marginTop: 60,
    alignSelf: "flex-start",
    marginLeft: 0,
    fontWeight: "600",
    color: "grey",
  },
  input: {
    borderBottomWidth: 1,
    borderColor: "#08443f",
    color: "grey",
    width: 345,
    height: 45,
  },
  startButton: {
    marginTop: 55,
  },
  buttonText: {
    width: wp("90%"),
    height: 45,
    paddingTop: 10,
    borderRadius: 15,
    backgroundColor: "#447f78",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  error: {
    color: "red",
    alignSelf: "flex-start",
    fontSize: 12,
    marginLeft: 30,
    marginTop: 5,
  },
  
  loginAdvice: {
    textAlign: "center",
    margin: 10,
    padding: 10,
    color: "#585858",
    borderWidth: 2,
    borderColor: "grey",
    borderRadius: 14,
  },
});
