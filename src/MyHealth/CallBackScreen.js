import React from 'react';
import {
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const CallBackScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Header Image with Back Button */}
        <View style={styles.headerContainer}>
          <Image
           source={require('../assets/images/myhealthscreen/report-icon.png')}
            style={styles.headerImage}
          />
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.backButton}
          >
            <Image
              source={require('../assets/images/myhealthscreen/arrow-left.png')}
              style={styles.backIcon}
            />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Want a Call back from Us?</Text>
        </View>

        {/* Form Fields */}
        <View style={styles.form}>
          <Text style={styles.label}>Last Name</Text>
          <TextInput style={styles.input} placeholder="eg. Das, Mandal" />

          <Text style={styles.label}>Email I’d</Text>
          <TextInput style={styles.input} placeholder="eg. abc@gmail.com" />

          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.input}
            placeholder="eg. 8116964765"
            keyboardType="number-pad"
          />

          <Text style={styles.label}>When we can call you?</Text>
          <View style={styles.inputWithIcon}>
            <TextInput style={styles.inputFlex} placeholder="eg. Min: Hr" />
            <Image
              source={require('../assets/images/myhealthscreen/clock.png')}
              style={styles.clockIcon}
            />
          </View>

          <Text style={styles.label}>Describe your problem</Text>
          <TextInput
            style={[styles.input, { height: 100, textAlignVertical: 'top' }]}
            multiline
          />
        </View>
      </ScrollView>

      {/* Submit Button */}
      <TouchableOpacity style={styles.submitButton}>
        <Text style={styles.submitText}>Submit your concern</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default CallBackScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  headerContainer: {
    position: 'relative',
  },
  headerImage: {
    width: '100%',
    height: 200,
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },
  backButton: {
    position: 'absolute',
    top: 10,
    left: 20,
    backgroundColor: '#4A4A4A',
    width: 42,
    height: 42,
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    width: 18,
    height: 18,
    tintColor: '#fff',
  },
  headerTitle: {
    position: 'absolute',
    top: 10,
    left: 0,
    right: 0,
    textAlign: 'center',
    color: '#fff',
    fontSize: 18,
    fontFamily: 'Montserrat-SemiBold',
  },
  form: {
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 100, // to avoid button overlap
  },
  label: {
    fontFamily: 'Montserrat-Medium',
    fontSize: 15,
    fontWeight: '600',
    marginBottom: 6,
  },
  input: {
    fontFamily: 'Montserrat-Medium',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    padding: 14,
    marginBottom: 20,
    fontSize: 13,
    color: '#000',
  },
  inputWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 12,
    paddingHorizontal: 14,
    paddingVertical: 10,
    marginBottom: 20,
  },
  inputFlex: {
    flex: 1,
    fontSize: 14,
    color: '#000',
  },
  clockIcon: {
    width: 20,
    height: 20,
    tintColor: '#555',
  },
  submitButton: {
    backgroundColor: '#0078A6',
    paddingVertical: 16,
    marginHorizontal: 20,
    marginBottom: 20,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  submitText: {
    fontFamily:"Montserrat-SemiBold",
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
});
