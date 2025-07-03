import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const { width } = Dimensions.get('window');

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
    "Dr. Sreemoyee Maitra is a highly qualified Dermatologist with an MBBS, an MD in Dermatology, DDVL, and a Fellowship in Aesthetic Medicine. She specializes in clinical, pediatric, and aesthetic dermatology, offering expert care for skin, hair, and nail conditions. With a patient-centered approach, she combines her in-depth theoretical knowledge with modern aesthetic techniques like lasers, fillers, and skin rejuvenation treatments to deliver personalized and effective results for all age groups and needs. Her approach emphasizes both medical expertise and compassionate care, ensuring patients receive holistic and lasting solutions.",
};

const tabLabels = ["Clinic Visit", "Video Consult", "Home Consult"];

export default function DoctorProfileScreen() {
  const [activeTab, setActiveTab] = useState("Clinic Visit");
  const [showFullAbout, setShowFullAbout] = useState(false);
  const navigation = useNavigation();

  const toggleAbout = () => {
    setShowFullAbout(!showFullAbout);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.backBtnWrapper}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color="#000" />
          </TouchableOpacity>
        </View>

        <Image source={require('../assets/images/services/team.jpg')} style={styles.coverImage} />

        <View style={styles.profileImageContainer}>
          <Image source={doctor.profilePic} style={styles.profileImage} />
        </View>

        <View style={styles.center}>
          <Text style={styles.name}>{doctor.name}</Text>
          <Text style={styles.specialties}>{doctor.specialties}</Text>
          <Text style={styles.degrees}>{doctor.degrees}</Text>

          <View style={styles.likesRow}>
            <View style={styles.iconTextRow}>
              <Ionicons name="heart-outline" size={18} color="#ff4d4f" style={styles.icon} />
              <Text style={styles.likes}>{doctor.likes} Likes</Text>
            </View>

            <View style={styles.divider} />

            <View style={styles.iconTextRow}>
              <Ionicons name="chatbox-ellipses-outline" size={18} color="#007bff" style={styles.icon} />
              <Text style={styles.likes}>{doctor.stories} Patient Stories</Text>
            </View>
          </View>
        </View>

        <View style={styles.body}>
          <TouchableOpacity
            style={styles.viewProfileBtn}
            onPress={() => navigation.navigate('DocProfile')}
          >
            <Text style={styles.viewProfileText}>View Profile</Text>
          </TouchableOpacity>

          <View style={styles.consultBox}>
            <View style={styles.tabContainer}>
              {tabLabels.map((label) => (
                <TouchableOpacity
                  key={label}
                  onPress={() => setActiveTab(label)}
                  style={[styles.tabBtn, activeTab === label && styles.activeTab]}
                >
                  <Text
                    style={[styles.tabText, activeTab === label && styles.activeTabText]}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

            <View style={styles.feeSection}>
              <View style={styles.feeRow}>
                <Text style={styles.consultationText}>{activeTab} Consultation</Text>
                <Text style={styles.feesText}>₹{doctor.fees} / Visit</Text>
              </View>
              <Text style={styles.followupText}>7 Days Free Follow-up</Text>

              <View style={styles.slotRow}>
                {doctor.slots[activeTab].map((time, index) => (
                  <Text key={index} style={styles.slot}>{time}</Text>
                ))}
                <TouchableOpacity onPress={() => navigation.navigate('TimeSlots')}>
                  <Text style={styles.viewAll}>View all</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>

        <View style={styles.patientStoriesWrapper}>
  <Text style={styles.sectionTitle}>😊 Patients Stories</Text>

  <LinearGradient
    colors={["#4CAADB", "#0A7BA5"]}
    start={{ x: 0.1, y: 0 }}
    end={{ x: 1, y: 1 }}
    style={styles.storyCard}
  >
    <View style={styles.storyContent}>
      <View style={styles.storyLeft}>
        <Ionicons name="thumbs-up-outline" size={18} color="#fff" />
        <Text style={styles.storyLikes}>88% Likes</Text>
      </View>

      <View style={styles.verticalDivider} />

      <View style={styles.storyRight}>
        <Text style={styles.storyText}>
          Out of all patients who were surveyed, 88% of them recommended visiting this doctor.
        </Text>
      </View>
    </View>
  </LinearGradient>
</View>


        <View style={styles.aboutContainerWrapper}>
          <LinearGradient
            colors={["#4CAADB", "#0A7BA5"]}
            start={{ x: 0.1, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.aboutContainer}
          >
            <Text
              style={styles.aboutText}
              numberOfLines={showFullAbout ? 0 : 6}
            >
              {doctor.about}
            </Text>
            <TouchableOpacity onPress={toggleAbout}>
              <Text style={styles.readMoreText}>
                {showFullAbout ? 'Read Less' : 'Read More'}
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>

        <View style={styles.whiteContainer}>
          <TouchableOpacity
            style={styles.consultBtn}
            onPress={() => navigation.navigate('Consultation')}
          >
            <Text style={styles.consultText}>Consult Now @ ₹{doctor.fees}</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#ffffff' },
  backBtnWrapper: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 99,
  },
  backButton: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 20,
    elevation: 4,
  },
  coverImage: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
  },
  profileImageContainer: {
    alignItems: 'center',
    marginTop: -75,
  },
  profileImage: {
    width: 140,
    height: 140,
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
    fontSize: 18,
    fontWeight: 'bold',
  },
  specialties: {
    fontSize: 13,
    color: 'gray',
    textAlign: 'center',
    marginTop: 2,
  },
  degrees: {
    fontSize: 13,
    color: 'gray',
    textAlign: 'center',
  },
  likesRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  iconTextRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  icon: {
    marginRight: 2,
  },
  divider: {
    width: 1,
    height: 20,
    backgroundColor: '#ccc',
    marginHorizontal: 15,
    alignSelf: 'center',
  },
  likes: {
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  body: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  viewProfileBtn: {
    backgroundColor: 'black',
    paddingVertical: 10,
    borderRadius: 8,
    width: 100,
    flexDirection: 'row',
    marginLeft: 140,
    justifyContent: 'center',
    alignItems: 'center',
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
    padding: 16,
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 14,
    borderRadius: 8,
    alignItems: 'center',
    height: 45,
    overflow: 'hidden',
    borderRadius:12
  },
  tabBtn: {
    flex: 1,
    paddingVertical: 10,
    alignItems: 'center',
    backgroundColor:'background: rgba(9, 93, 126, 1);',
  },
  tabText: {
    fontSize: 14,
    color: '#fff',
  },
  activeTab: {
    backgroundColor: '#0A7BA5',
  },
  activeTabText: {
    color: '#fff',
  },
  feeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 6,
  },
  consultationText: {
    fontSize: 16,
    fontWeight: '500',
  },
  feesText: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
  },
  followupText: {
    fontSize: 13,
    color: 'gray',
    marginBottom: 14,
  },
  slotRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  slot: {
    fontSize: 12,
    borderWidth: 1.2,
    borderColor: '#cccccc',
    paddingHorizontal: 8,
    borderRadius: 13,
    height: 40,
    paddingTop: 10,
  },
  viewAll: {
    fontSize: 14,
    color: '#007bff',
    fontWeight: '500',
  },
  patientStoriesWrapper: {
  marginTop: 20,
  paddingHorizontal: 16,
},
sectionTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  marginBottom: 10,
  color: '#000',
},
storyCard: {
  borderRadius: 12,
  padding: 16,
},
storyContent: {
  flexDirection: 'row',
  alignItems: 'center',
},
storyLeft: {
  flexDirection: 'row',
  alignItems: 'center',
  gap: 6,
  width: '25%',
  justifyContent: 'center',
},
storyLikes: {
  color: '#fff',
  fontWeight: '600',
  fontSize: 16,
},
verticalDivider: {
  width: 2,
  height: '100%',
  backgroundColor: '#ffffff50',
  marginHorizontal: 10,
},
storyRight: {
  flex: 1,
},
storyText: {
  color: '#fff',
  fontSize: 13,
  lineHeight: 18,
},
  aboutContainerWrapper: {
    marginTop: 10,
  },
  aboutContainer: {
    padding: 25,
  },
  aboutText: {
    fontSize: 12,
    color: '#ffffff',
    textAlign: 'justify',
    lineHeight: 20,
  },
  readMoreText: {
    color: 'black',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600',
    textAlign: 'right',
  },
  whiteContainer: {
    backgroundColor: '#fff',
    paddingVertical: 20,
    paddingHorizontal: 16,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    marginTop: -23,
    zIndex: 10,
    elevation: 5,
  },
  consultBtn: {
    backgroundColor: '#28a745',
    paddingVertical: 14,
    borderRadius: 12,
  },
  consultText: {
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '600',
    fontSize: 14,
  },
});
