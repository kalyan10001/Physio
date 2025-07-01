import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const doctor = {
  name: "Dr. Sreemoyee Maitra",
  specialties: "Dermatologist, Pediatric Dermatologist, Aesthetic Dermatologist",
  degrees:
    "Diploma in Dermatology, MD-Dermatology, MBBS, Fellow in Aesthetic Medicine",
  profilePic: require('../assets/images/services/doc1.png'),
  likes: "88%",
  stories: "33",
  fees: "700",
  slots: {
    "Clinic Visit": ["09:30 AM", "11:30 AM", "07:30 PM"],
    "Video Consult": ["10:00 AM", "12:30 PM", "06:00 PM"],
    "Home Consult": ["08:30 AM", "01:00 PM", "04:00 PM"],
  },
  slotNote: "Today 3 slots & Tomorrow 8 slots available",
  about:
    "Dr. Sreemoyee Maitra is a highly qualified Dermatologist with an MBBS, an MD in Dermatology, DDVL, and a Fellowship in Aesthetic Medicine. She specializes in clinical, pediatric, and aesthetic dermatology, offering expert care for skin, hair, and nail conditions. With a patient-centered approach, she combines her in-depth theoretical knowledge with modern aesthetic techniques like lasers, fillers, and skin rejuvenation treatments to deliver personalized and effective results for all age groups and needs.",
};

const tabLabels = ["Clinic Visit", "Video Consult", "Home Consult"];
const categories = ["Skin Disease Treatment", "Psoriasis", "Hair Loss"];

export default function DoctorProfile() {
  const [activeTab, setActiveTab] = useState("Clinic Visit");

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Image
          source={require('../assets/images/services/team.jpg')}
          style={styles.coverImage}
        />

        <View style={styles.profileImageContainer}>
          <Image source={doctor.profilePic} style={styles.profileImage} />
        </View>

        <View style={styles.center}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.specialties}>{doctor.specialties}</Text>
          <Text style={styles.degrees}>{doctor.degrees}</Text>
          <View style={styles.likesRow}>
            <Text style={styles.likes}>{doctor.likes} Likes</Text>
            <Text style={styles.likes}>{doctor.stories} Patient Stories</Text>
          </View>
        </View>

        <View style={styles.body}>
          <TouchableOpacity style={styles.viewProfileBtn}>
            <Text style={styles.viewProfileText}>View Profile</Text>
          </TouchableOpacity>

          {/* Combined Box with Tabs and Slots */}
          <View style={styles.consultBox}>
            <View style={styles.tabContainer}>
              {tabLabels.map((label) => (
                <TouchableOpacity
                  key={label}
                  onPress={() => setActiveTab(label)}
                  style={[
                    styles.tabBtn,
                    activeTab === label && styles.activeTab,
                  ]}
                >
                  <Text
                    style={[
                      styles.tabText,
                      activeTab === label && styles.activeTabText,
                    ]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.feeSection}>
              <View style={styles.feeRow}>
                <Text style={styles.consultationText}>
                  {activeTab} Consultation
                </Text>
                <Text style={styles.feesText}>₹{doctor.fees} / Visit</Text>
              </View>
              <Text style={styles.followupText}>7 Days Free Follow-up</Text>

              <View style={styles.slotRow}>
                {doctor.slots[activeTab].map((time, index) => (
                  <Text key={index} style={styles.slot}>
                    {time}
                  </Text>
                ))}
                <TouchableOpacity>
                  <Text style={styles.viewAll}>View all</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          <Text style={styles.slotNote}>{doctor.slotNote}</Text>

          {/* Patient Stories */}
          <Text style={styles.sectionTitle}>Patients Stories</Text>
          <View style={styles.recommendBox}>
            <Text style={styles.recommendText}>
              Out of all patients who were surveyed, 88% of them recommended visiting this doctor.
            </Text>
          </View>

          {/* Categories */}
          <View style={styles.chipContainer}>
            {categories.map((cat, index) => (
              <Text key={index} style={styles.chip}>
                {cat}
              </Text>
            ))}
          </View>

          {/* Reviews */}
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.reviewScroll}>
            {[1, 2, 3].map((_, index) => (
              <View key={index} style={styles.reviewCard}>
                <Text style={styles.reviewText}>
                  It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout...
                </Text>
                <Text style={styles.reviewFooter}>Smartkart | 12th Sep, 2021</Text>
              </View>
            ))}
          </ScrollView>

          {/* About */}
          <Text style={styles.about}>{doctor.about}</Text>

          {/* Consult Now Button */}
          <TouchableOpacity style={styles.consultBtn}>
            <Text style={styles.consultText}>Consult Now @ ₹{doctor.fees}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  coverImage: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: -65,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 100,
    borderWidth: 4,
    borderColor: '#ffffff',
  },
  center: {
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 5,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  specialties: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
    marginTop: 2,
  },
  degrees: {
    fontSize: 12,
    color: 'gray',
    textAlign: 'center',
  },
  likesRow: {
    flexDirection: 'row',
    gap: 10,
    marginTop: 6,
  },
  likes: {
    fontSize: 12,
    color: '#333',
  },
  body: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  viewProfileBtn: {
    backgroundColor: '#000000',
    paddingVertical: 10,
    borderRadius: 6,
  },
  viewProfileText: {
    color: '#ffffff',
    textAlign: 'center',
    fontWeight: '500',
  },
  consultBox: {
    marginTop: 20,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    borderRadius: 10,
    padding: 12,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 12,
    backgroundColor: '#f3f3f3',
    borderRadius: 8,
    overflow: 'hidden',
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
  },
  tabText: {
    fontSize: 12,
    color: '#000',
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  activeTabText: {
    color: '#ffffff',
  },
  feeSection: {},
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  consultationText: {
    fontSize: 14,
    fontWeight: '500',
  },
  feesText: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: 'bold',
  },
  followupText: {
    fontSize: 12,
    color: 'gray',
    marginBottom: 10,
  },
  slotRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    alignItems: 'center',
  },
  slot: {
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  viewAll: {
    fontSize: 12,
    color: '#007bff',
    fontWeight: '500',
  },
  slotNote: {
    marginTop: 8,
    fontSize: 12,
    color: 'green',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginTop: 20,
  },
  recommendBox: {
    backgroundColor: '#ccf5e7',
    padding: 10,
    borderRadius: 8,
    marginTop: 8,
  },
  recommendText: {
    fontSize: 12,
    color: '#333333',
  },
  chipContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 12,
  },
  chip: {
    backgroundColor: '#eeeeee',
    fontSize: 12,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  reviewScroll: {
    marginTop: 16,
  },
  reviewCard: {
    width: 240,
    backgroundColor: '#00aaff',
    padding: 16,
    borderRadius: 12,
    marginRight: 12,
  },
  reviewText: {
    fontSize: 12,
    color: 'white',
  },
  reviewFooter: {
    fontSize: 10,
    color: 'white',
    marginTop: 10,
  },
  about: {
    fontSize: 12,
    color: '#444',
    marginTop: 18,
    textAlign: 'justify',
  },
  consultBtn: {
    backgroundColor: '#28a745',
    marginTop: 20,
    paddingVertical: 14,
    borderRadius: 30,
  },
  consultText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});
