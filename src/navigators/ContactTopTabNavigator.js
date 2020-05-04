import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import React, {Component} from 'react';
import router from '../routerConfig/router.contacttoptab';
import {TouchableOpacity, Image} from 'react-native';
import ContactListContainer from '../containers/ContactListContainer';
import FriendSuggestionContainer from '../containers/FriendSuggestionContainer';

const Top = createMaterialTopTabNavigator();

export default class ContactTopTabNavigator extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('AddFriend')}>
          <Image source={require('../assets/images/icon_add-friends.png')} />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        marginRight: 14,
        marginBottom: 4,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SearchNavigator')}>
          <Image source={require('../assets/images/icon-search.png')} />
        </TouchableOpacity>
      ),
      headerLeftContainerStyle: {
        marginLeft: 14,
      },
    });
    return (
      <Top.Navigator
        initialRouteName="ContactList"
        tabBarOptions={{
          style: {elevation: 0},
          indicatorStyle: {backgroundColor: '#284eac'},
        }}>
        <Top.Screen
          name="ContactList"
          component={ContactListContainer}
          options={{tabBarLabel: 'BẠN BÈ'}}
        />
        <Top.Screen
          name="FriendSuggestion"
          component={FriendSuggestionContainer}
          options={{tabBarLabel: 'GỢI Ý KẾT BẠN'}}
        />
      </Top.Navigator>
    );
  }
}
