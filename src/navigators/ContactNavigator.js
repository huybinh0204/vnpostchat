import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import router from '../routerConfig/router.contact';
import SearchContactComponent from '../screens/Contact/SearchContactComponent';
import ContactTopTabNavigator from './ContactTopTabNavigator';
import AddFriendContainer from '../screens/Contact/AddFriendContainer';
import FriendRequestContainer from '../screens/Contact/FriendRequestContainer';
const Stack = createStackNavigator();

class ContactNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="ContactNavigator"
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
          name="ContactTopTabNavigator"
          component={ContactTopTabNavigator}
          options={{
            title: 'Danh bạ',
          }}
        />
        <Stack.Screen
          name="AddFriend"
          component={AddFriendContainer}
          options={{
            title: 'Thêm bạn',
          }}
        />
        <Stack.Screen name="SearchContact" component={SearchContactComponent} />
        <Stack.Screen name="FriendRequest" component={FriendRequestContainer} />
      </Stack.Navigator>
    );
  }
}

export default ContactNavigator;
