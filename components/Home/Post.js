import { View, Text,Image,StyleSheet, TouchableOpacity } from 'react-native' //package name 'react-native'
import React from 'react'
import {Divider} from 'react-native-elements' // after doing the npm install react-native-elements
import { MaterialCommunityIcons } from '@expo/vector-icons' // MaterialCommunityIcons are friends not food
import { Ionicons } from '@expo/vector-icons'; 
//import Icon from '@material-ui/core/Icon'; // to use for 


// yarn add react-native-elements
// npm install react-native-elements

/* Components for Footer
MaterialCommunityIcons list for the footer (will be updated later)
Like   :   <MaterialCommunityIcons name="heart-outline" color='white' size={24}/>
Like(d)   :   <MaterialCommunityIcons name="heart-outline" color='red' size={24}/>
Comment :   <MaterialCommunityIcons name="chatbubble-outline" color='white' size={24}/>
DM      :   <MaterialCommunityIcons name="message-arrow-right-outline" color='white' size={24}/>         
Bookmark:   <MaterialCommunityIcons name="bookmark-outline" color='white' size={24}/>       
*/

// 1:18:32

// takes in a post then is handled
const Post = ({post}) => {
  return (
    <View style={{marginBottom:30}}>
        <Divider width={1} orientation='vertical'/>

        <PostHeader post={post} />
       
        <PostImage post={post} />
   
        <View style={{marginHorizontal:15,marginTop:10}}>
            <PostFooter />
            <Likes post={post} />
            <Caption post={post} />
            <CommentSection post={post} />
            <Comments post={post}/>
        </View>
     {/*} for some reason i had to re-build it, it's working now idk why {*/}
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
            <Image source={{uri:post.profile_picture}} style={styles.story}/>
            <Text style={{color:'white', marginLeft:5, fontWeight:'700'}}>
                {post.user}
            </Text>
        </View>

        <Text style={{color:'white',fontWeight:'900'}}>...</Text>

    </View>
)

const PostImage = ({post}) => (
    <View style={{width:'100%',height:450}}>
        <Image 
            source={{uri:post.imageUrl}} 
            style={{height:'100%',resizeMode:'cover'}}
        />
    </View>
)

//1:16:31 look for importing icon
const PostFooter = () => (
    <View style={{flexDirection:'row', justifyContent:'space-between'}}>
        <View style={styles.leftFooterIconsContainer}>
        {/*} This is really ugly, refactoring migh tbe worthwhile to write cleaner code{*/}
                <TouchableOpacity>
                    <MaterialCommunityIcons name="heart-outline" color='white' size={24}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Ionicons name="chatbubble-outline" size={24} color="white" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <MaterialCommunityIcons name="message-arrow-right-outline" color='white' size={24}/> 
                </TouchableOpacity>
        </View>

        <View>
            <MaterialCommunityIcons name="bookmark-outline" color='white' size={24}/>     
        </View>
    </View>
)

const Likes = ({post}) => (
    <View style={{flexDirection:'row',marginTop:4}}>
    <Text style={{color:'white', fontWeight:'700'}}>{post.likes.toLocaleString('en')} likes</Text>
    </View>
)

// 1:35:56
const Caption = ({post}) => (
    <View style={{marginTop:5}}>
        <Text style={{color:'white'}}>
        {/*} CAN'T GET BOLD USERNAME TO WORK... LOOK INTO {*/}
            <Text style={{fontWeight:'900'}}>{post.user}</Text>
            <Text>{'  '}{post.caption}</Text>
        </Text>
    </View>
)

// 1:42:09 
const CommentSection = ({post}) => (
    <View style={{marginTop:5}}>
    {/*}CONDITIONAL RENDER, double negation convertes to primitive Boolean Value{*/}
    {!!post.comments.length && (
        <Text style={{color: 'gray'}}>
            View{post.comments.length > 1 ? ' all': ''} {post.comments.length}
            {post.comments.length > 1 ? ' comments' : ' comments' }
        </Text>
    )}
    </View>
)

const Comments = ({post}) => (
    // Fragment
    <> 
        {post.comments.map((comment, index) => (
            <View key={index} style={{flexDirection:'row', marginTop:'5'}}>
                <Text style={{color:'white'}}>
                    <Text style={{fontWeight:'600'}}>{comment.user}{'  '}</Text>
                    {/*} REALLY BAD SYNTAX INCOMING{*/}
                    {comment.comment}
                </Text>
            </View>
        ))}
    </>   
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