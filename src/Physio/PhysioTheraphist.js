import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
  StyleSheet,
  Modal,
  ActivityIndicator,
} from 'react-native';

import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import rightarrow from '../assets/images/healthtipsscreen/rightarrow.png';
import sort from '../assets/images/healthtipsscreen/sort.png';
import filter from '../assets/images/healthtipsscreen/filter.png';
import consultation from '../assets/images/physiotheraphistscreen/consultation.png';
import maleicon from '../assets/images/physiotheraphistscreen/male-icon.png';
import femaleicon from '../assets/images/physiotheraphistscreen/female-icon.png';
import videocall from '../assets/images/physiotheraphistscreen/videocall.png';
import homeconsultation from '../assets/images/physiotheraphistscreen/homeconsultation.png';
import consultationicon from '../assets/images/physiotheraphistscreen/consultationicon.png';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function PhysioTheraphist({ route }) {
  const { physiotype = 'orthopedic', feature = 'Online' } = route?.params || {};
  const [search, setSearch] = useState('');
  const [initialCount, setInitialCount] = useState(3);
  const [heading, setHeading] = useState('');
  const [visible, setVisible] = useState(false);
  const [physioTherapists, setPhysioTherapists] = useState([]);
  const [therapists, setTherapists] = useState([]);
  const [searchTherapists, setSearchTherapists] = useState([]);
  const [selectedConsultations, setSelectedConsultations] = useState({});
  const [loading, setLoading] = useState(false);
  const [allLoaded, setAllLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const dummyData = [
      {
        name: 'Dr. John Doe',
        gender: 'male',
        physiotherapy: 'Orthopedic',
        specializations: ['Joint Pain', 'Back Pain'],
        experience: '10 yrs',
        rating: 4,
        qualification: 'BPT, MPT',
        consultancy_type: 'Online, In-Clinic,Home',
        dob: '15.03.1985',
        address: 'Sector 5, Salt Lake, Kolkata, West Bengal 700091',
      },
      {
        name: 'Dr. Priya Reddy',
        gender: 'female',
        physiotherapy: 'Orthopedic',
        specializations: ['Stroke Rehab', 'Multiple Sclerosis'],
        experience: '7 yrs',
        rating: 5,
        qualification: 'MPT Neuro',
        consultancy_type:'Online, In-Clinic,Home',
        dob: '22.11.1988',
        address: 'Banjara Hills, Hyderabad, Telangana 500034',
      },
      {
        name: 'Dr. Aakash Mehta',
        gender: 'male',
        physiotherapy: 'Orthopedic',
        specializations: ['Delayed Milestones', 'Cerebral Palsy'],
        experience: '5 yrs',
        rating: 4,
        qualification: 'BPT, MPT Pediatrics',
        consultancy_type:'Online, In-Clinic,Home',
        dob: '03.08.1990',
        address: 'Juhu, Mumbai, Maharashtra 400049',
      },
      {
        name: 'Dr. Neha Sharma',
        gender: 'female',
        physiotherapy: 'Orthopedic',
        specializations: ['Post-Operative Rehab', 'Breathing Therapy'],
        experience: '9 yrs',
        rating: 4,
        qualification: 'MPT Cardiopulmonary',
        consultancy_type: 'Online, In-Clinic,Home',
        dob: '09.01.1987',
        address: 'Kharadi, Pune, Maharashtra 411014',
      },
      {
        name: 'Dr. Ramesh Verma',
        gender: 'male',
        physiotherapy: 'Orthopedic',
        specializations: ['Injury Rehab', 'Performance Training'],
        experience: '6 yrs',
        rating: 3,
        qualification: 'MPT Sports',
        consultancy_type: 'Online, In-Clinic,Home',
        dob: '26.06.1989',
        address: 'Indiranagar, Bangalore, Karnataka 560038',
      },
      {
        name: 'Dr. Anjali Iyer',
        gender: 'female',
        physiotherapy: 'Orthopedic',
        specializations: ['Fall Prevention', 'Joint Stiffness'],
        experience: '11 yrs',
        rating: 5,
        qualification: 'MPT Geriatrics',
        consultancy_type: 'Online, In-Clinic,Home',
        dob: '14.12.1982',
        address: 'Adyar, Chennai, Tamil Nadu 600020',
      },
      {
        name: 'Dr. Sandeep Singh',
        gender: 'male',
        physiotherapy: 'Orthopedic',
        specializations: ['Arthritis', 'Post-Fracture Therapy'],
        experience: '8 yrs',
        rating: 4,
        qualification: 'BPT, MPT Ortho',
        consultancy_type: 'Online, In-Clinic,Home',
        dob: '07.07.1986',
        address: 'Civil Lines, Delhi, 110054',
      },
      {
        name: 'Dr. Meera Joshi',
        gender: 'female',
        physiotherapy: 'Neurological',
        specializations: ['Parkinson\'s', 'Spinal Cord Injury'],
        experience: '10 yrs',
        rating: 5,
        qualification: 'MPT Neuro',
        consultancy_type: 'Online, In-Clinic,Home',
        dob: '30.09.1985',
        address: 'Paldi, Ahmedabad, Gujarat 380007',
      },
    ];

    const filtered = dummyData.filter(
      item =>
        item.physiotherapy.toLowerCase().includes(physiotype.toLowerCase()) ||
        item.specializations.some(spec =>
          spec.toLowerCase().includes(physiotype.toLowerCase())
        )
    );

    // Initialize selected consultations for each therapist
    const initialSelections = {};
    filtered.forEach(therapist => {
      initialSelections[therapist.name] = therapist.consultancy_type.includes(feature) 
        ? feature 
        : therapist.consultancy_type.split(', ')[0];
    });

    setPhysioTherapists(filtered);
    setTherapists(filtered.slice(0, initialCount));
    setSearchTherapists(filtered);
    setSelectedConsultations(initialSelections);
  }, [physiotype, feature]);

  const handleSort = () => {
    setHeading('Sort By');
    setVisible(true);
  };

  const handleFilter = () => {
    setHeading('Filter By');
    setVisible(true);
  };

  const handleConsultation = () => {
    setHeading('Consultation Type');
    setVisible(true);
  };

  const handleChange = (value) => {
    if (heading === 'Sort By') {
      const sorted = [...physioTherapists].sort((a, b) => b.rating - a.rating);
      setSearchTherapists(sorted);
      setTherapists(sorted.slice(0, initialCount));
      setInitialCount(3);
      setVisible(false);
    } else if (heading === 'Filter By') {
      const filtered = [...physioTherapists].filter(item =>
        item.qualification.toLowerCase().includes(value.toLowerCase())
      );
      setSearchTherapists(filtered);
      setTherapists(filtered.slice(0, initialCount));
      setInitialCount(3);
      setVisible(false);
    } else {
      const filtered = [...physioTherapists].filter(item =>
        item.consultancy_type.toLowerCase().includes(value.toLowerCase())
      );
      setSearchTherapists(filtered);
      setTherapists(filtered.slice(0, initialCount));
      setInitialCount(3);
      setVisible(false);
    }
  };

  const handleSearch = () => {
    const filtered = [...physioTherapists].filter(item =>
      item.name.toLowerCase().includes(search.toLowerCase())
    );
    setTherapists(filtered.slice(0, initialCount));
    setSearchTherapists(filtered);
    setInitialCount(3);
    setAllLoaded(false);
  };

  const handleConsultationSelect = (type, therapistName) => {
    setSelectedConsultations(prev => ({
      ...prev,
      [therapistName]: type
    }));
  };

  const isCloseToBottom = ({layoutMeasurement, contentOffset, contentSize}) => {
    const paddingToBottom = 20;
    return (
      layoutMeasurement.height + contentOffset.y >=
      contentSize.height - paddingToBottom
    );
  };

  const loadMore = () => {
    if (loading || allLoaded) return;
    
    setLoading(true);
    setTimeout(() => {
      const newCount = initialCount + 3;
      if (newCount >= searchTherapists.length) {
        setTherapists([...searchTherapists]);
        setAllLoaded(true);
      } else {
        setTherapists(searchTherapists.slice(0, newCount));
        setInitialCount(newCount);
      }
      setLoading(false);
    }, 1000);
  };



  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={rightarrow} style={styles.icon35} />
        </TouchableOpacity>
        <Text style={styles.title}>Physiotherapists</Text>
      </View>

      <View style={styles.searchSection}>
        <View style={styles.searchBox}>
          <TextInput
            style={styles.searchInput}
            placeholder="Search Doctors"
            placeholderTextColor="#00000080"
            value={search}
            onChangeText={setSearch}
            onSubmitEditing={handleSearch}
          />
          <TouchableOpacity onPress={handleSearch}>
            <Feather name="search" size={25} color="#00000040" />
          </TouchableOpacity>
        </View>

        <View style={styles.filterRow}>
          <TouchableOpacity style={styles.filterBtn} onPress={handleSort}>
            <Image source={sort} style={styles.icon15} />
            <Text style={styles.filterText}>Sort</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterBtn} onPress={handleFilter}>
            <Image source={filter} style={styles.icon15} />
            <Text style={styles.filterText}>Filter</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.filterBtn} onPress={handleConsultation}>
            <Image source={consultation} style={styles.icon15} />
            <Text style={styles.filterText}>Consultation Type</Text>
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView 
        contentContainerStyle={styles.scroll} 
        showsVerticalScrollIndicator={false}
        onScroll={({nativeEvent}) => {
          if (isCloseToBottom(nativeEvent)) {
            loadMore();
          }
        }}
        scrollEventThrottle={400}
      >
        {therapists.length > 0 ? (
          therapists.map((item, index) => (
            <View key={index} style={styles.card}>
              <TouchableOpacity
                style={styles.cardTop}
                onPress={() => navigation.navigate('DocterProfile', { item })}
              >
                <View style={{ width: '33%' }}>
                  <Image
                    source={item.gender === 'male' ? maleicon : femaleicon}
                    style={styles.avatar}
                  />
                </View>

                <View style={styles.cardDetails}>
                  <Text style={styles.cardName}>{item.name}</Text>
                  <Text style={styles.cardSpecial}>{item.physiotherapy}</Text>
                  <View style={styles.cardRow}>
                    <Text style={styles.expText}>{item.experience} Experience</Text>
                    <Text style={styles.divider}>|</Text>
                    <View style={styles.starRow}>
                      {[...Array(5)].map((_, idx) => {
                        const filled = idx < item.rating;
                        return (
                          <FontAwesome
                            key={idx}
                            name={filled ? 'star' : 'star-o'}
                            size={16}
                            color={filled ? '#fbbf24' : '#d1d5db'}
                          />
                        );
                      })}
                    </View>
                  </View>
                  <Text style={styles.cardQualification}>{item.qualification}</Text>
                </View>
              </TouchableOpacity>

              <View style={styles.cardBottom}>
                {['Online', 'In-Clinic', 'Home'].map((type, idx) => {
                  const isSelected = selectedConsultations[item.name] === type;
                  const icon = [videocall, consultationicon, homeconsultation][idx];
                  const isAvailable = item.consultancy_type.includes(type);
                  
                  return (
                    <View key={idx} style={styles.consultOption}>
                      <TouchableOpacity 
                        style={[
                          styles.consultBtn,
                          isSelected && isAvailable && styles.selectedConsultBtn,
                          !isAvailable && styles.disabledConsultBtn
                        ]} 
onPress={() => {
  if (isAvailable) {
    handleConsultationSelect(type, item.name);
    if (type === 'Online') {
      navigation.navigate('VideoCall', { therapist: item });
    }
  }
}}
                        disabled={!isAvailable}
                      >
                        <Image 
                          source={icon} 
                          style={[
                            styles.icon20,
                            isSelected && isAvailable && { tintColor: 'white' },
                            !isAvailable && { tintColor: '#aaa' }
                          ]} 
                        />
                      </TouchableOpacity>
                      <Text style={[
                        styles.consultText,
                        isSelected && isAvailable && styles.selectedConsultText,
                        !isAvailable && styles.disabledConsultText
                      ]}>
                        {type} Consultation
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          ))
        ) : (
          <Text style={{ textAlign: 'center', marginTop: 20 }}>No therapists found</Text>
        )}

        {loading && (
          <View style={styles.loadingContainer}>
            <ActivityIndicator size="large" color="#22285C" />
          </View>
        )}

        {allLoaded && therapists.length > 0 && (
          <Text style={styles.endMessage}>No more therapists to show</Text>
        )}
      </ScrollView>

      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => setVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeading}>{heading}</Text>
            
            {heading === 'Sort By' && (
              <TouchableOpacity 
                style={styles.modalOption} 
                onPress={() => handleChange('rating')}
              >
                <Text style={styles.modalOptionText}>Rating (High to Low)</Text>
              </TouchableOpacity>
            )}
            
            {heading === 'Filter By' && (
              <>
                <TouchableOpacity 
                  style={styles.modalOption} 
                  onPress={() => handleChange('BPT')}
                >
                  <Text style={styles.modalOptionText}>BPT</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.modalOption} 
                  onPress={() => handleChange('MPT')}
                >
                  <Text style={styles.modalOptionText}>MPT</Text>
                </TouchableOpacity>
              </>
            )}
            
            {heading === 'Consultation Type' && (
              <>
                <TouchableOpacity 
                  style={styles.modalOption} 
                  onPress={()=>{
                     handleChange('Online');
                  }}
                >
                  <Text style={styles.modalOptionText}>Online</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.modalOption} 
                  onPress={() => handleChange('In-Clinic')}
                >
                  <Text style={styles.modalOptionText}>In-Clinic</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                  style={styles.modalOption} 
                  onPress={() => handleChange('Home')}
                >
                  <Text style={styles.modalOptionText}>Home</Text>
                </TouchableOpacity>
              </>
            )}
            
            <TouchableOpacity 
              style={styles.modalClose} 
              onPress={() => setVisible(false)}
            >
              <Text style={styles.modalCloseText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30C3EA26',
  },
  scroll: {
    paddingBottom: 80,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    padding: 10,
    marginTop: 0,
    marginBottom:5,
  },
  icon35: { width: 35, height: 35 },
  icon20: { width: 20, height: 20 },
  icon15: { width: 15, height: 15 },
  title: { fontSize: 22, fontWeight: 'bold', color: '#22285C' ,marginLeft:55},
  searchSection: { padding: 10, gap: 12 },
  searchBox: {
    backgroundColor: '#E9E9E9',
    borderRadius: 50,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 10,
    marginTop: -10,
    height: 40,
  },
  searchInput: { flex: 1, fontSize: 17, color: 'black', fontWeight: '600' },
  filterRow: { flexDirection: 'row', justifyContent: 'space-between' },
  filterBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    backgroundColor: '#E9E9E9',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderRadius: 50,
    elevation: 10,
    height: 40,
  },
  filterText: { fontSize: 15, fontWeight: '500', color: '#22285C' },
  card: {
    marginHorizontal: 16,
    marginVertical: 5,
    padding: 12,
    backgroundColor: 'white',
    borderRadius: 16,
    elevation: 5,
  },
  cardTop: { flexDirection: 'row', marginBottom: 5 },
  cardDetails: { width: '67%', justifyContent: 'center', gap: 3 },
  cardName: { fontSize: 20, fontWeight: 'bold' },
  cardSpecial: { fontSize: 15, color: '#6A6A6A', fontWeight: '600' },
  expText: { fontSize: 12, fontWeight: '500' },
  divider: { fontSize: 14, color: '#6B7280', marginHorizontal: 5 },
  cardRow: { flexDirection: 'row', alignItems: 'center', gap: 5 },
  starRow: { flexDirection: 'row' },
  cardQualification: { fontSize: 15, fontWeight: 'bold', color: '#22285C' },
  cardBottom: { flexDirection: 'row', justifyContent: 'space-around', marginTop: 10 },
  consultOption: { alignItems: 'center', width: '25%' },
  consultBtn: { 
    padding: 8, 
    borderRadius: 50, 
    backgroundColor: '#22285C20',
  },
  selectedConsultBtn: {
    backgroundColor: '#22285C',
  },
  disabledConsultBtn: {
    backgroundColor: '#f0f0f0',
  },
  consultText: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#22285C',
    marginTop: 4,
  },
  selectedConsultText: {
    color: '#22285C',
    fontWeight: 'bold',
  },
  disabledConsultText: {
    color: '#aaa',
  },
  avatar: {
    width: 90,
    height: 90,
    resizeMode: 'contain',
    borderRadius: 45,
    alignSelf: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
  },
  modalHeading: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#22285C',
    textAlign: 'center',
  },
  modalOption: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  modalOptionText: {
    fontSize: 16,
    color: '#22285C',
  },
  modalClose: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#22285C',
    borderRadius: 5,
    alignItems: 'center',
  },
  modalCloseText: {
    color: 'white',
    fontSize: 16,
  },
  loadingContainer: {
    padding: 20,
    alignItems: 'center',
  },
  endMessage: {
    textAlign: 'center',
    marginVertical: 20,
    color: '#666',
  },
});