import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const { width } = Dimensions.get('window');

const MyReportsScreen = ({ navigation }) => {
  const sections = [
    {
      title: 'Our reports',
      data: [{ id: '1', date: '12-25-2025', showIcon: true }],
    },
    {
      title: 'Yesterday',
      data: [{ id: '2', date: '12-25-2025', day: 'Friday' }],
    },
    {
      title: 'Earlier this month',
      data: [
        { id: '3', date: '07-25-2025', day: 'Friday' },
        { id: '4', date: '05-25-2025', day: 'Monday' },
        { id: '5', date: '03-25-2025', day: 'Friday' },
      ],
    },
    {
      title: 'Earlier this Year',
      data: [
        { id: '6', date: '07-25-2025', day: 'Friday' },
        { id: '7', date: '05-25-2025', day: 'Monday' },
        { id: '8', date: '03-25-2025', day: 'Friday' },
        { id: '9', date: '05-25-2025', day: 'Monday' },
        { id: '10', date: '03-25-2025', day: 'Friday' },
      ],
    },
  ];

  const renderReportItem = ({ date, day, showIcon }) => (
    <View style={styles.reportRow}>
      <View style={styles.reportInfo}>
        {showIcon && (
          <Image
            source={require('../assets/images/myhealthscreen/doc.png')}
            style={styles.reportIcon}
          />
        )}
        <Text style={styles.dateText}>{date}</Text>
        {day && <Text style={styles.dayText}>{day}</Text>}
      </View>

      <View style={styles.actions}>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>Download</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText}>View</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>

        {/* Header Image & Title */}
          <View style={styles.header}>
        <Image
          source={require('../assets/images/myhealthscreen/report-icon.png')}
          style={styles.headerBackground}
        />
      
        <View style={styles.headerContent}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
            <Image
                          source={require('../assets/images/myhealthscreen/arrow-left.png')}
                          style={{ width: 24, height: 24 }}
                        />
          </TouchableOpacity>
      
          <Text style={styles.headerText}>My Reports</Text>
      
          {/* Spacer to balance layout */}
          <View style={{ width: 32 }} />
        </View>
      </View>
        {/* Search Box */}
        <View style={styles.searchBox}>
          <Image
            source={require('../assets/images/homescreen/search.png')}
            style={styles.searchIcon}
          />
          <TextInput
            placeholder="Search for Reports"
            placeholderTextColor="#888"
            style={styles.searchInput}
          />
        </View>

        {/* Sections */}
        <View style={styles.content}>
          {sections.map((section) => (
            <View key={section.title}>
              <Text style={styles.sectionTitle}>{section.title}</Text>
              {section.data.map((item) => (
                <View key={item.id}>
                  {renderReportItem(item)}
                </View>
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabText}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MyReportsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
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
  searchBox: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 20,
    backgroundColor: '#fff',
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 2,
    marginTop: -50,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 2,
  },
  searchIcon: {
    width: 20,
    height: 20,
    tintColor: '#888',
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
  },
  content: {
    paddingHorizontal: 20,
  },
  sectionTitle: {
    color: '#A0A0A0',
    fontSize: 14,
    fontWeight: '500',
    marginBottom: 10,
    marginTop: 14,
    fontFamily: 'Montserrat-Regular',
  },
  reportRow: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  reportInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  reportIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
    tintColor: '#4C4C4C'
  },
  dateText: {
    fontSize: 14,
    fontWeight: '500',
    marginRight: 8,
    fontFamily: 'Montserrat-Regular',
  },
  dayText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#444',
    fontFamily: 'Montserrat-Regular',
  },
  actions: {
    flexDirection: 'row',
    gap: 10,
  },
  btn: {
    backgroundColor: '#0077A9',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 6,
    marginLeft: 8,
  },
  btnText: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '500',
    fontFamily: 'Montserrat-Regular',
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
    backgroundColor: '#F0F0F0',
    borderRadius: 10,
    width: 60,
    height: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    elevation: 4,
  },
  fabText: {
    fontSize: 32,
    fontWeight: '400',
    color: '#333',
  },
});
