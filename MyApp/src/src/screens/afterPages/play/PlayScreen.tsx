import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PlayScreen = () => {
  
  return(
    <View style = {styles.container}>
     <Text>Play</Text>
    </View>
  )

};

export default PlayScreen;

const styles = StyleSheet.create({
container: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
}

})

