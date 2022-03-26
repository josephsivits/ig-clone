import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const AddNewPost = () => (
    <View style={styles.container}>
        <Header />
    </View>
)

const Header = () => (
    <View styles={styles.headerContainer}>
        <TouchableOpacity>
            <Image 
                source={{uri: 'https://img.icons8.com/ios-glyphs/90/ffffff/back.png'}} 
                style={{width:30,height:30}}
            />
            
      </TouchableOpacity>
      <Text style={{color:'white'}}>ADD NEW POST</Text>
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
    },
    headerText: {

    },

})

export default AddNewPost