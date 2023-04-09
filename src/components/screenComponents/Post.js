/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image, TouchableOpacity, TextInput} from 'react-native';
import React, {useState} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Ionic from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const Post = () => {
  const postInfo = [
    {
      postTitle: 'Briyani❤️World🌎',
      postPersonImage: require('../../storage/images/profile1.jpg'),
      postImage: require('../../storage/images/briyani.jpg'),
      likes: 765,
      isLiked: false,
    },
    {
      postTitle: 'Chicken_Rice🍚',
      postPersonImage: require('../../storage/images/profile2.jpg'),
      postImage: require('../../storage/images/chicken_rice.jpg'),
      likes: 100000,
      isLiked: false,
    },
    {
      postTitle: 'Black_Currant💜',
      postPersonImage: require('../../storage/images/profile3.jpg'),
      postImage: require('../../storage/images/blackcurrant.jpg'),
      likes: 765000,
      isLiked: false,
    },
    {
      postTitle: 'Shawarma🥐🌎',
      postPersonImage: require('../../storage/images/profile4.jpg'),
      postImage: require('../../storage/images/shawarma.jpg'),
      likes: 965,
      isLiked: false,
    },
    {
      postTitle: 'Tandoori.House🍗🏠',
      postPersonImage: require('../../storage/images/profile5.jpg'),
      postImage: require('../../storage/images/tandoori.jpg'),
      likes: 76,
      isLiked: false,
    },
    {
      postTitle: 'Rasagulla_Sweet',
      postPersonImage: require('../../storage/images/profile5.jpg'),
      postImage: require('../../storage/images/rasagulla.jpg'),
      likes: 76,
      isLiked: false,
    },
    {
      postTitle: 'Burger_King🍔',
      postPersonImage: require('../../storage/images/profile5.jpg'),
      postImage: require('../../storage/images/burger.jpg'),
      likes: 76,
      isLiked: false,
    },
    {
      postTitle: 'Falooda_World',
      postPersonImage: require('../../storage/images/profile5.jpg'),
      postImage: require('../../storage/images/falooda.jpg'),
      likes: 76,
      isLiked: false,
    },
    {
      postTitle: 'Murukku_kadai',
      postPersonImage: require('../../storage/images/profile5.jpg'),
      postImage: require('../../storage/images/murukku.jpg'),
      likes: 76,
      isLiked: false,
    },
  ];

  return (
    <View>
      {postInfo.map((data, index) => {
        const [like, setLike] = useState(data.isLiked);
        return (
          <View
            key={index}
            style={{
              paddingBottom: 10,
              borderBottomColor: 'gray',
              borderBottomWidth: 0.1,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <Image
                  source={data.postPersonImage}
                  style={{width: 40, height: 40, borderRadius: 100}}
                />
                <View style={{paddingLeft: 5}}>
                  <Text
                    style={{fontSize: 15, fontWeight: 'bold', color: '#000'}}>
                    {data.postTitle}
                  </Text>
                </View>
              </View>
              <Feather
                name="more-vertical"
                style={{fontSize: 20, color: '#000'}}
              />
            </View>
            <View
              style={{
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={data.postImage}
                style={{width: '100%', height: 400}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingHorizontal: 12,
                paddingVertical: 15,
              }}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <TouchableOpacity onPress={() => setLike(!like)}>
                  <AntDesign
                    name={like ? 'heart' : 'hearto'}
                    style={{
                      paddingRight: 10,
                      fontSize: 25,
                      color: like ? 'red' : 'black',
                    }}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Ionic
                    name="ios-chatbubble-outline"
                    style={{fontSize: 25, paddingRight: 10, color: '#000'}}
                  />
                </TouchableOpacity>
                <TouchableOpacity>
                  <Feather
                    name="navigation"
                    style={{fontSize: 25, color: '#000'}}
                  />
                </TouchableOpacity>
              </View>
              <Feather name="bookmark" style={{fontSize: 25, color: '#000'}} />
            </View>
            <View style={{paddingHorizontal: 15}}>
              <Text>
                Liked by {like ? 'you and' : ''}{' '}
                {like ? data.likes + 1 : data.likes} others
              </Text>
              <Text
                style={{
                  fontWeight: '700',
                  fontSize: 14,
                  color: '#000',
                  paddingVertical: 2,
                }}>
                Briyani is an emotion :)
              </Text>
              <Text style={{opacity: 0.4, paddingVertical: 2}}>
                View all comments
              </Text>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Image
                    source={data.postPersonImage}
                    style={{
                      width: 25,
                      height: 25,
                      borderRadius: 100,
                      backgroundColor: 'orange',
                      marginRight: 10,
                    }}
                  />
                  <TextInput
                    placeholder="Add a comment"
                    style={{opacity: 0.5}}
                  />
                </View>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Entypo
                    name="emoji-happy"
                    style={{fontSize: 15, color: 'lightgreen', marginRight: 10}}
                  />
                  <Entypo
                    name="emoji-neutral"
                    style={{fontSize: 15, color: 'pink', marginRight: 10}}
                  />
                  <Entypo
                    name="emoji-sad"
                    style={{fontSize: 15, color: 'red'}}
                  />
                </View>
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Post;
