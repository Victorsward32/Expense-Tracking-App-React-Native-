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
        <View style={styles.currentAmountContainer}>
          <View style={styles.currentAmountInnerContainer}>
            <Text style={styles.currentAmountText}>
              {formatCurrency(currentAmount)}
            </Text>
          </View>
          <Text style={styles.spendingPercentageText}>
            You spent {calculateSpendingPercentage()}% of your Income
          </Text>
        </View>

        {/* Bottom Section */}
        <View style={styles.bottomContainer}>
          {/* Net Income */}
          <View style={[styles.detailContainer, styles.netIncomeContainer]}>
            <View style={styles.iconBackground}>
              <Image style={styles.detailIcon} source={Icons.IncomeIcon} />
            </View>
            <View>
              <Text style={styles.detailLabel}>Net Income</Text>
              <View style={styles.amountContainerRight}>
                <Text style={styles.detailAmount}>
                  {formatCurrency(totalAmount)}
                </Text>
              </View>
            </View>
          </View>

          {/* Expenditure */}
          <View style={[styles.detailContainer, styles.expenditureContainer]}>
            <View style={styles.iconBackground}>
              <Image style={styles.detailsIcon} source={Icons.ExpendetureIcon} />
            </View>
            <View>
              <Text style={styles.detailLabel}>Expenditure</Text>
              <View style={styles.amountContainerRight}>
                <Text style={styles.detailAmount}>
                  {formatCurrency(expendedAmount)}
                </Text>
              </View>
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
  },
  contentContainer: {
    padding: 20,
  },
  currentAmountContainer: {
    alignItems: 'center',
    // marginBottom: 20,
  },
  currentAmountInnerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rupeesIcon: {
    height: 15,
    width: 15,
  },
  currentAmountText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 5,
  },
  spendingPercentageText: {
    color: '#666',
    fontSize: 14,
  },
  bottomContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
    top:40,
  },
  detailContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 12,
    padding: 12,
    flex: 1,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  iconBackground: {
    backgroundColor: '#F0EFF9',
    borderRadius: 12,
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  detailIcon: {
    width: 20,
    height: 20,
    tintColor: '#1A74FA',
  },
  detailsIcon:{
    width: 20,
    height: 20,
    tintColor: 'green',
  },
  detailLabel: {
    color: '#666',
    fontSize: 12,
    marginBottom: 4,
  },
  detailAmount: {
    color: '#333',
    fontSize: 16,
    fontWeight: '600',
  },
  netIncomeContainer: {
    marginRight: 6,
  },
  expenditureContainer: {
    marginLeft: 6,
  }
});

export default IncomeCard;