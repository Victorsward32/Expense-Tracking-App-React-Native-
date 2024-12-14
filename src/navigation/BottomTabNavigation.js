import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator(); 
const BottomTabNavigation = () => {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Expense Tracker" component={ExpenseTrackerScreen} />
    <Tab.Screen name="Insights" component={InsightsScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
  )
}

export default BottomTabNavigation

const styles = StyleSheet.create({})