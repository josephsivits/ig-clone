import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import FormikPostUploader from './FormikPostUploader'

const AddNewPost = () => (
    <View style={styles.container}>
        <Header />
        <FormikPostUploader />
    </View>
)
/*
const Header = () => (
    <View styles={styles.headerContainer}>
        <TouchableOpacity>
            <Image 
            
                source={{uri: '../../assets/leftArrow.png'}} 
                
                style={{width:30,height:30}}
            />
            <Text>Ayo you a straightup bitch</Text>
        </TouchableOpacity>
      <Text style={styles.headerText}>NEW test POST bitch</Text>
      <Text></Text>
    </View>
)
*/

const Header = ({navigation}) => (
    <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={require('../../assets/leftArrow.png')} style={{ width: 25, height: 25 }} />
        </TouchableOpacity>
        <Text style={styles.headerText}>NEW POST</Text>
        <View></View>
      </View>
  )


const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems:'center',
        paddingBottom:15,
    },
    headerText: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 20,
        marginRight:25,
    },

})

export default AddNewPost