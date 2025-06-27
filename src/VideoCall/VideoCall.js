import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet, Image, StatusBar } from 'react-native';
import { WebView } from 'react-native-webview';
import { useNavigation } from '@react-navigation/native';

// Import the same back icon you use in PhysioTherapist screen
import rightarrow from '../assets/images/healthtipsscreen/rightarrow.png';
import { SafeAreaView } from 'react-native-safe-area-context';

const VideoCall = () => {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#22285C" barStyle="light-content" />

      {/* Custom Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={rightarrow} style={styles.icon35} />
        </TouchableOpacity>
        <Text style={styles.title}>Video Consultation</Text>
      </View>

      {/* Video Call */}
      <WebView
        source={{ uri: 'https://getphysio.daily.co/bnifqOk58zwXdugq9LQL' }} // ✅ Replace with your actual Daily.co room
        style={styles.webView}
        javaScriptEnabled={true}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        mediaPlaybackRequiresUserAction={false}
        startInLoadingState={true}
      />
    </SafeAreaView>
  );
};

export default VideoCall;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 12,
    backgroundColor: '#22285C',
  },
  icon35: {
    width: 35,
    height: 35,
    tintColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginLeft: 80,
  },
  webView: {
    flex: 1,
  },
});
