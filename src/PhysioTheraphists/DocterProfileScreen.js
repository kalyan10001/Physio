import React, { useState } from 'react';
import faceicon from "../assets/images/homescreen/faceicon.png";
import graduate from "../assets/images/physioprofilescreen/graduate.png";
import check from "../assets/images/physioprofilescreen/check.png";
import info from "../assets/images/physioprofilescreen/info.png";
import quotes from "../assets/images/physioprofilescreen/quotes.png";
import tick from "../assets/images/physioprofilescreen/tick.png";
import checkmark from "../assets/images/physioprofilescreen/check-mark.png";
import redflag from "../assets/images/physioprofilescreen/red-flag.png";
import rightarrow from '../assets/images/healthtipsscreen/rightarrow.png';
import RazorpayCheckout from 'react-native-razorpay';

import {useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import {SafeAreaView} from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const reviews = [
  {
    id: 1,
    name: 'Anand Kishore',
    time: '2 months ago',
    tags: [
      'Doctor friendliness',
      'Treatment satisfaction',
      'Value for money',
      'Skin Disease Treatment',
    ],
    content:
      'Doctor is very polite. Tries to get detail and explain every aspect for better treatment and early recovery.',
  },
  {
    id: 2,
    name: 'Verified Patient',
    time: '2 months ago',
    tags: [
      'Doctor friendliness',
      'Explanation of the health issue',
      'Treatment satisfaction',
      'Skin Pigmentation',
    ],
    content:
      'Very good doctor. He is so smart. Treated very well. Helped me recover my skin. Doctor is so friendly.',
  },
  {
    id: 3,
    name: 'Pradipta',
    time: '3 years ago',
    tags: ['Acne', 'Hair Loss'],
    content:
      'He is very good in treating hair and acne problems. I felt confident after consultation.',
  },
  {
    id: 4,
    name: 'Pooja',
    time: '1 year ago',
    tags: ['Psoriasis'],
    content:
      'Psoriasis was making life hard. The doctor provided clear explanation and treatment options.',
  },
];

const DoctorProfileScreen = () => {

    const [showIndex,setShowIndex] = useState(350);
    const [showMore,setShowMore] = useState(false);
    const [showDetails,setShowDetails] = useState(false);
    const [showServices,setShowServices] = useState(false);
    const navigation=useNavigation();

   const [activeTab, setActiveTab] = useState('Video');

  // Dummy slot data
  const slotData = {
    Video: {
      fee: 700,
      today: ['04:00 PM', '05:00 PM', '06:00 PM'],
      tomorrowCount: 8,
    },
    Clinic: {
      fee: 900,
      today: ['09:30 AM', '10:30 AM', '12:00 PM'],
      tomorrowCount: 5,
    },
  };

  const data = slotData[activeTab];



    const handleShow = () => {
        setShowMore((prev) => !prev);
        if(showMore === false)
        {
            setShowIndex(600);
        }
        else 
        {
            setShowIndex(350);
        }
    }




  const [selectedTag, setSelectedTag] = useState('All');
  const [showAll, setShowAll] = useState(false);

  const filteredReviews =
    selectedTag === 'All'
      ? reviews
      : reviews.filter((r) => r.tags.includes(selectedTag));

  const reviewsToShow = showAll ? filteredReviews : filteredReviews.slice(0, 2);

   const HandlePayment = () => {
      const options = {
        description: 'Video Consultation',
        image: 'https://your-logo-url.com/logo.png',
        currency: 'INR',
        key: 'rzp_test_pYSjJyMBQQXTTS', // Your Razorpay Test Key ID
        amount: '100', // ₹1 (100 paise)
        name: 'GetPhysio',
        prefill: {
          email: 'venkatakalyan1000@gmail.com',
          contact: '8497937244',
          name: 'Test User'
        },
        theme: { color: '#30C3EA' }
      };
  
      RazorpayCheckout.open(options)
        .then(data => {
          Alert.alert('Payment Successful', `Payment ID: ${data.razorpay_payment_id} `);
        })
        .catch(error => {
          Alert.alert(`Payment Failed`, `${error.description} | Code: ${error.code}`);
        });
    };

  return (
   <SafeAreaView style={{flex:1,height:'100%',alignItems:'center'}}>
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={()=>navigation.goBack()}>
          {/* <Icon name="arrow-back" size={24} color="#fff" /> */}
          <Image source={rightarrow} style={{width:35,height:35}}/>
        </TouchableOpacity>
        <Text style={{ fontSize: 23, fontFamily: 'Poppins', fontWeight: 700, color: '#22285C' ,marginLeft:30}}>Docter's Profile</Text>
        <View style={styles.topRightIcons}>
          <Feather name="star" size={22} color="black" style={styles.icon} />
          <Feather name="share-2" size={22} color="black" />
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Profile Section */}
        <View style={styles.profileSection}>
          <Image
            source={require('../assets/images/physiotheraphistscreen/male-icon.png')}
            style={styles.profileImage}
            resizeMode="cover"
          />
          <View style={styles.profileInfo}>
            <Text style={styles.name}>Dr. Tarunveer Singh Kumar</Text>
            <Text style={styles.details}>
              Dermatologist, Pediatric Dermatologist
            </Text>
            <Text style={styles.details}>Aesthetic Dermatologist</Text>
            <Text style={styles.details}>
              Diploma in Dermatology, MD - Dermatology
            </Text>
            <Text style={styles.details}>MBBS, Fellow in Aesthetic Medicine</Text>
            <Text style={styles.experience}>12 Years overall experience</Text>
            <View style={styles.feedbackRow}>
              <Text style={styles.thumb}>👍 88%</Text>
              <Text style={styles.stories}>💬 33 Patient Stories</Text>
            </View>
          </View>
        </View>


    <View
      style={{
        backgroundColor: '#fff',
        borderRadius: 16,
        padding: 16,
        marginTop: 5,
        marginHorizontal: 16,
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 3,
      }}
    >
      {/* Tabs */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#f1ebfc',
          padding: 6,
          borderRadius: 12,
        }}
      >
        <TouchableOpacity
          onPress={() => setActiveTab('Clinic')}
          style={{
            flex: 1,
            padding: 8,
            alignItems: 'center',
            borderRadius: 12,
            backgroundColor: activeTab === 'Clinic' ? 'white' : 'transparent',
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: activeTab === 'Clinic' ? '700' : '500',
              color: activeTab === 'Clinic' ? '#7c3aed' : '#555',
            }}
          >
            ➕ Clinic Visit
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => setActiveTab('Video')}
          style={{
            flex: 1,
            padding: 8,
            alignItems: 'center',
            borderRadius: 12,
            backgroundColor: activeTab === 'Video' ? 'white' : 'transparent',
          }}
        >
          <Text
            style={{
              fontSize: 13,
              fontWeight: activeTab === 'Video' ? '700' : '500',
              color: activeTab === 'Video' ? '#7c3aed' : '#555',
            }}
          >
            📹 Video Consult
          </Text>
        </TouchableOpacity>
      </View>

      {/* Consultation Info */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginTop: 10,
          marginBottom: -5,
        }}
      >
        <View>
          <Text style={{ fontSize: 15, fontWeight: '600' }}>
            {activeTab === 'Clinic' ? 'Clinic Consultation' : 'Video Consultation'}
          </Text>
          <Text style={{ color: 'gray', fontSize: 13 }}>7 Day free follow-up</Text>
        </View>
        <Text style={{ fontSize: 16, fontWeight: 'bold' }}>₹{data.fee} fee</Text>
      </View>

      {/* Today / Tomorrow Slots Info */}
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          borderBottomWidth: 1,
          borderColor: '#eee',
          paddingBottom: 8,
        }}
      >
        <Text style={{ fontWeight: '600' }}>
          Today <Text style={{ color: 'green' }}>{data.today.length} slots</Text>
        </Text>
        <Text style={{ fontWeight: '600' }}>
          Tomorrow <Text style={{ color: 'green' }}>{data.tomorrowCount} slots</Text>
        </Text>
      </View>

      {/* Time Slots */}
      <View
  style={{
    flexDirection: 'row',
    gap: 10,
    marginTop: 12,
  }}
>
  {data.today.map((slot, index) => (
    <TouchableOpacity
      key={index}
      onPress={() => navigation.navigate('Consultation', { slotTime: slot })}
      style={{
        backgroundColor: '#a855f7',
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 12,
        marginTop: -15,
      }}
    >
      <Text style={{ color: '#fff', fontWeight: 'bold' }}>{slot}</Text>
    </TouchableOpacity>
  ))}
</View>


      {/* View All Slots */}
      <TouchableOpacity onPress={() => navigation.navigate('ViewSlots')}>
        <Text
          style={{
            marginTop: 16,
            textAlign: 'center',
            color: '#7c3aed',
            fontWeight: '600',
          }}
        >
          View all slots
        </Text>
      </TouchableOpacity>
    </View>




        {/* Patient Stories */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Patient Stories</Text>
          <Text style={styles.subText}>
            These stories represent patient opinions and experiences. They do
            not reflect the doctor's medical capabilities.
          </Text>

          <View style={styles.ratingBlock}>
            <View style={styles.ratingBox}>
              <Text style={styles.ratingPercent}>👍 88%</Text>
              <Text style={styles.ratingSub}>
                Out of all patients who were surveyed, 88% of them recommend
                visiting this doctor
              </Text>
            </View>
          </View>

          {/* Tag Filter */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.tagsScroll}
            contentContainerStyle={styles.tagsRow}
          >
            {[
              'All',
              'Skin Disease Treatment',
              'Skin Pigmentation',
              'Acne',
              'Hair Loss',
              'Rashes',
              'Psoriasis',
            ].map((tag) => (
              <TouchableOpacity
                key={tag}
                style={[styles.tag, selectedTag === tag && styles.selectedTag]}
                onPress={() => {
                  setSelectedTag(tag);
                  setShowAll(false);
                }}
              >
                <Text
                  style={[
                    styles.tagText,
                    selectedTag === tag && styles.selectedTagText,
                  ]}
                >
                  {tag}
                </Text>
              </TouchableOpacity>
            ))}
          </ScrollView>

          {/* Reviews */}
          {reviewsToShow.map((review) => (
            <View key={review.id} style={styles.reviewCard}>
              <Text style={styles.reviewerName}>{review.name}</Text>
              <Text style={styles.reviewTime}>{review.time}</Text>
              <Text style={styles.reviewContent}>{review.content}</Text>
            </View>
          ))}

          {/* Show More / Show Less */}
          {filteredReviews.length > 2 && (
            <TouchableOpacity
              onPress={() => setShowAll(!showAll)}
              style={styles.showMoreBtn}
            >
              <Text style={styles.showMoreText}>
                {showAll ? 'Show Less' : 'Show More'}
              </Text>
            </TouchableOpacity>
          )}
        </View>

        {/* Clinic Details */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Clinic Details</Text>

          <View style={styles.clinicHeader}>
            <View style={{ flex: 1 }}>
              <Text style={styles.clinicName}>Kulkarni Clinic</Text>
             <Text style={styles.clinicSubtitle}>
  <Text style={{ color: 'green', fontSize: 14, fontWeight: 'bold' }}>★ 5</Text>
  <Text> • Multi Speciality Clinic</Text>
</Text>

              <Text style={styles.clinicLocation}>Vishrantwadi</Text>
              <Text style={styles.clinicFees}>₹700 In‑clinic fees</Text>
            </View>
            <Image
              source={require('../assets/images/physioprofilescreen/hospital-logo.jpeg')}
              style={styles.clinicIcon}
            />
          </View>

          <Text
            style={[styles.sectionTitle, { fontSize: 18, marginTop: 10 }]}
          >
            Timings
          </Text>
          
 <ScrollView
  horizontal
  showsHorizontalScrollIndicator={false}
  style={{ marginTop: 10 }}
  contentContainerStyle={styles.timingScroll}
>
  {[
    { day: 'Mon', times: ['10:00 AM - 12:00 PM', '04:00 PM - 06:00 PM'] },
    { day: 'Tue', times: ['10:30 AM - 12:30 PM'] },
    { day: 'Wed', times: ['09:00 AM - 11:00 AM', '03:00 PM - 05:00 PM'] },
    { day: 'Thu', times: ['10:00 AM - 01:00 PM'] },
    { day: 'Fri', times: ['11:00 AM - 02:00 PM'] },
    { day: 'Sat', times: ['10:45 AM - 11:45 AM', '02:30 PM - 07:00 PM'] },
    { day: 'Sun', times: ['11:00 AM - 01:00 PM'] },
  ].map((item, idx) => (
    <TouchableOpacity
      key={idx}
      style={styles.timingBoxScrollable}
      onPress={() => navigation.navigate('ViewSlots')}
    >
      <Text style={styles.dayText}>{item.day}</Text>
      {item.times.map((t, i) => (
        <Text key={i} style={styles.timeText}>{t}</Text>
      ))}
    </TouchableOpacity>
  ))}
</ScrollView>



          <View style={styles.actionRow}>
            <TouchableOpacity style={styles.contactBtn}>
              <Feather name="phone" size={16} color="#000" />
              <Text style={styles.actionText}>Contact Clinic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.contactBtn}>
              <Feather name="map-pin" size={16} color="#000" />
              <Text style={styles.actionText}>Get Directions</Text>
            </TouchableOpacity>
          </View>

          {/* Location */}
          <Text
            style={[styles.sectionTitle, { fontSize: 18, marginTop: 20 }]}
          >
            Location
          </Text>
          <Text style={styles.locationText}>
            Siddheshwar Om Nagar Cooperative Society, Vishrantwadi, Pune
          </Text>
          <Image
            source={require('../assets/images/physioprofilescreen/map.jpeg')}
            style={styles.mapImage}
            resizeMode="cover"
          />
        </View>

        <View style={{ height: 100,  marginTop:-90}}/>

                      <View style={{width:'100%',flexDirection:'row',alignItems:'center',paddingHorizontal:16,paddingVertical:12}}>
                  <Text style={{fontSize:30,fontFamily:'Poppins',fontWeight:'600'}}>About The Doctor</Text>
              </View>
              <View style={{width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'center',gap:10,paddingHorizontal:16,paddingVertical:1}}>
                 <View style={{width:'70%',alignItems:'flex-start',justifyContent:'center',gap:5}}>
                    <Text style={{fontSize:22,fontFamily:'Poppins',fontWeight:'600'}}>Dr.Ravishankar Reddy CR</Text>
                    <View style={{width:'100%',flexDirection:'row',gap:5}}><Image source={graduate} style={{width:20,height:20,tintColor:'blue'}}/><Text>MBBS,MD - General Medicine</Text></View>
                    <View style={{width:'100%',flexDirection:'row',gap:5}}><Image source={check} style={{width:20,height:20,tintColor:'blue'}}/><Text>Council verified practitioner</Text><Image source={info} style={{width:20,height:20}} /></View>
                 </View>
                 <View style={{width:'30%',}}>
                    <Image source={faceicon} style={{width:100,height:100,borderRadius:9999}} />
                 </View>
              </View>
              <View style={{width:'100%',alignItems:'flex-start',justifyContent:'center',paddingHorizontal:16,paddingVertical:12}}>
                  <Text style={{fontSize:22,fontFamily:'Poppins',fontWeight:'600'}}>About</Text>
                  <Image source={quotes} style={{width:30,height:30,tintColor:'gray'}} />
                  <Text>{"no matter your medical specialty, crafting a compelling bio is essential for showcasing your expertise and connecting with patients. We hope this diverse collection of over 100 bios for doctors has provided you with inspiration and guidance in creating an engaging online presence. Remember, your bio should reflect your unique qualities, values, and commitment to excellent patient care. Let your bio be the gateway to building lasting relationships and making a positive impact in the lives of your patients!".slice(0,showIndex)} <TouchableOpacity  title={(showMore === false) ? "View More" : "View Less"} onPress={handleShow}><Text style={{textDecorationLine:'underline',color:'blue'}}>{(showMore === false) ? "View More" : "View Less"}</Text></TouchableOpacity></Text>
              </View>
              <View style={{width:'100%',flexDirection:'row',gap:5,padding:16,marginVertical:12,marginHorizontal:0,borderColor:'gray',borderRadius:10,borderWidth:3}}>
                <Text style={{color:'gray',textDecorationLine:'underline'}}>Dr.Ravishankar Reddy CR has claimed their profile</Text>
                <Image source={tick} style={{height:20,width:20}}/>
              </View>
              <View style={{width:'100%',alignItems:'flex-start',justifyContent:'center',paddingHorizontal:16,paddingVertical:12,gap:10}}>
                  <Text style={{fontSize:22,fontFamily:'Poppins',fontWeight:'600'}}>Education and achievements</Text>
                  <Text>Know More about Dr.Ravishankar Reddy C R's education,practices and affiliations</Text>
                  {showDetails && <>
                      <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 3, backgroundColor: 'gray', marginHorizontal: 16, marginTop: -20, marginBottom: 24 }} />
                   <Text style={{fontSize:22,fontFamily:'Poppins',fontWeight:'600',marginTopVertical:10}}>Specializations</Text>
                   <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>General Physician</Text>
                     </View>
                     <Text style={{fontSize:22,fontFamily:'Poppins',fontWeight:'600',marginTop:20}}>Awards and Recognitions</Text>
                   <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>CME management of type to diabetes harvard medical school</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>NEUROCON participation trichy</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>ESICON neurology hyderabad</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>ELECTO PHYSIOLOGY WORK SHOP NEW DELHI</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>General Physician</Text>
                     </View>

                     <Text style={{fontSize:22,fontFamily:'Poppins',fontWeight:'600',marginTop:20}}>Education</Text>
                   <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>MBBS-GULBARGA UNIVERSITY,1990</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>MD - General Medicine-Bangalore Medical College and Research Insitute,Bangalore,1997</Text>
                     </View>
                    
                    <Text style={{fontSize:22,fontFamily:'Poppins',fontWeight:'600',marginTop:20}}>Experience</Text>
                   <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>1992 - 1993 Resident In Neurology at Nimhans</Text>
                     </View>
                     <View style={{width:'100%',flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>1993 - 1994 Resident In General Medicine at Auranghabad Medical College</Text>
                     </View>
                      <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>1994 - 1997 Resident General Medicine at Bangalore Medical College</Text>
                     </View>
                      <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>1998 - 2000 Resident In General Physician at Kerala</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>2000 - 2002 General Physician at Govt of Karnataka</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>2003 - 2007 General Physician at Deccan Hospital</Text>
                     </View>

                      <Text style={{fontSize:22,fontFamily:'Poppins',fontWeight:'600',marginTop:20}}>Registrations</Text>
                   <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>Karnataka Medical Council</Text>
                     </View>

                     <Text style={{fontSize:22,fontFamily:'Poppins',fontWeight:'600',marginTop:20}}>Memberships</Text>
                   <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>Neurology Association</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>Bangalore Neurological Society</Text>
                     </View>
                     </>
                      }

                  <TouchableOpacity  onPress={() => setShowDetails(prev => !prev)}><Text style={{color:'blue'}}>{(showDetails === false) ? "View more details" : "View less details"}</Text></TouchableOpacity>
                  <Text style={{fontSize:22,fontFamily:'Poppins',fontWeight:'600',marginTop:20}}>Services & Procedures</Text>
                   <Text>Know More about Dr.Ravishankar Reddy C R's following services and procedures</Text>
                   <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>Neurology Association</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>Bangalore Neurological Society</Text>
                     </View>
                     {showServices && <>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>Bangalore Neurological Society</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>Bangalore Neurological Society</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>Bangalore Neurological Society</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>Bangalore Neurological Society</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>Bangalore Neurological Society</Text>
                     </View>
                     <View style={{flexDirection:'row',gap:10}}>
                    <Image source={checkmark} style={{height:20,width:20}} />
                   <Text>Bangalore Neurological Society</Text>
                     </View>
                     </>
                     }
                        <TouchableOpacity  onPress={() => setShowServices(prev => !prev)}><Text style={{color:'blue'}}>{(showServices === false) ? "View more services" : "View less services"}</Text></TouchableOpacity>
              </View>
               <View style={{flexDirection:'row',alignItems:'center',justifyContent:'space-between',padding:16,marginVertical:12,marginHorizontal:16,borderColor:'gray',borderRadius:10,borderWidth:1}}>
                <Text>Report an issue</Text>
                <Image source={redflag} style={{height:20,width:20}}/>
              </View>


      </ScrollView>

      {/* Bottom Button */}
      <TouchableOpacity style={styles.bottomButton} onPress={HandlePayment}>
        <Text style={styles.bottomButtonText}>Consult Now @ ₹449</Text>
      </TouchableOpacity>
    </View>
     </SafeAreaView> 
  );
};

export default DoctorProfileScreen;

const styles = StyleSheet.create({
  container: { flex: 1 },
  scrollContainer: { paddingBottom: 80 ,backgroundColor: '#30C3EA26' },
  topBar: {
    backgroundColor: '#30C3EA26',
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    justifyContent: 'space-between',
    borderBottomColor:'black',
    // borderWidth:0.2,
  },
  topRightIcons: { flexDirection: 'row', gap: 15 },
  icon: { marginRight: 15 },

  profileSection: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  profileInfo: { flex: 1, paddingLeft: 24 },
  name: { fontSize: 17, fontWeight: 'bold', marginBottom: 2 },
  details: { fontSize: 13, color: '#555', fontWeight: '500' },
  experience: { marginTop: 6, fontWeight: 'bold' },
  feedbackRow: { flexDirection: 'row', marginTop: 6, gap: 10 },
  thumb: { fontSize: 13, color: '#4CAF50' },
  stories: { fontSize: 13, color: '#007bff' },

  section: { padding: 16 },
  sectionTitle: { fontSize: 23, fontWeight: 'bold', marginBottom: 6 },
  subText: { fontSize: 13, color: '#666' },

  ratingBlock: { marginTop: 22, marginBottom: 22 },
  ratingBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 8,
    gap: 10,
  },
  ratingPercent: { fontSize: 20, fontWeight: 'bold', color: '#4CAF50' },
  ratingSub: { marginLeft: 10, flex: 1, fontSize: 14, color: '#444' },

  tagsScroll: { marginTop: 12 },
  tagsRow: { flexDirection: 'row', gap: 10, paddingRight: 16 },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    width:'full',
    height:40,
    alignItems:'center',
    justifyContent:'center',
    backgroundColor: '#eee',
  },
  tagText: { fontSize: 13 },
  selectedTag: { backgroundColor: '#000' },
  selectedTagText: { color: '#fff', fontWeight: 'bold' },

  reviewCard: {
    padding: 14,
    backgroundColor: '#f8f8f8',
    marginTop: 14,
    borderRadius: 8,
    elevation: 1,
  },
  reviewerName: { fontWeight: 'bold', fontSize: 15 },
  reviewTime: { fontSize: 12, color: '#666', marginBottom: 6 },
  reviewContent: { fontSize: 14, color: '#333' },

  showMoreBtn: { marginTop: 10, alignItems: 'center' },
  showMoreText: { color: '#2E3EFA', fontWeight: 'bold', fontSize: 14 },

  clinicHeader: { flexDirection: 'row', alignItems: 'center', marginTop: 10 },
  clinicName: { fontSize: 16, fontWeight: 'bold' },
  clinicSubtitle: { fontSize: 13, color: '#777' },
  clinicLocation: { fontSize: 13, marginTop: 4 },
  clinicFees: { fontSize: 13, color: '#000', marginTop: 2 },
  clinicIcon: { width: 100, height: 100, marginLeft: 10 },

  timingScroll: { paddingVertical: 5 },
  timingBoxScrollable: {
  width: 160,
  padding: 10,
  borderWidth: 0.3, 
  borderColor: '#777',
  borderRadius: 8,
  marginRight: 10,
},

  dayText: { fontWeight: 'bold', fontSize: 15 },
  timeText: { fontSize: 13, marginTop: 4 },

  actionRow: {
    flexDirection: 'row',
    marginTop: 14,
    justifyContent: 'space-between',
  },
  contactBtn: {
    flexDirection: 'row',
    alignItems: 'center',
      borderWidth: 1, 
  borderColor: '#777',
    padding: 10,
    borderRadius: 8,
    gap: 8,
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 4,
  },
  actionText: { fontSize: 13, fontWeight: '600' },

  locationText: { fontSize: 13, color: '#444', marginBottom: 10 },
  mapImage: {
    marginTop: 12,
    width: '100%',
    height: 160,
    borderRadius: 8,
  },

  bottomButton: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    backgroundColor: 'blue',
    paddingVertical: 16,
    alignItems: 'center',
  },
  bottomButtonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});
