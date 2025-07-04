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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import Feather from 'react-native-vector-icons/Feather';

const doctorsData = [
  {
    id: '1',
    name: 'Dr. Sreemoyee Maitra',
    experience: '10 years of Experience as MPT (Neurology), BPT',
    rating: 4.8,
    type: 'MPT',
    image: require('../assets/images/services/doc1.png'),
    tags: ['Online', 'Home', 'In-Clinic'],
  },
  {
    id: '2',
    name: 'Dr. Aritra Biswas',
    experience: '10 years of Experience as BPT',
    rating: 4.5,
    type: 'BPT',
    image: require('../assets/images/services/doc1.png'),
    tags: ['Online', 'Home'],
  },
  {
    id: '3',
    name: 'Dr. Nandini Verma',
    experience: '10 years of Experience as MPT',
    rating: 4.7,
    type: 'MPT',
    image: require('../assets/images/services/doc1.png'),
    tags: ['In-Clinic', 'Home'],
  },
  {
    id: '4',
    name: 'Dr. Arghya Das',
    experience: '10 years of Experience as BPT',
    rating: 4.6,
    type: 'BPT',
    image: require('../assets/images/services/doc1.png'),
    tags: ['Online', 'In-Clinic'],
  },
  {
    id: '5',
    name: 'Dr. Nilkanta Patel',
    experience: '10 years of Experience as MPT',
    rating: 4.9,
    type: 'MPT',
    image: require('../assets/images/services/doc1.png'),
    tags: ['Online', 'Home', 'In-Clinic'],
  },
  {
    id: '6',
    name: 'Dr. Sibu Das',
    experience: '10 years of Experience as BPT',
    rating: 4.4,
    type: 'BPT',
    image: require('../assets/images/services/doc1.png'),
    tags: ['Home'],
  },
];

const DoctorCard = ({ doctor, onPress }) => {
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={doctor.image} style={styles.profileImage} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
            {doctor.name} <Text style={styles.pt}>(PT)</Text>
          </Text>
          <Text style={styles.specialty}>Neuro Physiotherapist</Text>
          <Text style={styles.experience}>{doctor.experience}</Text>
        </View>
        <View style={styles.ratingBox}>
          <Text style={styles.ratingStar}>⭐</Text>
          <Text style={styles.ratingValue}>{doctor.rating}</Text>
        </View>
      </View>

      {/* FIXED TAGS ROW TO BE IN 1 LINE */}
      <View style={styles.tagRow}>
        {doctor.tags.map((tag, index) => {
          let icon = 'location-on';
          if (tag === 'Online') icon = 'call';
          else if (tag === 'Home') icon = 'home';

          return (
            <TouchableOpacity key={index} style={styles.tagBox} onPress={() => onPress(tag)}>
              <MaterialIcons name={icon} size={18} color="#007B83" style={{ marginRight: 6 }} />
              <View>
                <Text style={styles.tagTextTop}>{tag}</Text>
                <Text style={styles.tagTextBottom}>Consultation</Text>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const PhysiotherapistScreen = () => {
  const navigation = useNavigation();
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
          <Text style={styles.filterText}>Sort by Rating</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} onPress={() => setQualificationModalVisible(true)}>
          <Text style={styles.filterText}>Filter by</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.filterBtn} onPress={() => setConsultationModalVisible(true)}>
          <Text style={styles.filterText}>Consultation Type</Text>
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
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 6,
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
  searchInput: { flex: 1, fontSize: 15, color: '#000' },
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
    marginBottom: 6,
    height: 35,
  },
  filterText: { marginLeft: 4, fontSize: 12, color: '#333', flexShrink: 1 },
  card: {
    margin: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 5,
  },
  cardHeader: { flexDirection: 'row', alignItems: 'center' },
  profileImage: { width: 60, height: 60, borderRadius: 100, marginRight: 14 },
  name: { fontSize: 16, fontWeight: 'bold', color: '#222' },
  pt: { fontSize: 14, fontWeight: '400', color: '#666' },
  specialty: { fontSize: 14, color: '#666' },
  experience: { fontSize: 14, fontWeight: '600', color: '#666' },
  ratingBox: {
    backgroundColor: '#007B83',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  ratingStar: { color: '#fff', fontSize: 13, marginRight: 2 },
  ratingValue: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
  tagRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'nowrap',
    marginTop: 12,
  },
  tagBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 6,
    marginRight: 6,
    flex: 1,
    maxWidth: '31%',
  },
  tagTextTop: { fontSize: 12, fontWeight: '600', color: '#000', lineHeight: 16 },
  tagTextBottom: { fontSize: 11, color: '#444', lineHeight: 14 },
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
