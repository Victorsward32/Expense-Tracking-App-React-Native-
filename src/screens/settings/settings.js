import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  TouchableOpacity, 
  Text, 
  Image, 
  FlatList, 
  SafeAreaView, 
  ScrollView
} from 'react-native';
import { Icons, Images } from '../../utils/ImageConstant';
import Header from '../../components/templates/Header';
import { width } from '../../utils/CommonUtils';

const Settings = ({ navigation }) => {
  const [name, setName] = useState("Popa Andrei");
  const [email, setEmail] = useState("popa_andrei@yahoo.com");
  const [profilePic, setProfilePic] = useState(Images.ProfilePic);

  const OPTIONS = [
    { 
      id: 1, 
      title: "Accounts", 
      icon: Icons.cameraIcon,
      onPress: () => navigation.navigate('AccountSettings')
    },
    { 
      id: 2, 
      title: "My Household", 
      icon: Icons.groupIcon,
      onPress: () => navigation.navigate('Household')
    },
    { 
      id: 3, 
      title: "Help", 
      icon: Icons.HelpIcon,
      onPress: () => navigation.navigate('Help')
    },
    { 
      id: 4, 
      title: "Billing", 
      icon: Icons.moneyIcon,
      onPress: () => navigation.navigate('Billing')
    },
    { 
      id: 5, 
      title: "Settings", 
      icon: Icons.settingsIcon,
      onPress: () => navigation.navigate('AppSettings')
    },
  ];

  const renderOptionItem = ({ item }) => (
    <TouchableOpacity 
      style={styles.menuItem} 
      onPress={item.onPress}
    >
      <Image source={item.icon} style={styles.optionIcon} />
      <Text style={styles.menuItemText}>{item.title}</Text>
    </TouchableOpacity>
  );

  const handleProfileEdit = () => {
    // Navigate to profile edit screen or open profile edit modal
    navigation.navigate('EditProfile');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header
        title="Settings"
        containerStyle={styles.headerContainer}
        titleStyle={styles.titleStyle}
      />
      <ScrollView showsVerticalScrollIndicator={false}>

      <View style={styles.header}>
        <TouchableOpacity onPress={handleProfileEdit}>
          <Image 
            source={profilePic} 
            style={styles.profilePicture} 
          />
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleProfileEdit}>
          <Text style={styles.name}>{name}</Text>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={handleProfileEdit}>
          <Text style={styles.email}>{email}</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <FlatList
          data={OPTIONS}
          renderItem={renderOptionItem}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          nestedScrollEnabled={true}
        />
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  headerContainer: {
    backgroundColor: '#D4F4E4',
  },
  titleStyle: {
    fontSize: width * 0.04,
  },
  header: {
    // backgroundColor: '#EDF8F4',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    color: '#00000',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  email: {
    color: '#00000',
    fontSize: 14,
  },
  menuContainer: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderBottomWidth: 0.4,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginVertical: 8,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  menuItemText: {
    fontSize: 16,
    color: '#333333',
    marginLeft: 12,
  },
  optionIcon: {
    height: 30,
    width: 40,
    resizeMode: "contain",
  }
});

export default Settings;