import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Animated,
  FlatList,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');
const ITEM_WIDTH = width * 0.75;
const SPACING = 10;

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

const testimonials = {
  "Skin Disease Treatment": [
    {
      text: "It is a long established fact that a reader will be distracted by the readable content...",
      author: "Sramantika Sen",
      date: "Kolkata - 8th March, 2025 - Verified",
      image: require('../assets/images/services/doc1.png'),
    },
    {
      text: "Doctor helped me recover quickly. Highly recommended.",
      author: "Rahul Das",
      date: "Hyderabad - 2nd Feb, 2025 - Verified",
      image: require('../assets/images/services/doc2.png'),
    },
  ],
  Psoriasis: [
    {
      text: "Very good treatment. I had relief in 2 weeks.",
      author: "Anjali Singh",
      date: "Delhi - 5th Jan, 2025 - Verified",
      image: require('../assets/images/services/doc3.png'),
    },
  ],
  "Hair Loss": [
    {
      text: "My hair fall reduced after the consultation. Great results!",
      author: "Rohit Sharma",
      date: "Mumbai - 14th Feb, 2025 - Verified",
      image: require('../assets/images/services/doc1.png'),
    },
  ],
};

export default function DoctorProfile() {
  const [activeTab, setActiveTab] = useState("Clinic Visit");
  const [selectedCategory, setSelectedCategory] = useState(categories[0]);
  const scrollX = useRef(new Animated.Value(0)).current;
  const navigation = useNavigation();

  const data = testimonials[selectedCategory];

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
            <Text style={styles.likes}>{doctor.likes} Likes</Text>
            <Text style={styles.likes}>{doctor.stories} Patient Stories</Text>
          </View>
        </View>

        <View style={styles.body}>
          <TouchableOpacity
            style={styles.viewProfileBtn}
            onPress={() => navigation.navigate()}
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

          <Text style={styles.slotNote}>{doctor.slotNote}</Text>

          <Text style={styles.sectionTitle}>Patients Stories</Text>
          <View style={styles.recommendBox}>
            <Text style={styles.recommendText}>
              Out of all patients who were surveyed, 88% of them recommended visiting this doctor.
            </Text>
          </View>

          <View style={styles.chipContainer}>
            {categories.map((cat, index) => (
              <TouchableOpacity key={index} onPress={() => setSelectedCategory(cat)}>
                <Text
                  style={[styles.chip, selectedCategory === cat && {
                    backgroundColor: '#007bff',
                    color: '#ffffff',
                  }]}
                >
                  {cat}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Animated.FlatList
            data={data}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            snapToInterval={ITEM_WIDTH + SPACING * 2}
            decelerationRate="fast"
            onScroll={Animated.event(
              [{ nativeEvent: { contentOffset: { x: scrollX } } }],
              { useNativeDriver: true }
            )}
            contentContainerStyle={{
              paddingHorizontal: (width - ITEM_WIDTH) / 2,
            }}
            keyExtractor={(_, index) => `${selectedCategory}-${index}`}
            renderItem={({ item, index }) => {
              const inputRange = [
                (index - 1) * (ITEM_WIDTH + SPACING * 2),
                index * (ITEM_WIDTH + SPACING * 2),
                (index + 1) * (ITEM_WIDTH + SPACING * 2),
              ];

              const scale = scrollX.interpolate({
                inputRange,
                outputRange: [0.8, 1, 0.8],
                extrapolate: 'clamp',
              });

              const rotateY = scrollX.interpolate({
                inputRange,
                outputRange: ['20deg', '0deg', '-20deg'],
                extrapolate: 'clamp',
              });

              const opacity = scrollX.interpolate({
                inputRange,
                outputRange: [0.4, 1, 0.4],
                extrapolate: 'clamp',
              });

              return (
                <Animated.View
                  style={[styles.reviewCardSlide, { transform: [{ scale }, { rotateY }], opacity }]}
                >
                  <Image source={item.image} style={styles.reviewImage} />
                  <Text style={styles.reviewSlideText}>{item.text}</Text>
                  <Text style={styles.reviewSlideAuthor}>{item.author}</Text>
                  <Text style={styles.reviewSlideDate}>{item.date}</Text>
                </Animated.View>
              );
            }}
          />

          <Text style={styles.about}>{doctor.about}</Text>

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
    gap: 40,
    marginTop: 8,
  },
  likes: {
    fontSize: 14,
    color: '#333',
  },
  body: {
    paddingHorizontal: 16,
    marginTop: 16,
  },
  viewProfileBtn: {
    backgroundColor: 'blue',
    paddingVertical: 12,
    borderRadius: 8,
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
    fontSize: 14,
    color: '#000',
  },
  activeTab: {
    backgroundColor: '#007bff',
  },
  activeTabText: {
    color: '#ffffff',
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
    color: '#007bff',
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
    gap: 25,
    alignItems: 'center',
    justifyContent:'center'
  },
  slot: {
    fontSize: 12,
    borderWidth: 1,
    borderColor: '#cccccc',
    paddingHorizontal: 10,
    paddingVertical: 4,
    height:50,
    paddingTop:15,
    borderRadius: 13,
    justifyContent:'center',
    alignItems:'center'
  },
  viewAll: {
    fontSize: 14,
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
    alignItems: 'center',
  },
  chip: {
    backgroundColor: '#eeeeee',
    fontSize: 12,
    height: 40,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 20,
    color: '#000',
  },
  reviewCardSlide: {
    width: ITEM_WIDTH,
    backgroundColor: '#007bff',
    borderRadius: 16,
    padding: 20,
    marginTop: 20,
    height: 300,
    alignItems: 'center',
  },
  reviewImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginBottom: 12,
  },
  reviewSlideText: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  reviewSlideAuthor: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  reviewSlideDate: {
    fontSize: 12,
    color: '#e0f0ff',
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