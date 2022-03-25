import { View, Text,Image } from 'react-native' //package name 'react-native'
import React from 'react'
import {Divider} from 'react-native-elements' // after doing the npm install react-native-elements

// yarn add react-native-elements
// npm install react-native-elements

// takes in a post then is handled
const Post = ({post}) => {
  return (
    <View style={{marginBottom:30}}>
        <Divider width={1} orientation='vertical'/>

        <PostHeader post={post} />
        <PostImage post={post} />

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




// DONE AT 46:52
const styles = StyleSheet.create({
    story: {
      width: 35,
      height: 35,
      borderRadius:50,
      marginHorizontal:6,
      borderWidth:1.6,
      borderColor:'#FF8585',
    }
})


export default Post