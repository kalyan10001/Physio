

import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
const policies = [
  'Terms & Condition',
  'Privacy Policy',
  'Return Policy',
  'Consultation Policy'
];

const PolicyScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Image
            source={require('../assets/images/myhealthscreen/arrow-left.png')}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Policy</Text>
      </View>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.content}>
        {policies.map((item, index) => (
          <TouchableOpacity key={index} style={styles.card}>
            <Image
              source={require('../assets/images/myhealthscreen/doc.png')}
              style={styles.icon}
            />
            <Text style={styles.cardText}>{item}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default PolicyScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    paddingHorizontal: 16,
    paddingTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    backgroundColor: '#4A4A4A', // Slightly dark grey circle
    borderRadius: 25,
    width: 42,
    height: 42,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 18,
    height: 18,
    tintColor: '#fff',
  },
  title: {
    flex: 1,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    textAlign: 'center',
    marginRight: 42, // To offset the space occupied by backButton
  },
  content: {
    padding: 16,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#DDD',
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    marginBottom: 12,
    backgroundColor: '#fff',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
    resizeMode: 'contain',
  },
  cardText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: '#000',
  },
});
