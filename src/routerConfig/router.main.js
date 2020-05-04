import LoginContainer from '../containers/LoginContainer';
import BottomTabNavigator from '../navigators/BottomTabNavigator';

export default [
  // {
  //   name: 'Login',
  //   component: LoginContainer,
  //   option: {
  //     headerShown: false,
  //   },
  // },
  {
    name: 'BottomTab',
    component: BottomTabNavigator,
    option: {
      headerShown: false,
    },
  },
];
