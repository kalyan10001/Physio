import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

export default function Auth() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {/* Logo */}
        <Image
          source={require('../assets/images/loginscreen/splashScreenLogo.png')}
          style={styles.logo}
        />

        {/* Headings */}
        <Text style={styles.title}>
          Start healing with <Text style={styles.highlight}>GetPhysio</Text>
        </Text>
        <Text style={styles.subtitle}>
          Sign in or join now to begin your recovery.
        </Text>

        {/* Main Illustration */}
        <Image
          source={require('../assets/images/loginscreen/SignInLogo.png')}
          style={styles.illustration}
          resizeMode="contain"
        />

        {/* Buttons */}
        <TouchableOpacity style={styles.signInBtnOutline} onPress={()=>navigation.navigate('PhoneOtp')}>
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpBtnFilled}
          onPress={() => navigation.navigate('SignUp')}>
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
  safeArea: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  scrollContent: {
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginTop: 0,
    marginBottom: -20,
  },
  title: {
    fontSize: 21,
    fontWeight: '600',
    color: '#000000',
    textAlign: 'center',
  },
  highlight: {
    color: '#007AFF',
    fontWeight: '700',
  },
  subtitle: {
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 30,
  },
  illustration: {
    width: 360,
    height: 360,
    marginBottom: 50,
  },
  signInBtnOutline: {
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingVertical: 14,
    marginBottom: 12,
  },
  signInText: {
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
    fontWeight: '500',
  },
  signUpBtnFilled: {
    width: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 14,
    marginBottom: 20,
  },
  signUpText: {
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  footerText: {
    fontSize: 12,
    color: '#888',
    textAlign: 'center',
    paddingBottom: 30,
    paddingHorizontal: 12,
  },
  link: {
    color: '#007AFF',
    textDecorationLine: 'underline',
  },
});
