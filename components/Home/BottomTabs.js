
import React, {useState} from 'react'
import { View, Image,TouchableOpacity,StyleSheet } from 'react-native'
import {Divider} from 'react-native-elements'

// active and unactive (filled and unfilled)
export const bottomTabIcons = [
    {
      name: 'Home',
      active: require('../../assets/home-on.png'),
      inactive: require('../../assets/home-off.png')
    },
    {
      name: 'Search',
      active: require('../../assets/search-on.png'),
      inactive: require('../../assets/search-off.png')
    },
    {
      name: 'Reel',
      active: require('../../assets/reel-on.png'),
      inactive: require('../../assets/reel-off.png')
    },
    {
      name: 'Shopping',
      active: require('../../assets/shopping-on.png'),
      inactive: require('../../assets/shopping-off.png')
    },
    {
      name: 'Profile',
      active: require('../../assets/profile-on.png'),
      inactive: require('../../assets/profile-off.png')
    }
  ]

// stuck at 2:04:02
// Error: Text strings must be rendered within a <Text> component.
/*
    Error: Element type is invalid: expected a string (for built-in components)
     or a class/function (for composite components) but got: undefined. 
     You likely forgot to export your component from the file it's defined in, 
    or you might have mixed up default and named imports.

    Check the render method of `Icon`.
*/
const BottomTabs = ({ icons }) => {

    // set the default tab to be home
    const [activeTab, setActiveTab] = useState('Home')

    // making the icon componenets
    const Icon = ({ icon }) => {
        var currIcon = (activeTab === icon.name) ? icon.active : icon.inactive
        return (
          <TouchableOpacity onPress={() => setActiveTab(icon.name)}>
            <Image source={currIcon} style={styles.icon} />
          </TouchableOpacity>
        )
      }
    

  return (
      <View>
      <Divider width={1} orientation='vertical' color='gray' />
            <View style={styles.container}>
                {icons.map((icon,index) => (   
                    <Icon key={index} icon={icon} /> 
                ))}   
            </View>
    </View>
  )
}

const styles = StyleSheet.create({
    wrapper: {
      position: 'absolute',
      width: '100%',
      bottom: '3%',
      zIndex: 999,
      backgroundColor: '#000'
    },
    container: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      height: 50,
      paddingTop: 10
    },
    icon: {
      width: 25,
      height: 25,
      resizeMode: 'cover'
    }
    // he added a profile picture.
  })

export default BottomTabs