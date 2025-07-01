import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

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

  // Different time slots for each date
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

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.wrapper}>

        {/* Header */}
        <View style={styles.header}>
          <TouchableOpacity style={styles.backBtn}>
            <Text style={styles.backArrow}>←</Text>
          </TouchableOpacity>
          <Text style={styles.headerText}>Dr Sreemoyee Maitra</Text>
        </View>

        {/* Date Tabs */}
        <View style={styles.dateTabs}>
          {dates.map((d, index) => (
            <TouchableOpacity
              key={index}
              onPress={() => {
                setSelectedDate(d.date);
                setSelectedTime(null); // reset selected time
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
        </View>

        {/* Slots Container */}
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
                      selectedTime === slot ? styles.activeSlot : {},
                    ]}
                  >
                    <Text
                      style={[
                        styles.slotText,
                        selectedTime === slot ? styles.activeSlotText : {},
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
      <TouchableOpacity style={styles.continueBtn}>
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
  backBtn: {
    marginRight: 10,
  },
  backArrow: {
    fontSize: 22,
  },
  headerText: {
    fontSize: 17,
    fontWeight: '600',
  },

  dateTabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  dateBox: {
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  activeDateBox: {
    backgroundColor: '#007aff',
    borderRadius: 6,
  },
  day: {
    fontSize: 11,
    color: '#999',
  },
  date: {
    fontSize: 16,
    fontWeight: '600',
    color: '#222',
  },
  month: {
    fontSize: 11,
    color: '#999',
  },
  activeText: {
    color: '#fff',
  },

  slotContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
    elevation: 2,
  },
  periodBlock: {
    marginBottom: 14,
  },
  periodTitle: {
    fontSize: 14,
    fontWeight: '600',
    marginBottom: 10,
  },
  slotRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  timeSlot: {
    borderWidth: 1,
    borderColor: '#ccc',
    paddingVertical: 6,
    paddingHorizontal: 14,
    borderRadius: 20,
    margin: 5,
  },
  activeSlot: {
    backgroundColor: '#007aff',
    borderColor: '#007aff',
  },
  slotText: {
    fontSize: 13,
  },
  activeSlotText: {
    color: '#fff',
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
