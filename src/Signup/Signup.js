import { View, Text, Image, Pressable, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; // For Apple
import GIcon from 'react-native-vector-icons/AntDesign'; 
import { useNavigation } from '@react-navigation/native';

const SignUp = () => {
    const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/images/loginscreen/homeimage.jpg')}
        style={styles.backgroundImage}
        resizeMode="cover"
      />

      <View style={styles.formContainer}>
        <Image
          source={require('../assets/images/loginscreen/splashScreenLogo.png')} 
          style={styles.logo}
        />
        <TouchableOpacity onPress={() => navigation.navigate('SignupDetails')}>
      <Text style={styles.title}>Sign Up</Text>
    </TouchableOpacity>


        <Pressable style={[styles.button, styles.phoneButton]}>
          <Text style={styles.buttonText}>Continue with Phone</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.emailButton]}>
          <Text style={styles.buttonText}>Continue with Email</Text>
        </Pressable>

        {/* <View style={styles.socialButtonsContainer}>
          <Pressable style={[styles.socialButton, styles.appleButton]}>
            <Icon name="apple" size={20} color="white" />
            <Text style={styles.appleButtonText}>Apple</Text>
          </Pressable>

          <Pressable style={[styles.socialButton, styles.googleButton]}>
            <GIcon name="google" size={22} color="#DB4437" />
            <Text style={styles.googleButtonText}>Google</Text>
          </Pressable>
        </View> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  backgroundImage: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    opacity: 1,
  },
  formContainer: {
    position: 'absolute',
    bottom: 0,
    left: 16,
    right: 16,
    backgroundColor: 'rgba(214, 237, 240, 0.9)',
    paddingVertical: 10,
    paddingBottom: 20,
    marginBottom: 15,
    paddingHorizontal: 20,
    borderTopLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderTopRightRadius: 20,
    alignItems: 'center',
    elevation: 10,
  },
  logo: {
    width: 200,
    height: 200,
    marginTop: -60,
    marginBottom: -70,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 16,
    color: '#000',
  },
  button: {
    borderRadius: 999,
    paddingVertical: 12,
    marginBottom: 12,
    width: '100%',
  },
  phoneButton: {
    backgroundColor: '#0f172a',
  },
  emailButton: {
    backgroundColor: '#0f172a',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '500',
  },
  socialButtonsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
    width: '100%',
  },
  socialButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 999,
    paddingVertical: 12,
  },
  appleButton: {
    backgroundColor: 'black',
    marginRight: 8,
  },
  googleButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#d1d5db',
    marginLeft: 8,
  },
  appleButtonText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: '500',
  },
  googleButtonText: {
    color: '#1e1e2d',
    marginLeft: 8,
    fontWeight: '500',
  },
});

export default SignUp;