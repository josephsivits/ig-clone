import { View, Text,Image,ToucahbleOpacity } from 'react-native'
import React, {useState} from 'react'
import {Divider} from 'react-native-elements'


//2:00:24
// Time to add the icons
// active and unactive (filled and unfilled)
export const bottomTabIcons = [
    {
        name:'Home',
        active: 'https://img.icons8.com/fluency-systems-filled/144/ffffff/home',
        inactive: 'https://img.icons8.com/fluency-systems-regular/144/ffffff/home',
    },
    {   
        name:'Search',
        active: 'https://img.icons8.com/ios-filled/344/ffffff/search--v1.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/344/ffffff/search--v1.png',
    },
    {
        name: 'Reels',
        active: 'https://img.icons8.com/ios-filled/452/ffffff/instagram-reel.png',
        inactive: 'https://img.icons8.com/ios/452/ffffff/instagram-reel.png',
    },
    {
        name: 'Shop',
        active: 'https://img.icons8.com/ios-glyphs/452/ffffff/shopping-bag-full.png',
        inactive: 'https://img.icons8.com/windows/452/ffffff/shopping-bag-full.png',
    },
    {
        name: 'Profile',
        active: 'https://img.icons8.com/fluency-systems-filled/452/ffffff/user.png',
        inactive: 'https://img.icons8.com/fluency-systems-regular/452/ffffff/user.png',
    }

]

const BottomTabs = ({icons}) => {

    // set the default tab to be home
    const [activeTab, setActiveTab] = useState('Home')

    // making the icon componenets
    const Icon = ({icon}) => (
        <ToucahbleOpacity onPress={() => setActiveTab({icon.name})} >
            <Image />
        </ToucahbleOpacity>
    )

  return (
    <View>
      <Text>BottomTabs</Text>
    </View>
  )
}

export default BottomTabs