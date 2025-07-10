import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyProfileScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header with background image */}
     <View style={styles.header}>
  <Image
    source={require('../assets/images/myhealthscreen/report-icon.png')}
    style={styles.headerBackground}
  />

  <View style={styles.headerContent}>
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
      <Image
                    source={require('../assets/images/myhealthscreen/arrow-left.png')}
                    style={{ width: 24, height: 24 }}
                  />
    </TouchableOpacity>

    <Text style={styles.headerText}>My Profile</Text>

    {/* Spacer to balance layout */}
    <View style={{ width: 32 }} />
  </View>
</View>


      {/* Profile Picture */}
      <View style={styles.profileImageWrapper}>
        <Image
          source={require("../assets/images/homescreen/faceicon.jpg")} // Use your circular user image
          style={styles.profileImage}
        />
      </View>

      {/* Name */}
      <Text style={styles.name}>Arghya Das</Text>

      {/* Address */}
      <Text style={styles.address}>
        Ashoknagar Kalyangarh, West Bengal, India, 743222
      </Text>

      {/* Phone & Email */}
      <Text style={styles.contact}>+91 8116964765 | info.arghyadas9@gmail.com</Text>

      {/* DOB and Gender */}
      <View style={styles.infoRow}>
        <View style={styles.infoItem}>
          <Image source={require("../assets/images/myhealthscreen/date-picker.png")} style={{ height: 20, width: 20, tintColor: 'black' }} />
          <Text style={styles.infoText}>10-10-2005</Text>
        </View>
        <View style={styles.infoItem}> 
          <Image source={require("../assets/images/homescreen/User_light.png")} style={{ height: 20, width: 20, tintColor: 'black' }} />
          <Text style={styles.infoText}>Male</Text>
        </View>
      </View>

      {/* Edit Profile Button */}
      <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
        <Text style={styles.editButtonText}>Edit Profile</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  header: {
  width: '100%',
  height: 220,
  borderBottomLeftRadius: 30,
  borderBottomRightRadius: 30,
  overflow: 'hidden',
  backgroundColor: '#f0f0f0',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
},
    headerBackground: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    resizeMode: 'cover',
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
  profileImageWrapper: {
    marginTop: -50,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 75,
  },
  name: {
    fontFamily: 'Montserrat-SemiBold',
    marginTop: 10,
    fontSize: 18,
    color: '#000',
  },
  address: {
    fontFamily: 'Montserrat-Regular',
    marginTop: 4,
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  contact: {
    fontFamily: 'Montserrat-Regular',
    marginTop: 4,
    fontSize: 13,
    color: '#444',
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  infoRow: {
    flexDirection: 'row',
    marginTop: 16,
    gap: 20,
    justifyContent: 'center',
  },
  infoItem: {
    fontFamily: 'Montserrat-Medium',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  infoText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 14,
    color: '#000',
  },
  editButton: {
    marginTop: 20,
    backgroundColor: '#000',
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 6,
  },
  editButtonText: {
    fontFamily: 'Montserrat-Medium',
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
});
