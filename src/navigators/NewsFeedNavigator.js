import React, {Component} from 'react';
import {View, Text, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import router from '../routerConfig/router.newsfeed';
import SearchNavigator from './SearchNavigator';
import NewsFeedContainer from '../containers/NewsFeedContainer';

const Stack = createStackNavigator();

class NewsFeedNavigator extends Component {
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
        }}>
        <Stack.Screen
          name="NewsFeed"
          component={NewsFeedContainer}
          options={{
            title: 'Bảng tin',
          }}
        />
        <Stack.Screen name="Search" component={SearchNavigator} />
      </Stack.Navigator>
    );
  }
}

export default NewsFeedNavigator;
