import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  ScrollView,
  Platform,
  Alert,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { sendOtp, verifyOtp } from '../api/Auth/Auth';

const LoginDetails = () => {
  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');

  const handleGetOTP = async () => {
    try {
      const response = await sendOtp(phoneNumber);
      Alert.alert('OTP Sent', response.message);
    } catch (error) {
      const msg = error?.response?.data?.error || 'Failed to send OTP';
      Alert.alert('Error', msg);
    }
  };

  const handleLogIn = async () => {
    try {
      const response = await verifyOtp(phoneNumber, otp);
      if (response.message === 'OTP verified successfully!') {
        Alert.alert('Success', 'OTP Verified!');
        navigation.navigate('BottomTabs');
      } else {
        Alert.alert('Error', 'Invalid OTP');
      }
    } catch (error) {
      const msg = error?.response?.data?.message || 'Verification failed';
      Alert.alert('Error', msg);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
            {/* Header */}
            <View style={styles.header}>
              <Image
                source={require('../assets/images/loginscreen/splashScreenLogo.png')}
                style={styles.logo}
              />
              <TouchableOpacity onPress={() => navigation.replace('Signup')}>
                <Text style={styles.loginText}>SignUp</Text>
              </TouchableOpacity>
            </View>

            {/* Illustration */}
            <View style={styles.imageContainer}>
              <Image
                source={require('../assets/images/signupscreen/signuplogo.png')}
                style={styles.image}
                resizeMode="contain"
              />
            </View>

            {/* Phone Input */}
            <View style={styles.phoneInputContainer}>
              <Text style={styles.countryCode}>+91 |</Text>
              <TextInput
                style={styles.phoneInput}
                placeholder="Phone Number"
                keyboardType="phone-pad"
                value={phoneNumber}
                onChangeText={setPhoneNumber}
                placeholderTextColor="#999"
                returnKeyType="done"
              />
            </View>

            {/* OTP Input and Button */}
            <View style={styles.otpRow}>
              <TextInput
                style={styles.otpInput}
                placeholder="Enter OTP"
                keyboardType="number-pad"
                value={otp}
                onChangeText={setOtp}
                placeholderTextColor="#999"
                returnKeyType="done"
              />
              <TouchableOpacity style={styles.otpButton} onPress={handleGetOTP}>
                <Text style={styles.otpButtonText}>Get OTP</Text>
              </TouchableOpacity>
            </View>

            {/* Log In */}
            <TouchableOpacity style={styles.loginButton} onPress={handleLogIn}>
              <Text style={styles.loginButtonText}>Log In</Text>
            </TouchableOpacity>
          </ScrollView>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    backgroundColor: '#f9f9f9',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  logo: {
    width: 110,
    height: 40,
  },
  loginText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#007AFF',
  },
  imageContainer: {
    alignItems: 'center',
    marginBottom: 30,
  },
  image: {
    width: 220,
    height: 180,
  },
  phoneInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 4,
    elevation: 2,
  },
  countryCode: {
    color: '#555',
    marginRight: 8,
    fontSize: 15,
  },
  phoneInput: {
    flex: 1,
    fontSize: 15,
    color: '#000',
  },
  otpRow: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  otpInput: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 12,
    paddingHorizontal: 12,
    fontSize: 15,
    color: '#000',
    marginRight: 10,
    height: 45,
  },
  otpButton: {
    backgroundColor: '#007AFF',
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    height: 45,
  },
  otpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14,
  },
  loginButton: {
    backgroundColor: '#007AFF',
    paddingVertical: 15,
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#34C759',
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 3,
  },
  loginButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});

export default LoginDetails;
