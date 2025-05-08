import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';


const PlayScreen = () => {

  const [value, setValue] = useState(0);

  const prevNumber = () => {
    if (value > 0) {
      setValue(value -1)
    }
  }

  const nextNumber = () => {
   setValue(value + 1)
  }

  return (
    <View style={styles.container}>
      <Text>Adicionar a sacola</Text>
      <View style ={styles.buyContainer}>
      <TouchableOpacity onPress={prevNumber}>
        <Text>-</Text>
      </TouchableOpacity>
      <Text>{value}</Text>
      <TouchableOpacity onPress={nextNumber}>
        <Text>+</Text>
      </TouchableOpacity>
      </View>
    </View>
  );

};

export default PlayScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  buyContainer:{
    flexDirection: "row",
    gap:15,
    marginTop: 20,
    borderWidth: 2,
    padding: 10,
    borderRadius: 10
  }
});

