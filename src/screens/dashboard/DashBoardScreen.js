import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ScrollView } from 'react-native-gesture-handler';
import Header from '../../components/templates/Header';
import IncomeCard from '../../components/organisms/IncomeCard';
import { width } from '../../utils/CommonUtils';
import { Icons, Images } from '../../utils/ImageConstant';
import { useNavigation } from '@react-navigation/native';

const ExpendentureItem = ({ title, amount, icon }) => {
  const formattedAmount = new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(amount);

  return (
    <View style={styles.itemContainer}>
      <View style={styles.itemContent}>
        <View style={styles.iconContainer}>
          <Image source={icon} style={styles.icon} />
        </View>
        <View style={styles.itemDetails}>
          <Text style={styles.titleText}>{title}</Text>
          <Text style={styles.amountText}>{formattedAmount}</Text>
        </View>
      </View>
    </View>
  );
};

const DashBoardScreen = () => {
  const navigation = useNavigation();
  const expenditureData = [
    { title: 'Groceries', amount: '500', icon: Images.girlPlanningBudget },
    { title: 'Transport', amount: '300', icon: Icons.cameraIcon },
    { title: 'Utilities', amount: '200', icon: Icons.cameraIcon },
    // ... other items
  ];

  return (
    <SafeAreaView style={styles.safeAreaView}>
      <Header
        title="Dashboard"
        containerStyle={styles.headerContainer}
        titleStyle={styles.titleStyle}
      />
      <ScrollView 
        style={styles.scrollView} 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.incomeContainer}>
          <IncomeCard
            currentAmount={2000}
            totalAmount={12000}
            expendedAmount={10000}
          />
        </View>

        <View style={styles.addExpenseCard}>
          <TouchableOpacity 
            style={styles.addButton}
            onPress={() => navigation.navigate("ExpenseForm")}
          >
            <View style={styles.addIconContainer}>
              <Image style={styles.addIcon} source={Icons.AddIcon} />
            </View>
            <Text style={styles.addExpenseText}>Add New Expense</Text>
            <Text style={styles.addExpenseSubtext}>Track your daily expenses</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.expenditureContainer}>
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Recent Expenses</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          
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
  );
};

const styles = StyleSheet.create({
  safeAreaView: {
    flex: 1,
    backgroundColor: '#F5F7FA',
  },
  headerContainer: {
    backgroundColor: '#4B6584',
    paddingVertical: 16,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingBottom: 24,
  },
  incomeContainer: {
    paddingVertical: 16,
  },
  addExpenseCard: {
    marginHorizontal: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    shadowColor: '#4B6584',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  addButton: {
    padding: 20,
    alignItems: 'center',
  },
  addIconContainer: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#E3F2FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  addIcon: {
    width: 28,
    height: 28,
    tintColor: '#1A74FA',
  },
  addExpenseText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3F58',
    marginBottom: 4,
  },
  addExpenseSubtext: {
    fontSize: 14,
    color: '#8395A7',
  },
  expenditureContainer: {
    marginTop: 24,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#2D3F58',
  },
  viewAllText: {
    fontSize: 14,
    color: '#1A74FA',
    fontWeight: '600',
  },
  itemContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    marginBottom: 12,
    shadowColor: '#4B6584',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 3,
  },
  itemContent: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    backgroundColor: '#F5F7FA',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  icon: {
    width: 24,
    height: 24,
  },
  itemDetails: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#2D3F58',
  },
  amountText: {
    fontSize: 15,
    fontWeight: '600',
    color: '#2D3F58',
  },
});

export default DashBoardScreen;