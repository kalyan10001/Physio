import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

const doctors = [
  {
    id: '1',
    name: 'Dr. Sreemoyee Maitra',
    experience: '10 years of Experience as MPT (Neurology), BPT',
    rating: 4.8,
    image: require('../assets/images/services/doc1.png'),
    tags: ['Online', 'Home', 'In-Clinic'],
  },
  {
    id: '2',
    name: 'Dr. Aritra Biswas',
    experience: '10 years of Experience as MPT (Neurology), BPT',
    rating: 4.5,
    image: require('../assets/images/services/doc1.png'),
    tags: ['Online', 'Home'],
  },
  {
    id: '3',
    name: 'Dr. Nandini Verma',
    experience: '10 years of Experience as MPT (Neurology), BPT',
    rating: 4.7,
    image: require('../assets/images/services/doc1.png'),
    tags: ['In-Clinic', 'Home'],
  },
  {
    id: '4',
    name: 'Dr. Arghya Das',
    experience: '10 years of Experience as MPT (Neurology), BPT',
    rating: 4.6,
    image: require('../assets/images/services/doc1.png'),
    tags: ['Online', 'In-Clinic'],
  },
  {
    id: '5',
    name: 'Dr. Nilkanta Patel',
    experience: '10 years of Experience as MPT (Neurology), BPT',
    rating: 4.9,
    image: require('../assets/images/services/doc1.png'),
    tags: ['Online', 'Home', 'In-Clinic'],
  },
  {
    id: '6',
    name: 'Dr. Sibu Das',
    experience: '10 years of Experience as MPT (Neurology), BPT',
    rating: 4.4,
    image: require('../assets/images/services/doc1.png'),
    tags: ['Home'],
  },
];

const DoctorCard = ({ doctor }) => {
    const navigation = useNavigation();

  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image source={doctor.image} style={styles.profileImage} />
        <View style={{ flex: 1 }}>
          <Text style={styles.name}>
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

      <View style={styles.tagRow}>
        {doctor.tags.map((tag, index) => {
          let icon = 'location-on';
          if (tag === 'Online') icon = 'call';
          else if (tag === 'Home') icon = 'home';

          return (
            <TouchableOpacity key={index} style={styles.tagBox} onPress={()=>navigation.navigate('Consultation')}>
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

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#fff" barStyle="dark-content" />
      
      {/* Header with Image and Back Button */}
      <View style={styles.headerImageContainer}>
        <Image
          source={require('../assets/images/services/team.jpg')}
          style={styles.headerImage}
        />
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons name="arrow-back" size={24} color="#000" />
        </TouchableOpacity>

        <View style={styles.searchBar}>
          <TextInput
            placeholder="Search for Physiotherapist"
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
        </View>
      </View>

      <View style={styles.filters}>
        <TouchableOpacity style={styles.filterBtn}>
          <MaterialIcons name="sort" size={16} color="#000" />
          <Text style={styles.filterText}>Sort by</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <MaterialIcons name="filter-list" size={16} color="#000" />
          <Text style={styles.filterText}>Filter by: BPT</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.filterBtn}>
          <Ionicons name="options-outline" size={16} color="#000" />
          <Text style={styles.filterText}>Consultation Type: Online</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={doctors}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <DoctorCard doctor={item} />}
        contentContainerStyle={{ paddingBottom: 100 }}
        showsVerticalScrollIndicator={false}
      />
    </SafeAreaView>
  );
};

export default PhysiotherapistScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerImageContainer: {
    width: '100%',
    height: 250,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    overflow: 'hidden',
    backgroundColor: '#ddd',
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
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
  searchInput: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  filters: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    paddingTop: 12,
    paddingBottom: 8,
  },
  filterBtn: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    borderWidth: 0.3,
    alignItems: 'center',
  },
  filterText: {
    marginLeft: 4,
    fontSize: 12,
    color: '#333',
  },
  card: {
    margin: 10,
    padding: 12,
    borderRadius: 10,
    backgroundColor: '#fff',
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    width: 54,
    height: 54,
    borderRadius: 27,
    marginRight: 12,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#222',
  },
  pt: {
    fontSize: 13,
    fontWeight: '400',
    color: '#666',
  },
  specialty: {
    fontSize: 13,
    color: '#666',
  },
  experience: {
    fontSize: 12,
    fontWeight: '400',
    color: '#666',
  },
  ratingBox: {
    backgroundColor: '#007B83',
    borderRadius: 12,
    paddingHorizontal: 6,
    paddingVertical: 4,
    alignItems: 'center',
    flexDirection: 'row',
  },
  ratingStar: {
    color: '#fff',
    fontSize: 12,
    marginRight: 2,
  },
  ratingValue: {
    color: '#fff',
    fontSize: 13,
    fontWeight: 'bold',
  },
  tagRow: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
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
    marginRight: 10,
    marginBottom: 6,
  },
  tagTextTop: {
    fontSize: 12,
    fontWeight: '600',
    color: '#000',
    lineHeight: 16,
  },
  tagTextBottom: {
    fontSize: 11,
    color: '#444',
    lineHeight: 14,
  },
});
