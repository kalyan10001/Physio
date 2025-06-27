import React from 'react';
import {
  ImageBackground,
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome'; 
import GIcon from 'react-native-vector-icons/AntDesign'; 

import background from '../assets/images/loginscreen/homeimage.jpg';
import getPhysio from '../assets/images/loginscreen/splashScreenLogo.png';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground
        source={background}
        resizeMode="cover"
        style={styles.backgroundImage}
      />
      <View style={styles.overlay}>
        <Image source={getPhysio} style={styles.logo} resizeMode="contain" />
        <Text style={styles.heading}>Patient Login</Text>

        <View style={styles.iconContainer}>
           <TouchableOpacity style={styles.signInButton} 
           onPress={() => navigation.navigate('LoginDetails')}
           activeOpacity={0.7}
           >
          <Text style={styles.signInText}>Sign In</Text>
        </TouchableOpacity>
          {/* <TouchableOpacity style={styles.iconButton}>
            <Icon name="apple" size={22} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <GIcon name="google" size={22} color="#DB4437" />
          </TouchableOpacity> */}
        </View>

        <Text style={styles.footerText}>
          Don’t have account ?{' '}
          <Text style={styles.linkText} onPress={() => navigation.navigate('Signup')}>
            Create One
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
    backgroundColor: 'rgba(214, 237, 240, 0.9)',
    paddingVertical:10,
    paddingBottom:20,
    marginBottom:24,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
     borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    elevation: 10,
  },
  logo: {
    width:200,
    height: 200,
    marginTop:-60,
    marginBottom: -60,
  },
  heading: {
    fontSize: 25,
    fontWeight: '600',
    color: '#00123F',
    marginBottom: 20,
  },
  signInButton: {
    backgroundColor: '#00123F',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 15,
  },
  signInText: {
    color: 'white',
    fontSize: 16,
    fontWeight: '600',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 0,
  },
  iconButton: {
    backgroundColor: '#F0F0F0',
    padding: 10,
    borderRadius: 100,
    marginBottom:20,
    marginHorizontal: 10,
  },
  footerText: {
    fontSize: 14,
    color: '#444',
  },
  linkText: {
    color: '#007AFF',
    fontWeight: '500',
    fontSize: 16,
  },
});
