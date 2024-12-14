import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import loginScreen from '../screens/auth/loginScreen';
import OnBoardingScreen from '../screens/onboarding/OnBoardingScreen';
import BudgetSetUpScreen from '../screens/budgetSetup/BudgetSetUpScreen';
import DashBoardScreen from '../screens/dashboard/DashBoardScreen';
import ExpenseTrackerScreen from '../screens/expenseTracker/ExpenseTrackerScreen';
import settings from '../screens/settings/settings';
import ReportScreen from '../screens/reports/ReportScreen';
import ExpenseForm from '../screens/expenseForm/ExpenseForm';
import ExpenseType from '../screens/expenseForm/ExpenseList/ExpenseType';


        

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  return (
    <Stack.Navigator  screenOptions={{ headerShown: false }} >
      {/* Authentication Flow */}
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen name="loginScreen" component={loginScreen} />

      {/* Main App Flow */}
      <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      <Stack.Screen name="BudgetSetUpScreen" component={BudgetSetUpScreen} />
      <Stack.Screen name="ExpenseForm" component={ExpenseForm} />
      <Stack.Screen name="ExpenseType" component={ExpenseType} />
    </Stack.Navigator>
  );
};

// const MainTabNavigator = () => {
//   return (
//     <Tab.Navigator screenOptions={{headerShown:false}}>
//       <Tab.Screen name="DashBoardScreen" component={DashBoardScreen} />
//       <Tab.Screen name="ExpenseTrackerScreen" component={ExpenseTrackerScreen} />
//       <Tab.Screen name="ReportScreen" component={ReportScreen} />
//       <Tab.Screen name="Settings" component={settings} />
//     </Tab.Navigator>
//   );
// };
const MainTabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { height: 60, backgroundColor: '#00513D'},
        // tabBarActiveBackgroundColor:{Tab}
        // tabBarInactiveBackgroundColor:{"black"},
      }}
    >
      <Tab.Screen
        name="Dashboard"
        component={DashBoardScreen}
        // options={{
        //   tabBarIcon: ({ color, size, focused }) => (
        //     <Ionicons name="house" color="#ff0000" size={20} />
        //     // <Ionicons
        //     //   name="home-outline"
        //     //   size={size}
        //     //   color={focused ? '#007aff' : color} // Change color when focused
        //     // />
        //   ),
        // }}
      />
      <Tab.Screen
        name="ExpenseTracker"
        component={ExpenseTrackerScreen}
        // options={{
        //   tabBarIcon: ({ color, size, focused }) => (
        //     <Ionicons
        //       name="wallet-outline"
        //       size={size}
        //       color={focused ? '#007aff' : color} // Change color when focused
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name="Reports"
        component={ReportScreen}
        // options={{
        //   tabBarIcon: ({ color, size, focused }) => (
        //     <Ionicons
        //       name="bar-chart-outline"
        //       size={size}
        //       color={focused ? '#007aff' : color} // Change color when focused
        //     />
        //   ),
        // }}
      />
      <Tab.Screen
        name="More"
        component={settings}
        // options={{
        //   tabBarIcon: ({ color, size, focused }) => (
        //     <AntDesign
        //       name="home"
        //       size={size}
        //       color={focused ? '#007aff' : color} // Change color when focused
        //     />
        //   ),
        // }}
      />
    </Tab.Navigator>
  );
};

export default StackNavigation;
