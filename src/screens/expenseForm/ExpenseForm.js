import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React from 'react';
import Header from '../../components/templates/Header';
import { width } from '../../utils/CommonUtils';
import { useNavigation } from '@react-navigation/native';
import CommonButton from '../../components/atoms/CommonButton';

const ExpenseForm = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Header
        title="Expense Form"
        containerStyle={styles.headerContainer}
        titleStyle={styles.titleStyle}
      />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.amountContainer}>
          {/* Add form components here */}
          <TextInput placeholder=' Enter the Amount' />
        </View>
        <View style={styles.DateContainer}>

        </View>
      </ScrollView>
      <CommonButton 
        ButtonTitle="Submit" 
        OnPress={'ExpenseType'} 
      />
    </View>
  );
};

export default ExpenseForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF', // Ensures consistent background
  },
  headerContainer: {
    backgroundColor: '#D4F4E4',
    padding: width * 0.04, // Added padding for better layout
  },
  titleStyle: {
    fontSize: width * 0.04,
    color: '#00513D', // Matches the theme
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    // paddingHorizontal: width * 0.05, // Added horizontal padding for spacing
    backgroundColor: '#F9F9F9', // Neutral background for form area
  },
  amountContainer: {
    paddingVertical: width * 0.2,
    paddingHorizontal:width*0.1,
    backgroundColor: '#A7E8DC',
    // borderRadius: width * 0.02, 
    marginBottom: width * 0.05, 
    borderBottomLeftRadius:50,
    borderBottomRightRadius:50,
  },
  DateContainer:{
    flex:1,
    borderWidth:0.4,
    padding:40,
    bottom:60,
    marginHorizontal:30,
    backgroundColor:"white",
    borderRadius:8,
  }
});
