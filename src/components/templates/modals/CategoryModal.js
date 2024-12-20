import { Modal, StyleSheet, Text, TouchableOpacity, View, Image, ScrollView } from 'react-native';
import React from 'react';
import Header from '../Header';
import { ExpendatureList } from '../../../utils/StaticDataConstants';
import { width, height } from '../../../utils/CommonUtils';

const CategoryModal = ({ categoryModalVisible, toggleCategoryModal, onCategorySelect }) => {
  const sections = [
    { title: 'Household Expenses', data: ExpendatureList.HouseholdExpenses },
    { title: 'Transportation', data: ExpendatureList.Transportation },
    { title: 'Health and Wellness', data: ExpendatureList.HealthandWellness },
    { title: 'Insurance', data: ExpendatureList.Insurance },
    { title: 'Personal and Family Care', data: ExpendatureList.PersonalandFamilyCare },
    { title: 'Education', data: ExpendatureList.Education },
    { title: 'Entertainment and Leisure', data: ExpendatureList.EntertainmentandLeisure },
    { title: 'Savings and Investments', data: ExpendatureList.SavingsandInvestments },
    { title: 'Debt Payments', data: ExpendatureList.DebtPayments },
    { title: 'Miscellaneous Expenses', data: ExpendatureList.MiscellaneousExpenses },
    { title: 'Business Related Expenses', data: ExpendatureList.BusinessRelatedExpenses },
  ];

  return (
    <Modal visible={categoryModalVisible} animationType="fade" transparent>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Header
            title="Category"
            containerStyle={styles.headerContainer}
            titleStyle={styles.titleStyle}
            onBackPress={toggleCategoryModal} // Added close functionality for the modal
          />
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            {sections.map((section, index) => (
              <View key={index} style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>{section.title}</Text>
                <View style={styles.itemsContainer}>
                  {section.data.map((item, itemIndex) => (
                    <TouchableOpacity
                      key={itemIndex}
                      style={styles.appItem}
                      onPress={() => onCategorySelect({Category: item.Option, CategoryIcon:item.Icon})}
                    >
                      <Image source={item.Icon} style={styles.appIcon} />
                      <Text style={styles.appName}>{item.Option}</Text>
                    </TouchableOpacity>
                  ))}
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
      </View>
    </Modal>
  );
};

export default CategoryModal;

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    width: '90%',
    maxHeight: '80%',
    overflow: 'hidden',
  },
  headerContainer: {
    backgroundColor: '#D4F4E4',
    padding: 16,
  },
  titleStyle: {
    fontSize: width * 0.045,
    textAlign: 'center',
    color: '#333',
  },
  scrollContainer: {
    paddingHorizontal: 16,
    paddingBottom: 16,
  },
  sectionContainer: {
    marginVertical: 8,
  },
  sectionTitle: {
    fontSize: width * 0.04,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  itemsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  appItem: {
    backgroundColor: '#F2F2F2',
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
    width: '48%',
    alignItems: 'center',
    elevation: 2, 
  },
  appIcon: {
    width: width * 0.1,
    height: width * 0.1,
    marginBottom: 8,
  },
  appName: {
    fontSize: width * 0.035,
    color: '#333',
    textAlign: 'center',
  },
});
