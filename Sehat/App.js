import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from './screens/LoginScreen';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import PastRecordsScreen from './screens/PastRecordsScreen';
import RequestConsultationScreen from './screens/RequestConsultationScreen';
import MedicalChatbotScreen from './screens/MedicalChatbotScreen';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
        <Stack.Screen name="PastRecords" component={PastRecordsScreen} />
        <Stack.Screen name="RequestConsultation" component={RequestConsultationScreen} />
        <Stack.Screen name="MedicalChatbot" component={MedicalChatbotScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
