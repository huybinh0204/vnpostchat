import React, {Component} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  Dimensions,
} from 'react-native';

function ChatScreen({route, navigation}) {
  const {name} = route.params;
  navigation.setOptions({
    headerRight: () => (
      <TouchableOpacity
        onPress={() => navigation.navigate('NewMessageNavigator')}>
        <Image source={require('../assets/images/icon_new-mess.png')} />
      </TouchableOpacity>
    ),
    headerRightContainerStyle: {
      marginRight: 14,
      marginBottom: 4,
    },
    headerTitle: () => (
      <View
        style={{
          flex: 1,
          flexDirection: 'column',
          width: 0.7 * Dimensions.get('window').width,
        }}>
        <Text
          style={{
            fontSize: 20,
            color: 'white',
            fontWeight: 'bold',
          }}>
          {name}
        </Text>
        <Text style={{color: 'white'}}>Status</Text>
      </View>
    ),
  });
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#efefef',
        justifyContent: 'flex-end',
      }}>
      <TextInput style={{backgroundColor: '#fff'}} />
    </View>
  );
}

export default ChatScreen;
