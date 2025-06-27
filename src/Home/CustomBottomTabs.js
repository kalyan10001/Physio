import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Image, View, Text } from 'react-native';
import HomeScreen from './HomeScreen';
import MyHealthScreen from '../PhysioTheraphists/MyHealthScreen';
import HomeNav from './HomeNav';

const Tab = createBottomTabNavigator();

const tabIcons = {
  Home: {
    active: require('../assets/images/bottomtab/home.png'),
    inactive: require('../assets/images/bottomtab/lighthome.png'),
  },
  Physios: {
    active: require('../assets/images/bottomtab/darkphysio.png'),
    inactive: require('../assets/images/bottomtab/rehabilitation.png'),
  },
  LabTests: {
    active: require('../assets/images/bottomtab/bloodtest.png'),
    inactive: require('../assets/images/bottomtab/bloodtest.png'),
  },
  MyHealth: {
    active: require('../assets/images/bottomtab/darkmyhealth.png'),
    inactive: require('../assets/images/bottomtab/medicalrecords.png'),
  },
};

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarLabel: ({ focused, color }) => (
          <Text style={{
            fontSize: 12,
            fontWeight: focused ? '600' : '500',
            color,
            marginBottom: 5,
          }}>
            {route.name}
          </Text>
        ),
        tabBarIcon: ({ focused }) => {
          const iconSource = focused
            ? tabIcons[route.name].active
            : tabIcons[route.name].inactive;

          return (
            <Image
              source={iconSource}
              style={{
                width: 26,
                height: 26,
                resizeMode: 'contain',
                tintColor: route.name === 'LabTests' ? undefined : focused ? '#001B5E' : '#888',
              }}
            />
          );
        },
        tabBarActiveTintColor: '#001B5E',
        tabBarInactiveTintColor: '#999',
        tabBarStyle: {
          backgroundColor: '#fff',
          height: 70,
          paddingBottom: 8,
          paddingTop: 8,
          borderTopLeftRadius: 16,
          borderTopRightRadius: 16,
          position: 'absolute',
          shadowColor: '#000',
          shadowOffset: { width: 0, height: -2 },
          shadowOpacity: 0.1,
          shadowRadius: 6,
          elevation: 10,
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Physios" component={HomeScreen} />
      <Tab.Screen name="LabTests" component={HomeScreen} />
      <Tab.Screen name="MyHealth" component={MyHealthScreen} />
    </Tab.Navigator>
  );
};

export default BottomTabs;
