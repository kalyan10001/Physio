import { useFocusEffect } from '@react-navigation/native';
import {useState,useRef,useCallback,useEffect} from 'react'
import {View,Text,Image,TextInput,TouchableOpacity,ScrollView , StyleSheet ,FlatList,Dimensions,ActivityIndicator} from 'react-native';
import { Platform ,PermissionsAndroid} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Geolocation from 'react-native-geolocation-service';
import { useRoute } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios'; 
import {
  fetchServices,
  fetchProducts,
  fetchHealthTips,
  fetchTestimonials,
} from '../webservice/redux/actions/homeActions';


const HomeScreen = ({navigation}) => {

    const dispatch = useDispatch();
    const {
  data: services,
  loading: servicesLoading,
  error: servicesError,
} = useSelector((s) => s.home.services);

const {
  data: products,
  loading: productsLoading,
  error: productsError,
} = useSelector((s) => s.home.products);

const {
  data: healthTips,
  loading: healthTipsLoading,
  error: healthTipsError,
} = useSelector((s) => s.home.healthTips);
  

  useEffect(() => {
  console.log('✅ Home screen services:', services);
  console.log('✅ Home screen products:', products);
  console.log('✅ Home screen healthTips:', healthTips);
}, [services, products, healthTips]);


  useEffect(() => {
    console.log("HomeScreen Mounted: Fetching data");
    dispatch(fetchServices());
    dispatch(fetchProducts());
    dispatch(fetchHealthTips());
  }, [dispatch]);


     const route = useRoute();
    const locations = route.params?.location ?? null;
const { width,height } = Dimensions.get('window');


const [testimonialIndex, setTestimonialIndex] = useState(0);

const handleDotPress = (index) => {
  setTestimonialIndex(index);
};
  const [location,setLocation] = useState('');
  

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
      return address.city;
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

useFocusEffect(
  useCallback(() => {
    console.log("HomeScreen Focused: Getting Location");

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
          console.log("return address",address);
          setLocation(address);
        },
        (error) => {
          console.log("Location error:", error.message);
          setErrorMsg(`Location error: ${error.message}`);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 10000,
        }
      );
    };
    if(locations === null)
    {
      console.log("location is empty");
    getLocation();
    }
    else 
    {
      console.log("location exist",locations);
      setLocation(locations);
    }
    // No cleanup necessary for geolocation here
    return () => {};
  }, [])
);
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
    text: "I've been using this service for several months now, and I can confidently say it has transformed the way I manage my daily tasks. From the intuitive interface to the seamless user experience, everything about it speaks of quality and thoughtfulness. I particularly appreciate the way it helps me stay organized without overwhelming me with too many options. The reminders, scheduling tools, and overall layout make it very easy to use. It's rare to find something this well-designed and functional.",
  },
  {
    id: '2',
    name: 'Ravi Kumar',
    location: 'Hyderabad',
    date: '12th April, 2025',
    text: "As someone who juggles multiple roles in both personal and professional life, having a tool like this is nothing short of a blessing. It offers great flexibility while keeping things simple and user-friendly. I love how everything is just a tap away – from managing appointments to tracking progress and staying on top of my commitments. The performance has been rock solid with no lags or bugs. Even customer support is responsive and helpful. The recent updates have only made it better.",
  },
  {
    id: '3',
    name: 'Priya Sharma',
    location: 'Delhi',
    date: '22nd May, 2025',
    text: "This platform has exceeded all my expectations. Initially, I was skeptical because I’ve tried many apps in the past that promised a lot but delivered very little. However, this one stands out from the rest. The UI is clean and attractive, and every feature has been thoughtfully built. I use it every day to plan my activities, write notes, and even track personal goals. The motivational nudges and smart suggestions are subtle but effective. I’ve also recommended it to several of my colleagues",
  },
];

 const renderProduct = ({ item }) => (
  servicesLoading
        ? <ActivityIndicator />
        : services.error
          ? <Text style={{ color: 'red' }}>{servicesError}</Text>
          : (
    <TouchableOpacity style={styles.productCard} onPress={() => navigation.navigate('PhysioTherapist')}>
      <Image source={{uri : item.imageUrl}} style={styles.productImage} />
      <View style={styles.renderproductButton}>
            <Text style={styles.renderproductView}>View Doctors</Text>
            <TouchableOpacity style={styles.sectionIcon}>
            <Image source={require("../assets/images/homescreen/rightArrowOutline.png")} style={{height: 20,width:20}} />
            </TouchableOpacity>
          </View>
    </TouchableOpacity>
          )
  );

  const renderFeaturedProduct = ({ item }) => (
    productsLoading
        ? <ActivityIndicator />
        : products.error
          ? <Text style={{ color: 'red' }}>{productsError}</Text>
          : (
    <View style={styles.singleProduct}>
      <Image source={{uri : item.imageUrl}} style={styles.singleProductImage} />
      <View style={styles.singleProductMat}>
      <Text style={styles.singleProductHead}>{item.name}</Text>
      <Text style={styles.singleProductDesc}>{item.description}</Text>
      <Text style={styles.price}>₹{item.price} <Text style={styles.strike}>{item.originalPrice}</Text></Text>
      </View>
    </View>
          )
  );

  const renderHealthTip = ({ item }) => (
    healthTipsLoading
        ? <ActivityIndicator />
        : healthTips.error
          ? <Text style={{ color: 'red' }}>{healthTipsError}</Text>
          : (
    <View style={styles.tipCard}>
      <Image source={{uri: item.imageUrl}} style={styles.tipImage}/>
      <Text style={styles.tipTitle}>{item.description}</Text>
      <Text style={styles.tipAuthor}>{item.author}</Text>
    </View>
          )
  );


  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        {/* Header */}
        <View style={styles.header}>
          <View style={styles.aboveHeader}>
            <TouchableOpacity style={styles.profileHeader} onPress={() => navigation.navigate('MyProfile')}>
              <Image source={require("../assets/images/homescreen/faceicon.jpg")} style={{width: 50,height: 50,borderRadius:50}} resizeMode="contain" />
            </TouchableOpacity>
            <TouchableOpacity style={styles.locationHeader} onPress={() => navigation.navigate("CitySelection",{location: location})}>
          <Image source={require("../assets/images/homescreen/location.png")} style={{width: 20,height: 20,tintColor:'white'}} resizeMode="contain"/>
          <Text style={styles.location}>{location}</Text>
          </TouchableOpacity>
          <Image source={require("../assets/images/homescreen/notification.png")} style={{width:25,height:25}} resizeMode="contain"/>
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
          data={services}
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
          data={products}
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
          data={healthTips}
          renderItem={renderHealthTip}
          keyExtractor={(item) => item.id}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ padding:10,backgroundColor:'#0A7BA5'}}
        />
        <View style={{ width: 400, height: 437, marginTop: 20,alignSelf: 'center', marginBottom: 20 ,paddingHorizontal: 10}}>
          <View style={{flexDirection: 'row', alignItems: 'center', gap: 10, paddingHorizontal: 10,marginBottom: 10 ,marginLeft:10}}>
          <Image source={require('../assets/images/homescreen/testimonal-icon.png')} style={{ width: 30, height: 30 }} resizeMode="contain" />
  <Text style={{ fontSize: 19, fontFamily:'Montserrat-SemiBold', color: '#0A7BA5',marginLeft:0 }}>
    Testimonials
  </Text>
  </View>

  <View style={{ width: 400, height: 366, paddingHorizontal: 10,position: 'relative', alignItems: 'center', justifyContent: 'center' }}>
    
    <View style={{
      width: 231.57,
      height: 295.15,
      marginLeft:10,
      position: 'absolute',
      top: 50.32,
      left: 20,
      backgroundColor: 'rgba(24, 150, 197, 1)',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      opacity: 0.6,
      transform: [{ rotate: '-11.82deg' }],
      padding: 12,
    }}>
      <Text style={{ fontSize: 12, fontFamily:'Montserrat-Medium',color: '#333' }}>
        {testimonials[testimonialIndex].text}
      </Text>
    </View>

    <View style={{
      width: 231.57,
      height: 295.15,
      position: 'absolute',
      top: 50.32,
      right: 50,
      backgroundColor: 'rgba(24, 150, 197, 1)',
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      opacity: 0.6,
      transform: [{ rotate: '11.82deg' }],
      padding: 12,
    }}>
      <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Medium',color: '#333' }}>
        {testimonials[testimonialIndex].text}
      </Text>
    </View>

    <View style={{
      width: 253,
      height: 335,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#ccc',
      backgroundColor: '#0A7BA5',
      padding: 20,
      zIndex: 2,
    }}>
      <Text style={{ fontSize: 12, fontFamily: 'Montserrat-Medium',color: '#fff', marginBottom: 15 }}>
        {testimonials[testimonialIndex].text}
      </Text>
      <Text style={{ fontSize: 13, fontFamily: "Montserrat-SemiBold", color: '#fff' }}>
        {testimonials[testimonialIndex].name}
      </Text>
      <Text style={{ fontSize: 11, fontFamily: 'Montserrat-Medium',color: '#e0f7fa' }}>
        {testimonials[testimonialIndex].location} - {testimonials[testimonialIndex].date} - Verified
      </Text>
    </View>
  </View>

  {/* Dots */}
  <View style={{ flexDirection: 'row', justifyContent: 'center', marginTop: 10, gap: 10 }}>
    {testimonials.map((_, index) => (
      <TouchableOpacity key={index} onPress={() => handleDotPress(index)}>
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 5,
            backgroundColor: testimonialIndex === index ? '#0A7BA5' : '#ccc',
          }}
        />
      </TouchableOpacity>
    ))}
  </View>
</View>

         <View
      style={{
        width: width,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop:-30
      }}
    >
      <Image
        source={require('../assets/images/homescreen/Banner.png')}
        style={{
          width: width - 40, // 20px margin on each side
          height: 170,
          borderRadius:15,
        }}
        resizeMode="contain"
      />
    </View>

       
         <View
      style={{
        width: width,
        paddingHorizontal: 20,
        paddingVertical: 10,
        backgroundColor: '#fff',
        alignItems: 'center',
        marginTop:-10,
        marginBottom:90
      }}
    >
      <Image
        source={require('../assets/images/homescreen/Footer.png')}
        style={{
          width: width - 40, // 20px margin on each side
          height: 170,
        }}
        resizeMode="contain"
      />
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
    paddingVertical: 5,
    paddingHorizontal: 10,
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
    gap: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  location: {
    fontFamily: 'Montserrat-SemiBold',
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
    backgroundColor: '#0A7BA5',
     shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
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
    overflow: 'hidden',
     shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
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
     shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
    elevation: 5,
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
  sectionIcon: {
    borderRadius: 50,
    marginBottom: 2,
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
    marginBottom: 2,
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
