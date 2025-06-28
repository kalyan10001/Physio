import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { useNavigation } from '@react-navigation/native';

export default function Intro (){

    const navigation=useNavigation();

    useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('Auth')
        },3000);
    })
  return (
    <View style={styles.container}>
      <Image
      source={require('../assets/images/loginscreen/splashScreenLogo.png')}
      style={styles.logo}
      />
    </View>
  )
}


const styles = StyleSheet.create({
    container:{
        alignItems:'center',
        flex:1,
        justifyContent:'center'
    },
    logo:{
        width:200,
        height:200,
    }
})