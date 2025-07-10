// EditProfileScreen.tsx

import React, { useState } from 'react';
import { View, Text, TextInput, Image, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Platform } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const EditProfileScreen = ({navigation}) => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address1,setAddress1] = useState('');
  const [address2,setAddress2] = useState('');
  const [city,setCity] = useState('');
  const [state,setState] = useState('');
  const [pinCode,setPinCode] = useState('');
  const [gender, setGender] = useState('Male');
  const [dob, setDob] = useState(new Date(2005, 9, 10)); // 10th Oct, 2005
  const [showDatePicker, setShowDatePicker] = useState(false);
  

  const formatDate = (date) => {
  const day = date.getDate().toString().padStart(2, '0');
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const year = date.getFullYear();
  return `${day}-${month}-${year}`;
};


  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Back Arrow */}
        <View style={styles.header}>
                          
                            <View style={styles.headerContent}>
                              <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                                <Image
                                              source={require('../assets/images/myhealthscreen/arrow-left.png')}
                                              style={{ width: 24, height: 24 }}
                                            />
                              </TouchableOpacity>
                          
                              <Text style={styles.headerText}>Edit Profile</Text>
                          
                              {/* Spacer to balance layout */}
                              <View style={{ width: 32 }} />
                            </View>
                          </View>

        {/* Profile Image */}
        <View style={styles.profileContainer}>
          <Image
            source={require("../assets/images/homescreen/faceicon.jpg")} // replace with your local or remote image
            style={styles.profileImage}
          />
          <TouchableOpacity style={styles.editIcon}>
            <Image source={require("../assets/images/myhealthscreen/edit-icon.png")} style={{height: 20,width: 20}} />
          </TouchableOpacity>
        </View>
        {/* Name */}
        <Text style={styles.label}>Name</Text>
<View style={styles.rowInput}>
           <TextInput style={styles.flexInput} placeholder="Enter your full name" onChangeText={(text) => setName(text)}/>
            {name && 
          <TouchableOpacity>
             <Image source={require("../assets/images/myhealthscreen/cross-icon.png")} style={{height: 20,width: 20,tintColor:'black'}} />
          </TouchableOpacity>
           }
        </View>
        {/* Email */}
        <Text style={styles.label}>Email I’d</Text>
        <View style={styles.rowInput}>
          <TextInput style={styles.flexInput} placeholder="abc@gmail.com" onChangeText={(text) => setEmail(text)}/>
            {email && 
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
            }
        </View>

        {/* Address Lane 1 */}
        <Text style={styles.label}>Address Lane 1</Text>
        <View style={styles.rowInput}>
          <TextInput style={styles.flexInput} placeholder="House number,City etc" onChangeText={(text) => setAddress1(text)}/>
          {address1 && 
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
          }
        </View>

        {/* Address Lane 2 */}
        <Text style={styles.label}>Address Lane 2</Text>
        <View style={styles.rowInput}>
          <TextInput style={styles.flexInput} placeholder="Landmark..."  onChangeText={(text) => setAddress2(text)}/>
            {address2 && 
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
          }
        </View>
        <Text style={styles.label}>City</Text>
        <View style={styles.rowInput}>
          <TextInput style={styles.flexInput} placeholder="Kolkata,Bangalore etc"  onChangeText={(text) => setCity(text)}/>
            {address2 && 
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
          }
        </View>
        <Text style={styles.label}>State</Text>
        <View style={styles.rowInput}>
          <TextInput style={styles.flexInput} placeholder="West Bengal,Bihar etc"  onChangeText={(text) => setState(text)}/>
            {address2 && 
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
          }
        </View>
        <Text style={styles.label}>Pin Code</Text>
        <View style={styles.rowInput}>
          <TextInput style={styles.flexInput} placeholder="Enter Your Pin Code"  onChangeText={(text) => setPinCode(text)}/>
            {address2 && 
          <TouchableOpacity>
            <Text style={styles.changeText}>Change</Text>
          </TouchableOpacity>
          }
        </View>

        <Text style={styles.label}>Date of Birth</Text>
<View style={styles.rowInput}>
  <TextInput
    style={styles.flexInput}
    value={formatDate(dob)}
    editable={false}
  />
  <TouchableOpacity onPress={() => setShowDatePicker(true)}>
    <Image source={require("../assets/images/myhealthscreen/date-picker.png")} style={{ height: 20, width: 20, tintColor: 'black' }} />
  </TouchableOpacity>
</View>

{showDatePicker && (
  <DateTimePicker
    value={dob}
    mode="date"
    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
    onChange={(event, selectedDate) => {
      setShowDatePicker(Platform.OS === 'ios'); // iOS keeps picker open, Android closes
      if (event.type !== 'dismissed' && selectedDate) {
        setDob(selectedDate);
      }
    }}
    maximumDate={new Date()} // restrict future dates
  />
)}


        {/* Gender */}
        <Text style={styles.label}>Gender</Text>
        <View style={styles.pickerWrapper}>
          <Picker
            selectedValue={gender}
            onValueChange={(itemValue) => setGender(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Male" value="Male" />
            <Picker.Item label="Female" value="Female" />
            <Picker.Item label="Other" value="Other" />
          </Picker>
        </View>

        {/* Save Button */}
        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.goBack()}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
   header: {
  width: '100%',
  alignItems: 'center',
  justifyContent: 'flex-start',
  position: 'relative',
  marginBottom: 20,
},
  headerContent: {
  width: '100%',
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'space-between',
  paddingHorizontal: 16,
  paddingTop: 10,
  zIndex: 10,
},
headerText: {
  fontFamily: 'Montserrat-SemiBold',
  fontSize: 18,
  color: '#000',
  textAlign: 'center',
},
backButton: {
   backgroundColor: '#4C4C4C',
  borderRadius: '100%',
  padding: 10,
},
  profileContainer: {
    alignSelf: 'center',
    position: 'relative',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 100,
  },
  editIcon: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#0C7DB1',
    borderRadius: 15,
    padding: 5,
  },
  label: {
    marginHorizontal: 20,
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 14,
    marginTop: 10,
    marginBottom: 4,
    fontWeight: '500',
  },
  input: {
    fontFamily: 'Montserrat-Regular',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 12,
    fontSize: 14,
    color: '#000',
  },
  rowInput: {
    fontFamily: 'Montserrat-Regular',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 2,
    marginHorizontal: 20,
    justifyContent: 'space-between',
  },
  flexInput: {
    fontFamily: 'Montserrat-Regular',
    flex: 1,
    fontSize: 14,
    paddingVertical: 10,
  },
  changeText: {
    fontFamily: 'Montserrat-Regular',
    color: 'red',
    fontSize: 14,
    marginLeft: 10,
  },
  pickerWrapper: {
    marginHorizontal: 20,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    overflow: 'hidden',
  },
  picker: {
    height: 50,
    width: '100%',
  },
  saveButton: {
    marginHorizontal: 20,
    backgroundColor: '#0077A9',
    paddingVertical: 15,
    borderRadius: 10,
    marginTop: 30,
  },
  saveButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontWeight: '600',
    fontSize: 16,
  },
});
