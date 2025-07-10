import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
  Image,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Ionicons from 'react-native-vector-icons/Ionicons';

const { width } = Dimensions.get('window');

const TimeSlots = () => {
  const [selectedDate, setSelectedDate] = useState('25');
  const [selectedTime, setSelectedTime] = useState(null);

  const dates = [
    { day: 'SUN', date: '23', month: 'JUN' },
    { day: 'MON', date: '24', month: 'JUN' },
    { day: 'TUE', date: '25', month: 'JUN' },
    { day: 'WED', date: '26', month: 'JUN' },
    { day: 'THU', date: '27', month: 'JUN' },
    { day: 'FRI', date: '28', month: 'JUN' },
  ];

  const timeSlotData = {
    '23': {
      Morning: ['08:30 AM', '09:00 AM'],
      Afternoon: ['12:30 PM'],
      Evening: ['06:30 PM', '07:30 PM'],
    },
    '24': {
      Morning: ['09:30 AM', '10:30 AM'],
      Afternoon: ['02:00 PM', '03:00 PM'],
      Evening: ['05:00 PM', '06:00 PM'],
    },
    '25': {
      Morning: ['09:30 AM', '10:30 AM', '11:30 AM'],
      Afternoon: ['03:30 AM', '04:30 AM'],
      Evening: ['05:30 AM', '06:30 AM', '07:30 AM', '08:30 AM', '09:30 AM', '10:30 AM'],
    },
    '26': {
      Morning: ['07:00 AM'],
      Afternoon: ['01:00 PM', '02:00 PM'],
      Evening: ['07:00 PM'],
    },
    '27': {
      Morning: ['10:00 AM'],
      Afternoon: ['12:00 PM', '01:00 PM'],
      Evening: ['06:00 PM', '07:00 PM'],
    },
    '28': {
      Morning: ['08:00 AM'],
      Afternoon: ['03:00 PM'],
      Evening: ['08:00 PM'],
    },
  };

  const timeSlots = timeSlotData[selectedDate];
  const navigation=useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>

        {/* Header */}
        <View style={styles.header}>
              
                <View style={styles.headerContent}>
                  <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Image
                                  source={require('../assets/images/myhealthscreen/arrow-left.png')}
                                  style={{ width: 24, height: 24 }}
                                />
                  </TouchableOpacity>
              
                  <Text style={styles.headerText}>Dr Sreemoyee Maitra</Text>
              
                  {/* Spacer to balance layout */}
                  <View style={{ width: 32 }} />
                </View>
              </View>

        {/* Date Tabs */}
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.dateTabs}>
          {dates.map((d, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedDate(d.date);
                setSelectedTime(null);
              }}
              style={[
                styles.dateBox,
                selectedDate === d.date && styles.activeDateBox,
              ]}
            >
              <Text style={[styles.day, selectedDate === d.date && styles.activeText]}>{d.day}</Text>
              <Text style={[styles.date, selectedDate === d.date && styles.activeText]}>{d.date}</Text>
              <Text style={[styles.month, selectedDate === d.date && styles.activeText]}>{d.month}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* Time Slots */}
        <View style={styles.slotContainer}>
          {Object.entries(timeSlots).map(([period, slots]) => (
            <View key={period} style={styles.periodBlock}>
              <Text style={styles.periodTitle}>{period}</Text>
              <View style={styles.slotRow}>
                {slots.map((slot) => (
                  <TouchableOpacity
                    key={slot}
                    onPress={() => setSelectedTime(slot)}
                    style={[
                      styles.timeSlot,
                      selectedTime === slot && styles.activeSlot,
                    ]}
                  >
                    <Text
                      style={[
                        styles.slotText,
                        selectedTime === slot && styles.activeSlotText,
                      ]}
                    >
                      {slot}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueBtn} onPress={()=>navigation.navigate('Consultation')}>
        <Text style={styles.continueText}>Select & Continue @ ₹900</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default TimeSlots;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   header: {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
  marginBottom: 20,
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

  dateTabs: {
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  dateBox: {
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: '#f2f2f2',
    marginRight: 10,
    width: 90,
  },
  activeDateBox: {
    backgroundColor: '#0A7BA5',
  },
  day: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: '#666',
  },
  date: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  month: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: '#666',
  },
  activeText: {
    color: '#fff',
  },

  slotContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 14,
    padding: 16,
    marginBottom: 20,
    elevation: 1,
  },
  periodBlock: {
    marginBottom: 16,
  },
  periodTitle: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    marginBottom: 10,
    color: '#333',
  },
  slotRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeSlot: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
    margin: 5,
    backgroundColor: '#fff',
  },
  activeSlot: {
    backgroundColor: '#0A7BA5',
    borderColor: '#0A7BA5',
  },
  slotText: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  activeSlotText: {
    color: '#fff',
    fontWeight: '600',
  },

  continueBtn: {
    margin: 16,
    backgroundColor: '#0A7BA5',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
    borderRadius: 10,
  },
  continueText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
