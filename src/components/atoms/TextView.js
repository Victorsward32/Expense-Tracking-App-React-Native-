import React from 'react';
import { StyleSheet, Text, View } from 'react-native';


const TextView = ({ text, textStyle, containerStyle }) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <Text style={[styles.text, textStyle]}>{text}</Text>
    </View>
  );
};
export default TextView;

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding:5
  },
  text: {
    fontSize: 14,
    color: 'black',
    lineHeight:20
  }, 
});
