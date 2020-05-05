import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {Component} from 'react';
import RecentComponent from '../screens/Conversation/RecentComponent';
import NewMessageContactContainer from '../screens/Conversation/NewMessageContactContainer';

const Top = createMaterialTopTabNavigator();

class NewMessageNavigator extends Component {
  render() {
    return (
      <Top.Navigator>
        <Top.Screen name="GẦN ĐÂY" component={RecentComponent} />
        <Top.Screen name="DANH BẠ" component={NewMessageContactContainer} />
      </Top.Navigator>
    );
  }
}
export default NewMessageNavigator;
