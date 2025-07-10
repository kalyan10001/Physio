import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  Alert
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';
import rightarrow from "../assets/images/healthtipsscreen/rightarrow.png";
import RazorpayCheckout from 'react-native-razorpay';
import { SafeAreaView } from 'react-native-safe-area-context';

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
        navigation.navigate('BookingDone')
      })
      .catch(error => {
        Alert.alert(`Payment Failed`, `${error.description} | Code: ${error.code}`);
        navigation.navigate('BookingFail')
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          <Image source={rightarrow} style={{width:35,height:35}}/>
        </TouchableOpacity>
        <Text style={styles.topBarText}>Video Consultation</Text>
      </View>

      <ScrollView style={styles.scrollView} contentContainerStyle={{ paddingBottom: 300 }}>
        {/* Doctor Card */}
        <View style={styles.sectionWithBorder}>
          <View style={styles.doctorRow}>
            <Image source={require('../assets/images/physiotheraphistscreen/male-icon.png')} style={styles.doctorImage} />
            <View style={styles.profileDetails}>
              <Text style={styles.doctorName}>Dr. Devendra Taneja</Text>
              <Text style={styles.specialty}>General Physician</Text>
              <View style={styles.ratingRow}>
                <Icon name="thumb-up" size={14} color="green" />
                <Text style={styles.greenText}> 97%</Text>
                <Feather name="message-square" size={14} color="green" style={{ marginLeft: 8 }} />
                <Text style={styles.greenText}> 1386 Patient Stories</Text>
              </View>
              <View style={styles.recommendRow}>
                <Feather name="check-square" size={14} color="#666" />
                <Text style={styles.recommendText}> Highly Recommended for Doctor Friendliness</Text>
              </View>
            </View>
          </View>
        </View>

        {/* Consultation Time */}
        <View style={styles.sectionWithBorder}>
          <View style={styles.consultTimeRow}>
            <FontAwesome name="video-camera" size={16} color="#000" style={{ marginRight: 5 }} />
            <Text style={styles.sectionTitle}>Video consultation time</Text>
          </View>
          <Text style={styles.consultTime}>Mon, 16 Jun 01:00 PM <Text style={styles.greyText}>| in 1 hour and 54 minutes</Text></Text>
          <Text style={styles.purpleText}>✔ Practo Promise - Consultation confirmed instantly</Text>
          <Text style={styles.greenBox}>You will also get a <Text style={{ fontWeight: 'bold' }}>FREE follow-up for 7 days</Text> with this consultation.</Text>
        </View>

        {/* Coupon Section */}
        <View style={[styles.sectionWithBorder, styles.couponBox]}>
          <View style={styles.couponRow}>
            <View style={styles.rowCenter}>
              <FontAwesome name="percent" size={16} color="#4a90e2" style={{ marginRight: 5 }} />
              <Text style={styles.sectionTitle}>Apply Coupon</Text>
            </View>
            <TouchableOpacity>
              <Text style={styles.applyBtn}>APPLY</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.greyText}>Unlock offers with coupon codes</Text>
        </View>

        {/* Bill Details */}
        <View style={styles.sectionWithBorder}>
          <Text style={styles.sectionTitle}>Bill Details</Text>
          <View style={styles.billRow}><Text>Consultation Fee</Text><Text>₹2000</Text></View>
          <View style={styles.billRow}><Text>Health Cash</Text><Text style={{ color: 'green' }}>-₹200</Text></View>
          <View style={styles.billRow}><Text>Service Fee & Tax</Text><Text>₹49</Text></View>
          <View style={styles.billRowTotal}><Text>Total Payable</Text><Text style={{ fontWeight: 'bold' }}>₹1</Text></View>
        </View>

        {/* Savings Message */}
        <View style={styles.sectionWithBorder}>
          <View style={styles.savingsBox}>
            <Text style={styles.savingsText}>You have saved ₹200 on this appointment</Text>
            <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3514/3514491.png' }} style={{ width: 20, height: 20 }} />
          </View>
        </View>

        {/* Practo Promise */}
        <View style={styles.sectionWithBorder}>
          <View style={styles.promiseBox}>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginBottom: 8 }}>
              <FontAwesome name="check-circle" size={18} color="#7b1fa2" />
              <Text style={styles.promiseTitle}>Practo Promise</Text>
            </View>
            <View style={styles.promiseItem}>
              <FontAwesome name="check" size={14} color="#7b1fa2" style={{ marginTop: 3 }} />
              <Text style={styles.promiseText}>Appointment confirmed instantly with the doctor</Text>
            </View>
            <View style={styles.promiseItem}>
              <FontAwesome name="check" size={14} color="#7b1fa2" style={{ marginTop: 3 }} />
              <Text style={styles.promiseText}>
                If consultation doesn't happen due to any issue, 100% money back guarantee.
              </Text>
            </View>
            <View style={styles.promiseItem}>
              <FontAwesome name="check" size={14} color="#7b1fa2" style={{ marginTop: 3 }} />
              <Text style={styles.promiseText}>24/7 live chat support to help you.</Text>
            </View>
          </View>
        </View>

        {/* Notes */}
        <View style={styles.section}>
          <Text style={styles.noteText}>* Note: cancellation charges applicable.</Text>
          <Text style={styles.noteText}>* Updates will be sent to +918497937244.</Text>
          <Text style={styles.noteText}>
            * By booking, you agree to Practo's <Text style={styles.link}>Terms and Conditions</Text>.
          </Text>
        </View>
      </ScrollView>

      {/* Bottom Bar */}
      <View style={styles.bottomBar}>
        <View style={styles.rowBetween}>
          <View style={styles.rowCenter}>
            <AntDesign name="user" size={20} color="#000" style={{ marginRight: 5 }} />
            <View>
              <Text style={styles.patientText}>Video Consult for</Text>
              <TouchableOpacity><Text style={styles.patientName}>Venkata Kalyan  <Text style={styles.changeText}>CHANGE</Text></Text></TouchableOpacity>
            </View>
          </View>
          <Text style={styles.price}>₹1</Text>
        </View>
        <TouchableOpacity style={styles.payButton} onPress={handlePayment}>
          <Text style={styles.payButtonText}>Pay & Confirm Video Consult</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '' },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 11,
    backgroundColor: '#30C3EA26',
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  topBarText: { fontSize: 23, fontFamily: 'Poppins', fontWeight: 700, color: '#22285C', marginLeft: 55 },
  scrollView: { padding: 16,backgroundColor: '#30C3EA26'  },

  section: { marginBottom: 16 },
  sectionWithBorder: {
    paddingBottom: 16,
    marginBottom: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },

  doctorRow: { flexDirection: 'row' },
  doctorImage: { width: 60, height: 60, borderRadius: 30, marginRight: 14 },
  profileDetails: { flex: 1 },
  doctorName: { fontSize: 18, fontWeight: 'bold' },
  specialty: { fontSize: 14, color: '#666' },
  ratingRow: { flexDirection: 'row', alignItems: 'center', marginTop: 6 },
  greenText: { color: 'green', fontSize: 13 },
  recommendRow: { flexDirection: 'row', alignItems: 'center', marginTop: 4 },
  recommendText: { fontSize: 13, color: '#666' },

  consultTimeRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 4 },
  consultTime: { fontSize: 15 },
  greyText: { color: 'grey' },
  purpleText: { color: '#8e44ad', marginTop: 12 },
  greenBox: { backgroundColor: '#e0fbe0', padding: 10, borderRadius: 8, marginTop: 10 },

  couponBox: {
    backgroundColor: '#f0f8ff',
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#b0c4de',
  },
  couponRow: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  rowCenter: { flexDirection: 'row', alignItems: 'center' },
  applyBtn: { color: '#4a90e2', fontWeight: 'bold' },

  billRow: { flexDirection: 'row', justifyContent: 'space-between', marginTop: 6 },
  billRowTotal: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    paddingTop: 6,
  },

  savingsBox: {
    backgroundColor: '#e0fbe0',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#a5d6a7',
    borderRadius: 8,
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  savingsText: { color: 'green', fontWeight: 'bold' },

  promiseBox: {
    borderWidth: 1,
    borderColor: '#d1c4e9',
    backgroundColor: '#f3e5f5',
    borderRadius: 12,
    padding: 16,
  },
  promiseTitle: { fontWeight: 'bold', color: '#7b1fa2', fontSize: 16, marginLeft: 8 },
  promiseItem: { flexDirection: 'row', alignItems: 'flex-start', marginBottom: 6 },
  promiseText: { marginLeft: 8 },

  noteText: { color: '#777', fontSize: 13, marginBottom: 4 },
  link: { color: '#007bff' },

  bottomBar: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderColor: '#ccc',
    padding: 16,
  },
  rowBetween: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  patientText: { color: '#888' },
  patientName: { fontWeight: 'bold', fontSize: 15 },
  changeText: { color: '#4a90e2', fontWeight: 'bold' },
  price: { fontWeight: 'bold', fontSize: 18 },
  payButton: {
    marginTop: 10,
    backgroundColor: 'blue',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  payButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});

export default ConsultationScreen;