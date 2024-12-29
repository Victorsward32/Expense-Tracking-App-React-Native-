import React, { useState } from 'react';
import {
  Image,
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Header from '../../components/templates/Header';
import CommonButton from '../../components/atoms/CommonButton';
import CategoryModal from '../../components/templates/modals/CategoryModal';
import { Icons } from '../../utils/ImageConstant';
import { height, width } from '../../utils/CommonUtils';

const PAYMENT_METHODS = ['Cash', 'Credit Card', 'Debit Card', 'UPI'];

const FormField = ({ label, children, style }) => (
  <View style={[styles.fieldContainer, style]}>
    <Text style={styles.label}>{label}</Text>
    {children}
  </View>
);

const ModalSelector = ({ visible, onClose, data, onSelect }) => (
  <Modal visible={visible} animationType="slide" transparent>
    <TouchableOpacity 
      style={styles.modalOverlay} 
      activeOpacity={1} 
      onPress={onClose}
    >
      <View style={styles.modalContent}>
        <View style={styles.modalHeader}>
          <Text style={styles.modalTitle}>Select Option</Text>
          <TouchableOpacity onPress={onClose}>
            <Text style={styles.modalClose}>✕</Text>
          </TouchableOpacity>
        </View>
        {data.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.modalItem}
            onPress={() => {
              onSelect(item);
              onClose();
            }}
          >
            <Text style={styles.modalItemText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </TouchableOpacity>
  </Modal>
);

const ExpenseForm = () => {
  const navigation = useNavigation();
  const [formData, setFormData] = useState({
    amount: '1000',
    category: null,
    startDate: new Date().toISOString().slice(0, 10),
    endDate: new Date().toISOString().slice(0, 10),
    paymentMethod: null,
    description: '',
    attachment: null,
  });
  const [modals, setModals] = useState({
    category: false,
    paymentMethod: false,
  });

  const updateFormField = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const toggleModal = (modalName) => {
    setModals(prev => ({ ...prev, [modalName]: !prev[modalName] }));
  };

  const handleSubmit = () => {
    if (!formData.amount || !formData.category || !formData.paymentMethod) {
      // Add your error handling here
      return;
    }
    navigation.navigate('ExpenseType');
  };

  return (
    <KeyboardAvoidingView 
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <Header
        title="Add Expense"
        containerStyle={styles.headerContainer}
        titleStyle={styles.titleStyle}
      />
      
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.amountContainer}>
          <Text style={styles.amountLabel}>Amount Spent</Text>
          <TextInput
            style={styles.amountInput}
            placeholder="₹0"
            value={formData.amount}
            onChangeText={(value) => updateFormField('amount', value.replace(/[^0-9]/g, ''))}
            keyboardType="numeric"
            placeholderTextColor="#666"
          />
          <Text style={styles.note}>Beware of little expenses. A small leak will sink a great ship.</Text>
        </View>

        <View style={styles.formWrapper}>
          <View style={styles.cardContainer}>
            <FormField label="Category">
              <TouchableOpacity 
                style={styles.selector}
                onPress={() => toggleModal('category')}
              >
                {formData.category?.CategoryIcon && (
                  <Image 
                    style={styles.categoryIcon} 
                    source={formData.category.CategoryIcon}
                  />
                )}
                <Text style={styles.selectorText}>
                  {formData.category?.Category || 'Select category'}
                </Text>
              </TouchableOpacity>
            </FormField>

            <FormField label="Payment Method">
              <TouchableOpacity 
                style={styles.selector}
                onPress={() => toggleModal('paymentMethod')}
              >
                <Text style={styles.selectorText}>
                  {formData.paymentMethod || 'Select payment method'}
                </Text>
              </TouchableOpacity>
            </FormField>

            <View style={styles.dateContainer}>
              <FormField label="Start Date" style={styles.dateField}>
                <TextInput
                  style={styles.dateInput}
                  value={formData.startDate}
                  placeholder="DD/MM/YYYY"
                  editable={false}
                />
              </FormField>
              <FormField label="End Date" style={styles.dateField}>
                <TextInput
                  style={styles.dateInput}
                  value={formData.endDate}
                  placeholder="DD/MM/YYYY"
                  editable={false}
                />
              </FormField>
            </View>

            <FormField label="Description">
              <TextInput
                style={[styles.input, styles.textArea]}
                placeholder="Add a short description..."
                value={formData.description}
                onChangeText={(value) => updateFormField('description', value)}
                multiline
                numberOfLines={4}
                textAlignVertical="top"
              />
            </FormField>

            <FormField label="Upload Attachment">
              <TouchableOpacity style={styles.attachmentButton}>
                <Image style={styles.attachmentIcon} source={Icons.Attachment} />
                <Text style={styles.attachmentText}>
                  {formData.attachment ? 'File selected' : 'Tap to upload'}
                </Text>
              </TouchableOpacity>
            </FormField>
          </View>
        </View>
      </ScrollView>

      <CategoryModal
        categoryModalVisible={modals.category}
        toggleCategoryModal={() => toggleModal('category')}
        onCategorySelect={(category) => {
          updateFormField('category', category);
          toggleModal('category');
        }}
      />

      <ModalSelector
        visible={modals.paymentMethod}
        onClose={() => toggleModal('paymentMethod')}
        data={PAYMENT_METHODS}
        onSelect={(method) => updateFormField('paymentMethod', method)}
      />

      <View style={styles.footer}>
        <CommonButton
          ButtonTitle="Submit Expense"
          OnPress={handleSubmit}
          ButtonTitleStyle={styles.submitButton}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F0F2F5',
  },
  headerContainer: {
    backgroundColor: '#7289DA',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  titleStyle: {
    fontSize: width * 0.045,
    color: '#FFFFFF',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  amountContainer: {
    // height: height * 0.22,
    backgroundColor: '#34495E',
    borderBottomLeftRadius:60,
    borderTopRightRadius:60,
    paddingHorizontal: 24,
    paddingVertical:40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 8,
    marginHorizontal:20,
    marginVertical:10,
  },
  amountLabel: {
    fontSize: width * 0.042,
    color: '#FFFFFF',
    fontWeight: '600',
    marginBottom: 16,
  },
  amountInput: {
    fontSize: width * 0.06,
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    borderWidth: 0,
    textAlign: 'center',
    color: '#2C3E50',
    fontWeight: '700',
  },
  note:{
    color:"#FFFFFF",
    fontSize:11,
    fontWeight:"600",
    paddingVertical:10,
    textAlign:"center"
  },
  formWrapper: {
    paddingHorizontal: 20,
    paddingBottom: 20,
  },
  cardContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    padding: 16,
    gap: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
  },
  fieldContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
  },
  label: {
    fontSize: width * 0.038,
    color: '#2C3E50',
    fontWeight: '600',
    marginBottom: 8,
  },
  dateContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  dateField: {
    flex: 1,
  },
  dateInput: {
    fontSize: width * 0.032,
    backgroundColor: '#F7F9FC',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    color: '#2C3E50',
  },
  input: {
    fontSize: width * 0.032,
    backgroundColor: '#F7F9FC',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
    color: '#2C3E50',
  },
  textArea: {
    height: 120,
    textAlignVertical: 'top',
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F7F9FC',
    padding: 14,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E2E8F0',
  },
  selectorText: {
    fontSize: width * 0.032,
    color: '#2C3E50',
  },
  categoryIcon: {
    width: width * 0.08,
    height: width * 0.08,
    marginRight: 12,
  },
  attachmentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F7F9FC',
    padding: 20,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#CBD5E0',
  },
  attachmentIcon: {
    width: width * 0.08,
    height: width * 0.08,
    marginRight: 12,
  },
  attachmentText: {
    fontSize: width * 0.032,
    color: '#4A5568',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    maxHeight: '80%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  modalTitle: {
    fontSize: width * 0.042,
    fontWeight: '600',
    color: '#2C3E50',
  },
  modalClose: {
    fontSize: width * 0.06,
    color: '#4A5568',
  },
  modalItem: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E2E8F0',
  },
  modalItemText: {
    fontSize: width * 0.038,
    color: '#2C3E50',
  },
  footer: {
    paddingVertical: 10,
    // paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E2E8F0',
  },
  submitButton: {
    fontSize: width * 0.042,
    fontWeight: '600',
  },
});

export default ExpenseForm;