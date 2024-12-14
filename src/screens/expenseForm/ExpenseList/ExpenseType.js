import React from 'react';
import { View, Text, SectionList, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Header from '../../../components/templates/Header';
import { width } from '../../../utils/CommonUtils';
import { ExpendatureList } from '../../../utils/StaticDataConstants';

const ExpenseType = () => {
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

    const renderItem = ({ item }) => (
        <TouchableOpacity style={styles.appItem}>
            <Image source={item.Icon} style={styles.appIcon} />
            <Text style={styles.appName}>{item.Option}</Text>
        </TouchableOpacity>
    );

    const renderSectionHeader = ({ section }) => (
        <Text style={styles.sectionTitle}>{section.title}</Text>
    );

    return (
        <SafeAreaView style={styles.container}>
            <Header
                title="Expense List"
                containerStyle={styles.headerContainer}
                titleStyle={styles.titleStyle}
            />
            <View style={styles.SectionContainer}>
            <SectionList
                sections={sections}
                keyExtractor={(item) => `${item.id}`}
                renderItem={renderItem}
                renderSectionHeader={renderSectionHeader}
                contentContainerStyle={styles.listContent}
                showsVerticalScrollIndicator={false}
            />
            </View>
           
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f1f1f1',
    },
    headerContainer: {
        backgroundColor: '#D4F4E4',
    },
    titleStyle: {
        fontSize: width * 0.04,
    },
    listContent: {
        padding: 10,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333',
        marginVertical: 10,
        paddingHorizontal: 10,
    },
    appItem: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        padding: 10,
        borderRadius: 8,
        marginVertical: 5,
        marginHorizontal: 10,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    appIcon: {
        width: 40,
        height: 40,
        marginRight: 10,
        resizeMode: 'contain',
    },
    appName: {
        fontSize: 14,
        color: '#000',
        textAlign:"center"
    },
    SectionContainer:{
        marginBottom:40,
    }
});

export default ExpenseType;
