import React from 'react'
import {Text} from 'react-native'
const PhysioScreen = () => {
  return (
    <Text>
      PhysioScreen
    </Text>
  )
}

export default PhysioScreen


// import faceicon from '../assets/images/homescreen/faceicon.png';
// import rightarrow from "../assets/images/healthtipsscreen/rightarrow.png";
// import notification from "../assets/images/homescreen/notification.png";
// import search from "../assets/images/homescreen/search.png";
// import uparrow from "../assets/images/physioscreen/up-arrow.png";
// import downarrow from "../assets/images/physioscreen/down-arrow.png";
// import  { useState ,useEffect} from 'react';
// import { ScrollView , View , Text , TouchableOpacity , Image , TextInput} from 'react-native';
// import { SafeAreaView } from 'react-native-safe-area-context';
// import Feather from 'react-native-vector-icons/Feather';  
// import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import CustomBottomTab from '../Home/CustomBottomTabs.js';

// import physiospeciality from "../utils/topSpecialities.json";
// import otherspeciality from "../utils/otherSpecialities.json";
// import { useNavigation, useRoute } from '@react-navigation/native';

// const PhysioScreen = () => {

//   const route=useRoute();
//  const navigation=useNavigation();
//   const {feature}=route.params;

//   const [physioSpecialities, setPhysioSpecialities] = useState([
//     { imageUrl: '', speciality: '' },
//     { imageUrl: '', speciality: '' },
//     { imageUrl: '', speciality: '' },
//     { imageUrl: '', speciality: '' },
//     { imageUrl: '', speciality: '' },
//     { imageUrl: '', speciality: '' },
//   ]);
//   const [otherSpecialities, setOtherSpecialities] = useState([
//     { imageUrl: '', speciality: '' },
//     { imageUrl: '', speciality: '' },
//     { imageUrl: '', speciality: '' },
//     { imageUrl: '', speciality: '' },
//     { imageUrl: '', speciality: '' },
//     { imageUrl: '', speciality: '' },
//   ]);


//   useEffect(() => {

//     setPhysioSpecialities(physiospeciality);
//     setOtherSpecialities(otherspeciality);
//     // const getPhysioSpeciality = async () => {
//     //   console.log('Fetching physio specialities');
//     //   try {
//     //     const res = await fetch(${process.env.EXPO_PUBLIC_BACKEND_URL}/api/physio/physiospecialities);
//     //     const data = await res.json();
//     //     console.log('Physio Specialities', data);
//     //     setPhysioSpecialities(data);
//     //   } catch (error) {
//     //     console.log('Error loading physio specialities', error);
//     //   }
//     // };
//     // const getOtherSpeciality = async () => {
//     //   console.log('Fetching other specialities');
//     //   try {
//     //     const res = await fetch(${process.env.EXPO_PUBLIC_BACKEND_URL}/api/physio/otherspecialities);
//     //     const data = await res.json();
//     //     console.log('Other Specialities', data);
//     //     setOtherSpecialities(data);
//     //   } catch (error) {
//     //     console.log('Error loading other specialities', error);
//     //   }
//     // };

//   }, []);

//   const [showAll, setShowAll] = useState(false);
//   const [showAllOther, setShowAllOther] = useState(false);
//   const initialCount = 6;
//   const physios = showAll ? physioSpecialities : physioSpecialities.slice(0, initialCount);
//   const others = showAllOther ? otherSpecialities : otherSpecialities.slice(0, initialCount);

//   return (
//     <SafeAreaView style={{ flex: 1, height: '100%', alignItems: 'center' }}>
//       <ScrollView contentContainerStyle={{ minHeight: '100%', backgroundColor: 'rgba(48, 195, 234, 0.15)' }}>
//         {/* Header Section */}
//           <View style={{ width: '100%', paddingHorizontal: 16, paddingVertical: 12, flexDirection: 'row', justifyContent: 'flex-start', gap: 8, alignItems: 'center' }}>
//                     <TouchableOpacity style={{ borderRadius: 9999 }} onPress={() => navigation.goBack()}>
//                       <Image source={rightarrow} style={{ width: 35, height: 35 }} />
//                     </TouchableOpacity>
//                     <Text style={{ fontSize: 21, fontFamily: 'Poppins', fontWeight: 700, color: '#22285C',marginLeft:80 }}>
//                       PHYSIOS
//                     </Text>
//                   </View>
//         {/* <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 16, paddingVertical: 12, width: '100%' }}>
//           <Text style={{ fontSize: 30, fontFamily: 'Poppins', fontWeight: 700, color: '#22285C', textTransform: 'uppercase' }}>
//             PHYSIOS
//           </Text>
//           <TouchableOpacity style={{ borderRadius: 9999 }}>
//             <Image source={faceicon} style={{ height: 80, width: 80, borderRadius: 9999 }} />
//           </TouchableOpacity>
//         </View> */}
//         <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', paddingHorizontal: 16, paddingVertical: 12, width: '100%', gap: 12, marginTop:-10,
//  }}>
//           <View
//             style={{
//               shadowColor: 'black',
//               shadowOffset: { width: 0, height: 4 },
//               shadowOpacity: 0.8,
//               shadowRadius: 4.65,
//               elevation: 10,
//               flexDirection: 'row',
//               alignItems: 'center',
//               flex: 1,
//               backgroundColor: '#E9E9E9',
//               borderRadius: 9999,
//               paddingHorizontal: 16,
//             }}
//           >
//             <TextInput
//               style={{ flexGrow: 1, fontFamily: 'Poppins', fontWeight: 600, fontSize: 17, color: '#000000', paddingRight: 8 }}
//               placeholder="Search"
//               placeholderTextColor="rgba(0, 0, 0, 0.8)"
//               // onFocus={() => navigation.navigate('Search')}
//             />
//             <TouchableOpacity>
//                 <Image source={search} style={{ width: 40, height: 40, borderRadius: 9999}} />
//             </TouchableOpacity>
//           </View>
//           <TouchableOpacity
//             style={{
//               shadowColor: 'black',
//               shadowOffset: { width: 0, height: 4 },
//               shadowOpacity: 0.8,
//               shadowRadius: 2,
//               elevation: 10,
//               padding: 8,
//               backgroundColor: '#E9E9E9',
//               borderRadius: 9999,
//             }}
//           >
//             <Image source={notification} style={{ width: 32, height: 32, borderRadius: 9999, tintColor: '#22285C' }} />
//           </TouchableOpacity>
//         </View>
//         <View style={{ alignItems: 'center', justifyContent: 'center', height: 3, backgroundColor: '#A5A5A5', marginHorizontal: 16, marginTop: 24, marginBottom: 24 }} />
//         <View style={{ paddingHorizontal: 16, marginTop: 12 }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//             <Text style={{ width: '66.67%', fontFamily: 'Poppins', fontWeight: 700 , color: '#22285C', fontSize: 22 }}>
//               Top Physiotherapy Specialities
//             </Text>
//             <TouchableOpacity
//               style={{ flexDirection: 'row', alignItems: 'center', marginRight: 4 }}
//               onPress={() => setShowAll((prev) => !prev)}
//             >
//               <Text style={{ fontFamily: 'Poppins', fontWeight: 600, fontSize: 12, color: 'rgba(0, 0, 0, 0.25)' }}>
//                 {showAll ? 'View Less' : 'View All'}
//               </Text>
//               <Image source={showAll ? uparrow : downarrow} style={{width:20,height:20}} color="rgba(0, 0, 0, 0.4)" />
//             </TouchableOpacity>
//           </View>
//           <View style={{ marginTop: 12, width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
//             {physios.map((item, index) => (
//               <TouchableOpacity
//                 style={{
//                   shadowColor: 'black',
//                   shadowOffset: { width: 0, height: 4 },
//                   shadowOpacity: 0.8,
//                   shadowRadius: 2,
//                   elevation: 8,
//                   padding: 12,
//                   width: '33.33%',
//                   alignItems: 'center',
//                 }}
//                 key={index}
//                 onPress={() => navigation.navigate('PhysioTheraphists',{feature:feature})}
//               >
//                 <View style={{ width: '100%', backgroundColor: '#22285C', borderTopLeftRadius: 12, borderTopRightRadius: 12, padding: 12, alignItems: 'center' }}>
//                   <Image source={{ uri: item.imageUrl }} style={{ height: 64, width: 64 }} />
//                 </View>
//                 <Text
//                   style={{
//                     width: '100%',
//                     height: 62,
//                     textAlign: 'center',
//                     backgroundColor: '#FFFFFF',
//                     color: '#22285C',
//                     paddingHorizontal: 10,
//                     paddingVertical: 8,
//                     borderBottomLeftRadius: 12,
//                     borderBottomRightRadius: 12,
//                     fontSize: 15,
//                     fontFamily: 'Poppins',
//                     fontWeight: 600,
//                   }}
//                 >
//                   {item.speciality}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//         <View style={{ paddingHorizontal: 16, marginTop: 12 }}>
//           <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
//             <Text style={{ width: '66.67%', color: '#22285C', fontFamily: 'Poppins', fontWeight: 700, fontSize: 22 }}>
//               Other Specialities
//             </Text>
//             <TouchableOpacity
//               style={{ flexDirection: 'row', alignItems: 'center', marginRight: 4 }}
//               onPress={() => setShowAllOther((prev) => !prev)}
//             >
//               <Text style={{ fontFamily: 'Poppins', fontWeight: 600 , fontSize: 12, color: 'rgba(0, 0, 0, 0.25)' }}>
//                 {showAllOther ? 'View Less' : 'View All'}
//               </Text>
//               <Image source={showAllOther ? uparrow : downarrow} style={{width:20,height:20}} color="rgba(0, 0, 0, 0.4)" />
//             </TouchableOpacity>
//           </View>
//           <View style={{ marginTop: 12, width: '100%', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'flex-start' }}>
//             {others.map((item, index) => (
//               <TouchableOpacity
//                 style={{ padding: 12, width: '33.33%', alignItems: 'center' }}
//                 key={index}
//               >
//                 <View style={{ width: '100%', backgroundColor: '#22285C', borderTopLeftRadius: 12, borderTopRightRadius: 12, padding: 12, alignItems: 'center' }}>
//                   <Image source={{ uri: item.imageUrl }} style={{ height: 64, width: 64 }} />
//                 </View>
//                 <Text
//                   style={{
//                     width: '100%',
//                     height: 60,
//                     textAlign: 'center',
//                     backgroundColor: '#FFFFFF',
//                     color: '#22285C',
//                     paddingHorizontal: 10,
//                     paddingVertical: 8,
//                     borderBottomLeftRadius: 12,
//                     borderBottomRightRadius: 12,
//                     fontSize: 15,
//                     fontFamily: 'Poppins',
//                     fontWeight: 600,
//                   }}
//                 >
//                   {item.speciality}
//                 </Text>
//               </TouchableOpacity>
//             ))}
//           </View>
//         </View>
//         {/* <View style={{ marginTop: 32, width: '100%', alignItems: 'flex-start', paddingHorizontal: 16 }}>
//           <Text style={{ width: '66.67%', fontFamily: 'Poppins', fontWeight: 700, fontSize: 22, color: '#22285C', marginBottom: 16 }}>
//             Score Your Physical Health
//           </Text>
//           <View style={{ width: '100%', alignItems: 'center', paddingBottom: 80, marginBottom: 40 }}>
//             <Image
//               source={require('../assets/images/physioscreen/muscular.png')}
//               style={{ width: '50%', height: 300, marginBottom: 16 }}
//               resizeMode="cover"
//             />
//             <TouchableOpacity
//               style={{ width: '50%', alignItems: 'center', backgroundColor: '#22285C', paddingHorizontal: 24, paddingVertical: 12, borderRadius: 9999 }}
//               onPress={() => navigation.navigate('PhysioHealthScore')}
//             >
//               <Text style={{ color: '#FFFFFF', fontFamily: 'Poppins', fontWeight: 600, fontSize: 14 }}>
//                 Start Assessment
//               </Text>
//             </TouchableOpacity>
//           </View>
//         </View> */}
//       </ScrollView>
//     </SafeAreaView>
//   );
// };

//   const [physioSpecialities,setPhysioSpecialities] = useState([{ imageUrl : "", speciality: "" },{ imageUrl : "", speciality : "" },{ imageUrl : "", speciality : "" },{ imageUrl : "", speciality : "" },{ imageUrl : "", speciality : "" },{ imageUrl : "", speciality : "" },]);
//   const [otherSpecialities,setOtherSpecialities] = useState([{ imageUrl : "", speciality: "" },{ imageUrl : "", speciality : "" },{ imageUrl : "", speciality : "" },{ imageUrl : "", speciality : "" },{ imageUrl : "", speciality : "" },{ imageUrl : "", speciality : "" },]);
//   useEffect(() => {
//     const getPhysioSpeciality = async () => {
//        console.log("Fetching phsyio specialities");
//     try{
//   const res = await fetch(${process.env.EXPO_PUBLIC_BACKEND_URL}/api/physio/physiospecialities);
//   const data = await res.json();
//   console.log("Physio Specialities" ,data);
//   setPhysioSpecialities(data);
//     } 
//     catch(error) {
//       console.log("Error loading physio specialities",error);
//     }
//     }
//     const getOtherSpeciality = async () => {
//        console.log("Fetching other specialities");
//     try{
//   const res = await fetch(${process.env.EXPO_PUBLIC_BACKEND_URL}/api/physio/otherspecialities);
//   const data = await res.json();
//   console.log("Other Specialities" ,data);
//   setOtherSpecialities(data);
//     } 
//     catch(error) {
//       console.log("Error loading other specialities",error);
//     }
//     }

//     getPhysioSpeciality();
//     getOtherSpeciality();
//   },[]);

//   useFonts({Poppins});
//     const [showAll, setShowAll] = useState(false);
//     const [showAllOther, setShowAllOther] = useState(false);
//   const initialCount = 6;
//   const physios = showAll ? physioSpecialities : physioSpecialities.slice(0, initialCount);
//   const others = showAllOther ? otherSpecialities : otherSpecialities.slice(0, initialCount);
//   return (
//      <SafeAreaView className="flex-1 h-full items-center">
//       <ScrollView contentContainerStyle={{minHeight:'100%', backgroundColor : "#30C3EA26"}}>
//         {/* Header Section */}
//         <View className="flex-row justify-between items-center px-4 py-3 w-full">
//           <Text className="text-[30px] font-poppins font-bold text-[#22285C] uppercase">PHYSIOS</Text>
//           <TouchableOpacity className="rounded-full">
//             <Image source={faceicon} className="h-[60px] w-[60px] rounded-full" />
//           </TouchableOpacity>
//         </View>
//         <View className="flex-row items-center justify-center px-4 py-3 w-full gap-3 space-x-3">
//   <View 
//   style={{
//     shadowColor: 'black', 
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.8,
//     shadowRadius: 4.65,
//     elevation: 10, 
//   }} className="flex-row items-center flex-1 bg-[#E9E9E9] rounded-full px-4">
//     <TextInput
//       className="flex-grow font-poppins font-semibold text-[17px] text-black pr-2 "
//       placeholder="Search"
//       placeholderTextColor="#00000080"
//       onFocus={() => navigation.navigate("Search")}
//     />
//     <TouchableOpacity>
//       <Feather name="search" size={25} color="#00000040" />
//     </TouchableOpacity>
//   </View>

//   <TouchableOpacity
//         style={{
//           shadowColor: 'black',
//           shadowOffset: { width: 0, height: 4 },
//           shadowOpacity: 0.8,
//           shadowRadius: 2,
//           elevation: 10,
//           padding: 8,
//           backgroundColor: '#E9E9E9',
//           borderRadius: 9999,
//         }}
//       >
//         <Image source={notification} style={{ width: 32, height: 32, borderRadius: 9999, tintColor: '#22285C' }} />
//       </TouchableOpacity>
// </View>
// <View className="items-center justify-center h-[3px] bg-[#A5A5A5] mx-4 mt-6 mb-6" ></View>
//   <View className="px-4 mt-3">
//       <View className="flex-row justify-between items-center">
//         <Text className="w-2/3 font-poppins text-[#22285C] font-bold text-[22px]">Top Physiotherapy Specialities</Text>
//         <TouchableOpacity
//           className="flex-row items-center space-x-1"
//           onPress={() => setShowAll((prev) => !prev)}
//         >
//           <Text className="font-poppins font-semibold text-[12px] text-black/25">{showAll ? "View Less" : "View All"}</Text>
//           <Feather
//             name={showAll ? 'chevron-up' : 'chevron-down'}
//             size={20}
//             color="#00000040"
//           />
//         </TouchableOpacity>
//       </View>

//       <View className="mt-3 w-full flex-row flex-wrap justify-start">
//         {physios.map((item, index) => (
//           <TouchableOpacity style={{ 
//     shadowColor: 'black', 
//     shadowOffset: { width: 0, height: 4 },
//     shadowOpacity: 0.8,
//     shadowRadius: 2,
//     elevation: 8,
//   }} key={index} className="p-3 w-1/3 items-center" onPress={() => navigation.navigate("PhysioTherapists",{physiotype : item.speciality})}>
//             <View className="w-full bg-[#22285C] rounded-t-lg p-3 items-center">
//             <Image source={{uri : item.imageUrl }} className="h-16 w-16 " />
//             </View>
//             <Text className="w-full h-[62px] text-center bg-white text-[#22285C] px-5 py-2 rounded-b-lg text-md font-poppins text-[15px] font-semibold">{item.speciality}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//   <View className="px-4 mt-3"> 
//       <View className="flex-row justify-between items-center">
//         <Text className="w-2/3 text-[#22285C] font-poppins font-bold text-[22px]">Other Specialities</Text>
//         <TouchableOpacity
//           className="flex-row items-center space-x-1"
//           onPress={() => setShowAllOther((prev) => !prev)}
//         >
//           <Text className="font-poppins font-semibold text-[12px] text-black/25">{showAllOther ? 'View Less' : 'View All'}</Text>
//           <Feather
//             name={showAllOther ? 'chevron-up' : 'chevron-down'}
//             size={20}
//             color="#00000040"
//           />
//         </TouchableOpacity>
//       </View>

//       <View className="mt-3 w-full flex-row flex-wrap justify-start">
//         {others.map((item, index) => (
//           <TouchableOpacity key={index} className="p-3 w-1/3 items-center" onPress={() => navigation.navigate("PhysioTherapists",{physiotype : item.speciality})}>
//             <View className="w-full bg-[#22285C] rounded-t-lg p-3 items-center">
//             <Image source={{uri : item.imageUrl}} className="h-16 w-16 " />
//             </View>
//             <Text className="w-full h-[60] text-center bg-white color-[#22285C] px-5 py-2 rounded-b-lg text-[15px] font-poppins font-semibold">{item.speciality}</Text>
//           </TouchableOpacity>
//         ))}
//       </View>
//     </View>
//     <View className="mt-8 w-full items-start px-4">
//   <Text className="w-2/3 font-poppins text-[22px] font-bold text-[#22285C] mb-4">
//     Score Your Physical Health
//   </Text>
// <View className="w-full items-center pb-20 mb-10">
//   <Image
//     source={require('../assets/images/physioscreen/muscular.png')}
//     className="w-[50%] h-[300px] mb-4"
//     resizeMode="cover"
//   />
//   <TouchableOpacity className="w-[50%] items-center bg-[#22285C] px-6 py-3 rounded-full" onPress={() => navigation.navigate("PhysioHealthScore")}>
//     <Text className="text-white font-poppins font-semibold text-[14px] ">Start Assessment</Text>
//   </TouchableOpacity>
//   </View>
// </View>

//       </ScrollView>
//       <CustomBottomTab name="PHYSIOS"/>
//     </SafeAreaView>


// export default PhysioScreen;