import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const faqData = Array(12).fill({
  question: 'Interested in a physiotherapy consultation to stay stronger?',
});

const FAQScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
       <View style={styles.header}>
                  
                    <View style={styles.headerContent}>
                      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Image
                                      source={require('../assets/images/myhealthscreen/arrow-left.png')}
                                      style={{ width: 24, height: 24 }}
                                    />
                      </TouchableOpacity>
                  
                      <Text style={styles.headerText}>FAQ</Text>
                  
                      {/* Spacer to balance layout */}
                      <View style={{ width: 32 }} />
                    </View>
                  </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        {/* Banner */}
        <View style={styles.bannerContainer}>
          <View style={styles.bannerTextContainer}>
            <Text style={styles.bannerHeading}>Have questions?{"\n"}We’ve got answers!</Text>
            <Text style={styles.bannerSub}>Explore our FAQs to find quick solutions to common queries.</Text>
          </View>
          <Image
            source={require('../assets/images/myhealthscreen/faq-banner.png')} // Replace with your actual image
            style={styles.bannerImage}
            resizeMode="contain"
          />
        </View>

        {/* FAQ Title */}
        <View style={styles.faqTitleContainer}>
          <Text style={styles.faqTitle}>FAQs</Text>
          <Text style={styles.faqSubtitle}>Find answers to commonly asked questions</Text>
        </View>

        {/* FAQ List */}
        <FlatList
          data={faqData}
          keyExtractor={(_, index) => index.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity style={styles.faqItem}>
                <Text style={styles.faqQ}>Q.</Text>
              <Text style={styles.faqQuestion}>{item.question}</Text>
              <TouchableOpacity style={styles.plus}>
              <Image source={require("../assets/images/myhealthscreen/plus.png")}  style={{height:10,width:10}}/>
              </TouchableOpacity>
            </TouchableOpacity>
          )}
          scrollEnabled={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

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
  bannerContainer: {
    flexDirection: 'row',
    backgroundColor: '#0A7BA5',
    padding: 16,
    alignItems: 'center',
  },
  bannerTextContainer: {
    flex: 1,
  },
  bannerHeading: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 6,
  },
  bannerSub: {
    color: '#fff',
    fontSize: 13,
    fontWeight: '400',
  },
  bannerImage: {
    width: 100,
    height: 100,
  },
  faqTitleContainer: {
    paddingVertical: 16,
    alignItems: 'center',
  },
  faqTitle: {
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 17,
    fontWeight: '600',
    color: '#000',
  },
  faqSubtitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 13,
    color: '#555',
    marginTop: 4,
  },
  faqItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 6,
    gap: 15,
    backgroundColor: '#F5F5F5',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 4,
  },
  faqQ : {
    textAlign: 'center',
     fontFamily: 'Montserrat-SemiBold',
    fontSize: 13,
    color: 'black',
  },
  faqQuestion: {
    width: '80%',
    fontFamily: 'Montserrat-SemiBold',
    fontSize: 11,
    color: '#000',
  },
  plus: {
    fontWeight: '600',
    color: '#000',
  },
});

export default FAQScreen;