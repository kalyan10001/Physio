import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
  ImageBackground,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const BookingConfirmation = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.imageHeaderBox}>
          <ImageBackground
            source={require('../assets/images/services/flowers.png')}
            style={styles.headerImage}
            resizeMode="cover"
          >
            <View style={styles.headerOverlay}>
              <Image
                source={require('../assets/images/services/tick.png')}
                style={styles.tickImage}
              />
              <Text style={styles.greenHeaderText}>
                You have booked an appointment with{'\n'}Dr. Sreemoyee Maitra (PT.)
              </Text>
            </View>
          </ImageBackground>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={require("../assets/images/myhealthscreen/arrow-left.png")} style={{height:25,width:25}} />
          </TouchableOpacity>
        </View>

        <LinearGradient
          colors={['rgba(9, 93, 126, 1)', 'rgba(48, 195, 234, 1)']}
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={styles.downloadCardBox}
        >
          <View style={styles.downloadLeft}>
            <Text style={styles.downloadTitle}>Download Appointment Card</Text>
            <Text style={styles.downloadNote}>This card will needed on the schedule day</Text>
          </View>
          <TouchableOpacity style={styles.downloadButton}>
            <Text style={styles.downloadButtonText}>Download</Text>
          </TouchableOpacity>
        </LinearGradient>

        <View style={styles.detailBox}>
          <Text style={styles.sectionTitle}>Appointment Details</Text>
          {[['Date', '25th March, 2025'],
            ['Time', '05:30 PM'],
            ['Doctor Name', 'Dr. Sreemoyee Maitra (PT)'],
            ['Destination', 'Clinic'],
            ['Booking Status', 'Confirmed'],
            ['Booking ID', 'AHA7685'],
          ].map(([label, value], i) => (
            <View key={i} style={styles.detailRow}>
              <Text style={styles.label}>{label}</Text>
              <Text style={styles.value}>{value}</Text>
            </View>
          ))}
          <View style={styles.separator} />
          <View style={styles.detailRow}>
            <Text style={[styles.label,{color:'#000000'}]}>Fees</Text>
            <Text style={[styles.value, styles.fees]}>₹700.00</Text>
          </View>
        </View>

        <View style={styles.noteBox}>
          <View style={styles.iconWrapper}>
            <View style={styles.iconCircle}>
              <Image source={require("../assets/images/physioscreen/Message_light.png")} style={{height:25,width:25}} />
            </View>
          </View>
          <View style={styles.noteContent}>
            <Text style={styles.noteText}>
              Dear <Text style={styles.boldText}>[Patient’s Name]</Text>, your appointment with{' '}
              <Text style={styles.boldText}>Dr. Sreemoyee Maitra</Text> has been successfully booked on{' '}
              <Text style={styles.boldText}>25th March 2025 at 05:30 PM</Text>.
              {'\n'}Please arrive <Text style={styles.boldText}>10 minutes early</Text> for smooth check-in.
              {'\n'}Thank you!
            </Text>
          </View>
        </View>

        <View style={styles.termsBox}>
          <Text style={styles.sectionTitle}>Terms & Conditions - Appointment Booking</Text>
          {[
            '1. Appointment Timings: Please arrive at least 10 minutes before your scheduled time.',
            '2. Rescheduling/Cancellation: Minimum 24 hours in advance. Late cancellations may incur fees.',
            '3. Late Arrival: If you’re more than 15 mins late, your appointment may be rescheduled.',
            '4. Video Calls: All info and treatment suggestions will be online. Charges may apply.',
            '5. Follow-Up Policy: 7 days free follow-up if needed.',
            '6. Medical Records: Carry all relevant previous records or prescriptions.',
            '7. Emergency Cases: Visit nearby hospitals or emergency centers directly.',
          ].map((item, index) => (
            <Text key={index} style={styles.termsText}>
              <Text style={styles.bold}>{item.split(':')[0]}:</Text>
              {item.split(':')[1]}
            </Text>
          ))}
          <Text style={styles.termsText}>By confirming your appointment,you agree to the above terms</Text>
        </View>

        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('BottomTabs')}>
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingConfirmation;

// ... imports remain same ...
const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  content: { padding: 16, paddingBottom: 32 },
  imageHeaderBox: {
    width: '100%',
    height: 230,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#5eef04',
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  tickImage: {
    width: 60,
    height: 60,
    resizeMode: 'contain',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(57, 138, 61, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  greenHeaderText: {
    fontFamily: 'Montserrat-Medium',
    marginTop: 10,
    fontSize: 15,
    color: '#fff',
    textAlign: 'center',
    lineHeight: 18,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 10,
    borderRadius: '100%',
  },
  downloadCardBox: {
    flexDirection: 'row',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderColor: '#b3e5fc',
  },
  downloadLeft: { flex: 1, paddingRight: 10 },
  downloadTitle: { fontSize: 13, fontFamily:'Montserrat-SemiBold', color: '#fff' },
  downloadNote: { fontSize: 10,fontFamily:'Montserrat-Medium', color: '#e0f7fa' },
  downloadButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 11,
  },
  downloadButtonText: {
    fontFamily: 'Montserrat-SemiBold',
    color: 'black',
    fontSize: 13,
  },
  detailBox: {
    backgroundColor: '#fff',
    padding: 16,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  sectionTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    marginBottom: 12,
    color: '#222',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: { fontFamily:'Montserrat-Medium',fontSize: 13, color: '#00000080' },
  value: { fontFamily:'Montserrat-Medium',fontSize: 13, color: '#000000' },
  fees: { color: '#007b00' },
  separator: {
    height: 1,
    backgroundColor: '#ccc',
    marginVertical: 10,
  },
  noteBox: {
    backgroundColor: '#fff',
    padding: 14,
    borderRadius: 10,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
    position: 'relative',
    marginTop: 5,
  },
  iconWrapper: {
    position: 'absolute',
    top: -25,
    left: '55%',
    transform: [{ translateX: -25 }],
    zIndex: 2,
  },
  iconCircle: {
    backgroundColor: 'rgba(9, 93, 126, 1)',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff',
  },
  noteContent: {
    marginTop: 10,
  },
  noteText: {
    fontFamily: 'Montserrat-Regular',
fontSize: 13,
lineHeight: 20,
letterSpacing: 0,
  },
  boldText: {
    fontWeight: '600',
    color: '#000',
  },
  termsBox: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  termsText: {
    fontFamily: 'Montserrat-Regular',
fontSize: 13,
lineHeight: 17, // for 100%
letterSpacing: 0,
marginTop:13,

  },
  bold: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#222',
  },
  homeButton: {
    backgroundColor: 'rgba(9, 93, 126, 1)',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 10,
  },
  homeButtonText: {
    color: '#fff',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
  },
});
