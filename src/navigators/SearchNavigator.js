import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import SearchContactContainer from '../containers/SearchContactContainer';
import SearchMessageContainer from '../containers/SearchMessageContainer';
import SearchAllContainer from '../containers/SearchAllContainer';

export const Top = createMaterialTopTabNavigator();

class SearchNavigator extends Component {
  render() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NewMessageNavigator')}>
          <Image source={require('../assets/images/icon_new-mess.png')} />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        marginRight: 14,
        marginBottom: 4,
      },
      headerTitle: () => (
        <TextInput
          style={{
            width: 250,
            height: 40,
            backgroundColor: '#143076',
            borderRadius: 20,
            paddingLeft: 15,
            color: 'white',
          }}
          placeholder="Tìm kiếm"
          placeholderTextColor="grey"
        />
      ),
    });

    return (
      <Top.Navigator initialRouteName="SearchAll">
        <Top.Screen name="TẤT CẢ" component={SearchAllContainer} />
        <Top.Screen name="BẠN BÈ" component={SearchContactContainer} />
        <Top.Screen name="TIN NHẮN" component={SearchMessageContainer} />
      </Top.Navigator>
    );
  }
}
export default SearchNavigator;
