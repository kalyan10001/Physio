import 'react-native-reanimated';


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login/Login.js';
import SignUpScreen from './Signup/Signup.js';
import SignUpDetails from './Signup/SignupDetails.js';
import Intro from './Intro/Intro.js';
import HomeScreen from './Home/HomeScreen.js';
import MyHealthScreen from './PhysioTheraphists/MyHealthScreen.js';
import HealthScoreScreen from './PhysioTheraphists/HealthScoreScreen.js';
import EditProfileScreen from './PhysioTheraphists/EditProfileScreen.js';
import MyBookingsScreen from './PhysioTheraphists/MyBookingsScreen.js';
import MyReportsScreen from './PhysioTheraphists/MyReportsScreen.js';
import ViewSlotsScreen from './Booking/ViewSlotsScreen.js';
import BottomTabs from './Home/CustomBottomTabs.js';
import LoginDetails from './Login/LoginDetails.js';
import HomeNav from './Home/HomeNav.js';
import BookingDoneScreen from './Booking/BookingDoneScreen.js';
import BookingFailScreen from './Booking/BookingFailScreen.js';
import VideoCall from './VideoCall/VideoCall.js';
import Auth from './Intro/Auth.js';
import SignUp from './Signup/Signup.js';
import PhoneOtp from './Signup/PhoneOtp.js';
import EmailOtp from './Signup/EmailOtp.js';
import VerifyOtp from './Signup/VerifyOtp.js';
import Services from './Services/Services.js';
import PhysiotherapistScreen from './PhysioTheraphists/PhysioTherapistScreen.js';
import DocterProfile from './PhysioTheraphists/DocterProfile.js';
import ConsultationScreen from './PhysioTheraphists/ConsultationScreen.js';
import BookingConfirmation from './PhysioTheraphists/BookingConfirmation.js';
import TimeSlots from './PhysioTheraphists/TimeSlots.js';


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyHealth" component={MyHealthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HealthScore" component={HealthScoreScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="BookingFail" component={BookingFailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DocProfile" component={DoctorProfileScreen} options={{ headerShown: false }} />

        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />        
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />        
        <Stack.Screen name="EmailOtp" component={EmailOtp} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneOtp" component={PhoneOtp} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} options={{ headerShown: false }} />
        <Stack.Screen name="Services" component={Services} options={{ headerShown: false }} />
        <Stack.Screen name="PhysioTherapist" component={PhysiotherapistScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DocterProfile" component={DocterProfile} options={{ headerShown: false }} />
         <Stack.Screen name="EditProfile" component={EditProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Consultation" component={ConsultationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Booking" component={BookingConfirmation} options={{ headerShown: false }} />
        <Stack.Screen name="MyBooking" component={MyBookingsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="MyReport" component={MyReportsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="TimeSlots" component={TimeSlots} options={{ headerShown: false }} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
