import SearchNavigator from '../navigators/SearchNavigator';
import ConversaionListContainer from '../screens/Conversation/ConversaionListContainer';

export default [
  {
    name: 'ConversationList',
    component: ConversaionListContainer,
    option: {
      title: 'Trò chuyện',
    },
  },
  {
    name: 'Search',
    component: SearchNavigator,
  },
];
