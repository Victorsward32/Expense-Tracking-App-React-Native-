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
    date: new Date().toISOString().slice(0, 10),
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
            placeholderTextColor="#999"
          />
        </View>

        <View style={styles.formWrapper}>
          <FormField 
            label="Category" 
            style={styles.categoryField}
          >
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

          <View style={styles.formContent}>
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

            <FormField label="Date">
              <TextInput
                style={styles.input}
                value={formData.date}
                placeholder="DD/MM/YYYY"
                editable={false}
              />
            </FormField>

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
    backgroundColor: '#F5F7FA',
  },
  headerContainer: {
    backgroundColor: '#D4F4E4',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  titleStyle: {
    fontSize: width * 0.04,
    color: '#00513D',
    fontWeight: '600',
  },
  scrollView: {
    flex: 1,
  },
  amountContainer: {
    height: height * 0.28,
    backgroundColor: '#A7E8DC',
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
    paddingHorizontal: 24,
    paddingTop:30,
    paddingBottom: 40,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4,
  },
  amountLabel: {
    fontSize: width * 0.038,
    color: '#00513D',
    fontWeight: '600',
    marginBottom: 12,
  },
  amountInput: {
    fontSize: width * 0.05,
    backgroundColor: '#FFFFFF',
    padding: width * 0.03,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    textAlign: 'center',
    color: '#333333',
    fontWeight: '600',
  },
  formWrapper: {
    marginTop: -(height * 0.10),
    paddingHorizontal: 20,
  },
  categoryField: {
    marginBottom: 15,
  },
  formContent: {
    gap: 15,
    marginBottom: 20,
    backgroundColor:"white",
    padding:8
  },
  fieldContainer: {
    backgroundColor: '#FFFFFF',
    padding: 12,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  label: {
    fontSize: width * 0.035,
    color: '#333333',
    fontWeight: '500',
    marginBottom: 8,
  },
  input: {
    fontSize: width * 0.030,
    backgroundColor: '#F9F9F9',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    color: '#333333',
  },
  textArea: {
    height: 100,
    textAlignVertical: 'top',
  },
  selector: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    padding: 12,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  selectorText: {
    fontSize: width * 0.030,
    color: '#333333',
  },
  categoryIcon: {
    width: width * 0.06,
    height: width * 0.06,
    marginRight: 8,
  },
  attachmentButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F9F9F9',
    padding: 16,
    borderRadius: 8,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#E0E0E0',
  },
  attachmentIcon: {
    width: width * 0.06,
    height: width * 0.06,
    marginRight: 8,
  },
  attachmentText: {
    fontSize: width * 0.03,
    color: '#666666',
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
    fontSize: width * 0.038,
    fontWeight: '600',
    color: '#333333',
  },
  modalClose: {
    fontSize: width * 0.06,
    color: '#666666',
  },
  modalItem: {
    padding: width * 0.03,
    borderBottomWidth: 0.7,
    borderBottomColor: '#E0E0E0',
  },
  modalItemText: {
    fontSize: width * 0.03,
    color: '#333333',
  },
  footer: {
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  submitButton: {
    fontSize: width * 0.038,
  },
});

export default ExpenseForm;