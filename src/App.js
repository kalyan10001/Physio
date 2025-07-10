import 'react-native-reanimated';
import { Provider } from 'react-redux';

import store from './webservice/redux/store';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Intro from './Intro/Intro.js';
import HomeScreen from './Home/HomeScreen.js';
import MyHealthScreen from './MyHealth/MyHealthScreen.js';
import HealthScoreScreen from './MyHealth/HealthScoreScreen.js';
import EditProfileScreen from './MyHealth/EditProfileScreen.js';
import MyBookingsScreen from './MyHealth/MyBookingsScreen.js';
import MyReportsScreen from './MyHealth/MyReportsScreen.js';
import BottomTabs from './Home/CustomBottomTabs.js';
import BookingFailScreen from './Booking/BookingFailScreen.js';
import Auth from './Intro/Auth.js';
import SignUp from './Signup/Signup.js';
import PhoneOtp from './Signup/PhoneOtp.js';
import EmailOtp from './Signup/EmailOtp.js';
import VerifyOtp from './Signup/VerifyOtp.js';
import Services from './Physio/Physio.js';
import PhysiotherapistScreen from './Physio/PhysioTherapistScreen.js';
import DocterProfile from './Physio/DocterProfile.js';
import ConsultationScreen from './Physio/ConsultationScreen.js';
import BookingConfirmation from './Physio/BookingConfirmation.js';
import TimeSlots from './Physio/TimeSlots.js';
import DoctorProfileScreen from './Physio/DocterProfileScreen.js';
import MyProfileScreen from './MyHealth/MyProfileScreen.js';
import FAQScreen from './MyHealth/FAQScreen.js';
import PolicyScreen from './MyHealth/PolicyScreen.js';
import CallBackScreen from './MyHealth/CallBackScreen.js';
import CitySelectionScreen from './Home/CitySelectionScreen.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
     <Provider store={store}>
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
        <Stack.Screen name="MyProfile" component={MyProfileScreen} options={{ headerShown: false }} />
        <Stack.Screen name="FAQ" component={FAQScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Policy" component={PolicyScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CallBack" component={CallBackScreen} options={{ headerShown: false }} />
        <Stack.Screen name="CitySelection" component={CitySelectionScreen} options={{headerShown: false}} />
      </Stack.Navigator>
    </NavigationContainer>
    </Provider>
  );
}
