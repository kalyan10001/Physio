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
  Modal,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SignUpDetails = () => {
  const navigation = useNavigation();

  const [phoneNumber, setPhoneNumber] = useState('');
  const [otp, setOtp] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const handleGetOTP = () => {
    console.log('Sending OTP to:', phoneNumber);
  };

  const handleSignUp = () => {
    if (termsAccepted) {
      navigation.navigate('BottomTabs');
      console.log('Signing up with:', { email, password });
    }
  };

  return (
    <SafeAreaView>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={[styles.logobar, { justifyContent: 'space-between' }]}>
        <Image
          source={require('../assets/images/loginscreen/splashScreenLogo.png')}
          style={styles.logo}
        />
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('LoginDetails')}>
          <Text style={styles.loginText}>Log in</Text>
        </TouchableOpacity>
      </View>

      {/* Signup Image */}
      <View style={styles.screenContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={require('../assets/images/signupscreen/signuplogo.png')}
            style={styles.image}
          />
        </View>
      </View>

      {/* Phone + OTP */}
      <View style={styles.phoneContainer}>
        <View style={styles.countryCode}>
          <Text>+91 |</Text>
        </View>
        <TextInput
          style={styles.phoneInput}
          placeholder="Phone Number"
          keyboardType="phone-pad"
          value={phoneNumber}
          onChangeText={setPhoneNumber}
        />
      </View>

      <View style={styles.otpContainer}>
        <TextInput
          style={styles.otpInput}
          placeholder="Enter OTP"
          keyboardType="number-pad"
          value={otp}
          onChangeText={setOtp}
        />
        <TouchableOpacity style={styles.otpButton} onPress={handleGetOTP}>
          <Text style={styles.otpButtonText}>Get OTP</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.orText}>OR</Text>

      {/* Email + Passwords */}
      <TextInput
        style={styles.input}
        placeholder="Email Address"
        keyboardType="email-address"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Create New Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <TextInput
        style={styles.input}
        placeholder="Re-enter Password"
        secureTextEntry
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      {/* Terms & Conditions */}
      <View style={styles.termsRow}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setTermsAccepted(!termsAccepted)}
        >
          <Text style={termsAccepted ? styles.checked : styles.unchecked}>
            {termsAccepted ? '✓' : ''}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.termsText}>
            I agree to the <Text style={styles.linkText}>Terms & Conditions</Text>
          </Text>
        </TouchableOpacity>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity
        style={[
          styles.signUpButton,
          { backgroundColor: termsAccepted ? '#007bff' : '#ccc' },
        ]}
        onPress={handleSignUp}
        disabled={!termsAccepted}
      >
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Modal for Terms */}
      <Modal visible={modalVisible} animationType="slide" transparent={true}>
        <View style={styles.modalContainer}>
          <View style={styles.modalBox}>
            <Text style={styles.modalTitle}>Terms & Conditions</Text>
            <ScrollView style={styles.modalContent}>
              <Text>
                Welcome to our app! By using this service, you agree to the following terms...
              </Text>
              {/* Add actual terms here */}
            </ScrollView>
            <TouchableOpacity
              style={styles.acceptButton}
              onPress={() => {setModalVisible(false),setTermsAccepted(!termsAccepted)}}
            >
              <Text style={{ color: 'white', fontWeight: 'bold' }}>Accept</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#fff',
    marginTop: -15,
  },
  phoneContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  countryCode: {
    paddingRight: 5,
  },
  phoneInput: {
    flex: 1,
    height: 40,
    paddingLeft: 5,
  },
  otpContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  otpInput: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  otpButton: {
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    justifyContent: 'center',
  },
  otpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  orText: {
    textAlign: 'center',
    marginVertical: 10,
    color: '#666',
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  termsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 1,
    borderColor: '#888',
    marginRight: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checked: {
    color: '#007bff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  unchecked: {
    fontSize: 16,
    color: '#fff',
  },
  termsText: {
    fontSize: 12,
    color: '#666',
  },
  linkText: {
    color: '#007bff',
    fontWeight: '600',
  },
  signUpButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  signUpButtonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,
    marginBottom: 20,
  },
  image: {
    width: 240,
    height: 200,
  },
  logobar: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    paddingVertical: 12,
    backgroundColor: '#ffffff',
  },
  logo: {
    width: 100,
    height: 40,
  },
  loginButton: {
    paddingVertical: 8,
  },
  loginText: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modalBox: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    maxHeight: '60%',
  },
  modalTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 10,
  },
  modalContent: {
    marginBottom: 20,
  },
  acceptButton: {
    backgroundColor: '#007bff',
    padding: 12,
    borderRadius: 8,
    alignItems: 'center',
  },
});

export default SignUpDetails;
