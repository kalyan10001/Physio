import { BackHandler, Alert } from 'react-native';
import {useState,useEffect,useRef} from 'react'
import {View,Text,Image,TextInput,TouchableOpacity,ScrollView , StyleSheet ,FlatList,Dimensions} from 'react-native';
import { Platform ,PermissionsAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';


const HomeScreen = ({navigation}) => {
const { width } = Dimensions.get('window');
  //   useEffect(() => {
  //   const backAction = () => {
  //     Alert.alert("Exit App", "Are you sure you want to exit?", [
  //       {
  //         text: "Cancel",
  //         onPress: () => null,
  //         style: "cancel"
  //       },
  //       { text: "YES", onPress: () => BackHandler.exitApp() }
  //     ]);
  //     return true;
  //   };

  //   const backHandler = BackHandler.addEventListener(
  //     "hardwareBackPress",
  //     backAction
  //   );

  //   return () => backHandler.remove();
  // }, []);




  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [viewMore, setViewMore] = useState(false);
  const [showAll, setShowAll] = useState(false);
  const [features,setFeatures] = useState([{imageUrl : "",feature : ""},{imageUrl : "",feature : ""},{imageUrl : "",feature : ""},{imageUrl : "",feature : ""},{imageUrl : "",feature : ""},]);
  const [services,setServices] = useState([{imageUrl : "",service : ""},{imageUrl : "",service : ""},{imageUrl : "",service : ""},{imageUrl : "",service : ""},]);
  const [products,setProducts] = useState([{imageUrl : "",name : "",description: "",price: ""},{imageUrl : "",name : "",description: "",price: ""},{imageUrl : "",name : "",description: "",price: ""},]);
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
      console.log("Address",address);
      return {
        city : address.city,
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
const productData = [
  {
    id: '1',
    image: require('../assets/images/homescreen/hydrotherapy.jpg'),
    label: 'HYDRO Therapy',
  },
   {
    id: '2',
    image: require('../assets/images/homescreen/electrotherapy.jpg'),
    label: 'ELECTRO Therapy',
  },
   {
    id: '3',
    image: require('../assets/images/homescreen/needlingtherapy.jpg'),
    label: 'NEEDLING Therapy',
  },
   {
    id: '4',
    image: require('../assets/images/homescreen/speechtherapy.jpg'),
    label: 'SPEECH Therapy',
  },
];

const featuredProductData = [
  {
    id: '1',
    image: require('../assets/images/homescreen/arm-sling.jpg'),
    name: 'Arm Sling',
    price: '₹439/-',
    description: 'Arm Sling for everyone',
    originalPrice: '₹500/-'
  },
  {
    id: '2',
    image: require('../assets/images/homescreen/back-support-belt.png'),
    name: 'Back Support Belt',
    price: '₹999/-',
     description: 'Arm Sling for everyone',
    originalPrice: '₹1299/-'
  },
  {
    id: '3',
    image: require('../assets/images/homescreen/back-sling.jpg'),
    name: 'Back Sling',
    price: '₹999/-',
     description: 'Arm Sling for everyone',
    originalPrice: '₹1299/-'
  },
];

const healthTipsData = [
  {
    id: '1',
    imageUrl : require("../assets/images/homescreen/tip1.png"),
    title: `Discovering the Best Pediatrician for Your Child's Needs |`,
    author: 'Dr. Sumanata Bhattacharya'
  },
  {
    id: '2',
    imageUrl : require("../assets/images/homescreen/tip2.png"),
    title: `Discovering the Best Pediatrician for Your Child's Needs |`,
    author: 'Dr. Ramesh Kulkarni'
  },
];

const testimonials = [
  {
    id: '1',
    name: 'Sramantika Sen',
    location: 'Kolkata',
    date: '8th March, 2025',
    text: 'It is a long established fact that a reader will be distracted by the readable content of a page...',
  },
  {
    id: '2',
    name: 'John Doe',
    location: 'Mumbai',
    date: '1st April, 2025',
    text: 'Many desktop publishing packages and web page editors now use Lorem Ipsum...',
  },
  {
    id: '3',
    name: 'Jane Smith',
    location: 'Delhi',
    date: '15th May, 2025',
    text: 'Content here, content here, making it look like readable English...',
  },
];
 const renderProduct = ({ item }) => (
    <View style={styles.productCard}>
      <Image source={item.image} style={styles.productImage} />
      <Text style={styles.productLabel}>{item.label.split(" ")[0]}</Text>
      <Text style={styles.productSideLabel}>{item.label.split(" ")[1]}</Text>
      <View style={styles.renderproductButton}>
            <Text style={styles.renderproductView}>View Doctors</Text>
            <TouchableOpacity style={styles.sectionIcon}>
            <Image source={require("../assets/images/homescreen/rightArrowOutline.png")} style={{height: 20,width:20}} />
            </TouchableOpacity>
          </View>
    </View>
  );

  const renderFeaturedProduct = ({ item }) => (
    <View style={styles.singleProduct}>
      <Image source={item.image} style={styles.singleProductImage} />
      <View style={styles.singleProductMat}>
      <Text style={styles.singleProductHead}>{item.name}</Text>
      <Text style={styles.singleProductDesc}>{item.description}</Text>
      <Text style={styles.price}>{item.price} <Text style={styles.strike}>{item.originalPrice}</Text></Text>
      </View>
    </View>
  );

  const renderHealthTip = ({ item }) => (
    <View style={styles.tipCard}>
      <Image source={item.imageUrl} style={styles.tipImage}/>
      <Text style={styles.tipTitle}>{item.title}</Text>
      <Text style={styles.tipAuthor}>{item.author}</Text>
    </View>
  );

  const renderItem = ({ item }) => (
    <View style={styles.testimonialBox}>
      <Text style={styles.testimonialText}>{item.text}</Text>
      <Text style={styles.author}>{item.name}</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.aboveHeader}>
            <View style={styles.profileHeader}>
              <Image source={require("../assets/images/homescreen/faceicon.jpg")} style={{width: 50,height: 50,borderRadius:50}} resizeMode="contain" />
            </View>
            <View style={styles.locationHeader}>
          <Image source={require("../assets/images/homescreen/location.png")} style={{width: 20,height: 20,tintColor:'white'}} resizeMode="contain"/>
          <Text style={styles.location}>{location.city}</Text>
          </View>
          <Image source={require("../assets/images/homescreen/notification.png")} style={{width:20,height:20}} resizeMode="contain"/>
          </View>
           <View style={styles.searchBar}>
            <TouchableOpacity>
            <Image source={require("../assets/images/homescreen/search.png")} styles={{width:20,height:20}} />
            </TouchableOpacity>
          <TextInput placeholder="Search for Physiotherapist" style={styles.searchInput} />
        </View>
        </View>

        {/* Search Bar */}

        {/* Consultation Options */}
        <View style={styles.consultationSection}>
          <TouchableOpacity style={styles.consultCard} onPress={() => navigation.navigate('PhysioTherapist',{feature:'In-Clinic'})}>
            <Image source={require('../assets/images/homescreen/feature1.png')} style={styles.consultImage} />
            <Text style={styles.consultText}>In-Clinic Consultation</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.consultCard} onPress={() => navigation.navigate('PhysioTherapist',{feature:'Online'})}>
            <Image source={require('../assets/images/homescreen/feature2.png')} style={styles.consultImage} />
            <Text style={styles.consultText}>Online Consultation</Text>
          </TouchableOpacity>
        </View>

        {/* At Home Physiotherapist */}
        <TouchableOpacity style={styles.bannerCard} onPress={() => navigation.navigate('PhysioTherapist',{feature:'Home'})}>
          <Image source={require('../assets/images/homescreen/feature3.png')} style={styles.bannerImage} />
          <Text style={styles.bannerText}>Physiotherapist At Home</Text>
        </TouchableOpacity>

        {/* PainSense AI */}
        <View style={styles.aiCard}>
          <Image source={require("../assets/images/homescreen/ai-icon.png")} style={{height: 20,width: 20}} />
          <View style={styles.aiMat}>
          <Text style={styles.aiText}>PainSense AI</Text>
          <Text style={styles.aiDesc}>An AI clinical pain assessment{"\n"}Chronic pain monitoring and prediction</Text>
          </View>
          <TouchableOpacity><Image source={require("../assets/images/homescreen/rightArrow.png")} style={{height: 20,width: 20}}/></TouchableOpacity>
        </View>

        {/* Products Section */}
        <View style={styles.sectionHeader}>
          <View style={styles.sectionHeading}>
            <Image source={require("../assets/images/homescreen/product-icon.png")} style={{height: 35,width:35}} />
            <Text style={styles.sectionTitle}>Our Services</Text>
          </View>
          <View style={styles.sectionButton}>
            <Text style={styles.sectionSee}>See all</Text>
            <TouchableOpacity style={styles.sectionIcon}>
            <Image source={require("../assets/images/homescreen/rightArrowOutline.png")} style={{height: 20,width:20}} />
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          horizontal
          data={productData}
          renderItem={renderProduct}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding:30,backgroundColor:'#0A7BA5'}}
        />

        {/* Featured Products */}
        <View style={styles.productHeader}>
          <View style={styles.productHeading}>
            <Image source={require("../assets/images/homescreen/product-icon.png")} style={{height: 35,width:35}} />
            <Text style={styles.productTitle}>Our Products</Text>
          </View>
         <View style={styles.productButton}>
            <Text style={styles.productSee}>See all</Text>
            <TouchableOpacity style={styles.productIcon}>
            <Image source={require("../assets/images/homescreen/rightArrowOutline.png")} style={{height: 20,width:20,tintColor:'grey'}} />
            </TouchableOpacity>
          </View>
          </View>
        <FlatList
          horizontal
          data={featuredProductData}
          renderItem={renderFeaturedProduct}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingHorizontal: 10 }}
        />

        {/* Health Tips */}
         <View style={styles.sectionHeader}>
          <View style={styles.sectionHeading}>
            <Image source={require("../assets/images/homescreen/healthtip-icon.png")} style={{height: 35,width:35}} />
            <Text style={styles.sectionTitle}>Health Tips</Text>
          </View>
          <View style={styles.sectionButton}>
            <Text style={styles.sectionSee}>See all</Text>
            <TouchableOpacity style={styles.sectionIcon}>
            <Image source={require("../assets/images/homescreen/rightArrowOutline.png")} style={{height: 20,width:20}} />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.healthTipContent}>
          <Text style={styles.healthTipHeading}>Read top articles from health experts</Text>
          <Text style={styles.healthTipDescription}>Health articles that keep you informed about good health practices and achieve your goals</Text>
        </View>
        <FlatList
          horizontal
          data={healthTipsData}
          renderItem={renderHealthTip}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding:10,backgroundColor:'#0A7BA5'}}
        />
        <View style={styles.footerHighlights}>
          <Text>Verified Doctors</Text>
          <Text>Best Treatment</Text>
          <Text>Secure Payment</Text>
        </View>

      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff'
  },
  header: {
    flexDirection: 'column',
    backgroundColor: '#095D7E',
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    alignItems: 'center',
    padding: 16,
  },
  aboveHeader: {
    width:'100%',
    flexDirection: 'row',
    backgroundColor: '#095D7E',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 0,
  },
  profileHeader: {
    flexDirection: 'row',
    backgroundColor: '#095D7E',
    borderRadius: '100%'
  },
  locationHeader: {
    flexDirection: 'row',
    backgroundColor: '#095D7E',
    gap: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  location: {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 600,
    color: '#fff',
    fontSize: 17,
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
  consultationSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  consultCard: {
    width: '45%',
    flexDirection:'column',
    alignItems: 'stretch',
    // alignSelf : 'flex-start',
    borderRadius: 20,
    backgroundColor: '#0A7BA5'
  },
  consultImage: {
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    width: '100%',
    height: 150
  },
  consultText: {
    paddingHorizontal: 6,
    paddingVertical : 10,
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 600,
    fontSize: 12,
    color: 'white',
    textAlign: 'center',
  },
  bannerCard: {
    backgroundColor: '#0A7BA5',
    margin: 16,
    borderRadius: 10,
    overflow: 'hidden'
  },
  bannerImage: {
    width: '100%',
    height: 160,
  },
  bannerText:{
    padding: 10,
    fontFamily : 'Montserrat-SemiBold',
    textAlign: 'center',
    color: '#fff',
    fontWeight: 600,
    fontSize: 12,
  },
  aiCard: {
    flexDirection : 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    backgroundColor: '#0A7BA5',
    margin: 16,
    borderRadius: 10,
    padding: 16,
  },
  aiMat : {
    flexDirection : 'column',
  },
  aiText: {
     fontFamily : 'Montserrat-SemiBold',
    color: '#fff',
    fontWeight: 600,
    fontSize: 15,
    color: '#fff',
  },
  aiDesc: {
     fontFamily : 'Montserrat-Medium',
    color: '#fff',
    fontWeight: 600,
    fontSize: 11,
  },
  sectionTitle: {
    marginLeft: 16,
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionHeader:{
    marginTop: 10,
    flexDirection:'row',
    padding: 10,
    justifyContent:'space-between',
    backgroundColor: '#0A7BA5',
  },
  sectionHeading: {
    flexDirection:'row',
    alignItems:'center',
    gap: 10,
  },
  sectionTitle : {
     fontFamily : 'Montserrat-SemiBold',
    color: '#fff',
    fontWeight: 600,
    fontSize: 19,
  },
  sectionButton:{
    flexDirection:'row',
    gap: 5,
    alignItems: 'center',
  },
  sectionSee:{
    fontFamily : 'Montserrat-Medium',
    color: '#fff',
    fontWeight: 600,
    fontSize: 13,
  },
  productHeader:{
    marginTop: 10,
    width:'100%',
    flexDirection:'row',
    padding: 10,
    justifyContent:'space-between',
  },
  productHeading: {
    flexDirection:'row',
    alignItems:'center',
    gap: 10,
  },
  productTitle : {
     fontFamily : 'Montserrat-SemiBold',
     color: '#095D7E',
    fontWeight: 600,
    fontSize: 19,
  },
  productButton:{
    flexDirection:'row',
    gap: 5,
    alignItems: 'center',
  },
   productSee:{
    fontFamily : 'Montserrat-Medium',
    color: 'black',
    fontWeight: 600,
    fontSize: 13,
  },
  productCard: {
    position: 'relative',
    width: 275,
    height: 370,
    marginRight: 10,
    borderRadius: 10,
  },
  productImage: {
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  productLabel: {
    position: 'absolute',
    color: '#fff',
    fontFamily: 'PollerOne',
    fontWeight: 600,
    fontSize: 25,
    marginTop: 10,
    marginLeft: 100,
    textAlign: 'center',
  },
    productSideLabel: {
    position: 'absolute',
    color: '#fff',
    fontFamily: 'Montserrat-Medium',
    fontWeight: 500,
    fontSize: 13,
    marginTop: 50,
    marginLeft: 110,
    textAlign: 'center',
  },
  renderproductButton: {
    flexDirection : 'row',
    gap: 5,
     left: 10,
     bottom: 5,
     position: 'absolute',
  },
  renderproductView : {
    fontFamily : 'Montserrat-Regular',
    color: '#fff',
    fontWeight: 500,
    fontSize: 11,
  },
  productIcon: {
    color:'black',
  },
  singleProduct: {
    backgroundColor: '#BEBEBE80',
    borderRadius: 10,
    width: 180,
    marginRight: 10,
    alignItems: 'center',
    padding: 10,
  },
  singleProductImage: {
    borderRadius: 10,
    width: '100%',
    height: 140,
  },
  singleProductMat : {
    paddingVertical: 10,
    width: '100%',
    alignItems: 'flex-start'
  },
  singleProductHead : {
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 600,
    fontSize: 11,
    color: 'black',
  },
  singleProductDesc : {
    fontFamily: 'Montserrat-Medium',
    fontWeight: 500,
    fontSize: 11, 
    color: 'grey',
  },
  price: {
    fontFamily: 'Montserrat-Bold',
    color: 'black',
    fontSize: 11,
  },
  strike: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 600,
    fontSize: 9,
    textDecorationLine: 'line-through',
    color: '#aaa',
  },
    container: {
    alignItems: 'center',
    marginVertical: 20,
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0A7DA8',
    marginBottom: 15,
  },
  healthTipContent:{
   backgroundColor: '#0A7BA5',
   padding: 10,
  },
  healthTipHeading:{
    fontFamily: 'Montserrat-SemiBold',
    fontWeight: 600,
    fontSize: 15,
     color: 'white',
  },
  healthTipDescription:{
  fontFamily: 'Montserrat-Medium',
    fontWeight: 500,
    fontSize: 13,
     color: '#aaa',
  },
  tipCard: {
    gap: 5,
    width: 250,
    backgroundColor: '#0A7BA5',
    padding: 10,
    borderRadius: 10,
  },
  tipImage:{
    borderRadius:10,
    width:  '100%',
    height: 120
  },
  tipTitle: {
    fontFamily: 'Montserrat-Medium',
    fontWeight: 500,
    fontSize: 13,
    color: "#fff",
  },
  tipAuthor: {
    fontFamily: 'Montserrat-Regular',
    fontWeight: 500,
    fontSize: 13,
    color: "#fff",
  },
  testimonialBox: {
    width: 260,
    backgroundColor: '#e0f7fa',
    margin: 16,
    padding: 16,
    borderRadius: 10,
  },
  testimonialText: {
    fontSize: 14,
    fontStyle: 'italic',
  },
  author: {
    marginTop: 10,
    textAlign: 'right',
    fontWeight: 'bold',
  },
  footerHighlights: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 16,
    backgroundColor: '#0BA5EC',
  },
});

export default HomeScreen;
