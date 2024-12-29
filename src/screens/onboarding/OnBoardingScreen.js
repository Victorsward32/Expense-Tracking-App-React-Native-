import { Button, StyleSheet, SafeAreaView, Text, View, SectionList, Dimensions } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/templates/Header';
import FinancialCard from '../../components/organisms/FinancialCard';
import financialCourses from '../../utils/StaticDataConstants';
import { height, width } from '../../utils/CommonUtils';

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const sections = [
    { title: 'Introductive', data: financialCourses.Introductive },
    { title: 'Intermediate', data: financialCourses.Intermediate },
    { title: 'Advance', data: financialCourses.Advance },
  ];

  const renderCourse = ({ item }) => (
    <FinancialCard
      title={item.title}
      description={item.description}
      image={item.image}
      buttonText={item.buttonText}
      containerStyle={item.containerStyle}
      onButtonPress={() => console.log(`${item.title} clicked`)}
    />
  );

  const renderSectionHeader = ({ section }) => (
    <Text style={styles.sectionTitle}>{section.title}</Text>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header
        title="Financial Advice"
        path="Login Here"
        navigateTo="loginScreen"
        containerStyle={styles.headerContainer}
        titleStyle={styles.titleStyle}
        pathStyle={styles.titleStyle}
      />
      <Button title="next page" onPress={() => { navigation.navigate('MainTabNavigator') }} />
      <View style={styles.SectionContainer}>
        <SectionList
          sections={sections}
          keyExtractor={(item, index) => `${item.title}-${index}`}
          renderItem={renderCourse}
          renderSectionHeader={renderSectionHeader}
          contentContainerStyle={styles.container}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default OnBoardingScreen;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor:"#f5f7ff",
  },
  container: {
    paddingHorizontal: 0.01,
    paddingBottom: height * 0.1, 
  },
  mainTitle: {
    fontSize: width * 0.06,
    fontWeight: 'bold',
    marginVertical: height * 0.02,
    textAlign: 'center',
  },
  SectionContainer: {
    paddingHorizontal: width * 0.05, 
    marginBottom: height * 0.1, 
  },
  sectionTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    marginTop: height * 0.02, 
    marginBottom: height * 0.015, 
    color: '#1A5F7A', 
  },
  titleStyle: {
    fontSize: width * 0.04, 
    color:"white"
  },
  headerContainer: {
    backgroundColor: '#7289DA',
  },
});
