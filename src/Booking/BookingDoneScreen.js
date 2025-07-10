import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

const BookingDoneScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#e6f7fa" barStyle="dark-content" />
      <Text style={styles.heading}>Booking Done</Text>

      <Image
        source={require('../assets/images/booking.png')}
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.message}>
        You have booked an appointment{"\n"}
        <Text style={styles.doctor}>with Dr. Anjali Kumari (PT.)</Text>
      </Text>

      <Text style={styles.appointment}>Your Appointment is scheduled for{"\n"}June 1 at 8:30 am</Text>

      <Text style={styles.note}>A confirmation message will be sent shortly{"\n"}to your mobile number</Text>

      <TouchableOpacity style={styles.taskButton} onPress={() => navigation.navigate('Tasks')}>
        <Text style={styles.taskButtonText}>Go to My Tasks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('BottomTabs')}>
        <Text style={styles.homeButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingDoneScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e6f7fa',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1B2C5B',
    marginBottom: 20,
  },
  image: {
    width: 130,
    height: 130,
    marginBottom: 30,
  },
  message: {
    fontSize: 16,
    color: '#1B2C5B',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 8,
  },
  doctor: {
    fontWeight: 'bold',
  },
  appointment: {
    fontSize: 14,
    color: '#666',
    textAlign: 'center',
    marginBottom: 30,
  },
  note: {
    fontSize: 13,
    color: '#444',
    textAlign: 'center',
    marginBottom: 40,
  },
  taskButton: {
    width: '90%',
    paddingVertical: 12,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#1B2C5B',
    marginBottom: 16,
    alignItems: 'center',
  },
  taskButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1B2C5B',
  },
  homeButton: {
    width: '90%',
    paddingVertical: 12,
    borderRadius: 30,
    backgroundColor: '#1B2C5B',
    alignItems: 'center',
  },
  homeButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
