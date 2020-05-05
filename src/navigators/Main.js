import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Signup from '../screens/Signup/Signup';
import CheckSignup from '../screens/Signup/CheckSignup';
import ChangePassword from '../screens/Login/ChangePassword';
import CheckPass from '../screens/Login/CheckPass';
import NewPass from '../screens/Login/NewPass';
import HomeNavigator from '../navigators/HomeNavigator';
import IntroComponent from '../screens/Login/IntroComponent';
import LoginContainer from '../screens/Login/LoginContainer';
import LoginComponent from '../screens/Login/LoginComponent';
const Stack = createStackNavigator();

function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerTitleAlign: 'center',
          cardOverlayEnabled: false,
          cardShadowEnabled: false,
          cardOverlay: false,
        }}>
        <Stack.Screen
          name="Intro"
          component={IntroComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={LoginComponent}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={Signup}
          options={{
            title: 'Đăng ký',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#284EAC'},
          }}
        />
        <Stack.Screen
          name="CheckSignup"
          component={CheckSignup}
          options={{
            title: 'Đăng ký',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#284EAC'},
          }}
        />
        <Stack.Screen
          name="ChangePassword"
          component={ChangePassword}
          options={{
            title: 'Đổi mật khẩu',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#284EAC'},
          }}
        />
        <Stack.Screen
          name="CheckPass"
          component={CheckPass}
          options={{
            title: 'Đổi mật khẩu',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#284EAC'},
          }}
        />
        <Stack.Screen
          name="NewPass"
          component={NewPass}
          options={{
            title: 'Đổi mật khẩu',
            shadowStyle: 'null',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#284EAC'},
          }}
        />
        <Stack.Screen
          name="HomeNavigator"
          component={HomeNavigator}
          options={{
            headerShown: false,
            shadowStyle: 'null',
            headerTintColor: 'white',
            headerStyle: {backgroundColor: '#284EAC'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Main;
