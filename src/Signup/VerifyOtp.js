// VerifyOtp.js
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { verifyOtp, sendOtp } from '../webservice/redux/actions/authActions'; // update the path if needed
import { useNavigation } from '@react-navigation/native';

export default function VerifyOtp({ route }) {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const { phone } = route.params;
  const [otp, setOtp] = useState(['', '', '', '', '', '']);
  const inputRefs = useRef([]);
  const [resendCooldown, setResendCooldown] = useState(60);
  const { loading ,error ,token } = useSelector((state) => state.auth);
  const [hasRequestedOtp, setHasRequestedOtp] = useState(false);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);
  

  useEffect(() => {
     if (hasRequestedOtp === true) {
    if (!error) {
      console.log('OTP verified successfully:', token);
  Alert.alert('OTP Verified', 'You have been logged in successfully.', [
    {
      text: 'OK',
      onPress: () => navigation.navigate('BottomTabs'),
    },
  ]);
    } else {
        Alert.alert('OTP Verification Failed', error || 'Invalid OTP.');
    }
    setHasRequestedOtp(false); // reset the flag
  }
  },[hasRequestedOtp]);


  useEffect(() => {
    let timer;
    if (resendCooldown > 0) {
      timer = setInterval(() => {
        setResendCooldown((prev) => prev - 1);
      }, 800);
    }
    return () => clearInterval(timer);
  }, [resendCooldown]);

  const handleChange = (text, index) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < 5) inputRefs.current[index + 1]?.focus();
      if (!text && index > 0) inputRefs.current[index - 1]?.focus();
    }
  };

  const handleContinue = async () => {
  const fullOtp = otp.join('');
  if (fullOtp.length !== 6) {
    return Alert.alert('Error', 'Please enter all 6 digits of the OTP.');
  }
  
  try {
    dispatch(verifyOtp({ phone, otp: fullOtp }));
    setHasRequestedOtp(true);
  } catch (err) {
    Alert.alert('Network Error', 'Unable to verify OTP. Please check your connection.');
  }
};

  const handleResendOtp = async () => {
    if (resendCooldown > 0) return;
    try {
      dispatch(sendOtp(phone));
if (!error) {
  setResendCooldown(10);
  Alert.alert('OTP Sent', 'A new OTP has been sent to your phone.');
} else {
  Alert.alert('Resend Failed', error || 'Could not resend OTP.');
}

    } catch (err) {
      Alert.alert('Network Error', 'Unable to resend OTP. Please check your connection.');
    }
  };

  return (
    <KeyboardAvoidingView style={{ flex: 1, backgroundColor: '#fff' }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Enter the <Text style={styles.bold}>6-digit OTP</Text></Text>

          <View style={styles.otpContainer}>
            {otp.map((digit, index) => (
              <TextInput
                key={index}
                ref={(ref) => (inputRefs.current[index] = ref)}
                style={styles.otpInput}
                keyboardType="numeric"
                maxLength={1}
                value={digit}
                onChangeText={(text) => handleChange(text, index)}
              />
            ))}
          </View>

          {resendCooldown > 0 ? (
            <Text style={styles.resendText}>Resend OTP in {resendCooldown}s</Text>
          ) : (
            <TouchableOpacity onPress={handleResendOtp}>
              <Text style={styles.resendLink}>Resend OTP</Text>
            </TouchableOpacity>
          )}

          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={handleContinue} disabled={loading}>
              <Text style={styles.buttonText}>{loading ? 'Verifying...' : 'Continue'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 80,
    paddingBottom: 20,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#111827',
    marginBottom: 32,
  },
  bold: {
    fontFamily: 'Montserrat-SemiBold',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '90%',
    marginBottom: 16,
  },
  otpInput: {
    fontFamily: 'Montserrat-Medium',
    width: 48,
    height: 56,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#D1D5DB',
    textAlign: 'center',
    fontSize: 20,
    color: '#111827',
    backgroundColor: '#F9FAFB',
    elevation: 2,
  },
  resendText: {
    fontFamily: 'Montserrat-Medium',
    marginTop: 12,
    fontSize: 14,
    color: '#9CA3AF',
  },
  resendLink: {
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 12,
    fontSize: 14,
    color: '#0077A9',
  },
  footer: {
    marginTop: 'auto',
    width: '100%',
    paddingHorizontal: 0,
    paddingBottom: Platform.OS === 'ios' ? 30 : 20,
    marginBottom:-30,
  },
  button: {
    backgroundColor: '#0077A9',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#0077A9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
  },
  buttonText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    fontSize: 15,
  },
});