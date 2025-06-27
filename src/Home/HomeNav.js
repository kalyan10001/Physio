import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PhysioTheraphist from '../PhysioTheraphists/PhysioTheraphist';
import PhysioTheraphistProfile from '../PhysioTheraphists/PhysioTheraphistProfile';
import HomeScreen from './HomeScreen';
import PhysioScreen from '../PhysioTheraphists/PhysioScreen';
import DoctorProfileScreen from '../PhysioTheraphists/DocterProfileScreen';
import ConsultationScreen from '../Booking/ConsultationScreen';
import ViewSlotsScreen from '../Booking/ViewSlotsScreen';



const Stack = createNativeStackNavigator();

export default function HomeNav() {
  return (
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="PhysioTheraphists" component={PhysioTheraphist} options={{ headerShown: false }} />
        <Stack.Screen name="PhysioTheraphistProfile" component={PhysioTheraphistProfile} options={{ headerShown: false }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="PhysioScreen" component={PhysioScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DocterProfile" component={DoctorProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Consultation" component={ConsultationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ViewSlots" component={ViewSlotsScreen} options={{ headerShown: false }} />
      </Stack.Navigator>
  );
}
