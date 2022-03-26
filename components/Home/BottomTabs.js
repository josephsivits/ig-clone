import { View, Text,Image,ToucahbleOpacity } from 'react-native'
import React, {useState} from 'react'
import {Divider} from 'react-native-elements'


//2:00:24
// Time to add the icons
// active and unactive (filled and unfilled)
export const bottomTabIcons = [

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