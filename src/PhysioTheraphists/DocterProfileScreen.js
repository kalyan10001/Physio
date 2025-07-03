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

const certificates = [
  require('../assets/images/services/cert1.png'),
  require('../assets/images/services/cert2.png'),
];

const skills = [
  require('../assets/images/services/skill1.png'),
  require('../assets/images/services/skill2.png'),
  require('../assets/images/services/skill3.jpg'),
];

const DoctorProfile = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.container}>
        {/* Header Image */}
        <Image
          source={require('../assets/images/services/team.jpg')}
          style={styles.headerImage}
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
          Dermatologist, Pediatric Dermatologist, Aesthetic Dermatologist, Diploma in Dermatology, MD-Dermatology, MBBS, Fellow in Aesthetic Medicine
        </Text>

        {/* Likes and Patient Stories */}
        <View style={styles.statsRow}>
          <View style={styles.statsItem}>
            <Ionicons name="thumbs-up-outline" size={16} color="#000" />
            <Text style={styles.statsText}>88% Likes</Text>
          </View>
          <View style={styles.verticalLine} />
          <View style={styles.statsItem}>
            <Ionicons name="chatbox-ellipses-outline" size={16} color="#000" />
            <Text style={styles.statsText}>33 Patient Stories</Text>
          </View>
        </View>

        <Text style={styles.location}>
          369/1 Ashoknagar Kalyangarh, India, 743222
        </Text>

        {/* Certificates */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="eye-outline" size={18} color="#000" />
            <Text style={styles.sectionTitle}>  Certificates</Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {certificates.map((imgSrc, index) => (
              <Image
                key={index}
                source={imgSrc}
                style={styles.certImage}
              />
            ))}
          </ScrollView>
        </View>

        {/* Speciality Skills */}
        <View style={styles.section}>
          <View style={styles.sectionHeader}>
            <Ionicons name="document-text-outline" size={18} color="#000" />
            <Text style={styles.sectionTitle}>  Speciality Skills</Text>
            <TouchableOpacity style={{ marginLeft: 'auto' }}>
              <Text style={styles.seeAll}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {skills.map((imgSrc, index) => (
              <Image
                key={index}
                source={imgSrc}
                style={styles.skillImage}
              />
            ))}
          </ScrollView>
        </View>
      </ScrollView>
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
    paddingBottom: 30,
  },
  backBtn: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10,
    backgroundColor: '#fff',
    padding: 6,
    borderRadius: 20,
    elevation: 4,
  },
  headerImage: {
    width: '100%',
    height: 180,
  },
  profileContainer: {
    position: 'absolute',
    top: 130,
    alignSelf: 'center',
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#fff',
    overflow: 'hidden',
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name: {
    marginTop: 60,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  speciality: {
    fontSize: 12,
    textAlign: 'center',
    color: '#666',
    marginTop: 6,
    paddingHorizontal: 12,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
  statsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  verticalLine: {
    width: 1,
    height: 18,
    backgroundColor: '#ccc',
    marginHorizontal: 12,
  },
  statsText: {
    fontSize: 13,
    color: '#000',
  },
  location: {
    fontSize: 12,
    textAlign: 'center',
    color: '#888',
    marginTop: 6,
  },
  section: {
    marginTop: 20,
    paddingHorizontal: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
  },
  seeAll: {
    fontSize: 13,
    color: '#1E90FF',
    fontWeight: '500',
  },
  certImage: {
    width: 100,
    height: 100,
    borderRadius: 12,
    marginRight: 12,
  },
  skillImage: {
    width: 75,
    height: 75,
    borderRadius: 50,
    marginRight: 12,
  },
});
