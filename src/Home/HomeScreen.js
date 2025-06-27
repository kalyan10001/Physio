import faceicon from "../assets/images/homescreen/faceicon.png";
import cart from "../assets/images/homescreen/cart.png";
import notification from "../assets/images/homescreen/notification.png";
import search from "../assets/images/homescreen/search.png";
import chevronright from "../assets/images/homescreen/chevronright.png";
import chevronleft from "../assets/images/homescreen/chevronleft.png";
import plus from "../assets/images/homescreen/plus.png";
import help1 from "../assets/images/homescreen/help1.png";
import help2 from "../assets/images/homescreen/help2.png";
import help3 from "../assets/images/homescreen/help3.png";
import help4 from "../assets/images/homescreen/help4.png";
import thumb from "../assets/images/homescreen/thumb.png";
import shake from "../assets/images/homescreen/shake.png";
import star from "../assets/images/star.png";
import staro from "../assets/images/star-o.png";
import righttick from "../assets/images/homescreen/righttick.png";
import splashicon from "../assets/images/loginscreen/splashScreenLogo.png";
import { BackHandler, Alert } from 'react-native';

import feature from "../utils/features.json";
import service from "../utils/services.json";
import product from "../utils/products.json";
import healthArticles from "../utils/healthArticles.json";
import testimonials from "../utils/testimonials.json";

import {useState,useEffect,useRef} from 'react'
import {View,Text,Image,TextInput,TouchableOpacity,ScrollView ,FlatList,Dimensions} from 'react-native';
import { Platform ,PermissionsAndroid} from 'react-native';
// import * as Device from 'expo-device';
// import * as Location from 'expo-location';
import  FontAwesome  from "react-native-vector-icons/FontAwesome";
import { SafeAreaView } from 'react-native-safe-area-context';
// import { useFonts,Poppins } from '@expo-google-fonts/poppins';
// import CustomBottomTab from "./CustomBottomTabs";
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';

const { width } = Dimensions.get('window');

const ITEM_WIDTH = width / 3;

const HomeScreen = ({navigation}) => {
  //  useFonts({ Poppins});

    useEffect(() => {
    const backAction = () => {
      Alert.alert("Exit App", "Are you sure you want to exit?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => backHandler.remove();
  }, []);




  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMore, setViewMore] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [features,setFeatures] = useState([{imageUrl : "",feature : ""},{imageUrl : "",feature : ""},{imageUrl : "",feature : ""},{imageUrl : "",feature : ""},{imageUrl : "",feature : ""},]);
  const [services,setServices] = useState([{imageUrl : "",service : ""},{imageUrl : "",service : ""},{imageUrl : "",service : ""},{imageUrl : "",service : ""},]);
  const [products,setProducts] = useState([{imageUrl : "",name : "",description: "",price: ""},{imageUrl : "",name : "",description: "",price: ""},{imageUrl : "",name : "",description: "",price: ""},]);
  const displayItems = showAll ? products : products.slice(0, 3);
  const displayServices = viewMore ? services : services.slice(0, 4);
  const [location,setLocation] = useState(
    {
  city: '',
  region: '',
  country: '',
  postalCode: '',
  street: '',
  district: '',
}
  );
  const [currentInd, setCurrentInd] = useState(0);
  const current = testimonials[currentInd];

  const handleNext = () => {
    if (currentInd < testimonials.length - 1) {
      setCurrentInd(currentInd + 1);
    }
  };

  const handlePrev = () => {
    if (currentInd > 0) {
      setCurrentInd(currentInd - 1);
    }
  };
     const scrollToNext = () => {
    setCurrentIndex((prev) => Math.min(prev + 1, features.length - 3));
  };

  const scrollToPrev = () => {
    setCurrentIndex((prev) => Math.max(prev - 1, 0));
  };

  useEffect(() => {
    flatListRef.current?.scrollToOffset({
      offset: currentIndex * (ITEM_WIDTH),
      animated: true,
    });
  },[currentIndex]);
  

 const requestLocationPermission = async () => {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'This app needs access to your location to show your region and country.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          }
        );
        return granted === PermissionsAndroid.RESULTS.GRANTED;
      } catch (err) {
        console.log("error",err);
        console.warn('Permission error:', err);
        return false;
      }
    }
    return true; // iOS permissions handled by Info.plist
  };

  const reverseGeocode = async (latitude, longitude) => {
    try {
      const response = await axios.get(
        'https://nominatim.openstreetmap.org/reverse',
        {
          params: {
            lat: latitude,
            lon: longitude,
            format: 'json',
            addressdetails: 1,
          },
          headers: {
            'User-Agent': 'getphysio/0.0.1 (ganeshpilla98765@gmail.com)', // Replace with your app name and email
          },
        }
      );
      const { address } = response.data;
      return {
        region: address.state || address.city || address.town || address.village || '', // Prioritize state, fallback to city/town/village
        country: address.country || '',
      };
    } catch (error) {
      console.error('Nominatim error:', error.message);
      return { region: '', country: '' };
    }
  };

  const HandleSub=(item)=>{
    // item._id === "1" ? navigation.navigate('PhysioScreen') : navigation.navigate('Home')
    if(item._id=="1")
      navigation.navigate('PhysioScreen',{feature:item.feature});
    else if(item._id=='2')
    navigation.navigate('PhysioScreen',{feature:item.feature})
    else    
    navigation.navigate('PhysioScreen',{feature:item.feature})

  }

 useEffect(() => {
  console.log("Use Effect Loaded");
  setFeatures(feature);
  setServices(service);
  setProducts(product);
//    const fetchFeatures = async () => {
//     console.log("Fetching features");
//     try{
//   const res = await fetch(${process.env.EXPO_PUBLIC_BACKEND_URL}/api/home/features);
//   const data = await res.json();
//   console.log("Features" ,data);
//   setFeatures(data);
//     } 
//     catch(error) {
//       console.log("Error loading features",error);
//     }
// };

// const fetchServices = async () => {
//   const res = await fetch(${process.env.EXPO_PUBLIC_BACKEND_URL}/api/home/services);
//   const data = await res.json();
//   console.log("Services",data);
//   setServices(data);
// };

// const fetchProducts = async () => {
//   const res = await fetch(${process.env.EXPO_PUBLIC_BACKEND_URL}/api/home/products);
//   const data = await res.json();
//   console.log("Products",data);
//   setProducts(data);
// };
  // fetchFeatures();
  // fetchServices();
  // fetchProducts();
    const getLocation = async () => {
      const hasPermission = await requestLocationPermission();
      if (!hasPermission) {
        console.log("location denied");
        setErrorMsg('Location permission denied');
        return;
      }

      Geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          const address = await reverseGeocode(latitude, longitude);
          setLocation(address);
        },
        (error) => {
          setErrorMsg(`Location error: ${error.message}`);
        },
        {
          enableHighAccuracy: true, // High accuracy for GPS
          timeout: 15000,           // 15 seconds timeout
          maximumAge: 10000,        // Accept cached location up to 10 seconds old
        }
      );
    };

    getLocation();

   }, []);

  return (
<SafeAreaView style={{ flex: 1, height: '100%', alignItems: 'center' }}>
  <ScrollView contentContainerStyle={{ minHeight: '100%', backgroundColor: '#30C3EA26' }}>
    <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, shadowColor: '#000', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.18, shadowRadius: 1.0, elevation: 1 }}>
      <View style={{ width: '66.67%' }}>
        <Text style={{ fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', color: '#000000' }}>
          {(location.region === '') ? "Fetching" : location.region} ,
        </Text>
        <Text style={{ fontSize: 20, fontFamily: 'Poppins', fontWeight: '600', color: '#22285C' }}>
          {(location.country === '') ? "Location" : location.country}
        </Text>
      </View>
      <Image
        source={faceicon}
        style={{ width: 40, height: 40, borderRadius: 100 }}
      />
    </View>
    <View style={{ width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 12, columnGap: 8 }}>
      <TouchableOpacity
        style={{
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 4.65,
          elevation: 10,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: '#E9E9E9',
          borderRadius: 9999,
          paddingHorizontal: 16,
        }}
      >
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={{ flex: 1, fontFamily: 'Poppins', fontSize: 17, fontWeight: '600', color: '#1F2937', paddingRight: 8 }}
          onFocus={() => navigation.navigate("Search")}
        />
        <Image source={search} style={{ width: 40, height: 40, borderRadius: 9999 }} />
      </TouchableOpacity>
      {/* <TouchableOpacity
        style={{
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.2,
          shadowRadius: 4.65,
          elevation: 8,
          padding: 8,
          backgroundColor: '#E9E9E9',
          borderRadius: 9999,
        }}
      >
        <Image source={cart} style={{ width: 32, height: 32, borderRadius: 9999, tintColor: '#22285C' }} />
      </TouchableOpacity> */}
      <TouchableOpacity
        style={{
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 10,
          padding: 8,
          backgroundColor: '#E9E9E9',
          borderRadius: 9999,
        }}
      >
        <Image source={notification} style={{ width: 32, height: 32, borderRadius: 9999, tintColor: '#22285C' }} />
      </TouchableOpacity>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', height: 3, backgroundColor: '#A5A5A5', marginHorizontal: 16, marginTop: 24, marginBottom: 24 }} />
    <View style={{ position: 'relative', flexDirection: 'row', columnGap: 10, alignItems: 'center' }}>
      {currentIndex > 0 && (
        <TouchableOpacity
          onPress={scrollToPrev}
          style={{ position: 'absolute', backgroundColor: '#E5E7EB', zIndex: 10, borderRadius: 9999, top: '50%' }}
        >
          <Image source={chevronleft} style={{ width: 40, height: 40, borderRadius: 9999 }} />
        </TouchableOpacity>
      )}
     <FlatList
  ref={flatListRef}
  data={features}
  horizontal
  showsHorizontalScrollIndicator={false}
  scrollEnabled={false}
  keyExtractor={(item, index) => item._id || index.toString()}
  renderItem={({ item }) => (
    <TouchableOpacity
      key={item._id}
      style={{
        width: ITEM_WIDTH,
        padding: 10,
        alignItems: 'center',
        marginTop: 24,
        marginBottom: 12,
        borderRadius: 12,
      }}
      onPress={() => HandleSub(item)}
    >
      <Image
        source={{ uri: item.imageUrl }}
        style={{
          width: '100%',
          aspectRatio: 1,
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        }}
        resizeMode="cover"
      />
      <Text
        numberOfLines={2}
        style={{
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.8,
          shadowRadius: 2,
          elevation: 8,
          width: '100%',
          height: 80,
          textAlign: 'center',
          fontFamily: 'Poppins',
          fontWeight: '600',
          fontSize: 15,
          color: '#22285C',
          paddingVertical: 12,
          paddingHorizontal: 8,
          backgroundColor: '#FFFFFF',
          borderBottomLeftRadius: 10,
          borderBottomRightRadius: 10,
          justifyContent: 'center',
        }}
      >
        {`${item.feature}\nConsultation`}
      </Text>
    </TouchableOpacity>
  )}
/>

      {currentIndex < features.length - 3 && (
        <TouchableOpacity
          onPress={scrollToNext}
          style={{ position: 'absolute', backgroundColor: '#E5E7EB', borderRadius: 9999, top: '50%',right:0 }}
        >
          <Image source={chevronright} style={{ width: 40, height: 40, borderRadius: 9999 }} />
        </TouchableOpacity>
      )}
    </View>
    <View style={{ paddingHorizontal: 16, paddingVertical: 12 }}>
      <Text style={{ fontSize: 22, fontFamily: 'Poppins', fontWeight: '700', color: '#22285C', marginBottom: 12 }}>
        Our Services
      </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', columnGap: 0, rowGap: 24, justifyContent: 'flex-start' }}>
        {displayServices.map((item, index) => (
          <View key={index} style={{ width: '25%', height: 100, alignItems: 'center',padding: 10 }}>
            <View
              style={{
                shadowColor: 'black',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 5,
                borderWidth: 1,
                borderColor: '#D1D5DB',
                borderRadius: 9999,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 1 },
                shadowOpacity: 0.25,
                shadowRadius: 3.84,
                elevation: 5,
              }}
            >
              <Image
                source={{ uri: item.imageUrl }}
                style={{ width: 64, height: 64, borderRadius: 9999 }}
                resizeMode="cover"
              />
            </View>
            <Text style={{ marginTop: 4, textAlign: 'center', color: '#22285C', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', paddingHorizontal: 4 }}>
              {item.service}
            </Text>
          </View>
        ))}
      </View>
      <TouchableOpacity
        onPress={() => setViewMore((prev) => !prev)}
        style={{ marginTop: 30, alignSelf: 'center', paddingHorizontal: 20, paddingVertical: 8, backgroundColor: '#22285C', borderRadius: 9999 }}
      >
        <Text style={{ color: '#FFFFFF', fontSize: 14, fontWeight: '600', fontFamily: 'Poppins' }}>
          {(!viewMore) ? "Show More" : "Show Less"}
        </Text>
      </TouchableOpacity>
    </View>
    <TouchableOpacity
      style={{
        backgroundColor: '#379ACD1A',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.18,
        shadowRadius: 1.0,
        elevation: 1,
        marginVertical: 24,
        marginHorizontal: 16,
      }}
    >
      <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={faceicon}
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ width: '70%', paddingLeft: 12 }}>
        <Text style={{ fontSize: 16, color: '#4B5563', fontFamily: 'Poppins', fontWeight: '500' }}>
          Start Assessment
        </Text>
        <Text style={{ fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', color: '#22285C' }}>
          Score Your Health Now
        </Text>
      </View>
      <View style={{ width: '10%', alignItems: 'flex-end' }}>
        <Image source={chevronright} style={{ width: 20, height: 20 }} />
      </View>
    </TouchableOpacity>
    <View style={{ paddingHorizontal: 16, marginTop: 24 }}>
      <Text style={{ fontFamily: 'Poppins', fontSize: 22, fontWeight: '700', marginBottom: 12, color: '#22285C' }}>
        Our Products
      </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start', columnGap: 16, rowGap: 24 }}>
        {displayItems.map((item, index) => (
          <View key={index} style={{ width: '30%' }}>
            <View style={{ position: 'relative', borderWidth: 1, borderColor: '#6B21A8', borderRadius: 12, padding: 8, overflow: 'hidden' }}>
              <Image source={plus} style={{ position: 'absolute', width: 12, height: 12, top: 0, right: 0 }} />
              <Image
                source={{ uri: item.url }}
                style={{ width: '100%', height: 96, borderRadius: 12 }}
                resizeMode="cover"
              />
            </View>
            <View style={{ width: '100%', flex: 1, flexDirection: 'column', alignItems: 'flex-start', rowGap: 4, marginTop: 4, paddingHorizontal: 8 }}>
              <Text style={{ fontSize: 12, textAlign: 'left', fontFamily: 'Poppins', fontWeight: '600', color: '#22285C' }}>
                {item.name}
              </Text>
              <Text style={{ fontSize: 8, fontFamily: 'Poppins', fontWeight: '500', color: '#6B7280' }}>
                {item.description}
              </Text>
              <Text style={{ fontSize: 9, fontFamily: 'Poppins', color: '#22285C', fontWeight: '600' }}>
                ₹{item.price}
              </Text>
            </View>
          </View>
        ))}
      </View>
      {(!showAll) ? (
        <TouchableOpacity
          onPress={() => setShowAll(true)}
          style={{ marginTop: 24, alignSelf: 'center', paddingHorizontal: 20, paddingVertical: 8, backgroundColor: '#22285C', borderRadius: 9999 }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600' }}>
            Show More
          </Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          onPress={() => setShowAll(false)}
          style={{ marginTop: 24, alignSelf: 'center', paddingHorizontal: 20, paddingVertical: 8, backgroundColor: '#22285C', borderRadius: 9999 }}
        >
          <Text style={{ color: '#FFFFFF', fontSize: 14, fontFamily: 'Poppins', fontWeight: '600' }}>
            Show Less
          </Text>
        </TouchableOpacity>
      )}
    </View>
    <View style={{ paddingHorizontal: 16, paddingVertical: 24 }}>
      <Text style={{ fontSize: 22, fontFamily: 'Poppins', fontWeight: '700', marginBottom: 16, color: '#22285C' }}>
        Health Tips
      </Text>
      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: '40%', paddingRight: 12 }}>
          <Text style={{ fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', color: '#22285C', marginBottom: 8 }}>
            Read Top Articles from Health Experts
          </Text>
          <Text style={{ fontFamily: 'Poppins', fontWeight: '500', fontSize: 8, color: '#4B5563', marginBottom: 8 }}>
            Stay updated with trusted tips from health professionals to keep your mind and body fit.
          </Text>
          <TouchableOpacity
            style={{ paddingHorizontal: 16, paddingVertical: 12, borderRadius: 9999, width: '100%', alignSelf: 'flex-start', marginTop: 8, backgroundColor: '#22285C' }}
            onPress={() => navigation.navigate("HealthTips")}
          >
            <Text style={{ color: '#FFFFFF', textAlign: 'center', fontFamily: 'Poppins', fontWeight: '600', fontSize: 14 }}>
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View style={{ width: '60%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
          {healthArticles.slice(0, 2).map((article, index) => (
            <View
              key={index}
              style={{ width: '48%', height: 180, marginBottom: 16, alignItems: 'center', borderWidth: 1, borderColor: '#E5E7EB', borderRadius: 1, overflow: 'hidden' }}
            >
              <Image
                source={{ uri: article.url }}
                style={{ width: '100%', height: 96 }}
                resizeMode="cover"
              />
              <View style={{ width: '100%', alignItems: 'center', flex: 1, justifyContent: 'flex-start' }}>
                <Text style={{ fontSize: 5, color: '#22285C', fontWeight: '700', textAlign: 'center', marginTop: 8 }}>
                  {article.summary}
                </Text>
                <TouchableOpacity style={{ backgroundColor: '#60A5FA', paddingHorizontal: 12, paddingVertical: 4, borderRadius: 4, marginTop: 8 }}>
                  <Text style={{ fontSize: 5, fontWeight: '600', color: '#22285C' }}>
                    Read More
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
    <TouchableOpacity
      style={{
        backgroundColor: '#379ACD1A',
        borderRadius: 12,
        padding: 16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 24,
        marginHorizontal: 16,
      }}
    >
      <View style={{ width: '15%', alignItems: 'center', justifyContent: 'center' }}>
        <Image
          source={faceicon}
          style={{ width: 40, height: 40 }}
          resizeMode="contain"
        />
      </View>
      <View style={{ width: '70%', paddingLeft: 4 }}>
        <Text style={{ fontSize: 10, fontFamily: 'Poppins', color: '#4B5563', fontWeight: '500' }}>
          Access to a Doctor
        </Text>
        <Text style={{ fontSize: 15, fontFamily: 'Poppins', fontWeight: '600', color: '#22285C' }}>
          Free Online Consult With Doctor
        </Text>
      </View>
      <View style={{ width: '10%', alignItems: 'flex-end' }}>
        <Image source={chevronright} style={{ width: 20, height: 20 }} />
      </View>
    </TouchableOpacity>
    <View style={{ marginVertical: 24, paddingHorizontal: 16 }}>
      <Text style={{ fontSize: 22, fontFamily: 'Poppins', fontWeight: '700', color: '#22285C', marginBottom: 16 }}>
        How Can We Help You?
      </Text>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
        <View style={{ width: '23%', alignItems: 'center', marginBottom: 16 }}>
          <View style={{ width: 80, height: 80, borderRadius: 8, borderWidth: 2, borderColor: '#D1D5DB', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
            <Image
              source={help1}
              style={{ width: 64, height: 64, borderRadius: 8 }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ textAlign: 'center', fontSize: 11, fontFamily: 'Poppins', fontWeight: '600', color: '#22285C', paddingHorizontal: 12 }}>
            Test Reports
          </Text>
        </View>
        <View style={{ width: '23%', alignItems: 'center', marginBottom: 16 }}>
          <View style={{ width: 80, height: 80, borderRadius: 8, borderWidth: 2, borderColor: '#D1D5DB', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
            <Image
              source={help2}
              style={{ width: 64, height: 64, borderRadius: 8 }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ textAlign: 'center', fontSize: 11, fontFamily: 'Poppins', fontWeight: '600', color: '#22285C', paddingHorizontal: 4 }}>
            Books Appointment
          </Text>
        </View>
        <View style={{ width: '23%', alignItems: 'center', marginBottom: 16 }}>
          <View style={{ width: 80, height: 80, borderRadius: 8, borderWidth: 2, borderColor: '#D1D5DB', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
            <Image
              source={help3}
              style={{ width: 64, height: 64, borderRadius: 8 }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ textAlign: 'center', fontSize: 11, fontFamily: 'Poppins', fontWeight: '600', color: '#22285C', paddingHorizontal: 12 }}>
            Online Result
          </Text>
        </View>
        <View style={{ width: '23%', alignItems: 'center', marginBottom: 16 }}>
          <View style={{ width: 80, height: 80, borderRadius: 8, borderWidth: 2, borderColor: '#D1D5DB', alignItems: 'center', justifyContent: 'center', marginBottom: 8 }}>
            <Image
              source={help4}
              style={{ width: 64, height: 64, borderRadius: 8 }}
              resizeMode="cover"
            />
          </View>
          <Text style={{ textAlign: 'center', fontSize: 11, fontFamily: 'Poppins', fontWeight: '600', color: '#22285C', paddingHorizontal: 8 }}>
            Upload Prescription
          </Text>
        </View>
      </View>
    </View>
    <View style={{ width: '100%', padding: 16 }}>
      <View
        style={{
          shadowColor: 'black',
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
          elevation: 8,
          alignItems: 'flex-start',
          backgroundColor: '#E9E9E9',
          padding: 16,
          borderRadius: 16,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 1 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
          elevation: 5,
        }}
      >
        <Text style={{ fontSize: 18, fontFamily: 'Poppins', fontWeight: '600', color: '#22285C' }}>
          Explore corporate benefits
        </Text>
        <Text style={{ fontSize: 12, fontFamily: 'Poppins', fontWeight: '500', color: '#4B5563', marginTop: 4 }}>
          Exclusive membership for you
        </Text>
        <TouchableOpacity style={{ width: '100%', marginTop: 12, backgroundColor: '#22285C', paddingHorizontal: 16, paddingVertical: 8, borderRadius: 6 }}>
          <Text style={{ color: '#FFFFFF', fontSize: 11, fontFamily: 'Poppins', textAlign: 'center', fontWeight: '600' }}>
            Explore More
          </Text>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{ padding: 40, width: '100%' }}>
      <Text style={{ fontSize: 22, fontFamily: 'Poppins', fontWeight: '700', color: '#22285C', marginBottom: 16, textAlign: 'left' }}>
        Testimonials
      </Text>
      <View
        style={{
          shadowColor: 'black',
          shadowOffset: { width: 4, height: 4 },
          shadowOpacity: 0.3,
          shadowRadius: 2,
          elevation: 8,
          width: '100%',
          position: 'relative',
          backgroundColor: '#E5E7EB',
          borderRadius: 12,
          shadowColor: '#000',
          shadowOffset: { width: 0, height: 10 },
          shadowOpacity: 0.51,
          shadowRadius: 13.16,
          elevation: 20,
          paddingVertical: 24,
          paddingHorizontal: 16,
          alignItems: 'center',
        }}
      >
        {currentInd > 0 && (
          <TouchableOpacity
            onPress={handlePrev}
            style={{ position: 'absolute', left: 0, top: '50%', transform: [{ translateY: '-50%' }], zIndex: 10 }}
          >
            <Image source={chevronleft} style={{ height: 40, width: 40, borderRadius: 9999 }} />
          </TouchableOpacity>
        )}
        {currentInd < testimonials.length - 1 && (
          <TouchableOpacity
            onPress={handleNext}
            style={{ position: 'absolute', right: 0, top: '50%', transform: [{ translateY: '-50%' }], zIndex: 10 }}
          >
            <Image source={chevronright} style={{ width: 40, height: 40, borderRadius: 9999 }} />
          </TouchableOpacity>
        )}
        <View style={{ alignItems: 'center', paddingHorizontal: 24 }}>
          <Text style={{ textAlign: 'center', fontSize: 12, fontFamily: 'Poppins', fontWeight: '500', color: '#22285C', lineHeight: 18, padding: 20, marginBottom: 8 }}>
            {current.review}
          </Text>
          <View style={{ flexDirection: 'row', marginBottom: 8 }}>
            {Array.from({ length: 3 }).map((_, idx) => {
              const filled = idx < current.rating;
              return (
                <Image
                  key={`upper-${idx}`}
                  source={filled ? star : staro}
                  style={{width:10,height:10, transform: [{ translateY: -(idx) * 5 }] }}
                />
              );
            })}
            {Array.from({ length: 2 }).map((_, idx) => {
              const starIndex = idx + 3;
              const filled = starIndex < current.rating;
              return (
                <Image
                  key={`lower-${idx}`}
                  source={filled ? star : staro}
                  style={{width:10,height:10, transform: [{ translateY: (idx - 1) * 5 }] }}
                />
              );
            })}
          </View>
          <Image source={faceicon} style={{ height: 40, width: 40, borderRadius: 9999 }} />
          <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 8, columnGap: 12 }}>
            {testimonials.map((_, idx) => (
              <View
                key={`upper-${idx}`}
                style={{
                  width: 8,
                  height: 8,
                  borderRadius: 9999,
                  backgroundColor: idx === currentInd ? '#22285C' : '#D1D5DB',
                }}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
    <View style={{ flexDirection: 'row', alignItems: 'flex-start', justifyContent: 'space-between', paddingHorizontal: 16, marginTop: 24 }}>
      <View style={{ alignItems: 'center', width: '30%' }}>
        <View style={{ width: 80, height: 80, borderRadius: 9999, borderWidth: 2, borderColor: '#D1D5DB', overflow: 'hidden', padding: 8, marginBottom: 8 }}>
          <View style={{ width: '100%', height: '100%', padding: 8, backgroundColor: '#FFFFFF', borderRadius: 9999 }}>
            <Image source={righttick} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
          </View>
        </View>
        <Text style={{ textAlign: 'center', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', color: '#22285C', paddingHorizontal: 20 }}>
          Secure Payment
        </Text>
      </View>
      <View style={{ alignItems: 'center', width: '30%' }}>
        <View style={{ width: 80, height: 80, borderRadius: 9999, borderWidth: 2, borderColor: '#D1D5DB', overflow: 'hidden', padding: 8, marginBottom: 8 }}>
          <View style={{ width: '100%', height: '100%', padding: 8, backgroundColor: '#FFFFFF', borderRadius: 9999 }}>
            <Image source={thumb} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
          </View>
        </View>
        <Text style={{ textAlign: 'center', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', color: '#22285C', paddingHorizontal: 20 }}>
          Best Treatments
        </Text>
      </View>
      <View style={{ alignItems: 'center', width: '30%' }}>
        <View style={{ width: 80, height: 80, borderRadius: 9999, borderWidth: 2, borderColor: '#D1D5DB', overflow: 'hidden', padding: 8, marginBottom: 8 }}>
          <View style={{ width: '100%', height: '100%', padding: 8, backgroundColor: '#FFFFFF', borderRadius: 9999 }}>
            <Image source={shake} style={{ width: '100%', height: '100%' }} resizeMode="cover" />
          </View>
        </View>
        <Text style={{ textAlign: 'center', fontSize: 12, fontFamily: 'Poppins', fontWeight: '600', color: '#22285C', paddingHorizontal: 8 }}>
          Most Trusted Physiotherapy Clinic
        </Text>
      </View>
    </View>
    <View style={{ alignItems: 'center', marginTop: 40, marginBottom: 40, paddingBottom: 40 }}>
      <Text style={{ color: '#9CA3AF', fontSize: 12, fontFamily: 'Poppins', fontWeight: '500' }}>
        Powered by
      </Text>
      <Image
        source={splashicon}
        style={{ width: 160, height: 160 }}
        resizeMode="contain"
      />
    </View>
  </ScrollView>
  {/* <CustomBottomTab name={"HOME"} /> */}
</SafeAreaView>

//     <SafeAreaView className="flex-1 h-full items-center" >
//       <ScrollView contentContainerStyle={{minHeight:'100%',backgroundColor: '#30C3EA26'}} >
//         <View className="w-full flex-row justify-between items-center px-4 py-3 shadow-sm">
//         <View className="w-2/3">
//         <Text className="text-[15px] font-poppins font-semibold color-[#000000]">{(location.region === '') ? "Fetching" : location.region} ,</Text>
//         <Text className="text-[20px] font-poppins font-semibold color-[#22285C]">{(location.country === '') ? "Location" : location.country}</Text>
//         </View>
//          <Image
//           source={faceicon}
//           className="w-20 h-20 rounded-full"
//         /> 
//       </View>
//        <View className="w-full flex-row items-center justify-center px-4 py-3 gap-2">
//         <TouchableOpacity style={{
//     shadowColor: 'black', 
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.8,
//     shadowRadius: 4.65,
//     elevation: 10,
//   }} className="flex-1 flex-row items-center bg-[#E9E9E9] rounded-full px-4" >
//   <TextInput
//     placeholder="Search"
//     placeholderTextColor="#888"
//     className="flex-1 font-poppins text-[17px] font-[600] text-gray-800 pr-2"
//     onFocus={() => navigation.navigate("Search")}
//   />
//   {/* <Image source={search} className="w-10 h-10 rounded-full" /> */}
// </TouchableOpacity>
//         <TouchableOpacity style={{
//     shadowColor: 'black', 
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.2,
//     shadowRadius: 4.65,
//     elevation: 8, 
//   }} className="p-2 bg-[#E9E9E9] rounded-full">
//           <Image source={cart} className="w-8 h-8 rounded-full color-[#22285C]" />
//         </TouchableOpacity>
//         <TouchableOpacity style={{
//     shadowColor: 'black', 
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 10,
//   }} className="p-2 bg-[#E9E9E9] rounded-full">
//           <Image source={notification} className="w-8 h-8 rounded-full color-[#22285C]" />
//         </TouchableOpacity>
//       </View>
//       <View className="flex-row items-center justify-center h-[3px] bg-[#A5A5A5] mx-4 mt-6 mb-6" />
//     <View className="relative flex-row gap-2 items-center">
//         {currentIndex > 0 && (
//         <TouchableOpacity
//           onPress={scrollToPrev}
//           className="absolute bg-gray-200 z-10 rounded-full top-[50%] left-[2%]"
//         >
//           <Image source={chevronleft} className="w-10 h-10 rounded-full" />
//         </TouchableOpacity>
//       )}
//          <FlatList
//         ref={flatListRef}
//         data={features}
//         horizontal
//         showsHorizontalScrollIndicator={false}
//         scrollEnabled={false}
//         keyExtractor={(item, index) => item._id || index.toString()}
//         contentContainerStyle={{
//           paddingHorizontal: 20,
//         }}
//         ItemSeparatorComponent={() => <View style={{ width: GAP }} />}
//         renderItem={({ item }) => (
//           <View
//           key={item._id}
//             style={{ width: ITEM_WIDTH,
//     shadowColor: 'black', 
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 8, 
//   }}
//             className="items-center bg-white mt-6 mb-3 rounded-xl shadow-xl"
//           >
//             <Image
//               source={{ uri: item.imageUrl }}
//               style={{ width: '100%', aspectRatio : 1, borderTopLeftRadius: 10 ,borderTopRightRadius : 10}}
//               resizeMode="cover"
//             />
//             <Text className="text-center font-poppins font-semibold text-[11px] color-[#22285C] p-3">{item.feature}</Text>
//           </View>
//         )}
//       />

//       {currentIndex < features.length - 3 &&
//       (
//       <TouchableOpacity
//         onPress={scrollToNext}
//         className="absolute bg-gray-200 rounded-full top-[50%] right-[2%]"
//       >
//         <Image source={chevronright} className="w-10 h-10 rounded-full" />
//       </TouchableOpacity>
//       )
//      }
//     </View>
//      <View className="px-4 py-3">
//   <Text className="text-[22px] font-poppins font-bold color-[#22285C] mb-3">Our Services</Text>

//   <View className="flex-row flex-wrap gap-x-4 gap-y-6 justify-start">
//     {displayServices.map((item, index) => (
//       <View key={index}  className="w-[22%] h-[100] items-center ">
//         <View style={{shadowColor: 'black', 
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.3,
//     shadowRadius: 4.65,
//     elevation: 5, 
//   }} className="border border-gray-300 rounded-full shadow">
//           <Image
//             source={{ uri: item.imageUrl }}
//             className="w-16 h-16 rounded-full"
//             resizeMode="cover"
//           />
//         </View>
//         <Text className="mt-1 text-center color-[#22285C] text-[12px] font-poppins font-semibold px-1">
//           {item.service}
//         </Text>
//       </View>
//     ))}
//   </View>
//         <TouchableOpacity
//           onPress={() => setViewMore((prev) => !prev)}
//           className="mt-3 self-center px-5 py-2 bg-[#22285C] rounded-full"
//         >
//           <Text className="text-white text-sm font-semibold font-poppins">{(!viewMore) ? "View All" : "View Less"}</Text>
//         </TouchableOpacity>
//     </View>
//      <TouchableOpacity className="bg-[#379ACD1A] rounded-xl p-4 flex-row items-center justify-between shadow-xs my-6 mx-4">
//       <View className="w-[15%] items-center justify-center">
//         <Image
//           source={faceicon} 
//           className="w-10 h-10"
//           resizeMode="contain"
//         />
//       </View>

//       <View className="w-[70%] pl-3">
//         <Text className="text-base text-gray-600 font-poppins font-medium">Start Assessment</Text>
//         <Text className="text-lg font-poppins font-semibold color-[#22285C]">Score Your Health Now</Text>
//       </View>

//       <View className="w-[10%] items-end">
//         <Image source={chevronright} className="w-5 h-5"/>
//       </View>
//     </TouchableOpacity>
//       <View className="px-4 mt-6">
//       <Text className="font-poppins text-[22px] font-bold mb-3 color-[#22285C]">Our Products</Text>

//       <View className="flex-row flex-wrap justify-start gap-x-4 gap-y-6">
//   {displayItems.map((item, index) => (
//     <View key={index} className="w-[30%]">
//       <View className="relative border border-violet-900 rounded-xl p-2 overflow-hidden">
//         <Image source={plus} className="absolute w-3 h-3 top-0 right-0" />
//         <Image
//           source={{ uri: item.imageUrl}}
//           className="w-full h-24 rounded-xl"
//           resizeMode="cover"
//         />
//       </View>
//       <View className="w-full flex-1 flex-col items-start gap-1 mt-1 px-2">
//         <Text className="text-[12px] text-start font-poppins font-semibold color-[#22285C]">{item.name}</Text>
//         <Text className="text-[8px] font-poppins font-medium text-gray-500">{item.description}</Text>
//         <Text className="text-[9px] font-poppins color-[#22285C] font-semibold">₹{item.price}</Text>
//       </View>
//     </View>
//   ))}
// </View>


//       {(!showAll) ? (
//         <TouchableOpacity
//           onPress={() => setShowAll(true)}
//           className="mt-6 self-center px-5 py-2 bg-[#22285C] rounded-full"
//         >
//           <Text className="text-white text-[14px] font-poppins font-semibold ">View All</Text>
//         </TouchableOpacity>
//       ) : (
//         <TouchableOpacity
//           onPress={() => setShowAll(false)}
//           className="mt-6 self-center px-5 py-2 bg-[#22285C] rounded-full"
//         >
//           <Text className="text-white text-[14px] font-poppins font-semibold ">View Less</Text>
//         </TouchableOpacity>
//       )}
//     </View>
//     <View className="px-4 py-6">
//   <Text className="text-[22px] font-poppins font-bold mb-4 color-[#22285C]">Health Tips</Text>

//   <View className="flex-row">
//     <View className="w-[40%] pr-3">
//       <Text className="text-[12px] font-poppins font-semibold color-[#22285C] mb-2">
//         Read Top Articles from Health Experts
//       </Text>
//       <Text className="font-poppins font-medium text-[8px] text-gray-600 mb-2">
//         Stay updated with trusted tips from health professionals to keep your mind and body fit.
//       </Text>

//       <TouchableOpacity className="px-4 py-3 rounded-full w-full self-start mt-2 bg-[#22285C]" onPress={() => navigation.navigate("HealthTips")}>
//         <Text className="text-white text-center font-poppins font-semibold text-[14px]">See All</Text>
//       </TouchableOpacity>
//     </View>

//    <View className="w-[60%] flex-row flex-wrap justify-between">
//   {healthArticles.slice(0, 2).map((article, index) => (
//     <View
//       key={index}
//       className="w-[48%] h-45 mb-4 items-center border border-gray-200 rounded-sm overflow-hidden"
//     >
//       <Image
//         source={{ uri: article.url }}
//         className="w-full h-24"
//         resizeMode="cover"
//       />
//       <View className="w-full items-center flex-1 justify-between">
//         <Text className="text-[5px] color-[#22285C] font-bold text-center mt-2">
//           {article.summary}
//         </Text>
//         <TouchableOpacity className="bg-blue-400 px-3 py-1 rounded mt-2">
//           <Text className="text-[5px] font-semibold color-[#22285C]">Read More</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   ))}
// </View>

//   </View>
// </View>

//  <TouchableOpacity className="bg-[#379ACD1A] rounded-xl p-4 flex-row items-center justify-between my-6 mx-4">
//       <View className="w-[15%] items-center justify-center">
//         <Image
//           source={faceicon}
//           className="w-10 h-10"
//           resizeMode="contain"
//         />
//       </View>

//       <View className="w-[70%] pl-1">
//         <Text className="text-[10px] font-poppins text-gray-600 font-medium">Access to a Doctor</Text>
//         <Text className="text-[15px] font-poppins font-semibold color-[#22285C]">Free Online Consult With Doctor</Text>
//       </View>

//       <View className="w-[10%] items-end">
//         <Image source={chevronright} className="w-5 h-5"/>
//       </View>
//     </TouchableOpacity>
//     <View className="my-6 px-4">
//       <Text className="text-[22px] font-poppins font-bold color-[#22285C] mb-4">
//         How Can We Help You?
//       </Text>
//        <View className="flex-row flex-wrap justify-between">
     
//     <View className="w-[23%] items-center mb-4">

//       <View className="w-20 h-20 rounded-lg border-2 border-gray-300 items-center justify-center mb-2">
//         <Image
//           source={help1}
//           className="w-16 h-16 rounded-lg"
//           resizeMode="cover"
//         />
//       </View>
      
//       <Text className="text-center text-[11px] font-poppins font-semibold color-[#22285C] px-3">
//        Test Reports
//       </Text>
//     </View>
//      <View className="w-[23%] items-center mb-4">
//       <View className="w-20 h-20 rounded-lg border-2 border-gray-300 items-center justify-center mb-2">
//         <Image
//           source={help2}
//           className="w-16 h-16 rounded-lg"
//           resizeMode="cover"
//         />
//       </View>
      
//       <Text className="text-center text-[11px] font-poppins font-semibold color-[#22285C] px-1">
//        Books Appointment
//       </Text>
//     </View>
//      <View className="w-[23%] items-center mb-4">
//       <View className="w-20 h-20 rounded-lg border-2 border-gray-300 items-center justify-center mb-2">
//         <Image
//           source={help3}
//           className="w-16 h-16 rounded-lg"
//           resizeMode="cover"
//         />
//       </View>
      
//       <Text className="text-center text-[11px] font-poppins font-semibold color-[#22285C] px-3">
//        Online Result
//       </Text>
//     </View>
//      <View className="w-[23%] items-center mb-4">

//       <View className="w-20 h-20 rounded-lg border-2 border-gray-300 items-center justify-center mb-2">
//         <Image
//           source={help4}
//           className="w-16 h-16 rounded-lg"
//           resizeMode="cover"
//         />
//       </View>
//       <Text className="text-center text-[11px] font-poppins font-semibold color-[#22285C] px-2">
//        Upload Prescription
//       </Text>
//     </View>
// </View>
// </View>
// <View className="w-full p-4">
//       <View style={{shadowColor: 'black', 
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     elevation: 8,
//   }} className="items-start bg-[#E9E9E9] p-4 rounded-2xl shadow">
//         <Text className="text-[18px] font-poppins font-semibold color-[#22285C]">
//           Explore corporate benefits
//         </Text>
//         <Text className="text-[12px] font-poppins font-medium text-gray-600 mt-1">
//           Exclusive membership for you
//         </Text>
//         <TouchableOpacity className="w-full mt-3 bg-[#22285C] px-4 py-2 rounded-md">
//           <Text className="text-white text-[11px] font-poppins text-center font-semibold">Explore More</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//      <View className="p-10 w-full">
//       <Text className="text-[22px] font-poppins font-bold color-[#22285C] mb-4 text-start">
//         Testimonials
//       </Text>
//       <View
//       style={{shadowColor: 'black', 
//     shadowOffset: { width: 4, height: 4 },
//     shadowOpacity: 0.3,
//     shadowRadius: 2,
//     elevation: 8, 
//   }}
//         className="w-full relative bg-gray-200 rounded-xl shadow-xl py-6 px-4 items-center" // full width with padding
//       >

//         {currentInd > 0 && (
//           <TouchableOpacity
//             onPress={handlePrev}
//             className="absolute left-0 top-1/2 -translate-y-1/2 z-10"
//           >
//             <Image source={chevronleft} className="h-10 w-10 rounded-full" />
//           </TouchableOpacity>
//         )}

//         {currentInd < testimonials.length - 1 && (
//           <TouchableOpacity
//             onPress={handleNext}
//             className="absolute right-0 top-1/2 -translate-y-1/2 z-10"
//           >
//             <Image source={chevronright} className="w-10 h-10 rounded-full" />
//           </TouchableOpacity>
//         )}

//         <View className="items-center px-6">
//           <Text className="text-center text-[12px] font-poppins font-medium color-[#22285C] leading-relaxed p-5 mb-2">
//             {current.review}
//           </Text>

//           <View className="flex-row mb-2">
//   {/* {Array.from({ length: 3 }).map((_, idx) => {
//     const filled = idx < current.rating;
//     return (
//       <FontAwesome
//         key={upper-${idx}}
//         name={filled ? "star" : "star-o"}
//         size={16}
//         color={filled ? "#fbbf24" : "#d1d5db"}
//         style={{ transform: [{ translateY: -(idx) * 5 }] }}
//       />
//     );
//   })}
//   {Array.from({ length: 2 }).map((_, idx) => {
//     const starIndex = idx + 3;
//     const filled = starIndex < current.rating;
//     return (
//       <FontAwesome
//         key={lower-${idx}}
//         name={filled ? "star" : "star-o"}
//         size={16}
//         color={filled ? "#fbbf24" : "#d1d5db"}
//         style={{ transform: [{ translateY: (idx - 1) * 5 }] }}
//       />
//     );
//   })} */}
// </View>
//           <Image source={faceicon} className="h-10 w-10 rounded-full" />
//           <View className="flex-row justify-center mt-2 space-x-2 gap-3">
//   {testimonials.map((_, idx) => (
//     <View
//       key={upper-${idx}}
//       className={`w-2 h-2 rounded-xl ${
//         idx === currentInd ? 'bg-[#22285C]' : 'bg-gray-300'
//       }`}
//     />
//   ))}
// </View>
//         </View>
//       </View>
//     </View>
//     <View className="flex-row items-start justify-between px-4 mt-6">
//     <View className="items-center w-[30%]">
//       <View className="w-20 h-20 rounded-full border-2 border-gray-300 overflow-hidden p-2 mb-2">
//         <View className="w-full h-full p-2 bg-white rounded-full">
//         <Image source={righttick} className="w-full h-full" resizeMode="cover" />
//         </View>
//       </View>
//       <Text className="text-center text-[12px] font-poppins font-semibold color-[#22285C] px-5">Secure Payment</Text>
//     </View>
//     <View className="items-center w-[30%]">
//       <View className="w-20 h-20 rounded-full border-2 border-gray-300 overflow-hidden p-2 mb-2">
//         <View className="w-full h-full p-2 bg-white rounded-full">
//         <Image source={thumb} className="w-full h-full " resizeMode="cover" />
//         </View>
//       </View>
//       <Text className="text-center text-[12px] font-poppins font-semibold color-[#22285C] px-5">Best Treatments</Text>
//     </View>
//     <View className="items-center w-[30%]">
//       <View className="w-20 h-20 rounded-full border-2 border-gray-300 overflow-hidden p-2 mb-2">
//         <View className="w-full h-full p-2 bg-white rounded-full">
//         <Image source={shake} className="w-full h-full " resizeMode="cover" />
//         </View>
//       </View>
//       <Text className="text-center text-[12px] font-poppins font-semibold color-[#22285C] px-2">Most Trusted Physiotherapy Clinic</Text>
//     </View>
// </View>
// <View className="items-center mt-10 mb-10 pb-10">
//   <Text className="text-gray-400 text-[12px] font-poppins font-medium">Powered by</Text>
//   <Image
//     source={splashicon}
//     className="w-40 h-40"
//     resizeMode="contain"
//   />
// </View>
//       </ScrollView>
//       <CustomBottomTab name={"HOME"}/>
//       </SafeAreaView>
  )
}

export default HomeScreen;