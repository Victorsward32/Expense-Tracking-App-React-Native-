// import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
// import React, { useState } from 'react';
// import Header from '../../components/templates/Header';
// import { width } from '../../utils/CommonUtils';
// import { useNavigation } from '@react-navigation/native';
// import CommonButton from '../../components/atoms/CommonButton';

// const ExpenseForm = () => {
//   const navigation = useNavigation();
//   const [amount,setAmount]=useState("1000");

//   return (
//     <View style={styles.container}>
//       <Header
//         title="Expense Form"
//         containerStyle={styles.headerContainer}
//         titleStyle={styles.titleStyle}
//       />
//       <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
//       <View>
//         <View style={styles.amountContainer}>
//           {/* Add form components here */}
//           <Text style={styles.TitleAmount}>Amount spent </Text>
//           <Text style={styles.amountText}>{"\u20B9"}{" "}{amount}</Text>

//         </View>
//         <View style={styles.DateContainer}>
//         {/* <View>

//         </View>
//         <View>
          
//         </View> */}
//         </View>
//         </View>
//         <View style={styles.FormContainer}>

//         </View>
//       </ScrollView>
//       <CommonButton 
//         ButtonTitle="Submit" 
//         OnPress={'ExpenseType'} 
//       />
//     </View>
//   );
// };

// export default ExpenseForm;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF', // Ensures consistent background
//   },
//   headerContainer: {
//     backgroundColor: '#D4F4E4',
//     padding: width * 0.04, // Added padding for better layout
//   },
//   titleStyle: {
//     fontSize: width * 0.04,
//     color: '#00513D', // Matches the theme
//     fontWeight: 'bold',
//   },
//   scrollView: {
//     flex: 1,
//     backgroundColor: '#F9F9F9',
//   },
//   amountContainer: {
//     paddingVertical: width * 0.07,
//     paddingHorizontal:width*0.1,
//     backgroundColor: '#A7E8DC',
//     marginBottom: width * 0.05, 
//     borderBottomLeftRadius:50,
//     borderBottomRightRadius:50,
//     shadowColor: 'green',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   DateContainer:{
//     flex:1,
//     borderWidth:0.4,
//     padding:40,
//     bottom:60,
//     marginHorizontal:30,
//     backgroundColor:"white",
//     borderRadius:8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   },
//   TitleAmount:{
//     textAlign:"center",
//     lineHeight:30,
//     fontSize:22,
//     fontWeight:"600",
//     padding:10,
//   },
//   amountText:{
//     textAlign:"center",
//     lineHeight:30,
//     fontSize:22,
//     fontWeight:"600",
//     padding:10,
//     marginBottom:30,
    
//   },
//   FormContainer:{
//     flex:1,
//     borderWidth:0.4,
//     padding:40,
//     // bottom:60,
//     marginHorizontal:30,
//     backgroundColor:"white",
//     borderRadius:8,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.1,
//     shadowRadius: 4,
//     elevation: 3,
//   }
// });
import { Button, Image, Modal, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import Header from '../../components/templates/Header';
import { width } from '../../utils/CommonUtils';
import { useNavigation } from '@react-navigation/native';
import CommonButton from '../../components/atoms/CommonButton';
import CategoryModal from '../../components/templates/modals/CategoryModal';

const ExpenseForm = () => {
  const navigation = useNavigation();
  const [amount, setAmount] = useState("1000");
  const [category, setCategory] = useState(null);
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [description, setDescription] = useState("");
  const [isRecurring, setIsRecurring] = useState(false);
  const [attachment, setAttachment] = useState(null);

  const [categoryModalVisible, setCategoryModalVisible] = useState(false);
  const [paymentMethodModalVisible, setPaymentMethodModalVisible] = useState(false);

  const paymentMethods = ['Cash', 'Credit Card', 'Debit Card', 'UPI'];

  const toggleCategoryModal = () => {
    setCategoryModalVisible(!categoryModalVisible);
  };

  const togglePaymentMethodModal = () => {
    setPaymentMethodModalVisible(!paymentMethodModalVisible);
  };

  const handleCategorySelect = (item) => {
    setCategory(item);
    console.log("ITEM LIST SELECTED",item)
    toggleCategoryModal();
  };

  const handlePaymentMethodSelect = (item) => {
    setPaymentMethod(item);
    togglePaymentMethodModal();
  };

  return (
    <View style={styles.container}>
      <Header
        title="Expense Form"
        containerStyle={styles.headerContainer}
        titleStyle={styles.titleStyle}
      />
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <Text style={styles.label}>Amount</Text>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
          />

          <Text style={styles.label}>Category</Text>
          <TouchableOpacity style={styles.dropdownContainer} onPress={toggleCategoryModal}>
          <Image source={category} />
            <Text style={styles.dropdownText}>{category || 'Select category'}</Text>
          </TouchableOpacity>

          <CategoryModal
        categoryModalVisible={categoryModalVisible}
        toggleCategoryModal={toggleCategoryModal}
        onCategorySelect={handleCategorySelect}
      />

          <Text style={styles.label}>Date</Text>
          <TextInput
            style={styles.input}
            value={date}
            onChangeText={setDate}
            editable={false}
          />

          <Text style={styles.label}>Payment Method</Text>
          <TouchableOpacity style={styles.dropdownContainer} onPress={togglePaymentMethodModal}>
         
            <Text style={styles.dropdownText}>{paymentMethod || 'Select payment method'}</Text>
          </TouchableOpacity>

          <Modal visible={paymentMethodModalVisible} animationType="slide" transparent>
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                {paymentMethods.map((item, index) => (
                  <TouchableOpacity
                    key={index}
                    style={styles.modalItem}
                    onPress={() => handlePaymentMethodSelect(item)}
                  >
                    <Text style={styles.modalItemText}>{item}</Text>
                  </TouchableOpacity>
                ))}

              </View>
            </View>
          </Modal>

          <Text style={styles.label}>Description</Text>
          <TextInput
            style={styles.input}
            value={description}
            onChangeText={setDescription}
            multiline
          />

          <View style={styles.checkboxContainer}>
            {/* <Checkbox
              status={isRecurring ? 'checked' : 'unchecked'}
              onPress={() => setIsRecurring(!isRecurring)}
            /> */}
            <Text style={styles.label}>Recurring Expense</Text>
          </View>

          {isRecurring && (
            <View>
              <Text style={styles.label}>Frequency</Text>
              {/* Add frequency selection dropdown or input here */}
            </View>
          )}

          {/* Attachment input can be added here */}
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
    backgroundColor: '#FFFFFF',
  },
  headerContainer: {
    backgroundColor: '#D4F4E4',
    padding: width * 0.04,
  },
  titleStyle: {
    fontSize: width * 0.04,
    color: '#00513D',
    fontWeight: 'bold',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  formContainer: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: width * 0.05,
    marginHorizontal: width * 0.05,
    marginVertical: width * 0.05,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  label: {
    fontSize: width * 0.035,
    fontWeight: 'bold',
    marginBottom: width * 0.02,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.02,
    marginBottom: width * 0.04,
  },
  dropdownContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 4,
    paddingHorizontal: width * 0.03,
    paddingVertical: width * 0.02,
    marginBottom: width * 0.04,
  },
  dropdownText: {
    color: '#666',
  },
  modalContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    padding: width * 0.05,
    borderRadius: 8,
    width: '80%',
  },
  modalItem: {
    paddingVertical: width * 0.02,
  },
  modalItemText: {
    fontSize: width * 0.035,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: width * 0.04,
  },
});
