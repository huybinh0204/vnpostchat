import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import router from '../routerConfig/router.group';
import SearchGroupComponent from '../components/SearchGroupComponent';
import GroupListContainer from '../containers/GroupListContainer';
import NewGroupContainer from '../containers/NewGroupContainer';

const Stack = createStackNavigator();

class GroupNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="GroupList"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#284eac',
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'center',
          headerTitleStyle: {
            fontWeight: 'bold',
            color: 'white',
          },
        }}>
        <Stack.Screen
          name="GroupList"
          component={GroupListContainer}
          options={{
            title: 'Nhóm',
          }}
        />
        <Stack.Screen
          name="NewGroupNavigator"
          component={NewGroupContainer}
          options={{
            title: 'Tạo nhóm mới',
          }}
        />
        <Stack.Screen name="SearchGroup" component={SearchGroupComponent} />
      </Stack.Navigator>
    );
  }
}

export default GroupNavigator;
