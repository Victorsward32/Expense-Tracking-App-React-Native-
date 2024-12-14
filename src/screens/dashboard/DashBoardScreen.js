import React from 'react'
import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { ScrollView } from 'react-native-gesture-handler'

import Header from '../../components/templates/Header'
import IncomeCard from '../../components/organisms/IncomeCard'
import { width } from '../../utils/CommonUtils'
import { Icons, Images } from '../../utils/ImageConstant'
import { useNavigation } from '@react-navigation/native'

const ExpendentureItem = ({ title, amount, icon }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.iconContainer}>
        <Image source={icon} style={styles.icon} />
      </View>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.amountContainer}>
        <Image source={Icons.rupeesIcon} style={styles.rupeesIcon} />
        <Text style={styles.amountText}>{amount}</Text>
      </View>
    </View>
  );
}

const DashBoardScreen = () => {
  const navigation=useNavigation();
  const expenditureData = [
    { title: 'Groceries', amount: '500', icon: Images.girlPlanningBudget },
    { title: 'Transport', amount: '300', icon: Icons.cameraIcon },
    { title: 'Utilities', amount: '200', icon: Icons.cameraIcon },
    { title: 'Groceries', amount: '500', icon: Icons.cameraIcon },
    { title: 'Transport', amount: '300', icon: Icons.cameraIcon },
    { title: 'Utilities', amount: '200', icon: Icons.cameraIcon },
    { title: 'Groceries', amount: '500', icon: Icons.cameraIcon },
    { title: 'Transport', amount: '300', icon: Icons.cameraIcon },
    { title: 'Utilities', amount: '200', icon: Icons.cameraIcon }
  ];

  return (
    <SafeAreaView style={styles.SafeAreaView}>
      <Header
        title="Dashboard"
        containerStyle={styles.headerContainer}
        titleStyle={styles.titleStyle}
      />
      <ScrollView style={styles.PortfolioContainer} showsVerticalScrollIndicator={false}>
        <View style={styles.IncomeContainer}>
          <IncomeCard 
            currentAmount={2000} 
            totalAmount={12000} 
            expendedAmount={10000} 
          />
        </View>

        <View style={styles.AddExpenseContainer}>
        <TouchableOpacity onPress={()=>{
          navigation.navigate("ExpenseForm")
        }}>
        <Image style={styles.AddIcon} source={Icons.AddIcon}/>
        </TouchableOpacity>
        <Text style={styles.AddExpenseTitle}>Please Add your Expense Here  </Text>
        </View>

        <View style={styles.ExpendatureContainer}>
          <Text style={styles.ExpendatureTitle}>Expenditure</Text>
          {expenditureData.map((item, index) => (
            <ExpendentureItem 
              key={index}
              title={item.title}
              amount={item.amount}
              icon={item.icon}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default DashBoardScreen

const styles = StyleSheet.create({
  SafeAreaView: {
    flex: 1,
  },
  headerContainer: {
    backgroundColor: '#D4F4E4',
  },
  titleStyle: {
    fontSize: width * 0.04,
  },
  IncomeContainer: {
    paddingVertical: 10,
  },
  ExpendatureContainer: {
    paddingVertical: 20,
    paddingHorizontal: 20,
  },
  ExpendatureTitle: {
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    marginBottom: 10,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    paddingHorizontal:12,
    borderBottomWidth: 0.4,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    backgroundColor: '#F0EFF9',
    borderRadius: 12,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 30,
    height: 30,
    // tintColor: '#1A74FA',
  },
  titleText: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
  amountContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rupeesIcon: {
    width: 16,
    height: 16,
    marginRight: 4,
  },
  amountText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  AddExpenseContainer:{
    backgroundColor: '#ffffff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginHorizontal: 16,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ddd', 
    paddingHorizontal:24,
    paddingVertical:20, 
    alignItems:"center",
    gap:10,
  },
  AddIcon:{
    height:50,
    width:50,
    resizeMode:"contain",
  },
  AddExpenseTitle:{
    fontSize: 16,
    fontWeight: "bold",
    lineHeight: 20,
    marginBottom: 10,
    textAlign:"center"
  }
  
})