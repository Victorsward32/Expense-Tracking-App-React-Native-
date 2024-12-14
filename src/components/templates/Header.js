import React from 'react';
import { 
  StyleSheet, 
  Text, 
  TouchableOpacity, 
  View 
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Header = ({ 
  title, 
  path, 
  navigateTo, 
  containerStyle, 
  titleStyle, 
  pathStyle 
}) => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    if (navigateTo) {
      navigation.navigate(navigateTo);
    }
  };

  return (
    <View style={[styles.container, containerStyle]}>
      <View style={styles.titleContainer}>
        <Text style={[styles.titleText, titleStyle]}>{title}</Text>
      </View>
      
      {path && (
        <TouchableOpacity 
          onPress={handleNavigation} 
          hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        >
          <Text style={[styles.pathText, pathStyle]}>{path}</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#D4F4E4',
  },
  titleContainer: {
    flex: 1,    
  },
  titleText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
  },
  pathText: {
    fontSize: 16,
    color: '#007AFF', // iOS-style blue
    textDecorationLine: 'underline',
  },
});

export default Header;