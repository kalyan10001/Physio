import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
const cities = [
  { name: 'Kolkata', image: require('../assets/images/homescreen/kolkata.png') },
  { name: 'Bangalore', image: require('../assets/images/homescreen/bangalore.png') },
  { name: 'Hydrabad', image: require('../assets/images/homescreen/Hyderabad.png') },
  { name: 'Mumbai', image: require('../assets/images/homescreen/Mumbai.png') },
  { name: 'Delhi', image: require('../assets/images/homescreen/Delhi.png') },
  { name: 'Chennai', image: require('../assets/images/homescreen/Chennai.png') },
  { name: 'Lucknow', image: require('../assets/images/homescreen/lucknow.png') },
  { name: 'Pune', image: require('../assets/images/homescreen/pune.png') },
  { name: 'Agra', image: require('../assets/images/homescreen/agra.png') },
  { name: 'Punjab', image: require('../assets/images/homescreen/punjab.png') },
  { name: 'Patna', image: require('../assets/images/homescreen/patna.png') },
  { name: 'Chandigarh', image: require('../assets/images/homescreen/chandigarh.png') },
];


const CitySelectionScreen = ({ navigation }) => {
    const route = useRoute();
     const location = route.params?.location ?? null;
     console.log("location",location);
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerTop}>
          <TouchableOpacity onPress={() => navigation.goBack()} style={styles.iconButton}>
            <Image   source={require('../assets/images/myhealthscreen/arrow-left.png')} style={styles.icon} />
          </TouchableOpacity>
          <View style={styles.locationContainer}>
            <Image source={require('../assets/images/homescreen/location.png')} style={styles.locationIcon} />
            <Text style={styles.locationText}>{location}</Text>
          </View>
          <TouchableOpacity >
            <Image source={require('../assets/images/homescreen/notification.png')} style={styles.icon} />
          </TouchableOpacity>
        </View>
         <View style={styles.searchBar}>
                    <TouchableOpacity>
                    <Image source={require("../assets/images/homescreen/search.png")} styles={{width:20,height:20}} />
                    </TouchableOpacity>
                  <TextInput  placeholder={`Search for ${location}`} placeholderTextColor="#999" style={styles.searchInput} />
                </View>
      </View>

      {/* City Highlight */}
      <Image source={require('../assets/images/homescreen/main.png')} style={styles.mainImage} />

      {/* Grid */}
      <FlatList
        data={cities}
        keyExtractor={(item) => item.name}
        numColumns={3}
        contentContainerStyle={styles.grid}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.cityCard} onPress={() => navigation.navigate('BottomTabs', { screen: 'Home', params: { location: item.name } })}>
            <ImageBackground
              source={item.image}
              style={styles.cityImage}
              imageStyle={{ borderRadius: 12 }}
            >
            </ImageBackground>
          </TouchableOpacity>
        )}
      />
    </SafeAreaView>
  );
};

export default CitySelectionScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  header: {
    backgroundColor: '#066B88',
    paddingBottom: 20,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  headerTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  iconButton: {
    backgroundColor:'#4C4C4CCC',
    padding: 10,
    borderRadius: '100%',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  locationIcon: {
    width: 17,
    height: 17,
    tintColor: '#fff',
    marginRight: 4,
  },
  locationText: {
    fontFamily: 'Montserrat-SemiBold',
    color: '#fff',
    fontSize: 19,
  },
    searchBar: {
    flexDirection: 'row',
    backgroundColor: '#f1f1f1',
    margin: 16,
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 5,
    alignItems: 'center',
  },
  searchInput: {
    fontFamily: 'Montserrat-Medium',
    marginLeft: 8,
    flex: 1,
  },
  mainImage: {
    height: 150,
    width: '90%',
    marginTop: 20,
    borderRadius: 12,
    alignSelf: 'center',
  },
  grid: {
    paddingHorizontal: 14,
    paddingBottom: 30,
    marginTop: 16,
  },
  cityCard: {
    flex: 1 / 3,
    aspectRatio: 1,
    margin: 5,
  },
  cityImage: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  cityOverlay: {
    backgroundColor: 'rgba(0,0,0,0.3)',
    paddingVertical: 6,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
  },
  cityName: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 14,
    fontWeight: '600',
  },
});
