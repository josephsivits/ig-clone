import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid' // to get SafeAreaView working on Android, must use StyleSheet
import React from 'react'
import Header from '../components/Home/Header'
// when importing componenets, do not import them as JSX objects.
// import { SafeAreaView } from 'react-native-web'


// you can use more than on estyle using an array!
const HomeScreen = () => {
  return (
    <SafeAreaView style={[SafeAreaViewAndroid.AndroidSafeArea, styles.container]}> 
        <Header/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})

export default HomeScreen