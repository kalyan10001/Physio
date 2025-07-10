import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, ScrollView, StyleSheet, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';

import rightarrow from "../assets/images/healthtipsscreen/rightarrow.png";
import morning from "../assets/images/viewslotsscreen/morning.png";
import afternoon from "../assets/images/viewslotsscreen/afternoon.png";
import evening from "../assets/images/viewslotsscreen/evening.png";
import night from "../assets/images/viewslotsscreen/night.png";

const slotData = [
  {
    label: 'Today, 16 Jun',
    date: '16 Jun',
    slotsAvailable: 19,
    slots: ['08:00 AM', '09:15 AM', '11:00 AM', '12:30 PM', '01:00 PM', '02:15 PM', '05:00 PM', '06:30 PM']
  },
  {
    label: 'Tomorrow, 17 Jun',
    date: '17 Jun',
    slotsAvailable: 23,
    slots: ['07:45 AM', '08:30 AM', '10:00 AM', '12:00 PM', '01:15 PM', '03:00 PM', '05:15 PM', '06:00 PM', '08:00 PM', '09:15 PM']
  },
  {
    label: 'Wed, 18 Jun',
    date: '18 Jun',
    slotsAvailable: 34,
    slots: ['07:30 AM', '09:00 AM', '10:30 AM', '12:15 PM', '02:00 PM', '03:15 PM', '05:30 PM', '06:45 PM', '08:30 PM']
  },
  {
    label: 'Thu, 19 Jun',
    date: '19 Jun',
    slotsAvailable: 12,
    slots: ['08:00 AM', '09:45 AM', '01:00 PM', '02:30 PM', '05:45 PM']
  },
  {
    label: 'Fri, 20 Jun',
    date: '20 Jun',
    slotsAvailable: 15,
    slots: ['10:15 AM', '12:45 PM', '01:30 PM', '05:15 PM', '06:00 PM', '08:45 PM']
  }
];

// Categorize time slots
const categorizeSlots = (slots) => {
  const times = {
    Morning: [],
    Afternoon: [],
    Evening: [],
    Night: []
  };

  slots.forEach(time => {
    const hour = parseInt(time.split(':')[0]);
    const meridian = time.includes('AM') ? 'AM' : 'PM';

    if (meridian === 'AM' && hour < 12) {
      times.Morning.push(time);
    } else if ((meridian === 'PM' && hour >= 12 && hour < 5) || (meridian === 'AM' && hour === 12)) {
      times.Afternoon.push(time);
    } else if (meridian === 'PM' && hour >= 5 && hour < 8) {
      times.Evening.push(time);
    } else {
      times.Night.push(time);
    }
  });

  return times;
};

const ViewSlotsScreen = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const navigation = useNavigation();
  const currentSlots = categorizeSlots(slotData[selectedIndex].slots);

  const renderTabs = ({ item, index }) => (
    <TouchableOpacity
      style={[styles.tab, selectedIndex === index && styles.selectedTab]}
      onPress={() => setSelectedIndex(index)}
    >
      <Text style={styles.tabText}>{item.label}</Text>
      <Text style={styles.slotCount}>{item.slotsAvailable} slots available</Text>
    </TouchableOpacity>
  );

  const renderSlotGroup = (title, slots) => (
    slots.length > 0 && (
      <View key={title} style={styles.section}>
        <View style={styles.sectionHeader}>
          <Image
            source={
              (title === 'Morning') ? morning :
              (title === 'Afternoon') ? afternoon :
              (title === 'Evening') ? evening : night
            }
            style={{ height: 20, width: 20 }}
          />
          <Text style={styles.sectionTitle}>{title}</Text>
          <Text style={styles.sectionDescription}>{slots.length} slots</Text>
        </View>
        <View style={styles.slotGroup}>
          {slots.map((time, idx) => (
            <TouchableOpacity
              key={idx}
              style={styles.slotButton}
              onPress={() =>
                navigation.navigate('Consultation', {
                  time,
                  date: slotData[selectedIndex].label
                })
              }
            >
              <Text style={styles.slotText}>{time}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    )
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.topHeader}>
        <TouchableOpacity style={{ borderRadius: 9999 }} onPress={() => navigation.goBack()}>
          <Image source={rightarrow} style={{ width: 35, height: 35 }} />
        </TouchableOpacity>
        <Text style={styles.pageTitle}>VIEW SLOTS</Text>
      </View>

      <FlatList
        horizontal
        data={slotData}
        keyExtractor={(item, index) => index.toString()}
        renderItem={renderTabs}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.tabList}
        style={{ height: 70, paddingVertical: 10, flexGrow: 0 }}
      />

      <Text style={styles.dateTitle}>{slotData[selectedIndex].label}</Text>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {Object.entries(currentSlots).map(([title, slots]) => renderSlotGroup(title, slots))}
      </ScrollView>
    </SafeAreaView>
  );
};

export default ViewSlotsScreen;

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#30C3EA26',
    flex: 1
  },
  topHeader: {
    width: '100%',
    paddingHorizontal: 0,
    paddingVertical: 0,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 8,
    alignItems: 'center',
    marginBottom: 10
  },
  pageTitle: {
    fontSize: 20,
    fontFamily: 'Poppins',
    fontWeight: '700',
    color: '#22285C'
  },
  tabList: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: 70,
    paddingBottom: 10
  },
  tab: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    backgroundColor: '#F0F0F0',
    borderRadius: 8,
    marginRight: 10
  },
  selectedTab: {
    borderWidth: 1,
    borderColor: '#007AFF',
    backgroundColor: '#E8F4FF'
  },
  tabText: {
    fontSize: 14,
    fontWeight: '500'
  },
  slotCount: {
    fontSize: 12,
    color: 'green'
  },
  dateTitle: {
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '600',
    marginVertical: 12
  },
  section: {
    marginBottom: 15
  },
  sectionHeader: {
    flexDirection: 'row',
    gap: 5
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 8
  },
  sectionDescription: {
    color: 'gray',
    fontSize: 15,
    fontWeight: '400',
    marginBottom: 8
  },
  slotGroup: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8
  },
  slotButton: {
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 6,
    margin: 5
  },
  slotText: {
    color: 'blue',
    fontSize: 14
  }
});
