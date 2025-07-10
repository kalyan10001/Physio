import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image ,FlatList} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const MyHealthScoreScreen = ({navigation}) => {

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
      const renderHealthTip = ({ item }) => (
        <View style={styles.tipCard}>
          <Image source={item.imageUrl} style={styles.tipImage}/>
          <Text style={styles.tipTitle}>{item.title}</Text>
          <Text style={styles.tipAuthor}>{item.author}</Text>
        </View>
      );
    
  return (
    <SafeAreaView style={styles.container}>
      {/* Back Button */}
      <View style={styles.header}>
            
              <View style={styles.headerContent}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                  <Image
                                source={require('../assets/images/myhealthscreen/arrow-left.png')}
                                style={{ width: 24, height: 24 }}
                              />
                </TouchableOpacity>
            
                <Text style={styles.headerText}>My Health Score</Text>
            
                {/* Spacer to balance layout */}
                <View style={{ width: 32 }} />
              </View>
            </View>

      {/* Score Section */}
      <View style={styles.scoreCard}>
        <Text style={styles.scoreLabel}>Your Score</Text>
        <Text style={styles.scoreValue}>1</Text>
      </View>

      <View style={styles.scoreDescriptionBox}>
        <Text style={styles.scoreDescription}>
          Your score is 1 — above average, but a professional check-up is recommended to maintain and improve your physical health.
        </Text>
      </View>

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
      {/* Bottom Button */}
      <View style={styles.bottomButtonContainer}>
        <TouchableOpacity style={styles.testAgainButton}>
          <Text style={styles.testAgainText}>Test again</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default MyHealthScoreScreen;

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
  scoreCard: {
    backgroundColor: '#006400',
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: 'center',
    paddingVertical: 10,
  },
  scoreLabel: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    fontSize: 13,
    fontWeight: 600,
  },
  scoreValue: {
    color: '#fff',
    fontSize: 45,
    fontWeight: 'bold',
  },
  scoreDescriptionBox: {
    borderWidth: 1,
    borderColor: '#00800050',
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 6,
    padding: 12,
    backgroundColor: '#E6F4EA',
  },
  scoreDescription: {
    fontFamily:"Montserrat-Regular",
    fontSize: 13,
    fontWeight: 500,
    color: 'rgba(0, 122, 41, 1)',
    lineHeight: 20,
  },
  healthTipsSection: {
    marginTop: 24,
    backgroundColor: '#1C88D2',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 20,
    flex: 1,
  },
  healthTipsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  healthTipsTitle: {
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
  },
  seeAllText: {
    color: '#fff',
    fontSize: 14,
  },
  healthTipsSubtitle: {
    color: '#fff',
    fontSize: 13,
    marginTop: 8,
    lineHeight: 18,
  },
  articleScroll: {
    marginTop: 16,
  },
  articleCard: {
    width: 200,
    marginRight: 16,
  },
  articleImage: {
    width: '100%',
    height: 110,
    borderRadius: 10,
    marginBottom: 6,
  },
  articleText: {
    color: '#fff',
    fontSize: 13,
  },
  bottomButtonContainer: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 16,
  },
  testAgainButton: {
    backgroundColor: '#0075B6',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  testAgainText: {
    fontFamily: 'Montserrat-Regular',
    color: '#fff',
    fontSize: 15,
    fontWeight: 600,
  },
   sectionTitle: {
    marginLeft: 16,
    marginTop: 16,
    fontWeight: 'bold',
    fontSize: 16,
  },
  sectionHeader:{
    marginTop: 100,
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
    fontFamily : 'Montserrat-Regular',
    color: '#fff',
    fontWeight: 600,
    fontSize: 13,
  },
   healthTipContent:{
   backgroundColor: '#0A7BA5',
   paddingHorizontal: 10,
  },
  healthTipHeading:{
    fontFamily: 'Montserrat-Medium',
    fontWeight: 600,
    fontSize: 15,
     color: 'white',
  },
  healthTipDescription:{
  fontFamily: 'Montserrat-Regular',
    fontWeight: 500,
    fontSize: 13,
     color: '#aaa',
  },
   tipCard: {
    gap: 5,
    width: 250,
    backgroundColor: '#0A7BA5',
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  tipImage:{
    borderRadius:10,
    width:  '100%',
    height: 120
  },
  tipTitle: {
    fontFamily: 'Montserrat-Regular',
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
});
