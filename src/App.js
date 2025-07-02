import 'react-native-reanimated';


import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './Login/Login.js';
import SignUpScreen from './Signup/Signup.js';
import SignUpDetails from './Signup/SignupDetails.js';
import Intro from './Intro/Intro.js';
// import PhysioTheraphist from './PhysioTheraphists/PhysioTheraphist.js';
// import PhysioTheraphistProfile from './PhysioTheraphists/PhysioTheraphistProfile.js';
import HomeScreen from './Home/HomeScreen.js';
// import PhysioScreen from './PhysioTheraphists/PhysioScreen.js';
// import DoctorProfileScreen from './PhysioTheraphists/DocterProfileScreen.js';
import MyHealthScreen from './PhysioTheraphists/MyHealthScreen.js';
<<<<<<< HEAD
import HealthScoreScreen from './PhysioTheraphists/HealthScoreScreen.js';
// import EditFieldScreen from './PhysioTheraphists/EditFieldScreen.js';
// import ConsultationScreen from './Booking/ConsultationScreen.js';
// import ViewSlotsScreen from './Booking/ViewSlotsScreen.js';
import BottomTabs from './Home/CustomBottomTabs.js';
// import LoginDetails from './Login/LoginDetails.js';
// import HomeNav from './Home/HomeNav.js';
// import BookingDoneScreen from './Booking/BookingDoneScreen.js';
// import BookingFailScreen from './Booking/BookingFailScreen.js';
// import VideoCall from './VideoCall/VideoCall.js';
=======
import EditFieldScreen from './PhysioTheraphists/EditFieldScreen.js';
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
>>>>>>> b4fa93f0451f500bddd64b85e6a91c271ba69e63


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs">
<<<<<<< HEAD
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
=======
        {/* <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
>>>>>>> b4fa93f0451f500bddd64b85e6a91c271ba69e63
        <Stack.Screen name="Signup" component={SignUpScreen} options={{ headerShown: false }} />
        <Stack.Screen name="SignupDetails" component={SignUpDetails} options={{ headerShown: false }} />
        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        {/* <Stack.Screen name="PhysioTheraphists" component={PhysioTheraphist} options={{ headerShown: false }} />
        <Stack.Screen name="PhysioTheraphistProfile" component={PhysioTheraphistProfile} options={{ headerShown: false }} /> */}
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="PhysioScreen" component={PhysioScreen} options={{ headerShown: false }} /> */}
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />
        <Stack.Screen name="MyHealth" component={MyHealthScreen} options={{ headerShown: false }} />
        <Stack.Screen name="HealthScore" component={HealthScoreScreen} options={{ headerShown: false }} />
        {/* <Stack.Screen name="DocterProfile" component={DoctorProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="EditField" component={EditFieldScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Consultation" component={ConsultationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="ViewSlots" component={ViewSlotsScreen} options={{ headerShown: false }} />
        <Stack.Screen name="LoginDetails" component={LoginDetails} options={{ headerShown: false }} />
        <Stack.Screen name="HomeNav" component={HomeNav} options={{ headerShown: false }} />
        <Stack.Screen name="BookingDone" component={BookingDoneScreen} options={{ headerShown: false }} />
        <Stack.Screen name="BookingFail" component={BookingFailScreen} options={{ headerShown: false }} />
        <Stack.Screen name="VideoCall" component={VideoCall} options={{ headerShown: false }} /> */}
<<<<<<< HEAD
=======
        <Stack.Screen name="BottomTabs" component={BottomTabs} options={{ headerShown: false }} />

        <Stack.Screen name="Intro" component={Intro} options={{ headerShown: false }} />
        <Stack.Screen name="Auth" component={Auth} options={{ headerShown: false }} />        
        <Stack.Screen name="SignUp" component={SignUp} options={{ headerShown: false }} />        
        <Stack.Screen name="EmailOtp" component={EmailOtp} options={{ headerShown: false }} />
        <Stack.Screen name="PhoneOtp" component={PhoneOtp} options={{ headerShown: false }} />
        <Stack.Screen name="VerifyOtp" component={VerifyOtp} options={{ headerShown: false }} />
        <Stack.Screen name="Services" component={Services} options={{ headerShown: false }} />
        <Stack.Screen name="PhysioTherapist" component={PhysiotherapistScreen} options={{ headerShown: false }} />
        <Stack.Screen name="DocterProfile" component={DocterProfile} options={{ headerShown: false }} />
        <Stack.Screen name="Consultation" component={ConsultationScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Booking" component={BookingConfirmation} options={{ headerShown: false }} />
        <Stack.Screen name="TimeSlots" component={TimeSlots} options={{ headerShown: false }} />

>>>>>>> b4fa93f0451f500bddd64b85e6a91c271ba69e63
      </Stack.Navigator>
    </NavigationContainer>
  );
}
