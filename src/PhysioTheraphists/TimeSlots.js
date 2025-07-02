import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
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
          <TouchableOpacity style={styles.backButton} onPress={()=>navigation.goBack()}>
            <Ionicons name="arrow-back" size={22} color="#000" />
          </TouchableOpacity>
          <Text style={styles.headerText}>Dr Sreemoyee Maitra</Text>
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
  wrapper: {
    paddingHorizontal: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 16,
    marginBottom: 10,
  },
  backButton: {
    marginRight: 12,
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderRadius: 25,
  },
  headerText: {
    fontSize: 18,
    fontWeight: '700',
  },

  dateTabs: {
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
    backgroundColor: '#007aff',
  },
  day: {
    fontSize: 13,
    color: '#666',
  },
  date: {
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
  month: {
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
    fontSize: 15,
    fontWeight: '700',
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
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  slotText: {
    fontSize: 13,
    fontWeight: '500',
    color: '#333',
  },
  activeSlotText: {
    color: '#fff',
    fontWeight: '600',
  },

  continueBtn: {
    backgroundColor: '#007aff',
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    borderTopWidth: 1,
    borderColor: '#eee',
  },
  continueText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
});
