import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import close from "../assets/images/physioscreen/close.png";
import rightarrow from '../assets/images/healthtipsscreen/rightarrow.png';
import { SafeAreaView } from 'react-native-safe-area-context';

const EditFieldScreen = ({navigation}) => {
  const route = useRoute();
  const {
    label,
    value,
    remaining,
    isPhone
  } = route.params;

  const [input, setInput] = useState(value || '');

  const handleSave = () => {
    navigation.navigate('MyHealth', {
      updatedKey: label,
      updatedValue: input
    });
  };

  return (
       <SafeAreaView style={styles.container}>
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={close} style={{width:20,height:20,tintColor:'white'}} />
        </TouchableOpacity>
        <View>
            
          <Text style={styles.headerText}>{label}</Text>
          <Text style={styles.subText}>{remaining || ' '}</Text>
        </View>
        <TouchableOpacity onPress={handleSave}>
          <Text style={styles.nextText}>NEXT</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.body}>
        <Text style={styles.question}>What is your {label.toLowerCase()}?</Text>
        <View style={styles.inputRow}>
          {isPhone && <Text style={styles.prefix}>+91</Text>}
          <TextInput
            value={input}
            onChangeText={setInput}
            style={styles.input}
            placeholder={`Enter ${label.toLowerCase()}`}
            placeholderTextColor="#aaa"
            keyboardType={isPhone ? 'phone-pad' : 'default'}
          />
          {input.length > 0 && (
            <TouchableOpacity onPress={() => setInput('')}>
              <Image source={close} style={{width:20,height:20,tintColor:'white'}} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.underline} />
      </View>
    </View>
       </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2D3092',
    paddingTop: 50,
    paddingHorizontal: 20
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop:-30
  },
  headerText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  subText: {
    color: '#ccc',
    fontSize: 12,
    textAlign: 'center'
  },
  nextText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 14
  },
  body: {
    marginTop: 80
  },
  question: {
    color: '#fff',
    fontSize: 18,
    marginBottom: 20,
    marginTop:-10
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  prefix: {
    color: '#fff',
    marginRight: 5,
    fontSize: 16
  },
  input: {
    flex: 1,
    fontSize: 18,
    color: '#fff'
  },
  underline: {
    height: 1,
    backgroundColor: '#fff',
    marginTop: 4
  }
});

export default EditFieldScreen;