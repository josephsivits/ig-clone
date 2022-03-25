import { View, Text,Image, } from 'react-native' //package name 'react-native'
import React from 'react'
import {Divider} from 'react-native-elements' // after doing the npm install react-native-elements
import { TouchableOpacity } from 'react-native-web'
import { MaterialCommunityIcons } from '@expo/vector-icons' // MaterialCommunityIcons are friends not food
//import Icon from '@material-ui/core/Icon'; // to use for 


// yarn add react-native-elements
// npm install react-native-elements

/*
MaterialCommunityIcons list for the footer (will be updated later)
Like   :   <MaterialCommunityIcons name="heart-outline" color='white' size={24}/>
Like(d)   :   <MaterialCommunityIcons name="heart-outline" color='red' size={24}/>
Comment :   <MaterialCommunityIcons name="chatbubble-outline" color='white' size={24}/>
DM      :   <MaterialCommunityIcons name="message-arrow-right-outline" color='white' size={24}/>         
Bookmark:   <MaterialCommunityIcons name="bookmark-outline" color='white' size={24}/>       
*/

// 1:18:32
/*
const postFooterIcons = [
    {
        name: 'Like',
        image: 'heart-outline',
        color: 'white'
    }
]
*/


// takes in a post then is handled
const Post = ({post}) => {
  return (
    <View style={{marginBottom:30}}>
        <Divider width={1} orientation='vertical'/>

        <PostHeader post={post} />
        <PostImage post={post} />

        <View style={{marginHorizontal:15,marginTop:10}}>
            <PostFooter />
        </View>

      <Text style={{color:'white'}}>Post</Text>
    </View>
  )
}

// PostHeader component, could export this as a sepearte js file
const PostHeader = ({post}) => (
    <View style={{
        flexDirection:'row',
        justifyContent:'space-between',
        margin:5,
        alignItems:'center',
    }}>
        <View style={{flexDirection:'row',alignItems:'center'}}>
            <Image source={{uri:post.profile_picture}} style={style.story}/>
            <Text style={{color:'white', marginLeft:5, fontWeight:700}}>
                {post.user}
            </Text>
        </View>

        <Text style={{color:'white',fontWeight:'900'}}>...</Text>

    </View>
)

const PostImage = ({post}) => {
    <View style={{width:'100%',height:450}}>
        <Image 
            source={{uri:post.imageUrl}} 
            style={{height:'100%',resizeMode:'cover'}}
        />
    </View>
}

//1:16:31 look for importing icon
const PostFooter = () => {
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={styles.leftFooterIconsContainer}>
            <Icon imgStyle={styles.footerIcon} iconName={'heart-outline'} iconColor={'white'} />
            <Icon imgStyle={styles.footerIcon} iconName={'chatbubble-outline'} iconColor={'white'} />
            <Icon imgStyle={styles.footerIcon} iconName={'message-arrow-right-outline'} iconColor={'white'} />
        </View>

        <View>
            <Icon imgStyle={styles.footerIcon} iconName={'bookmark-outline'} iconColor={'white'} />
        </View>
    </View>
}

// might be able to avoid imgUrl and just go straigt to imgStyle
const Icon = ({imgStyle ,iconName, iconColor}) => (
    <TouchableOpacity>
        <MaterialCommunityIcons style={imgStyle} name={iconName} color={iconColor} />
    </TouchableOpacity>
)

// DONE AT 46:52
const styles = StyleSheet.create({
    story: {
      width: 35,
      height: 35,
      borderRadius:50,
      marginHorizontal:6,
      borderWidth:1.6,
      borderColor:'#FF8585',
    },
    footerIcon: {
        width:33,
        height:33,
    },
    leftFooterIconsContainer: {
        flexDirection: 'row',
        width: '32%',
        justifyContent:'space-between',
    },
})


export default Post