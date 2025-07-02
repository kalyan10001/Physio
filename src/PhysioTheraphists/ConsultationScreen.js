import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { useNavigation } from '@react-navigation/native';
import RazorpayCheckout from 'react-native-razorpay';

const { width } = Dimensions.get('window');

const ConsultationScreen = () => {
  const navigation = useNavigation();

  const handlePayment = () => {
      const options = {
        description: 'Video Consultation',
        image: 'https://your-logo-url.com/logo.png',
        currency: 'INR',
        key: 'rzp_live_tKRzM5VWw31iZv', 
        amount: '100',
        name: 'GetPhysio',
        prefill: {
          email: 'venkatakalyan1000@gmail.com',
          contact: '8497937244',
          name: 'Test User'
        },
        theme: { color: '#30C3EA' }
      };
  
      RazorpayCheckout.open(options)
        .then(data => {
          Alert.alert('Payment Successful', `Payment ID: ${data.razorpay_payment_id}`);
          navigation.navigate('Booking')
        })
        .catch(error => {
          Alert.alert(`Payment Failed`, `${error.description} | Code: ${error.code}`);
          navigation.navigate('BookingFail')
        });
    };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        {/* Header with Back Button */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Icon name="arrow-left" size={24} color="#000" />
          </TouchableOpacity>
          <Text style={styles.header}>Video Consultation</Text>
        </View>

        {/* Doctor Info */}
        <View style={styles.card}>
          <Image
            source={require('../assets/images/services/doc1.png')}
            style={styles.profileImage}
          />
          <Text style={styles.doctorName}>Dr. Sreemoyee Maitra</Text>
          <Text style={styles.designation}>
            Dermatologist, Pediatric, Aesthetic Dermatologist, Diploma in Dermatology
          </Text>
          <Text style={styles.degree}>MD - Dermatology, MBBS, Fellow in Aesthetic Medicine</Text>

          {/* Updated Stats */}
          <View style={styles.stats}>
            <View style={styles.statItem}>
              <Icon name="thumb-up-outline" size={20} color="#007aff" style={{ marginRight: 6 }} />
              <Text style={styles.statText}>88% Likes</Text>
            </View>
            <View style={styles.verticalDividerLine} />
            <View style={styles.statItem}>
              <Icon name="account-voice" size={20} color="#007aff" style={{ marginRight: 6 }} />
              <Text style={styles.statText}>33 Stories</Text>
            </View>
          </View>
        </View>

        {/* Free Follow-up */}
        <View style={styles.followUpBanner}>
          <Image
            source={require('../assets/images/services/party.png')}
            style={styles.followUpIcon}
          />
          <Text style={styles.followUpText}>
            You will also get a Free follow-up for 7 days with this consultation.
          </Text>
        </View>

        {/* Time/Date/Mode */}
        <View style={styles.timeContainer}>
          <View style={styles.timeBox}>
            <Icon name="clock-outline" size={24} color="#007aff" />
            <Text style={styles.timeTitle}>04:00 PM</Text>
            <Text style={styles.timeSub}>Wednesday</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.timeBox}>
            <Icon name="calendar-month-outline" size={24} color="#007aff" />
            <Text style={styles.timeTitle}>16th June</Text>
            <Text style={styles.timeSub}>2025</Text>
          </View>
          <View style={styles.verticalDivider} />
          <View style={styles.timeBox}>
            <Icon name="video-outline" size={24} color="#007aff" />
            <Text style={styles.timeTitle}>Video</Text>
            <Text style={styles.timeSub}>Consultation</Text>
          </View>
        </View>

        {/* Bill Details */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Bill Details</Text>
          <View style={styles.billRow}><Text>Bill Details</Text><Text>₹2,000.00</Text></View>
          <View style={styles.billRow}><Text>Consultation Fee</Text><Text>₹2,000.00</Text></View>
          <View style={styles.billRow}><Text>Health Cash</Text><Text style={{ color: 'green' }}>-₹100.00</Text></View>
          <View style={styles.billRow}><Text>Coupon Code</Text><Text style={{ color: 'green' }}>-₹150.00</Text></View>
          <View style={styles.billRow}><Text>Service Fee & Tax</Text><Text>₹35.00</Text></View>
          <View style={styles.billRow}><Text>Platform Fee</Text><Text>₹2.00</Text></View>
          <View style={styles.totalRow}>
            <Text style={styles.totalLabel}>Total payable amount</Text>
            <Text style={styles.total}>₹1885.00</Text>
          </View>
          <Text style={styles.saved}>You have saved ₹250.00 on this appointment</Text>
        </View>

        {/* Coupon Image */}
        <View style={styles.couponCard}>
          <Image
            source={require('../assets/images/services/coupon.png')}
            style={styles.couponIcon}
            resizeMode="cover"
          />
        </View>

        {/* Terms & Conditions */}
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>Terms & Conditions - Appointment Booking</Text>
          <Text style={styles.termsText}>
            <Text style={styles.bold}>1. Appointment Timings:</Text> Please arrive at least 10 minutes before your scheduled time.
          </Text>
          <Text style={styles.termsText}>
            <Text style={styles.bold}>2. Rescheduling/Cancellation:</Text> Minimum 24 hours in advance. Late cancellations may incur fees.
          </Text>
          <Text style={styles.termsText}>
            <Text style={styles.bold}>3. Late Arrival:</Text> If you’re more than 15 mins late, your appointment may be rescheduled.
          </Text>
          <Text style={styles.termsText}>
            <Text style={styles.bold}>4. Video Calls:</Text> All info and treatment suggestions will be online. Charges may apply.
          </Text>
          <Text style={styles.termsText}>
            <Text style={styles.bold}>5. Follow-Up Policy:</Text> 7 days free follow-up if needed.
          </Text>
          <Text style={styles.termsText}>
            <Text style={styles.bold}>6. Medical Records:</Text> Carry all relevant previous records or prescriptions.
          </Text>
          <Text style={styles.termsText}>
            <Text style={styles.bold}>7. Emergency Cases:</Text> Visit nearby hospitals or emergency centers directly.
          </Text>
        </View>

        {/* Pay Button */}
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payButtonText}>Continue & Pay</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ConsultationScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#f5f5f5' },
  content: { padding: 16, paddingBottom: 32 },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  backButton: {
    marginRight: 12,
    padding: 6,
  },
  header: {
    fontSize: 20,
    fontWeight: '600',
    flex: 1,
  },

  card: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 14,
    marginBottom: 16,
    borderColor: '#ddd',
    borderWidth: 1,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },

  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 8,
    alignSelf: 'center',
  },
  doctorName: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  designation: {
    fontSize: 13,
    color: '#555',
    textAlign: 'center',
    marginTop: 4,
  },
  degree: {
    fontSize: 12,
    color: '#777',
    textAlign: 'center',
    marginBottom: 6,
  },

  stats: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    gap: 14,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  statText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#333',
  },
  verticalDividerLine: {
    height: 20,
    width: 1.2,
    backgroundColor: '#ccc',
    marginHorizontal: 10,
  },

  followUpBanner: {
    flexDirection: 'row',
    backgroundColor: '#e2f8e9',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 14,
    borderWidth: 1,
    borderColor: '#b6dfc3',
  },
  followUpIcon: {
    width: 30,
    height: 30,
    marginRight: 10,
  },
  followUpText: {
    fontSize: 13,
    color: '#064d06',
    flex: 1,
    flexWrap: 'wrap',
  },

  timeContainer: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    paddingVertical: 14,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  timeBox: {
    alignItems: 'center',
    width: 100,
  },
  timeTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#000',
    marginTop: 4,
  },
  timeSub: {
    fontSize: 12,
    color: '#666',
  },
  verticalDivider: {
    width: 1,
    backgroundColor: '#ddd',
    marginHorizontal: 4,
  },

  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 10,
    color: '#333',
  },
  billRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 3,
  },
  totalRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 8,
  },
  totalLabel: { fontWeight: 'bold' },
  total: { fontWeight: 'bold', color: '#007a00' },
  saved: {
    marginTop: 6,
    color: '#007a00',
    fontSize: 13,
    textAlign: 'center',
  },

  couponCard: {
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ccc',
  },
  couponIcon: {
    width: width - 32,
    height: 100,
    alignSelf: 'center',
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

  payButton: {
    backgroundColor: '#007aff',
    padding: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 20,
    marginTop: 10,
  },
  payButtonText: { color: '#fff', fontSize: 16, fontWeight: '600' },
});
