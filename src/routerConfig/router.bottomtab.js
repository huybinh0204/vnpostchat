import ConversationNavigator from '../navigators/ConversationNavigator';
import ContactNavigator from '../navigators/ContactNavigator';
import GroupNavigator from '../navigators/GroupNavigator';
import NewsFeedNavigator from '../navigators/NewsFeedNavigator';
import ContactTopTabNavigator from '../navigators/ContactTopTabNavigator';

export default [
  {
    name: 'Conversation',
    component: ConversationNavigator,
    option: {
      tabBarLabel: 'Trò chuyện',
    },
  },
  {
    name: 'Contact',
    component: ContactTopTabNavigator,
    option: {
      tabBarLabel: 'Danh bạ',
    },
  },
  {
    name: 'Group',
    component: GroupNavigator,
    option: {
      tabBarLabel: 'Nhóm',
    },
  },
  {
    name: 'NewsFeed',
    component: NewsFeedNavigator,
    option: {
      tabBarLabel: 'Bảng tin',
    },
  },
];
