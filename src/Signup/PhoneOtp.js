// PhoneOtp.js
import React, { useEffect, useRef, useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { sendOtp } from '../webservice/redux/actions/authActions'; // Adjust path as per your folder structure
import { useNavigation } from '@react-navigation/native';

export default function PhoneOtp() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const inputRef = useRef(null);
  const [phone, setPhone] = useState('');
  const [hasRequestedOtp, setHasRequestedOtp] = useState(false);
  const { loading, error } = useSelector((state) => state.auth);

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (hasRequestedOtp === true) {

      if (error === null) {
        console.log('OTP sent successfully');
        navigation.navigate('VerifyOtp', { phone });
      } else {
        Alert.alert('OTP Failed', error);
      }
      setHasRequestedOtp(false); // reset the flag
    }
  }, [hasRequestedOtp]);

  const handlePress = async () => {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(phone)) {
      Alert.alert('Invalid Phone Number', 'Please enter a valid 10-digit number.');
      return;
    }

    try {
      const result = await dispatch(sendOtp(phone));
      console.log(result);
      if (result.success) {
        setHasRequestedOtp(true);
      }
    } catch (err) {
      Alert.alert('Error', 'An error occurred while sending OTP.');
    }
  };


  return (
    <KeyboardAvoidingView style={{ flex: 1 }} behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled" showsVerticalScrollIndicator={false}>
          <Text style={styles.title}>Welcome to,</Text>
          <Text style={styles.appName}>GetPhysio</Text>
          <Text style={styles.subtitle}>
            Smarter, Safer Journeys with Real-Time Train Tracking Everywhere.
          </Text>

          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Enter your phone number"
            placeholderTextColor="#999"
            keyboardType="phone-pad"
            maxLength={10}
            value={phone}
            onChangeText={(text) => setPhone(text.replace(/[^0-9]/g, ''))}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
          />

          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={handlePress} disabled={loading}>
              {loading ? <ActivityIndicator color="#fff" /> : <Text style={styles.buttonText}>Get OTP</Text>}
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 60,
    paddingBottom: 24,
  },
  title: {
    fontFamily: 'BalooBhai2-Medium',
    fontSize: 20,
    color: '#111827',
  },
  appName: {
    fontFamily: 'BalooBhai2-SemiBold',
    fontSize: 40,
    color: '#0077A9',
    marginBottom: 12,
  },
  subtitle: {
    fontFamily: 'BalooBhai2-Medium',
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 40,
    lineHeight: 20,
  },
  input: {
    fontFamily: 'Montserrat-Medium',
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    paddingHorizontal: 16,
    fontSize: 16,
    color: '#111827',
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 3,
    elevation: 1,
  },
  buttonWrapper: {
    marginTop: 'auto',
    paddingTop: 24,
    paddingBottom: 20,
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
    elevation: 3,
  },
  buttonText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#FFFFFF',
    fontSize: 16,
    letterSpacing: 0.5,
  },
});
