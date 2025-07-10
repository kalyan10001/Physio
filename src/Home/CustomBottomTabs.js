import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Image,
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  Pressable,
} from 'react-native';
import Services from '../Physio/Physio';
import HomeScreen from "./HomeScreen";
import MyHealthScreen from '../MyHealth/MyHealthScreen';

const Tab = createBottomTabNavigator();
const screenWidth = Dimensions.get('window').width;

const tabIcons = {
  Home: require('../assets/images/bottomtab/tab1.png'),
  Physios: require('../assets/images/bottomtab/tab2.png'),
  'PainSense AI': require('../assets/images/bottomtab/tab3.png'),
  'My Health': require('../assets/images/bottomtab/tab4.png'),
};

// Custom button to suppress Android ripple effect
const NoRippleButton = (props) => (
  <Pressable android_ripple={{ color: 'transparent' }} style={{ flex: 1 }} {...props} />
);

const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
        tabBarButton: (props) => <NoRippleButton {...props} />,
        tabBarIcon: ({ focused }) => {
          const icon = tabIcons[route.name];
          return (
            <View style={styles.tabItem}>
              <View style={styles.iconWrapper}>
                <Image
                  source={icon}
                  style={[
                    styles.icon,
                    { tintColor: focused ? '#4FD1C5':'#FFFFFF', opacity: focused ? 1 : 0.7 },
                  ]}
                />
                {/* {focused && <View style={styles.activeUnderline} />} */}
              </View>
              <Text
                numberOfLines={1}
                style={[
                  styles.tabLabel,
                  {
                    color: focused ? '#4FD1C5' : '#FFFFFF',
                    opacity: focused ? 1 : 0.7,
                  },
                ]}
              >
                {route.name}
              </Text>
            </View>
          );
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Physios" component={Services} />
      <Tab.Screen name="PainSense AI" component={Services} />
      <Tab.Screen name="My Health" component={MyHealthScreen} />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    backgroundColor: '#095D7E',
    height: 80,
    marginHorizontal: 12,
    marginBottom: 16,
    borderRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: Platform.OS === 'ios' ? 25 : 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 20,
  },
  tabItem: {
    alignItems: 'center',
    justifyContent: 'center',
    width: screenWidth / 4,
  },
  iconWrapper: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  icon: {
    width: 26,
    height: 24,
    resizeMode: 'contain',
  },
  activeUnderline: {
    position: 'absolute',
    bottom: -30,
    height: 3,
    width: 60,
    backgroundColor: '#00B2FF',
    borderRadius: 2,
  },
  tabLabel: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 13,
    color: '#FFFFFF',
    marginTop: 6,
    textAlign: 'center',
  },
});

export default BottomTabs;
