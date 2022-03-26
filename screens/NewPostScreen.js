import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid'
import AddNewPost from '../components/newPost/AddNewPost'

const NewPostScreen = () => {
  return (
    <SafeAreaView style={[SafeAreaViewAndroid.AndroidSafeArea, styles.container]}> 
        <AddNewPost />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})

export default NewPostScreen