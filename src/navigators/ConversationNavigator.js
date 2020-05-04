import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import router from '../routerConfig/router.conversation';
import SearchNavigator from './SearchNavigator';
import ChatScreen from '../components/ChatScreen';
import ConversaionListContainer from '../containers/ConversaionListContainer';

const Stack = createStackNavigator();

class ConversationNavigator extends Component {
  render() {
    return (
      <Stack.Navigator
        initialRouteName="ConversationList"
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
          name="ConversationList"
          component={ConversaionListContainer}
          options={{
            title: 'Trò chuyện',
          }}
        />
        <Stack.Screen name="SearchNavigator" component={SearchNavigator} />
      </Stack.Navigator>
    );
  }
}

export default ConversationNavigator;
