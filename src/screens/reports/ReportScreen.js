import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  Image,
  Alert,  // Import the Alert component for prompting
} from 'react-native';
import { LineChart } from 'react-native-gifted-charts';
import Header from '../../components/templates/Header';
import { Icons, Images } from '../../utils/ImageConstant';

const { width } = Dimensions.get('window');

const ReportScreen = () => {
  const [selectedPeriod, setSelectedPeriod] = useState('1M');
  const [selectedMethod, setSelectedMethod] = useState('Graph');

  // Line chart data
  const lineData = [
    { value: 5000, dataPointText: '5k', label: 'Jan', expense: 1000, savings: 2000 },
    { value: 5500, dataPointText: '5.5k', label: 'Feb', expense: 3200, savings: 2300 },
    { value: 4800, dataPointText: '4.8k', label: 'Mar', expense: 900, savings: 1900 },
    { value: 6000, dataPointText: '6k', label: 'Apr', expense: 3500, savings: 2500 },
    { value: 5200, dataPointText: '5.2k', label: 'May', expense: 3100, savings: 2100 },
    { value: 5800, dataPointText: '5.8k', label: 'Jun', expense: 3400, savings: 2400 },
  ];

  const chartData = lineData.map(item => ({
    value: item.value,
    dataPointText: item.dataPointText,
    label: item.label,
  }));

  const expenseData = lineData.map(item => ({
    value: item.expense,
    dataPointText: `${(item.expense / 1000).toFixed(1)}k`,
    label: item.label,
  }));

  const periods = ['1W', '1M', '3M', '6M', '1Y', 'ALL'];

  const renderCard = () => (
    <View style={styles.card}>
      <Text style={styles.cardHeaderText}>Monthly Overview</Text>
      <Text style={styles.cardSubText}>December 2024</Text>

      <View style={styles.amountsContainer}>
        <View style={[styles.amountBox, { backgroundColor: 'rgba(51, 51, 51, 0.1)' }]}>
          <Text style={styles.amountLabel}>Income</Text>
          <Text style={[styles.amountValue, { color: '#4CAF50' }]}>
            ₹{lineData[lineData.length - 1].value.toLocaleString()}
          </Text>
        </View>
        <View style={[styles.amountBox, { backgroundColor: 'rgba(255, 87, 34, 0.1)' }]}>
          <Text style={styles.amountLabel}>Expense</Text>
          <Text style={[styles.amountValue, { color: '#FF5722' }]}>
            ₹{lineData[lineData.length - 1].expense.toLocaleString()}
          </Text>
        </View>
        <View style={[styles.amountBox, { backgroundColor: 'rgba(33, 150, 243, 0.1)' }]}>
          <Text style={styles.amountLabel}>Savings</Text>
          <Text style={[styles.amountValue, { color: '#2196F3' }]}>
            ₹{lineData[lineData.length - 1].savings.toLocaleString()}
          </Text>
        </View>
      </View>

      <Image source={Images.girlPlanningBudget} style={styles.cardImage} />
    </View>
  );

  const renderGraph = () => (
    <View style={styles.chartCard}>
      <Text style={styles.chartTitle}>Income vs Expense</Text>
      <LineChart
        areaChart
        data={chartData}
        data2={expenseData}
        initialSpacing={20}
        color1="#4CAF50"
        color2="#FF5722"
        textColor1="#4CAF50"
        textColor2="#FF5722"
        hideDataPoints={false}
        curved
        width={width - 64}
        strokeWidth={3}
        hideRules
        yAxisColor="#ccc"
        xAxisColor="#ccc"
        yAxisTextStyle={styles.yAxisText}
        xAxisLabelTextStyle={styles.xAxisText}
        yAxisThickness={1}
        xAxisThickness={1}
        backgroundColor="#fff"
        startFillColor1="rgba(76, 175, 80, 0.2)"
        startFillColor2="rgba(255, 87, 34, 0.2)"
        dataPointsColor1="#4CAF50"
        dataPointsColor2="#FF5722"
        dataPointsRadius={6}
        focusEnabled
        showValuesAsDataPointsText
      />
      <View style={styles.legendContainer}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#4CAF50' }]} />
          <Text style={styles.legendText}>Income</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#FF5722' }]} />
          <Text style={styles.legendText}>Expense</Text>
        </View>
      </View>
    </View>
  );

  const handleDownload = () => {
    if (!selectedPeriod) {
      Alert.alert("Select Time Period", "Please select a time period before downloading the report.");
    } else {
      // Proceed with the download action (you can implement the actual download logic here)
      Alert.alert("Download", "Downloading report for period: " + selectedPeriod);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Financial Report"
        containerStyle={styles.headerContainer}
        titleStyle={styles.titleStyle}
      />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.toggleContainer}>
          {['Graph', 'Card'].map((method) => (
            <TouchableOpacity
              key={method}
              style={[styles.toggleButton, selectedMethod === method && styles.activeToggle]}
              onPress={() => setSelectedMethod(method)}
            >
              <Text
                style={[styles.toggleText, selectedMethod === method && styles.activeToggleText]}
              >
                {method}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {selectedMethod === 'Card' ? renderCard() : renderGraph()}

        <Text style={{paddingVertical:10,lineHeight:20,fontSize:14,fontWeight:"500",textAlign:"center",color:"#7289DA"}}> Note: Before clicking on the Downloade report button please make sure click on the valid period. </Text>

        <View style={styles.periodContainer}>
          {periods.map((period) => (
            <TouchableOpacity
              key={period}
              style={[styles.periodButton, selectedPeriod === period && styles.selectedPeriod]}
              onPress={() => setSelectedPeriod(period)}
            >
              <Text
                style={[styles.periodText, selectedPeriod === period && styles.selectedPeriodText]}
              >
                {period}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <View style={styles.downloadContainer}>
          <TouchableOpacity style={styles.downloadBtn} onPress={handleDownload}>
            <Image source={Icons.Attachment} style={{ height: 20, width: 20, resizeMode: 'contain' }} />
            <Text style={styles.downloadText}>Download Report</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f7ff',
  },
  headerContainer: {
    backgroundColor: '#7289DA',
    padding: 16,
  },
  titleStyle: {
    fontSize: 18,
    fontWeight: '700',
    color: '#FFFFFF',
  },
  scrollView: {
    padding: 16,
  },
  periodContainer: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  periodButton: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
  selectedPeriod: {
    backgroundColor: '#7289DA',
  },
  periodText: {
    color: '#7289DA',
    fontSize: 14,
    fontWeight: '600',
  },
  selectedPeriodText: {
    color: '#FFFFFF',
  },
  toggleContainer: {
    flexDirection: 'row',
    backgroundColor: '#f5f5f5',
    borderRadius: 12,
    padding: 4,
    marginBottom: 16,
  },
  toggleButton: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  activeToggle: {
    backgroundColor: '#7289DA',
  },
  toggleText: {
    color: '#7289DA',
    fontWeight: '600',
  },
  activeToggleText: {
    color: '#FFFFFF',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  cardHeaderText: {
    fontSize: 20,
    fontWeight: '700',
    color: '#7289DA',
    textAlign: 'center',
  },
  cardSubText: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginTop: 4,
  },
  amountsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 16,
  },
  amountBox: {
    flex: 1,
    marginHorizontal: 4,
    padding: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  amountLabel: {
    fontSize: 14,
    color: '#666',
  },
  amountValue: {
    fontSize: 18,
    fontWeight: '700',
    marginTop: 8,
  },
  cardImage: {
    width: '100%',
    height: 150,
    marginTop: 16,
    resizeMode: 'contain',
  },
  chartCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    overflow:"hidden"
  },
  chartTitle: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color: '#7289DA',
    textAlign: 'center',
  },
  yAxisText: {
    fontSize: 12,
    color: '#333',
  },
  xAxisText: {
    fontSize: 12,
    color: '#666',
  },
  legendContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 16,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  legendDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
  },
  legendText: {
    fontSize: 14,
    marginLeft: 6,
    color: '#333',
  },
  downloadContainer: {
    borderWidth:0.7,
    borderColor:"grey",
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  downloadBtn: {
    paddingVertical: 26,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  downloadText: {
    fontSize: 16,
    marginLeft: 8,
    fontWeight: '600',
    color: '#7289DA',
  },
});

export default ReportScreen;
