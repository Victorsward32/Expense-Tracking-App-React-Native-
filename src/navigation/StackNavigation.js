import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import loginScreen from '../screens/auth/loginScreen';
import OnBoardingScreen from '../screens/onboarding/OnBoardingScreen';
import BudgetSetUpScreen from '../screens/budgetSetup/BudgetSetUpScreen';
import DashBoardScreen from '../screens/dashboard/DashBoardScreen';
import settings from '../screens/settings/settings';
import ReportScreen from '../screens/reports/ReportScreen';
import ExpenseForm from '../screens/expenseForm/ExpenseForm';
import ExpenseType from '../screens/expenseForm/ExpenseList/ExpenseType';
import { Image } from 'react-native';
import { BottomBarIcons } from '../utils/ImageConstant';
import RegisterScreen from '../screens/auth/RegisterScreen';
import FinanCialChatAIScreen from '../screens/FinanceChat/FinanCialChatAIScreen';


        

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }} >
      {/* Authentication Flow */}
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="loginScreen" component={loginScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />

      {/* Main App Flow */}
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Stack.Screen name="BudgetSetUpScreen" component={BudgetSetUpScreen} />
      <Stack.Screen name="ExpenseForm" component={ExpenseForm} />
      <Stack.Screen name="ExpenseType" component={ExpenseType} />
    </Stack.Navigator>
  );
};

const MainTabNavigator = () => {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarStyle: { height: 60, backgroundColor: '#F5F7FA' },
      tabBarActiveTintColor: '#007aff', // Active tab color
      tabBarInactiveTintColor: 'gray', // Inactive tab color
    }}
  >
    <Tab.Screen
      name="Dashboard"
      component={DashBoardScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? BottomBarIcons.dahboard
                : BottomBarIcons.dahboard
            }
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        ),
      }}
    />
   
    <Tab.Screen
      name="Reports"
      component={ReportScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? BottomBarIcons.reports
                : BottomBarIcons.reports
            }
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        ),
      }}
    />
     <Tab.Screen
      name="Chat"
      component={FinanCialChatAIScreen}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? BottomBarIcons.wallet
                :BottomBarIcons.wallet
            }
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        ),
      }}
    />
    <Tab.Screen
      name="Profile"
      component={settings}
      options={{
        tabBarIcon: ({ focused }) => (
          <Image
            source={
              focused
                ? BottomBarIcons.user
                : BottomBarIcons.user
            }
            style={{ width: 24, height: 24 }}
            resizeMode="contain"
          />
        ),
      }}
    />
  </Tab.Navigator>
  );
};

export default StackNavigation;
