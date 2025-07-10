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

export default function SignUp() {
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
          Personalized <Text style={styles.highlight}>Physiotherapy Care</Text>
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
          <Text style={styles.signInText}>Continue With Phone</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpBtnFilled}
          onPress={() => navigation.navigate('EmailOtp') }>
          <Text style={styles.signUpText}>Continue With Email</Text>
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
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 22,
    color: '#000000',
    textAlign: 'center',
  },
  highlight: {
    fontFamily: 'Montserrat-SemiBold',
    color: 'Primary Color',
  },
  subtitle: {
    fontFamily: 'Montserrat-Medium',
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
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#000',
    textAlign: 'center',
  },
  signUpBtnFilled: {
    width: '100%',
    backgroundColor: '#007AFF',
    borderRadius: 10,
    paddingVertical: 14,
    marginBottom: 20,
  },
  signUpText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#fff',
    textAlign: 'center',
    fontWeight: '500',
  },
  footerText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
    color: '#888',
    textAlign: 'center',
    paddingBottom: 30,
    paddingHorizontal: 10,
  },
  link: {
     color: '#00B894',
    textDecorationLine: 'underline',
  },
});
