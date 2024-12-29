import React from 'react';
import { View, Text, Image, StyleSheet, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { Icons, Images } from '../../utils/ImageConstant';

const { width } = Dimensions.get('window');

const IncomeCard = ({
  currentAmount = 0,
  totalAmount = 0,
  expendedAmount = 0,
  rupeesIcon = Icons.rupeesIcon
}) => {
  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0
    }).format(amount);
  };

  const calculateSpendingPercentage = () => {
    if (totalAmount === 0) return 0;
    return Math.round((expendedAmount / totalAmount) * 100);
  };

  return (
    <View style={styles.cardContainer}>
      <View style={styles.contentContainer}>
        {/* Current Amount Section */}
        <View style={styles.currentAmountSection}>
          <View style={styles.currentAmountWrapper}>
            <Text style={styles.currentAmountText}>
              {formatCurrency(currentAmount)}
            </Text>
          </View>
          <View style={styles.percentageContainer}>
            <Text style={styles.spendingPercentageText}>
              You spent <Text style={styles.percentageHighlight}>{calculateSpendingPercentage()}%</Text> of your Income
            </Text>
          </View>
        </View>

        <View style={{justifyContent:"center",alignItems:"center"}}>
          <Image style={{height:160,width:160,resizeMode:"contain"}} source={Images.youngwomansittingofloorinheadphones}/>
        </View>

        {/* Stats Section */}
        <View style={styles.statsContainer}>
          {/* Net Income */}
          <View style={styles.statCard}>
            <View style={[styles.iconContainer, styles.incomeIconBg]}>
              <Image 
                style={[styles.icon, styles.incomeIcon]} 
                source={Icons.IncomeIcon}
              />
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statLabel}>Net Income</Text>
              <Text style={styles.statAmount}>
                {formatCurrency(totalAmount)}
              </Text>
            </View>
          </View>

          {/* Expenditure */}
          <View style={styles.statCard}>
            <View style={[styles.iconContainer, styles.expenseIconBg]}>
              <Image 
                style={[styles.icon, styles.expenseIcon]} 
                source={Icons.ExpendetureIcon}
              />
            </View>
            <View style={styles.statInfo}>
              <Text style={styles.statLabel}>Expenditure</Text>
              <Text style={styles.statAmount}>
                {formatCurrency(expendedAmount)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

IncomeCard.propTypes = {
  currentAmount: PropTypes.number,
  totalAmount: PropTypes.number,
  expendedAmount: PropTypes.number,
  rupeesIcon: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
      uri: PropTypes.string,
    })
  ])
};

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    marginHorizontal: 16,
    marginVertical: 12,
    shadowColor: '#4B6584',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  contentContainer: {
    padding: 24,
  },
  currentAmountSection: {
    alignItems: 'center',
    marginBottom: 32,
  },
  currentAmountWrapper: {
    marginBottom: 8,
  },
  currentAmountText: {
    fontSize: 32,
    fontWeight: '700',
    color: '#2D3F58',
    letterSpacing: 0.5,
  },
  percentageContainer: {
    backgroundColor: '#F5F7FA',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  spendingPercentageText: {
    color: '#4B6584',
    fontSize: 14,
    fontWeight: '500',
  },
  percentageHighlight: {
    color: '#2D3F58',
    fontWeight: '700',
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 16,
  },
  statCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    shadowColor: '#4B6584',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 4,
    elevation: 3,
  },
  iconContainer: {
    width: 44,
    height: 44,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  incomeIconBg: {
    backgroundColor: '#E3F2FF',
  },
  expenseIconBg: {
    backgroundColor: '#E6F8E6',
  },
  icon: {
    width: 22,
    height: 22,
  },
  incomeIcon: {
    tintColor: '#1A74FA',
  },
  expenseIcon: {
    tintColor: '#34C759',
  },
  statInfo: {
    flex: 1,
  },
  statLabel: {
    fontSize: 12,
    color: '#8395A7',
    marginBottom: 4,
  },
  statAmount: {
    fontSize: 16,
    fontWeight: '600',
    color: '#2D3F58',
  },
});

export default IncomeCard;