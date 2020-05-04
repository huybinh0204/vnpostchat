import React, {Component} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {Image, View} from 'react-native';
import ContactList from './ContactList';
import RecentComponent from './RecentComponent';
import {CheckBox} from 'react-native-elements';

const Top = createMaterialTopTabNavigator();
class CheckBox1 extends Component {
  state = {
    checked: false,
  };
  render() {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fff',
        }}>
        <CheckBox
          checkedIcon={
            <Image
              source={require('../../asset/images/checkbox-checked.png')}
            />
          }
          uncheckedIcon={
            <Image
              source={require('../../asset/images/checkbox-unchecked.png')}
            />
          }
          checked={this.state.checked}
          onPress={() => this.setState({checked: !this.state.checked})}
        />
      </View>
    );
  }
}
function NewMessageComponent() {
  return <View />;
}

export default NewMessageComponent;
