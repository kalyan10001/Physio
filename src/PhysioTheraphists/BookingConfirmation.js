import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Image,
  Dimensions,
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
          <Image
            source={require('../assets/images/services/doc1.png')}
            style={styles.headerImage}
          />
          <View style={styles.headerOverlay}>
            <Text style={styles.greenTick}>✅</Text>
            <Text style={styles.greenHeaderText}>You have successfully booked your appointment</Text>
          </View>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={24} color="#fff" />
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
            <Text style={styles.downloadNote}>This card is needed on appointment day</Text>
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
            <Text style={styles.label}>Fees</Text>
            <Text style={[styles.value, styles.fees]}>₹700.00</Text>
          </View>
        </View>

        <View style={styles.noteBox}>
          <View style={styles.iconWrapper}>
            <View style={styles.iconCircle}>
              <Ionicons name="mail" size={22} color="#fff" />
            </View>
          </View>
          <View style={styles.noteContent}>
            <Text style={styles.noteText}>
              Dear <Text style={styles.boldText}>[Patient’s Name]</Text>, your appointment with{' '}
              <Text style={styles.boldText}>Dr. Sreemoyee Maitra</Text> has been successfully booked on{' '}
              <Text style={styles.boldText}>25th March 2025 at 05:30 PM</Text>.
              {'\n\n'}An OTP will be sent 10 minutes before your scheduled appointment.
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
        </View>

        <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('BottomTabs')}>
          <Text style={styles.homeButtonText}>Back to Home</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BookingConfirmation;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f7f9fb' },
  content: { padding: 16, paddingBottom: 32 },
  imageHeaderBox: {
    width: '100%',
    height: 180,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    marginBottom: 20,
    backgroundColor: '#095d7e',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  headerOverlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(9, 93, 126, 0.6)',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  greenTick: {
    fontSize: 44,
    color: '#fff',
  },
  greenHeaderText: {
    marginTop: 10,
    fontSize: 16,
    color: '#fff',
    fontWeight: '600',
    textAlign: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 12,
    left: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 6,
    borderRadius: 20,
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
  downloadTitle: { fontSize: 15, fontWeight: 'bold', color: '#fff' },
  downloadNote: { fontSize: 12, color: '#e0f7fa' },
  downloadButton: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 11,
  },
  downloadButtonText: {
    color: 'black',
    fontWeight: '600',
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
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    color: '#222',
  },
  detailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  label: { fontSize: 13, color: '#444' },
  value: { fontSize: 13, fontWeight: '600', color: '#333' },
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
    marginTop: 15,
  },
  noteText: {
    fontSize: 13,
    color: '#333',
    lineHeight: 20,
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
    fontSize: 12,
    color: '#444',
    marginBottom: 6,
    lineHeight: 18,
  },
  bold: {
    fontWeight: 'bold',
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
    fontWeight: '600',
    fontSize: 16,
  },
});