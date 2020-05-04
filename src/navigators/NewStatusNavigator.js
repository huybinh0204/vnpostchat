import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {Top} from '../navigator/SearchNavigator';
import {ImageFromPhone, VideoFromPhone} from '../screen/MediaList';

function NewStatusNavigator() {
  return (
    <Top.Navigator initialRouteName="ImageFromPhone">
      <Top.Screen name="TẤT CẢ" component={ImageFromPhone} />
      <Top.Screen name="BẠN BÈ" component={VideoFromPhone} />
    </Top.Navigator>
  );
}

export default NewStatusNavigator;
