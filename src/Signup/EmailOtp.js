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
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function EmailOtp() {
  const navigation = useNavigation();
  const inputRef = useRef(null);
  const [email, setEmail] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const handlePress = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      Alert.alert('Invalid Email', 'Please enter a valid email address.');
      return;
    }
    navigation.navigate('VerifyOtp', { email });
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          
          <Text style={styles.title}>Welcome to</Text>
          <Text style={styles.appName}>GetPhysio</Text>
          <Text style={styles.subtitle}>
            Smarter, safer journeys with real-time tracking — everywhere.
          </Text>

          <TextInput
            ref={inputRef}
            style={styles.input}
            placeholder="Enter your email"
            placeholderTextColor="#999"
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
            autoCorrect={false}
            returnKeyType="done"
          />

          {/* 🔥 This will always be at the bottom and adjust for keyboard */}
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.button} onPress={handlePress}>
              <Text style={styles.buttonText}>Get OTP</Text>
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
    fontSize: 20,
    color: '#111827',
    fontWeight: '500',
  },
  appName: {
    fontSize: 32,
    fontWeight: '800',
    color: '#0077A9',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 40,
    lineHeight: 20,
  },
  input: {
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
    paddingBottom:20
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
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.5,
  },
});
