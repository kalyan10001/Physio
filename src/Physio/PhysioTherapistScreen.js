import React, { useState } from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  Modal,
  ScrollView,
} from 'react-native';
import { useRoute ,useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';

const doctorsData = [
  {
    id: '1',
    name: 'Dr. Sreemoyee Maitra',
    experience: '10 years Experience as MPT (Neurology), BPT',
    rating: 4.8,
    type: 'MPT',
    image: require('../assets/images/services/doc1.png'),
    tags: ['Online', 'Home', 'In-Clinic'],
  },
  {
    id: '2',
    name: 'Dr. Aritra Biswas',
    experience: '10 years Experience as BPT',
    rating: 4.5,
    type: 'BPT',
    image: require('../assets/images/services/doc1.png'),
    tags: ['Online', 'Home'],
  },
  {
    id: '3',
    name: 'Dr. Nandini Verma',
    experience: '10 years Experience as MPT',
    rating: 4.7,
    type: 'MPT',
    image: require('../assets/images/services/doc1.png'),
    tags: ['In-Clinic', 'Home'],
  },
  {
    id: '4',
    name: 'Dr. Arghya Das',
    experience: '10 years Experience as BPT',
    rating: 4.6,
    type: 'BPT',
    image: require('../assets/images/services/doc1.png'),
    tags: ['Online', 'In-Clinic'],
  },
  {
    id: '5',
    name: 'Dr. Nilkanta Patel',
    experience: '10 years Experience as MPT',
    rating: 4.9,
    type: 'MPT',
    image: require('../assets/images/services/doc1.png'),
    tags: ['Online', 'Home', 'In-Clinic'],
  },
  {
    id: '6',
    name: 'Dr. Sibu Das',
    experience: '10 years Experience as BPT',
    rating: 4.4,
    type: 'BPT',
    image: require('../assets/images/services/doc1.png'),
    tags: ['Home'],
  },
];

const DoctorCard = ({ doctor, onPress }) => {
    const navigation = useNavigation();
  return (
     <View style={styles.card}>
      {/* Top Section */}
      <View style={styles.topRow}>
        {/* Doctor Image */}
        <Image
          source={require("../assets/images/services/doc1.png")} // Replace with actual image
          style={styles.image}
        />

        {/* Info */}
        <View style={styles.info}>
          <View style={styles.nameRow}>
            <Text style={styles.name}>{doctor.name}</Text>
            <Text style={styles.pt}>(PT)</Text>
          </View>
          <Text style={styles.specialization}>Neuro Physiotherapist</Text>
          <Text style={styles.degrees}>{doctor.type}</Text>
          <Text style={styles.experience}>({doctor.experience.slice(0,19)})</Text>
        </View>

        {/* Video Icon */}
        <TouchableOpacity style={styles.videoIcon} onPress={() => navigation.navigate('DocterProfile')}>
          <Image source={require('../assets/images/physioscreen/video.png')} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
      </View>

      {/* Divider */}
      <View style={styles.divider} />
      <View style={styles.statsRow}>
        <View style={styles.statItem}>
          <Image source={require('../assets/images/physioscreen/verified.png')} style={{ width: 16, height: 16 }} />
          <Text style={styles.statText}>GetPhysio Verified</Text>
          <View style={styles.verticaldivider} />
        </View>
        <View style={styles.statItem}>
          <Image source={require('../assets/images/physioscreen/star.png')} style={{ width: 16, height: 16 }} />
          <Text style={styles.statText}>{doctor.rating} Rating</Text>
          <View style={styles.verticaldivider} />
        </View>
        <View style={styles.statItem}>
          <Image source={require('../assets/images/physioscreen/wallet.png')} style={{ width: 16, height: 16 }} />
          <Text style={styles.statText}>₹ 700</Text>
        </View>
      </View>
        <View style={styles.divider} />

      {/* Buttons */}
      <View style={styles.buttonRow}>
        <TouchableOpacity style={styles.contactBtn} onPress={() => navigation.navigate('DocterProfile')}>
          <Image source={require('../assets/images/physioscreen/phone.png')} style={{ width: 20, height: 20 ,tintColor: '#222222'}} />
          <Text style={styles.contactText}>Contact Clinic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.bookBtn} onPress={() => navigation.navigate('DocterProfile')}>
          <Text style={styles.bookText}>Book Clinic Visit</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const PhysiotherapistScreen = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const feature = route.params?.feature ?? null;
  const [sortByRating, setSortByRating] = useState(false);
  const [qualificationModalVisible, setQualificationModalVisible] = useState(false);
  const [consultationModalVisible, setConsultationModalVisible] = useState(false);
  const [selectedQualification, setSelectedQualification] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const handleConsultationPress = (type) => {
    navigation.navigate('Consultation', { type });
  };

  let filteredDoctors = [...doctorsData];

  if (selectedQualification) {
    filteredDoctors = filteredDoctors.filter((doc) => doc.type === selectedQualification);
  }
  if (selectedType) {
    filteredDoctors = filteredDoctors.filter((doc) => doc.tags.includes(selectedType));
  }
  if (searchTerm) {
    filteredDoctors = filteredDoctors.filter((doc) =>
      doc.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  if (sortByRating) {
    filteredDoctors.sort((a, b) => b.rating - a.rating);
  }

  if (feature) {
    console.log('Filtering by feature:', feature);
    filteredDoctors = filteredDoctors.filter((doc) => doc.tags.includes(feature));
  }

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      <View style={styles.headerImageContainer}>
        <Image source={require('../assets/images/services/team.jpg')} style={styles.headerImage} />
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>
        <View style={styles.searchBar}>
          <Feather name="search" size={20} color="#888" style={styles.searchIcon} />
          <TextInput
            placeholder="Search for Physiotherapist"
            placeholderTextColor="#999"
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={setSearchTerm}
          />
        </View>
      </View>

      <View style={styles.filtersContainer}>
        <TouchableOpacity style={styles.filterBtn} onPress={() => setSortByRating(!sortByRating)}>
          <MaterialIcons name="sort" size={16} color="#000" />
          <Text style={styles.filterText}>Sort by</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} onPress={() => setQualificationModalVisible(true)}>
          <Text style={styles.filterText}>Filter by: {selectedQualification}</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} onPress={() => setConsultationModalVisible(true)}>
          <Text style={styles.filterText}>Consultation Type {selectedType !== null ? `: ${selectedType}` : ''}</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={filteredDoctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <DoctorCard doctor={item} onPress={handleConsultationPress} />
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />

      {/* Qualification Modal */}
      <Modal
        visible={qualificationModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setQualificationModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {['MPT', 'BPT'].map((qual) => (
              <TouchableOpacity
                key={qual}
                style={styles.modalOption}
                onPress={() => {
                  setSelectedQualification(qual);
                  setQualificationModalVisible(false);
                }}
              >
                <Text style={styles.modalOptionText}>{qual}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                setSelectedQualification(null);
                setQualificationModalVisible(false);
              }}
            >
              <Text style={[styles.modalOptionText, { color: 'red' }]}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Consultation Modal */}
      <Modal
        visible={consultationModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setConsultationModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalContent}>
            {['Online', 'Home', 'In-Clinic'].map((type) => (
              <TouchableOpacity
                key={type}
                style={styles.modalOption}
                onPress={() => {
                  setSelectedType(type);
                  setConsultationModalVisible(false);
                }}
              >
                <Text style={styles.modalOptionText}>{type}</Text>
              </TouchableOpacity>
            ))}
            <TouchableOpacity
              style={styles.modalOption}
              onPress={() => {
                setSelectedType(null);
                setConsultationModalVisible(false);
              }}
            >
              <Text style={[styles.modalOptionText, { color: 'red' }]}>Clear</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
};

export default PhysiotherapistScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  headerImageContainer: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#ddd',
    position: 'relative',
  },
  searchIcon: {
    marginRight: 8,
  },
  headerImage: { width: '100%', height: '100%', resizeMode: 'cover' },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 10,
     backgroundColor: '#4C4C4C',
    borderRadius: '100%',
    padding: 10,
    elevation: 4,
  },
  searchBar: {
    position: 'absolute',
    bottom: 10,
    alignSelf: 'center',
    width: '90%',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 6,
    flexDirection: 'row',
    alignItems: 'center',
    elevation: 5,
  },
  searchInput: { flex: 1, fontFamily: 'Montserrat-Medium',fontSize: 15, color: '#000' },
  filtersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 8,
  },
  filterBtn: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderRadius: 8,
    borderWidth: 0.3,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 4,
    height: 35,
  },
  filterText: { marginLeft: 4, fontFamily:'Montserrat-Medium',fontSize: 10, color: '#333' },
    card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 14,
    margin: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 6,
    elevation: 4,
    borderColor: '#eee',
    borderWidth: 1,
  },
  topRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  image: {
    width: 64,
    height: 64,
    borderRadius: 8,
    marginRight: 12,
  },
  info: {
    flex: 1,
  },
  nameRow: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  name: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 16,
    color: '#111',
  },
  pt: {
    fontSize: 14,
    color: '#666',
    marginLeft: 4,
  },
  specialization: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 14,
    color: '#555',
    marginTop: 2,
  },
  degrees: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: '#444',
    marginTop: 2,
  },
  experience: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: '#999',
    marginTop: 2,
  },
  videoIcon: {
    borderRadius: 20,
    padding: 6,
    alignSelf: 'flex-end',
  },
  divider: {
    borderBottomWidth: 1,
    borderColor: '#eee',
    marginVertical: 5,
  },
  verticaldivider: {
    borderBottomHeight: 1,
    borderColor: '#eee',
    marginHorizontal: 5,
  },
  statsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 5,
    justifyContent: 'space-between',
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  statText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 12,
    marginLeft: 6,
    color: '#333',
  },
  buttonRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contactBtn: {
    flex: 1,
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#0077A9',
    borderRadius: 8,
    padding: 10,
    alignItems: 'center',
    gap: 8,
    marginRight: 8,
  },
  bookBtn: {
    flex: 1,
    backgroundColor: '#0077A9',
    borderRadius: 8,
    paddingVertical: 10,
    alignItems: 'center',
    marginLeft: 8,
  },
  contactText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#0077A9',
  },
  bookText: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    color: '#fff',
  },
  // card: {
  //   margin: 10,
  //   padding: 12,
  //   borderRadius: 10,
  //   gap: 5,
  //   backgroundColor: '#fff',
  //   elevation: 5,
  // },
  // cardHeader: { flexDirection: 'row', alignItems: 'center' },
  // profileImage: { width: 60, height: 60, borderRadius: 100, marginRight: 14 },
  // name: { fontSize: 15, fontFamily: 'Montserrat-SemiBold', color: '#222' },
  // pt: { fontSize: 14, fontFamily: 'Montserrat-SemiBold', color: '#666' },
  // specialty: { fontFamily: 'Montserrat-Medium',fontSize: 11, color: '#666' },
  // experience: { fontSize: 13, fontFamily: 'Montserrat-Medium', color: '#666' },
  // ratingBox: {
  //   backgroundColor: '#007B83',
  //   borderRadius: 12,
  //   paddingHorizontal: 6,
  //   paddingVertical: 4,
  //   alignItems: 'center',
  //   flexDirection: 'row',
  // },
  // ratingStar: { color: '#fff', fontSize: 13, marginRight: 2 },
  // ratingValue: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  // tagRow: {
  //   flexDirection: 'row',
  //   justifyContent: 'flex-start',
  //   flexWrap: 'nowrap',
  //   marginTop: 12,
  // },
  // tagBox: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   borderWidth: 1,
  //   borderColor: '#ccc',
  //   borderRadius: 10,
  //   paddingHorizontal: 6,
  //   paddingVertical: 6,
  //   marginRight: 6,
  //   flex: 1,
  //   maxWidth: '31%',
  // },
  // tagTextTop: { fontSize: 11, fontFamily: 'Montserrat-Medium', color: '#000', lineHeight: 16 },
  // tagTextBottom: { fontSize: 11, fontFamily: 'Montserrat-Medium',color: '#444', lineHeight: 14 },
  modalOverlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)',
  },
  modalContent: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  modalOption: {
    paddingVertical: 12,
  },
  modalOptionText: {
    fontSize: 16,
    color: '#007B83',
    flexShrink: 1,
  },
});
