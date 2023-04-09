import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState} from 'react';
import { FriendsProfileData } from '../screenComponents/Database';
import AntDesign from "react-native-vector-icons/AntDesign";
import {useNavigation} from '@react-navigation/native';

const Activity = () => {
  const navigation = useNavigation();
  return (
    <View style={{width: '100%', height: '100%', backgroundColor: 'white'}}>
      <Text style={{color: 'black', fontSize: 20, fontWeight: 'bold', borderBottomWidth: 0.5, borderBottomColor: '#DEDEDE', padding: 10,}}>
        Activity
      </Text>
      <ScrollView style={{margin: 10}} showsVerticalScrollIndicator={false}>
        <Text style={{fontWeight: 'bold', color: 'black'}}>This Week</Text>
        <View style={{flexDirection: 'row', paddingVertical: 10}}>
          {
            FriendsProfileData.slice(0,2).map((data, index) => {
              return(
                <TouchableOpacity onPress={() => navigation.push("FriendProfile", {
                  name: data.name,
                  profileImage: data.profileImage,
                  follow: data.follow,
                  post: data.posts,
                  followers: data.followers,
                  following: data.following,
                })} key={index}>
                  <Text style={{color: 'black'}}>{data.name}, </Text>
                </TouchableOpacity>
              );
            })}
          <Text style={{color: 'black'}}>started following you</Text>
        </View>
        <Text style={{fontWeight: 'bold', color: 'black'}}>Earlier</Text>
        {
          FriendsProfileData.slice(3,6).map((data, index) => {
            const [follow, setFollow] = useState(data.follow)
            return(
              <View key={index} style={{width: '100%'}}>
                <View 
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    paddingVertical: 20,
                    width: '100%',
                  }}>
                  <TouchableOpacity 
                    style={{
                      flexDirection: 'row', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      maxWidth: '64%'
                    }}
                  >
                    <Image 
                      source={data.profileImage} 
                      style={{
                        width: 45, 
                        height: 45, 
                        borderRadius: 100, 
                        marginRight: 10
                      }} 
                    />
                    <Text style={{fontSize: 15, color: 'black'}}>
                      <Text style={{fontWeight: 'bold', color: 'black'}}>{data.name}</Text>
                      , who you might know, is on instragram
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                    onPress={() => setFollow(!follow)} 
                    style={{width: follow ? 72 : 68}}>
                    <View 
                      style={{
                        width: '100%',
                        height: 30,
                        borderRadius: 5,
                        backgroundColor: follow ? null : '#3493D9',
                        borderWidth: follow ? 1 : 0,
                        borderColor: follow ? '#DEDEDE' : null,
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}>
                      <Text style={{color: follow ? 'black' : 'white'}}>{follow ? "Following" : "Follow"}</Text>
                    </View>
                  </TouchableOpacity>
                </View>
              </View>
            );
          })}
          <Text style={{fontWeight: 'bold', paddingVertical: 10, color: 'black'}}>Suggestions for you</Text>
          {
            FriendsProfileData.slice(6, 12).map((data, index) => {
              const [follow, setFollow] = useState(data.follow);
              const [close, setClose] = useState(false);
              return(
                <View key={index} >
                  {
                    close ? null :
                    (
                    <View 
                      style={{
                        paddingVertical: 10, 
                        flexDirection: 'row', 
                        width: '100%', 
                        justifyContent: 'space-between'
                      }}>
                      <View>
                      <TouchableOpacity 
                        style={{ 
                          flexDirection: 'row', 
                          alignItems: 'center', 
                          maxWidth: '64%'}}>
                      <Image 
                        source={data.profileImage} 
                        style={{
                          width: 45, 
                          height: 45, 
                          borderRadius: 100, 
                          marginRight: 10,
                        }} 
                      />
                      <View style={{width: '100%'}}>
                      <Text style={{fontSize: 14, fontWeight: 'bold', color: 'black'}}>{data.name}</Text>
                      <Text style={{fontSize: 12, opacity: 0.5}}>{data.accountName}</Text>
                      <Text style={{fontSize: 12, opacity: 0.5}}>Suggested for you</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                        {
                          follow ? (
                            <TouchableOpacity
                            onPress={() => setFollow(!follow)}
                              style={{
                                width: follow ? 90 : 68,
                              }}>
                              <View 
                                style={{
                                  width: '100%', 
                                  height: 30, 
                                  borderRadius: 5, 
                                  backgroundColor: follow ? null : "#3493D9",
                                  borderWidth: follow ? 1 : 0,
                                  borderColor: '#DEDEDE',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}>
                                <Text style={{color: follow ? "black" : "white"}}>
                                  {follow ? 'following' : 'follow'}
                                </Text>
                              </View>
                            </TouchableOpacity>
                          ) : (
                            <>
                            <TouchableOpacity
                              onPress={() => setFollow(!follow)}
                              style={{
                                width: follow ? 90 : 68,
                              }}>
                              <View
                                style={{
                                  width: '100%', 
                                  height: 30, 
                                  borderRadius: 5, 
                                  backgroundColor: follow ? null : "#3493D9",
                                  borderWidth: follow ? 1 : 0,
                                  borderColor: '#DEDEDE',
                                  justifyContent: 'center',
                                  alignItems: 'center'
                                }}>
                                <Text style={{color: follow ? "black" : "white"}}>
                                  {follow ? "following" : "follow"}
                                </Text>
                              </View>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => setClose(true)} style={{paddingHorizontal: 10}}>
                              <AntDesign name="close" style={{fontSize: 14, color: 'black', opacity: 0.8}} />
                            </TouchableOpacity>
                            </>
                          )}
                  </View>
                  </View>
                    )}
                  </View>
              );
            })}
            <View style={{padding: 20}}>
              <Text style={{color: '#3493D9'}}>
                See all Suggestions
              </Text>
            </View>
      </ScrollView>
    </View>
  );
};

export default Activity;
