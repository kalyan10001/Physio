import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
    <ScrollView contentContainerStyle={styles.container}>
      {/* Logo */}
      <Image source={require('../assets/images/loginscreen/splashScreenLogo.png')} style={styles.logo} />

      {/* Headings */}
      <Text style={styles.title}>
        Start healing with <Text style={styles.highlight}>GetPhysio</Text>
      </Text>
      <Text style={styles.subtitle}>
        sign in or join now to begin your recovery.
      </Text>

      {/* Main Illustration */}
      <Image
        source={require('../assets/images/loginscreen/SignInLogo.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      {/* Buttons */}
      <TouchableOpacity style={styles.signInBtnOutline}>
        <Text style={styles.signInText}>Sign In</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.signUpBtnFilled}>
        <Text style={styles.signUpText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Footer Text */}
      <Text style={styles.footerText}>
        By signing in, you agree to the{' '}
        <Text style={styles.link}>Terms of Service</Text> &{' '}
        <Text style={styles.link}>Privacy Policy</Text>
      </Text>
    </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: -35,
    paddingRight: 20,
    paddingLeft:16,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexGrow: 1,
  },
  logo: {
    width: 190,
    height: 190,
    resizeMode: 'contain',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
    marginTop:-40
  },
  highlight: {
    color: '#007AFF', // Blue color for 'GetPhysio'
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 4,
    marginBottom: 20,
  },
  illustration: {
    width: '100%',
    height: 400,
    width:350,
    marginBottom: 20,
  },
  signInBtnOutline: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 12,
    marginBottom: 10,
    marginTop:20
  },
  signInText: {
    color: '#000',
    fontSize: 16,
    textAlign: 'center',
  },
  signUpBtnFilled: {
    width: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 12,
    marginBottom: 20,
  },
  signUpText: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
  footerText: {
    fontSize: 11,
    color: '#888',
    textAlign: 'center',
    marginTop: 10,
    paddingBottom: 20,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
