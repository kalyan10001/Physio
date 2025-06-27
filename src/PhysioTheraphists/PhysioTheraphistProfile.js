import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import rightarrow from '../assets/images/healthtipsscreen/rightarrow.png';
import maleicon from '../assets/images/physiotheraphistscreen/male-icon.png';
import femaleicon from '../assets/images/physiotheraphistscreen/female-icon.png';
import cuppingtherapy from '../assets/images/physioprofilescreen/cuppingtherapy.jpg';
import hydrotherapy from '../assets/images/physioprofilescreen/hydrotherapy.jpg';
import dryneedling from '../assets/images/physioprofilescreen/dry-needling.png';
import police from '../assets/images/physioprofilescreen/police.png';
import qualification from '../assets/images/physioprofilescreen/qualification.png';
import specialization from '../assets/images/physioprofilescreen/specialization.png';
import { useNavigation } from '@react-navigation/native';

export default function PhysioTheraphistProfile({ route }) {
  // Dummy data
  const { item } = route.params;
  const navigation=useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Image source={rightarrow} style={styles.backIcon} />
          </TouchableOpacity>
          <Text style={styles.headerText}>Physio Profile</Text>
        </View>

        {/* Profile Info */}
        <View style={styles.profileContainer}>
          <TouchableOpacity style={styles.profileImageWrapper}>
            <Image
              source={item.gender === 'male' ? maleicon : femaleicon}
              style={styles.profileImage}
            />
          </TouchableOpacity>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.physioType}>{item.physiotherapy}</Text>
          <Text style={styles.qualification}>{item.qualification}</Text>
          <Text style={styles.dob}>DOB : {item.dob}</Text>

          {/* Rating */}
          <View style={styles.ratingRow}>
            {Array.from({ length: 5 }).map((_, idx) => {
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
            <Text style={styles.reviewText}>( Based on 2K+ Reviews )</Text>
          </View>

          {/* Address */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Address</Text>
          </View>
          <Text style={styles.address}>{item.address}</Text>

          {/* Certificates */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Certificates</Text>
          </View>
          <View style={styles.iconRow}>
            {[specialization, qualification, police].map((icon, index) => (
              <View key={index} style={styles.iconWrapper}>
                <View style={styles.iconBox}>
                  <Image source={icon} style={styles.icon} />
                </View>
                <TouchableOpacity style={styles.viewBtn}>
                  <Text style={styles.viewBtnText}>View</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>

          {/* Speciality Skills */}
          <View style={styles.sectionHeader}>
            <Text style={styles.sectionHeaderText}>Speciality Skills</Text>
          </View>
          <View style={styles.iconRow}>
            {[dryneedling, hydrotherapy, cuppingtherapy].map((skill, index) => (
              <View key={index} style={styles.iconWrapper}>
                <View style={styles.skillBox}>
                  <Image source={skill} style={styles.skillImage} />
                </View>
                <TouchableOpacity style={styles.viewBtn}>
                  <Text style={styles.viewBtnText}>View</Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#30C3EA26',
  },
  scrollView: {
    minHeight: '100%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 10,
    gap: 8,
  },
  backIcon: {
    width: 35,
    height: 35,
  },
  headerText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#22285C',
  },
  profileContainer: {
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: 16,
    paddingVertical: 16,
    marginTop:-15,
  },
  profileImageWrapper: {
    borderRadius: 100,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.8,
    shadowRadius: 4.65,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 65,
  },
  name: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  physioType: {
    fontSize: 19,
    fontWeight: '600',
    color: '#6A6A6A',
  },
  qualification: {
    fontSize: 18,
    fontWeight: '600',
    color: '#22285C',
  },
  dob: {
    fontSize: 15,
    color: '#6A6A6A',
  },
  ratingRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  reviewText: {
    fontSize: 13,
    color: '#22285C',
    marginLeft: 5,
  },
  sectionHeader: {
    backgroundColor: '#22285C',
    borderRadius: 20,
    paddingHorizontal: 12,
    paddingVertical: 6,
    marginTop: 12,
  },
  sectionHeaderText: {
    fontSize: 11,
    color: '#fff',
    fontWeight: '600',
  },
  address: {
    fontSize: 11,
    textAlign: 'center',
    paddingHorizontal: 16,
    fontWeight: 'bold',
  },
  iconRow: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    marginTop: 10,
  },
  iconWrapper: {
    alignItems: 'center',
    gap: 6,
  },
  iconBox: {
    padding: 12,
    borderWidth: 1,
    borderColor: '#6A6A6A',
    borderRadius: 10,
    alignItems: 'center',
  },
  icon: {
    width: 35,
    height: 35,
  },
  viewBtn: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    backgroundColor: '#00123F',
    borderRadius: 999,
  },
  viewBtnText: {
    fontSize: 8,
    color: '#fff',
    fontWeight: '600',
  },
  skillBox: {
    borderWidth: 1,
    borderColor: '#6A6A6A',
    borderRadius: 10,
    overflow: 'hidden',
  },
  skillImage: {
    width: 75,
    height: 75,
    borderRadius: 10,
  },
});


