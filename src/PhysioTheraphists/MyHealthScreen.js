import React, { useState ,useCallback,useRef} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Dimensions, Image } from 'react-native';
import GestureRecognizer from 'react-native-swipe-gestures';
import rightarrow from '../assets/images/healthtipsscreen/rightarrow.png';
import { SafeAreaView } from 'react-native-safe-area-context';
// import CustomBottomTab from '../Home/CustomBottomTabs';

const MyHealthScreen = ({route,navigation}) => {

  const [activeTab, setActiveTab] = useState('Personal');
  const formDataRef = useRef({
  Name: 'Ganesh Pilla',
  Contact: '+91-9346092782',
  Email: 'ganeshpilla98765@gm... ⚠️',
  Gender: 'Male',
  Dob: '2004-08-15',
  Blood: 'B+',
  Marital: 'Single',
  Height: '5 ft 9 in',
  Weight: '70 kgs',
  Emergency: 'Ganesh Pilla +91-9346092782',
  Location: 'Visakhapatnam',
   allergies: 'No',
    currentMedications: 'No',
    pastMedications: 'No',
    chronicDiseases: 'No',
    injuries: 'No',
    surgeries: 'No',
    smokingHabits: "I don't smoke",
    alcoholConsumption: 'Non-drinker',
    activityLevel: 'Sedentary (low)',
    foodPreference: 'Non-Vegetarian',
    occupation: 'Student'
});
 const [formData,setFormData] = useState(formDataRef.current);
 useFocusEffect(
  useCallback(() => {
    // console.log(route.params?.updatedKey,route.params?.updatedValue);
    if (route.params?.updatedKey && route.params?.updatedValue) {
      const { updatedKey, updatedValue } = route.params;
         formDataRef.current[updatedKey] = updatedValue; // Update persistent ref
        setFormData({ ...formDataRef.current });

      // Clear params after update
      navigation.setParams({ updatedKey: null, updatedValue: null });
    }
  }, [route.params])
);
  const tabs = ['Personal', 'Medical', 'Lifestyle'];

  const swipeLeft = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex < tabs.length - 1) {
      setActiveTab(tabs[currentIndex + 1]);
    }
  };

  const swipeRight = () => {
    const currentIndex = tabs.indexOf(activeTab);
    if (currentIndex > 0) {
      setActiveTab(tabs[currentIndex - 1]);
    }
  };

  const renderTabContent = () => {
    switch (activeTab) {
      case 'Personal':
        return (
          <>
          {Object.entries(Object.fromEntries(Object.entries(formData).slice(0, 10))).map(([key ,value]) => (
                <Row label={key} value={value} />
          ))
         }
          </>
        );
      case 'Medical':
        return (
          <>
            {Object.entries(Object.fromEntries(Object.entries(formData).slice(11, 16))).map(([key ,value]) => (
                <Row label={key} value={value} />
          ))
         }
          </>
        );
      case 'Lifestyle':
        return (
            <>
         {Object.entries(Object.fromEntries(Object.entries(formData).slice(17, 21))).map(([key ,value]) => (
                <Row label={key} value={value} />
          ))
         }
         </>
        );
      default:
        return null;
    }
  };
  const Row = ({ label, value }) => (
  <TouchableOpacity style={styles.row}  onPress={() =>
    navigation.navigate('EditField', {
      label,
      value,
      remaining: '2 questions left',
      isPhone: (label === 'contact') ? true : false,
    })
  }>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </TouchableOpacity>
);
  return (
    <SafeAreaView style={styles.container}>
      {/* <View style={styles.header}>
        <Text style={styles.headerText}>Ganesh Pilla</Text>
      </View> */}
      <View style={styles.header}>
                {/* <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Image source={rightarrow} style={styles.backIcon} />
                </TouchableOpacity> */}
                <Text style={styles.headerText}>User Profile</Text>
              </View>
      <View style={styles.tabContainer}>
        {tabs.map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>
      <GestureRecognizer
        onSwipeLeft={swipeLeft}
        onSwipeRight={swipeRight}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.contentContainer}>
          {renderTabContent()}
        </ScrollView>
      </GestureRecognizer>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>Complete profile{"\n"}95% completed</Text>
      </TouchableOpacity>
        {/* <CustomBottomTab name={"MY HEALTH"} /> */}
    </SafeAreaView>
    
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
//   header: {
//     backgroundColor: '#3C3FC4',
//     padding: 15
//   },
//   headerText: {
//     color: '#fff',
//     fontSize: 18,
//     fontWeight: 'bold'
//   },
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
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#3C3FC4'
  },
  tab: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    alignItems:'center',
    justifyContent:'center',
    height:50
  },
  tabText: {
    color: '#ccc'
  },
  activeTab: {
    borderBottomWidth: 3,
    borderBottomColor: '#fff'
  },
  activeTabText: {
    color: '#fff',
    fontWeight: 'bold'
  },
  contentContainer: {
    padding: 16
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee'
  },
  label: {
    color: '#999'
  },
  value: {
    color: '#000'
  },
  button: {
    marginBottom:45,
    backgroundColor: '#00AEEF',
    padding: 14,
    alignItems: 'center'
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center'
  }
});

export default MyHealthScreen;