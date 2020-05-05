import React, {Component} from 'react';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {SearchBar} from 'react-native-elements';

class AddFriendComponent extends Component {
  render() {
    //abcsdasdasd
    return (
      <View
        style={{flexDirection: 'row', width: 400, height: 40, marginTop: 10}}>
        <TextInput
          style={{
            width: 300,
            height: 40,
            borderColor: 'grey',
            borderRadius: 20,
            paddingLeft: 10,
            borderWidth: 1,
          }}
          placeholder="Tìm kiếm tên bạn bè hoặc số điện thoại..."
          placeholderTextColor="grey"
        />
        
        <TouchableOpacity
          style={{
            width: 60,
            height: 40,
            backgroundColor: '#284eac',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 20,
            marginRight: 50,
          }}>
         
        </TouchableOpacity>
      </View>
    );
  }
}

export default AddFriendComponent;
