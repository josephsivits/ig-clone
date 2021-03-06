import { View, Text,SafeAreaView,StyleSheet } from 'react-native'
import React from 'react'
import SafeAreaViewAndroid from '../components/SafeAreaViewAndroid'
import AddNewPost from '../components/newPost/AddNewPost'


// 3:05:03
const NewPostScreen = ({navigation}) => {
  return (
    <SafeAreaView style={[SafeAreaViewAndroid.AndroidSafeArea, styles.container]}> 
      <AddNewPost navigation={navigation} />
    </SafeAreaView>
    
  )
}

export default NewPostScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 1,
    }
})
