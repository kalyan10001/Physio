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
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

export default function Auth() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {/* Background Illustration */}
        <View style={styles.imageWrapper}>
          <Image
            source={require('../assets/images/services/mpic.png')}
            style={styles.illustration}
            resizeMode="cover"
          />
          <LinearGradient
            colors={['transparent', '#ffffff']}
            style={styles.gradientOverlay}
          />
        </View>

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

        {/* Buttons */}
        <TouchableOpacity
          style={styles.signInBtnOutline}
          onPress={() => navigation.navigate('PhoneOtp')}
        >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.signUpBtnFilled}
          onPress={() => navigation.navigate('SignUp')}
        >
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
    paddingBottom: 30,
  },
  imageWrapper: {
    width: width,
    height: width * 1.25, // adjust height for more visual appeal
    position: 'relative',
  },
  illustration: {
    width: '100%',
    height: '100%',
  },
  gradientOverlay: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 100,
  },
  logo: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
    marginTop: -80,
    marginBottom: -20,
  },
  title: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#000000',
    textAlign: 'center',
  },
  highlight: {
     fontFamily: 'Montserrat-SemiBold',
    fontSize: 20,
    color: '#095D7E',
    
  },
  subtitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#555',
    textAlign: 'center',
    marginTop: 6,
    marginBottom: 30,
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
    backgroundColor: 'background: rgba(10, 123, 165, 1);',
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
        fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    color: '#888',
    textAlign: 'center',
    paddingHorizontal: 0,
  },
  link: {
    color: '#00B894',
    textDecorationLine: 'underline',
  },
});
