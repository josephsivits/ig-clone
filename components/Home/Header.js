import React from 'react'
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native'
import { MaterialCommunityIcons } from '@expo/vector-icons' // MaterialCommunityIcons are friends not food

const Header = ({navigation}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <Image
                style = {styles.logo}
                source = {require('../../assets/header-logo.png')}
            />
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
            <TouchableOpacity onPress={() => navigation.push('NewPostScreen')} style={styles.icon}>
                <MaterialCommunityIcons name="plus-box" color='white' size={24}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                <MaterialCommunityIcons name="heart-multiple-outline" color='white' size={24}/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.icon}>
                <View style={styles.unreadBadge}>
                <Text style={styles.unreadBadgeText}>11</Text>
                    
                </View>

                <MaterialCommunityIcons name="message-outline" color='white' size={24}/>
            </TouchableOpacity>

        </View>

    </View>
  )
}


//TODO: Change MaterialCommunityIcons to be handled by 'icon', can't figure that out rn style in StyleSheet
const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        alignItems: 'center',
        flexDirection: 'row',
        marginHorizontal: 20,
    },

    iconsContainer: {
        flexDirection: 'row',
    },
    icon : {
        width: 30,
        height:30,
        marginLeft: 10,
        resizeMode: 'contain',
    },

    logo:{
        width:100,
        height:50,
        resizeMode:'contain',
    },

    unreadBadge: {
        backgroundColor: '#FF3250',
        position: 'absolute',
        left:10,
        bottom:18,
        width:25,
        height:20,
        borderRadius:25,
        alignItems:'center',
        justifyContent:'center',
        zIndex:1000,
    },

    unreadBadgeText:{
        color:'white',
        fontWeight:'bold'
    }
})

export default Header