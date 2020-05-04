import ContactListComponent from '../components/ContactListComponent';
import SearchContactComponent from '../components/SearchContactComponent';
import ContactTopTabNavigator from '../navigators/ContactTopTabNavigator';
import AddFriendComponent from '../components/AddFriendComponent';

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
    component: AddFriendComponent,
  },
];
