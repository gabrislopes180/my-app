import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';


const PlayScreen = () => {

  return (
    <View style={styles.container}>
      <Text>Quiz</Text>
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
  text: {
    fontSize: 18,
    marginBottom: 20,
  }
});

