import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native'
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid' // to get SafeAreaView working on Android, must use StyleSheet
import React from 'react'
import Header from '../components/Home/Header'
import Stories from '../components/Home/Stories'
import Post from '../components/Home/Post'
//import { ScrollView } from 'react-native-web'
import { POSTS } from '../data/posts'
import BottomTabs,{ bottomTabIcons }  from '../components/Home/BottomTabs'
// when importing componenets, do not import them as JSX objects.
// import { SafeAreaView } from 'react-native-web'


// you can use more than on estyle using an array!
// for posts, you can have more than on epost in a loop
const HomeScreen = () => {
  return (
    <SafeAreaView style={[SafeAreaViewAndroid.AndroidSafeArea, styles.container]}> 
        <Header/>
        <Stories/>
        
        <ScrollView> 
            {POSTS.map((post,index)=>(
                <Post post={post} key={index}/>
            ))}
      
        </ScrollView>
       <BottomTabs icons={bottomTabIcons}/>
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