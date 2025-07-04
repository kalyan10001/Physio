import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyHealthScreen = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Top Profile Card */}
        <View style={styles.profileCard}>
          <Image
            source={require("../assets/images/homescreen/faceicon.jpg")} // Replace with your local image if needed
            style={styles.avatar}
          />
          <View>
            <Text style={styles.name}>Venkate Kalyan</Text>
            <Text style={styles.phone}>+91 8497937244</Text>
            <Text style={styles.email}>venkatakalyan1000@gmail.com</Text>
            <TouchableOpacity style={styles.edit} onPress={() => navigation.navigate("EditProfile")}>
              <Text style={styles.editProfile}>Edit Profile</Text>
              <Image source={require("../assets/images/myhealthscreen/expandleft.png")} style={{height: 5,width: 5}} />
            </TouchableOpacity>
          </View>
        </View>

        {/* 3 Stats Section */}
        <View style={styles.statsRow} >
          <TouchableOpacity style={styles.statBox} onPress={() => navigation.navigate('HealthScore')}>
            <Text style={styles.statValue}>123</Text>
            <Text style={styles.statLabel}>My Health Score</Text>
          </TouchableOpacity>
          <View style={styles.statBox}>
            <Image source={require("../assets/images/myhealthscreen/Desk_alt_light.png")} style={styles.statValue} />
            <Text style={styles.statLabel}>My Conversation</Text>
          </View>
          <TouchableOpacity style={styles.statBox} onPress={() => navigation.navigate("MyBooking")}>
              <Image source={require("../assets/images/myhealthscreen/Alarmclock_light.png")} style={styles.statValue} />
            <Text style={styles.statLabel}>My Bookings</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menu}>
          {[
            { imageUrl: require("../assets/images/myhealthscreen/painsense-ai.png") ,label: 'PainSense AI', badge: 'New' },
            { imageUrl: require("../assets/images/myhealthscreen/profile.png") , label: 'My Profile' },
            { imageUrl: require("../assets/images/myhealthscreen/healht-analysis.png") ,label: 'Health Analysis Report' },
            { imageUrl: require("../assets/images/myhealthscreen/Pin_alt_light.png") ,label: 'Find nearby Clinic' },
            { imageUrl: require("../assets/images/myhealthscreen/call.png") ,label: 'Request a call back' },
            { imageUrl: require("../assets/images/myhealthscreen/Question_light.png") ,label: 'FAQ' },
            { imageUrl: require("../assets/images/myhealthscreen/call.png") ,label: 'Need Help?' },
            { imageUrl: require("../assets/images/myhealthscreen/File_dock_search_light.png") ,label: 'Policies' },
          ].map((item, idx) => (
            <TouchableOpacity key={idx} style={styles.menuItem} onPress={() => item.label === 'Health Analysis Report' ? navigation.navigate('MyReport') : (item.label === 'My Profile') ? navigation.navigate('MyProfile') : (item.label === 'FAQ') ? navigation.navigate('FAQ') : (item.label === 'Policies') ? navigation.navigate('Policy') : (item.label === 'Request a call back') ? navigation.navigate("CallBack") : null}>
              <View style={{ flexDirection: 'row', alignItems: 'center',gap: 10 }}>
                <Image source={item.imageUrl} style={{height: 10,width: 10}} />
                <Text style={styles.menuText}>{item.label}</Text>
                {item.badge && (
                  <View style={styles.badge}>
                    <Text style={styles.badgeText}>{item.badge}</Text>
                  </View>
                )}
              </View>
            </TouchableOpacity>
          ))}
        </View>

        {/* Logout */}
        <TouchableOpacity style={styles.logoutBtn}>
          <Image source={require("../assets/images/myhealthscreen/logout.png")} style={{height:20,width:20}} />
          <Text style={styles.logoutText}> Log Out</Text>
        </TouchableOpacity>
      </ScrollView>
      {/* Bottom Navigation */}
    </SafeAreaView>
  );
};

export default MyHealthScreen;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  profileCard: {
    backgroundColor: '#0A7DA8',
    flexDirection: 'row',
    margin: 10,
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  avatar: {
    height: 80,
    width: 80,
    borderRadius: 40,
    marginRight: 15,
  },
  name: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    fontWeight: 600,
    color: '#fff',
  },
  phone: {
    fontFamily:'Montserrat-Regular',
    color: '#fff',
    fontWeight: 400,
    fontSize: 13,
  },
  email: {
    fontFamily:'Montserrat-Regular',
    color: '#fff',
    fontWeight: 400,
    fontSize: 13,
    marginBottom: 4,
  },
  edit:{
    flexDirection:'row',
    alignItems:'center',
    gap: 5,
  },
  editProfile: {
    fontFamily:'Montserrat-Regular',
    color: 'rgba(79, 209, 197, 1)',
    fontSize: 12,
    fontWeight: 600,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 10,
    justifyContent: 'center',
    paddingHorizontal: 10,
    paddingBottom: 5,
    backgroundColor: '#fff',
  },
  statBox: {
    width: '30%',
    borderWidth:1,
    padding: 10,
    borderRadius: 10,
    borderColor: '#BEBEBE80',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  statValue: {
    alignItems: 'center',
    width: 40,
    height: 40,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  statLabel: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 500,
    fontSize: 10,
    color: '#000000',
    textAlign: 'center',
  },
  menu: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#BEBEBE80',
    backgroundColor: '#fff',
    paddingHorizontal: 15,
    paddingTop: 10,
  },
  menuItem: {
    borderBottomWidth: 1,
    borderColor: '#f0f0f0',
    paddingVertical: 15,
  },
  menuText: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: '#000000',
  },
  badge: {
    fontFamily:'Montserrat-Regular',
    backgroundColor: '#007aff',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 10,
    marginLeft: 8,
  },
  badgeText: {
    color: '#fff',
    fontSize: 10,
  },
  logoutBtn: {
    flexDirection: 'row',
    borderColor: '#f00',
    borderWidth: 1,
    margin:20,
    marginBottom: 100,
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    gap: 15,
  },
  logoutText: {
    fontFamily: 'Montserrat-Regular',
    color: '#f00',
    fontWeight: 'bold',
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: '#0A3E4C',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  navItem: {
    alignItems: 'center',
  },
  navText: {
    color: '#cdd3d5',
    fontSize: 12,
  },
  activeNavText: {
    color: '#00FFCC',
    fontWeight: 'bold',
  },
  activeIndicator: {
    height: 3,
    backgroundColor: '#00FFCC',
    marginTop: 2,
    width: 20,
    borderRadius: 1,
  },
});

