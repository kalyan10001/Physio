import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  FlatList,
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
const screenWidth = Dimensions.get('window').width;

export default function DoctorProfileScreen() {
  const screenWidth = Dimensions.get('window').width;
  const [activeTab, setActiveTab] = useState("Clinic Visit");
  const [showFullAbout, setShowFullAbout] = useState(false);
  const navigation = useNavigation();

  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const ITEM_WIDTH = screenWidth * 0.5; // Half visible
  const SPACER_WIDTH = (screenWidth - ITEM_WIDTH) / 2;

const handleTabPress = (index) => {
  setTestimonialIndex(index);
};

  const toggleAbout = () => {
    setShowFullAbout(!showFullAbout);
  };

    const testimonials = [
  {
    id: '1',
    name: 'Sramantika Sen',
    location: 'Kolkata',
    date: '8th March, 2025',
    title:'Heart Issue',
    text: "I've been using this service for several months now, and I can confidently say it has transformed the way I manage my daily tasks. From the intuitive interface to the seamless user experience, everything about it speaks of quality and thoughtfulness. I particularly appreciate the way it helps me stay organized without overwhelming me with too many options. The reminders, scheduling tools, and overall layout make it very easy to use. It's rare to find something this well-designed and functional.",
  },
  {
    id: '2',
    name: 'Ravi Kumar',
    location: 'Hyderabad',
    date: '12th April, 2025',
    title:'hair Transplant',
    text: "As someone who juggles multiple roles in both personal and professional life, having a tool like this is nothing short of a blessing. It offers great flexibility while keeping things simple and user-friendly. I love how everything is just a tap away – from managing appointments to tracking progress and staying on top of my commitments. The performance has been rock solid with no lags or bugs. Even customer support is responsive and helpful. The recent updates have only made it better.",
  },
  {
    id: '3',
    name: 'Priya Sharma',
    location: 'Delhi',
    date: '22nd May, 2025',
    title:'Lungs cancer',
    text: "This platform has exceeded all my expectations. Initially, I was skeptical because I’ve tried many apps in the past that promised a lot but delivered very little. However, this one stands out from the rest. The UI is clean and attractive, and every feature has been thoughtfully built. I use it every day to plan my activities, write notes, and even track personal goals. The motivational nudges and smart suggestions are subtle but effective. I’ve also recommended it to several of my colleagues",
  }, {
    id: '4',
    name: 'Priya Sharma',
    location: 'Delhi',
    date: '22nd May, 2025',
    title:'Heart Attack',
    text: "This platform has exceeded all my expectations. Initially, I was skeptical because I’ve tried many apps in the past that promised a lot but delivered very little. However, this one stands out from the rest. The UI is clean and attractive, and every feature has been thoughtfully built. I use it every day to plan my activities, write notes, and even track personal goals. The motivational nudges and smart suggestions are subtle but effective. I’ve also recommended it to several of my colleagues",
  }, {
    id: '5',
    name: 'Priya Sharma',
    location: 'Delhi',
    date: '22nd May, 2025',
    title:'Legs Issue',
    text: "This platform has exceeded all my expectations. Initially, I was skeptical because I’ve tried many apps in the past that promised a lot but delivered very little. However, this one stands out from the rest. The UI is clean and attractive, and every feature has been thoughtfully built. I use it every day to plan my activities, write notes, and even track personal goals. The motivational nudges and smart suggestions are subtle but effective. I’ve also recommended it to several of my colleagues",
  },
];
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
       <View style={styles.header}>
              <Image
                source={require('../assets/images/services/team.jpg')}
                style={styles.headerBackground}
              />
            
              <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                  <Image
                                source={require('../assets/images/myhealthscreen/arrow-left.png')}
                                style={{ width: 24, height: 24 }}
                              />
                </TouchableOpacity>
            
                <Text style={styles.headerText}>Doctor's Profile</Text>
            
                {/* Spacer to balance layout */}
                <View style={{ width: 32 }} />
              </View>
            </View>

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
          <View style={styles.patientStoriesHeader}>
          <Image source={require('../assets/images/physioprofilescreen/happy_light.png')} style={{ width: 20,height: 20, borderRadius: 12,marginTop: 2 }} />
  <Text style={styles.sectionTitle}> Patients Stories</Text>
  </View>

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

 <View style={{ width: 400, height: 437, marginTop: 30, alignSelf: 'center',marginBottom: 20 }}>

      {/* Scrollable Tabs */}
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingHorizontal: 10, marginBottom: 10 }}
        snapToInterval={screenWidth * 0.5}
        decelerationRate="fast"
        data={testimonials}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => (
          <TouchableOpacity onPress={() => handleTabPress(index)} style={{ marginRight: 15 }}>
            <View
              style={{
                paddingVertical: 8,
                paddingHorizontal: 12,
                borderRadius: 10,
                borderWidth: 0.5,
                backgroundColor: testimonialIndex === index ? '#0A7BA5' : '#fff',
                borderColor: testimonialIndex === index ? '#0A7BA5' : '#BEBEBE80',
                height:35,
                width:100,
                alignItems:'center'
              }}
            >
              <Text
                style={{
                  color: testimonialIndex === index ? '#fff' : '#000000',
                  textAlign: 'center',
                  fontFamily: 'Montserrat-Medium',
                  fontSize: 13,
                }}
              >
                {item.title}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />

      <View style={{ width: 400, height: 366, position: 'relative', alignItems: 'center', justifyContent: 'center',marginLeft:10,marginRight:10 }}>
        {/* Left Tilted Card */}
        <View style={{
          width: 231.57,
          height: 295.15,
          marginLeft: 10,
          position: 'absolute',
          top: 50.32,
          left: 30,
          backgroundColor: '#1896C5',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          opacity: 0.6,
          transform: [{ rotate: '-11.82deg' }],
          padding: 12,
        }}>
          <Text style={{ fontSize: 11, fontFamily: 'Montserrat-Medium',color: '#fff' }}>
            {testimonials[testimonialIndex].text}
          </Text>
        </View>

        {/* Right Tilted Card */}
        <View style={{
          width: 231.57,
          height: 295.15,
          position: 'absolute',
          top: 50.32,
          right: 40,
          backgroundColor: '#1896C5',
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          opacity: 0.6,
          transform: [{ rotate: '11.82deg' }],
          padding: 12,
        }}>
          <Text style={{ fontSize: 11, fontFamily: 'Montserrat-Medium',color: '#fff' }}>
            {testimonials[testimonialIndex].text}
          </Text>
        </View>

        {/* Main Center Card */}
        <View style={{
          width: 253,
          height: 335,
          borderRadius: 10,
          borderWidth: 1,
          borderColor: '#ccc',
          backgroundColor: '#0A7BA5',
          padding: 20,
          zIndex: 2,
        }}>
          <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Medium',color: '#fff', marginBottom: 15 }}>
            {testimonials[testimonialIndex].text}
          </Text>
          <Text style={{ fontSize: 11, fontFamily: 'Montserrat-SemiBold', color: '#fff' }}>
            {testimonials[testimonialIndex].name}
          </Text>
          <Text style={{ fontSize: 11, fontFamily: 'Montserrat-Medium',color: '#e0f7fa' }}>
            {testimonials[testimonialIndex].location} - {testimonials[testimonialIndex].date} - Verified
          </Text>
        </View>
      </View>
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
    profileWrapper: {
    position: 'absolute',
    top: 15,
    left: '30%',
    zIndex: 99,
  },
  profileText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
    color: '#000',
  },
  coverImage: {
    width: '100%',
    height: 200,
    top: 0,
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
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 18,
  },
  specialties: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: 'gray',
    textAlign: 'center',
    marginTop: 2,
  },
  degrees: {
    fontFamily: 'Montserrat-Regular',
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
    fontFamily: 'Montserrat-Medium',
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
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: '#ffffff',
    textAlign: 'center',
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
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
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
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    fontWeight: '500',
  },
  feesText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 15,
    color: 'black',
  },
  followupText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 10,
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
    fontFamily: 'Montserrat-Medium',
    fontSize: 10,
    borderWidth: 1.2,
    borderColor: '#cccccc',
    paddingHorizontal: 8,
    borderRadius: 13,
    height: 40,
    paddingTop: 10,
  },
  viewAll: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 11,
    color: '#007bff',
    fontWeight: '500',
  },
  patientStoriesHeader: {
    flexDirection: 'row',
    gap: 5,
  },
  patientStoriesWrapper: {
  marginTop: 20,
  paddingHorizontal: 16,
},
sectionTitle: {
  fontFamily: 'Montserrat-SemiBold',
  fontSize: 19,
  marginBottom: 10,
  color: '#095D7E',
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
  fontFamily: 'Montserrat-Regular',
  color: '#fff',
  fontSize: 13,
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
  fontFamily: 'Montserrat-Medium',
  color: '#fff',
  fontSize: 11,
  lineHeight: 18,
},
  aboutContainerWrapper: {
    marginTop: 10,
  },
  aboutContainer: {
    padding: 25,
  },
  aboutText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: '#ffffff',
    textAlign: 'justify',
    lineHeight: 20,
  },
  readMoreText: {
    fontFamily: 'Montserrat-Medium',
    color: '#fff',
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
    backgroundColor: '#0A7BA5',
    paddingVertical: 14,
    borderRadius: 12,
  },
  consultText: {
    fontFamily: 'Montserrat-SemiBold',
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 15,
  },
});
