import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {Component} from 'react';
import RecentComponent from '../components/RecentComponent';
import NewMessageContactContainer from '../containers/NewMessageContactContainer';

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
