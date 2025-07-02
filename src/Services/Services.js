import React from 'react';
import {
  View,
  Text,
  TextInput,
  ImageBackground,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

const doctors = [
  { name: 'Dr. Anupra Das', image: require('../assets/images/services/doc1.png') },
  { name: 'Dr. Mehta', image: require('../assets/images/services/doc2.png') },
  { name: 'Dr. Anko Biswas', image: require('../assets/images/services/doc3.png') },
  { name: 'Dr. Sneha Roy', image: require('../assets/images/services/doc4.png') }
];

const specialties = [
  { title: 'Lower Back Pain', desc: 'Relieve lower back pain with expert care and therapy.', image: require('../assets/images/services/backpain.png') },
  { title: 'Cerebral Palsy', desc: 'Empowering lives with expert therapy support for Cerebral Palsy.', image: require('../assets/images/services/cerebral.png') },
  { title: 'Autism', desc: 'Supporting every step of a child’s autism developmental care journey.', image: require('../assets/images/services/autism.png') },
  { title: 'Neck & Shoulder Pain', desc: 'Find relief for neck and shoulder pain through therapy.', image: require('../assets/images/services/heart.png') },
  { title: 'Stroke Rehab', desc: 'Boost recovery with personalized stroke rehabilitation care.', image: require('../assets/images/services/spinal.png') },
  { title: 'Cerebral Palsy', desc: 'Expert support for managing Cerebral Palsy.', image: require('../assets/images/services/cerebral.png') }
];

export default function Services() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 100 }}
      >
        <ImageBackground
          source={require('../assets/images/services/team.jpg')}
          style={styles.headerImage}
          imageStyle={{ borderBottomLeftRadius: 15, borderBottomRightRadius: 15 }}
        >
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color="#000" />
          </TouchableOpacity>

          <TextInput
            style={styles.searchBarOverlay}
            placeholder="Search for Physiotherapist"
            placeholderTextColor="#888"
          />
        </ImageBackground>

        <View style={styles.iconTextRow1}>
          <Feather name="users" size={20} color="#555" style={styles.sectionIcon} />
          <Text style={styles.sectionTitle}>Recommended Doctors for you</Text>
        </View>

        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.doctorScroll}>
          {doctors.map((doc, index) => (
            <TouchableOpacity key={index} style={styles.doctorItem} onPress={() => {navigation.navigate('DocterProfile')}}>
              <Image source={doc.image} style={styles.doctorImage} />
              <Text style={styles.doctorName}>{doc.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        <Image
          source={require('../assets/images/services/main.png')}
          style={styles.bannerImage}
        />

        <View style={styles.iconTextRow2}>
          <Feather name="list" size={20} color="#555" style={styles.sectionIcon} />
          <Text style={styles.otherSpecialities}>Other Specialities</Text>
        </View>

        {specialties.map((item, index) => (
          <TouchableOpacity key={index} style={styles.specialityCard} onPress={() => {navigation.navigate('PhysioTherapist')}}>
            <Image source={item.image} style={styles.specialityImage} />
            <View style={styles.specialityInfo}>
              <Text style={styles.specialityTitle}>{item.title}</Text>
              <Text style={styles.specialityDesc}>{item.desc}</Text>
            </View>
            <MaterialIcons name="keyboard-arrow-right" size={24} color="#007bff" style={styles.arrowBtn} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  headerImage: {
    width: width,
    height: 250,
    justifyContent: 'flex-end',
    paddingHorizontal: 16,
    paddingBottom: 20
  },
  backButton: {
    position: 'absolute',
    top: 15,
    left: 15,
    backgroundColor: '#ffffffcc',
    padding: 6,
    borderRadius: 20,
    zIndex: 2
  },
  searchBarOverlay: {
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 4
  },
  iconTextRow1: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 0
  },
  iconTextRow2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 16,
    marginTop: 20,
    marginBottom: 20
  },
  sectionIcon: {
    marginRight: 8
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600'
  },
  doctorScroll: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginTop: 12
  },
  doctorItem: {
    alignItems: 'center',
    marginRight: 18
  },
  doctorImage: {
    width: 64,
    height: 64,
    borderRadius: 32
  },
  doctorName: {
    marginTop: 6,
    fontSize: 13,
    textAlign: 'center',
    maxWidth: 80
  },
  bannerImage: {
    width: width - 32,
    height: 200,
    resizeMode: 'cover',
    marginTop: 10,
    alignSelf: 'center',
    borderRadius: 16
  },
  otherSpecialities: {
    fontSize: 20,
    fontWeight: '600'
  },
  specialityCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 12,
    marginHorizontal: 16,
    marginBottom: 16,
    borderColor: 'black',
    borderWidth: 0.2,
    overflow: 'hidden',
    alignItems: 'center'
  },
  specialityImage: {
    width: 90,
    height: 90,
    borderTopLeftRadius: 12,
    borderBottomLeftRadius: 12
  },
  specialityInfo: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 10
  },
  specialityTitle: {
    fontSize: 16,
    fontWeight: '600'
  },
  specialityDesc: {
    fontSize: 13,
    color: '#666',
    marginTop: 4
  },
  arrowBtn: {
    paddingHorizontal: 16
  }
});
