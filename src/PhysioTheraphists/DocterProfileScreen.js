// DoctorProfile.js
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const certificates = [1, 2, 3, 4];
const skills = [1, 2, 3, 4];

const DoctorProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        {/* Header Image */}
        <Image
          source={require('../assets/images/services/doc1.png')}
          style={styles.headerImage}
          resizeMode="cover"
        />

        {/* Back Button */}
        <TouchableOpacity
          style={styles.backBtn}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        {/* Profile Image */}
        <View style={styles.profileContainer}>
          <Image
            source={require('../assets/images/services/doc1.png')}
            style={styles.profileImage}
          />
        </View>

        {/* Name and Info */}
        <Text style={styles.name}>Dr. Sreemoyee Maitra</Text>
        <Text style={styles.speciality}>
          Dermatologist, Pediatric, Aesthetic Dermatologist, MD-Dermatology, MBBS
        </Text>
        <Text style={styles.extra}>
          88% Likes ‧ 33 Patient Stories
        </Text>
        <Text style={styles.location}>
          369/1 Ashoknagar Kalyangarh, India, 743222
        </Text>

        {/* Certificates Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="eye-outline" size={18} color="#000" />
            <Text style={styles.sectionTitle}>  Certificates</Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {certificates.map((item, index) => (
              <Image
                key={index}
                source={require('../assets/images/services/doc1.png')}
                style={styles.certImage}
              />
            ))}
          </ScrollView>
        </View>

        {/* Speciality Skills Section */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="document-text-outline" size={18} color="#000" />
            <Text style={styles.sectionTitle}>  Speciality Skills</Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {skills.map((item, index) => (
              <Image
                key={index}
                source={require('../assets/images/services/doc1.png')}
                style={styles.skillImage}
              />
            ))}
          </ScrollView>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default DoctorProfile;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 12,
  },
  backBtn: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 20,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
    elevation: 4,
  },
  headerImage: {
    width: '100%',
    height: 160,
    borderRadius: 10,
    marginTop: 10,
  },
  profileContainer: {
    position: 'absolute',
    top: 120,
    alignSelf: 'center',
    borderRadius: 75,
    overflow: 'hidden',
    borderWidth: 3,
    borderColor: '#fff',
    zIndex: 10,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 60,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  speciality: {
    fontSize: 13,
    textAlign: 'center',
    color: '#444',
    marginTop: 5,
    paddingHorizontal: 10,
  },
  extra: {
    fontSize: 13,
    textAlign: 'center',
    color: '#444',
    marginTop: 6,
  },
  location: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    marginTop: 4,
  },
  section: {
    marginTop: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 4,
  },
  seeAll: {
    fontSize: 13,
    color: '#1E90FF',
  },
  certImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginRight: 10,
  },
  skillImage: {
    width: 75,
    height: 75,
    borderRadius: 40,
    marginRight: 10,
  },
});
