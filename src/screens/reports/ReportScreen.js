import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { width } from '../../utils/CommonUtils'
import Header from '../../components/templates/Header'

const ReportScreen = () => {
  return (
    <SafeAreaView style={styles.SafeAreaView}>
    <Header
    title="Reports"
    containerStyle={styles.headerContainer}
    titleStyle={styles.titleStyle}
  />
    </SafeAreaView>
  )
}

export default ReportScreen

const styles = StyleSheet.create({
  SafeAreaView:{
    flex:1,
  },
  headerContainer: {
    backgroundColor: '#D4F4E4',
  },
  titleStyle: {
    fontSize: width * 0.04, // Adjust font size relative to screen width
  },
})