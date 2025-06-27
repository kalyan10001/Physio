import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, StatusBar } from 'react-native';

const BookingFailScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FFF3F3" barStyle="dark-content" />
      
      <Text style={styles.heading}>Booking Failed</Text>

      <Image
        source={require('../assets/images/booking.png')} // Ensure the image exists here
        style={styles.image}
        resizeMode="contain"
      />

      <Text style={styles.message}>
        Your appointment with{"\n"}
        <Text style={styles.doctor}>Dr. Anjali Kumari (PT.)</Text> could not be booked.
      </Text>

      <Text style={styles.appointment}>
        Please try again or contact support if the issue persists.
      </Text>

      <Text style={styles.note}>
        No charges have been applied.
      </Text>

      <TouchableOpacity style={styles.tryAgainButton} onPress={() => navigation.goBack()}>
        <Text style={styles.tryAgainButtonText}>Try Again</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.homeButton} onPress={() => navigation.navigate('BottomTabs')}>
        <Text style={styles.homeButtonText}>Back to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookingFailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3F3',
    alignItems: 'center',
    paddingTop: 60,
    paddingHorizontal: 20,
  },
  heading: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#D10000',
    marginBottom: 20,
  },
  image: {
    width: 140,
    height: 140,
    marginBottom: 30,
  },
  message: {
    fontSize: 17,
    color: '#1B2C5B',
    textAlign: 'center',
    fontWeight: '600',
    marginBottom: 10,
  },
  doctor: {
    fontWeight: 'bold',
    color: '#1B2C5B',
  },
  appointment: {
    fontSize: 15,
    color: '#666',
    textAlign: 'center',
    marginBottom: 25,
    paddingHorizontal: 10,
  },
  note: {
    fontSize: 14,
    color: '#A00',
    textAlign: 'center',
    marginBottom: 40,
  },
  tryAgainButton: {
    width: '90%',
    paddingVertical: 12,
    borderRadius: 30,
    borderWidth: 1.5,
    borderColor: '#D10000',
    marginBottom: 16,
    alignItems: 'center',
    backgroundColor: 'white',
  },
  tryAgainButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#D10000',
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
