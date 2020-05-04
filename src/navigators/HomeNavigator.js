import React, {Component} from 'react';
import BottomTabNavigator from './BottomTabNavigator';
import ChatScreen from '../components/ChatScreen';
import NewMessageNavigator from './NewMessageNavigator';
import FriendRequestComponent from '../components/FriendRequestComponent';
import NewStatusComponent from '../components/NewStatusComponent';
import NotificationComponent from '../components/NotificationComponent';
import {createStackNavigator} from '@react-navigation/stack';
import NewStatusContainer from '../containers/NewStatusContainer';
import FriendRequestContainer from '../containers/FriendRequestContainer';

const Stack = createStackNavigator();

class HomeNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
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
          style: {
            elevation: 0,
          },
        }}>
        <Stack.Screen
          name="BottomTabNavigator"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen
          name="NewMessageNavigator"
          component={NewMessageNavigator}
          options={{
            title: 'Tin nhắn mới',
          }}
        />
        <Stack.Screen
          name="FriendRequest"
          component={FriendRequestContainer}
          options={{
            title: 'Lời mời kết bạn',
          }}
        />
        <Stack.Screen
          name="NewStatus"
          component={NewStatusContainer}
          options={{
            title: 'Trạng thái mới',
          }}
        />
        <Stack.Screen
          name="Notification"
          component={NotificationComponent}
          options={{
            title: 'Thông báo',
          }}
        />
      </Stack.Navigator>
    );
  }
}
export default HomeNavigator;
