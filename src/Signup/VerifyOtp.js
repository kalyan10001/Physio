import { useNavigation } from '@react-navigation/native';
import React, { useRef, useEffect, useState } from 'react';
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
} from 'react-native';

export default function VerifyOtp() {
  const navigation=useNavigation();
  const inputRefs = useRef([]);
  const [otp, setOtp] = useState(['', '', '', '']);

  useEffect(() => {
    inputRefs.current[0]?.focus(); // Auto focus first input
  }, []);

  const handleChange = (text, index) => {
    if (/^\d?$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (text && index < 3) {
        inputRefs.current[index + 1]?.focus();
      }

      if (!text && index > 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const handleContinue = () => {
    const fullOtp = otp.join('');
    if (fullOtp.length !== 4) return alert('Please enter the full OTP');
    console.log('OTP Submitted:', fullOtp);
    navigation.navigate('BottomTabs');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#fff' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          <Text style={styles.title}>Enter the <Text style={styles.bold}>One Time Password</Text></Text>

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
                returnKeyType="next"
              />
            ))}
          </View>

          <Text style={styles.resend}>Resend code</Text>

          <View style={styles.footer}>
            <TouchableOpacity style={styles.button} onPress={handleContinue}>
              <Text style={styles.buttonText}>Continue</Text>
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
    fontSize: 18,
    color: '#111827',
    marginBottom: 32,
  },
  bold: {
    fontWeight: 'bold',
  },
  otpContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
    marginBottom: 16,
  },
  otpInput: {
    width: 56,
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
  resend: {
    marginTop: 12,
    fontSize: 14,
    color: '#0077A9',
    textDecorationLine: 'underline',
  },
  footer: {
    marginTop: 'auto',
    width: '100%',
    paddingHorizontal: 0,
    paddingBottom: Platform.OS === 'ios' ? 30 : 20,
  },
  button: {
    width:'100%',
    backgroundColor: '#0077A9',
    paddingVertical: 16,
    borderRadius: 10,
    alignItems: 'center',
    shadowColor: '#0077A9',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 4,
    marginBottom:-25
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '700',
  },
});
