import React, {Component} from 'react';
import {View, Text, Imag, SafeAreaView, StatusBar} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import router from '../routerConfig/router.bottomtab';
import ContactNavigator from './ContactNavigator';
import ConversationNavigator from './ConversationNavigator';
import GroupNavigator from './GroupNavigator';
import NewsFeedNavigator from './NewsFeedNavigator';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Entypo from 'react-native-vector-icons/Entypo';
const Tab = createBottomTabNavigator();

class BottomTabNavigator extends Component {
  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          //marginTop: 20,
        }}>
        <StatusBar
          barStyle="light-content"
          hidden={false}
          backgroundColor="#284EAC"
          translucent={true}
        />
        <Tab.Navigator
          initialRouteName="Conversation"
          tabBarOptions={{
            activeTintColor: '#ffffff',
            activeBackgroundColor: '#143481',
            inactiveBackgroundColor: '#284eac',
            style: {
              paddingBottom: 0,
              height: 48,
            },
          }}>
          <Tab.Screen
            name="Conversation"
            component={ConversationNavigator}
            options={{
              tabBarLabel: 'Trò chuyện',
              tabBarIcon: ({focused}) => (
                <MaterialIcons
                  name="chat"
                  color="white"
                  size={focused ? 30 : 20}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Contact"
            component={ContactNavigator}
            options={{
              tabBarLabel: 'Danh bạ',
              tabBarIcon: ({focused}) => (
                <AntDesign
                  name="contacts"
                  color="white"
                  size={focused ? 30 : 20}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Group"
            component={GroupNavigator}
            options={{
              tabBarLabel: 'Nhóm',
              tabBarIcon: ({focused}) => (
                <FontAwesome5
                  name="users"
                  color="white"
                  size={focused ? 30 : 20}
                />
              ),
            }}
          />
          <Tab.Screen
            name="NewsFeed"
            component={NewsFeedNavigator}
            options={{
              tabBarLabel: 'Bảng tin',
              tabBarIcon: ({focused}) => (
                <Entypo name="news" color="white" size={focused ? 30 : 20} />
              ),
            }}
          />
          <Tab.Screen
            name="More"
            component={NewsFeedNavigator}
            options={{
              tabBarLabel: 'Thêm',
              tabBarIcon: ({focused}) => (
                <Entypo name="menu" color="white" size={focused ? 30 : 20} />
              ),
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    );
  }
}

export default BottomTabNavigator;
