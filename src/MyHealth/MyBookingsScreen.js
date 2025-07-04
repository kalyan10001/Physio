import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  Dimensions
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const MyBookingsScreen = ({ navigation }) => {
  const upcoming = [
    { id: '1', date: '12-25-2025', doctor: 'Dr Sreemoyee Maitra' }
  ];

  const earlier = [
    { id: '2', date: '12-25-2025', doctor: 'Dr Sreemoyee Maitra' },
    { id: '3', date: '12-25-2025', doctor: 'Dr Sreemoyee Maitra' },
    { id: '4', date: '12-25-2025', doctor: 'Dr Sreemoyee Maitra' }
  ];

  const renderBookingCard = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.date}>{item.date}</Text>
      <Text style={styles.doctor}>{item.doctor}</Text>
      <TouchableOpacity style={styles.detailsBtn}>
        <Text style={styles.detailsText}>Details</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
      
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image
                          source={require('../assets/images/myhealthscreen/arrow-left.png')}
                          style={{ width: 24, height: 24 }}
                        />
          </TouchableOpacity>
      
          <Text style={styles.headerText}>My Bookings</Text>
      
          {/* Spacer to balance layout */}
          <View style={{ width: 32 }} />
        </View>
      </View>

      <FlatList
        data={[]}
        ListHeaderComponent={
          <>
            {/* Upcoming Section */}
            <Text style={styles.sectionHeader}>Upcoming</Text>
            {upcoming.map(item => (
              <View key={item.id}>{renderBookingCard({ item })}</View>
            ))}

            {/* Earlier Section */}
            <Text style={styles.sectionHeader}>Earlier this month</Text>
            {earlier.map(item => (
              <View key={item.id}>{renderBookingCard({ item })}</View>
            ))}
          </>
        }
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
      />

      {/* New Booking Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.newBookingBtn}>
          <Text style={styles.newBookingText}>New Booking</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyBookingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  listContainer: {
    paddingHorizontal: 20,
    paddingBottom: 80,
  },
  header: {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
  marginBottom: 20,
},
  headerContent: {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingTop: 10,
  zIndex: 10,
},
headerText: {
  fontFamily: 'Montserrat-SemiBold',
  fontSize: 18,
  color: '#000',
  textAlign: 'center',
},
backButton: {
   backgroundColor: '#4C4C4C',
  borderRadius: '100%',
  padding: 10,
},
  title: {
    top: 10,
    fontSize: 18,
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
    color: '#000',
  },
  sectionHeader: {
    fontSize: 14,
    color: '#A0A0A0',
    fontWeight: '500',
    marginTop: 10,
    marginBottom: 6,
    fontFamily: 'Montserrat-Regular',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F8F8',
    borderRadius: 10,
    padding: 12,
    marginBottom: 10,
  },
  date: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 10,
    fontFamily: 'Montserrat-Regular',
  },
  doctor: {
    flex: 1,
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
  },
  detailsBtn: {
    backgroundColor: '#0077A9',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
  },
  detailsText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
  },
  footer: {
    position: 'absolute',
    bottom: 10,
    width: width,
    paddingHorizontal: 20,
  },
  newBookingBtn: {
    backgroundColor: '#0077A9',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  newBookingText: {
    color: '#fff',
    fontSize: 15,
    fontWeight: '600',
    fontFamily: 'Montserrat-Regular',
  },
});
