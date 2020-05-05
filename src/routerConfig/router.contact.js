import ContactTopTabNavigator from '../navigators/ContactTopTabNavigator';
import AddFriendContainer from '../screens/Contact/AddFriendContainer';

export default [
  {
    name: 'ContactList',
    component: ContactTopTabNavigator,
    option: {
      title: 'Danh bạ',
    },
  },
  {
    name: 'AddFriend',
    component: AddFriendContainer,
  },
];
