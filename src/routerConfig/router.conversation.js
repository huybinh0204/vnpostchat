import ConversationListComponent from '../components/ConversationListComponent';
import SearchNavigator from '../navigators/SearchNavigator';

export default [
  {
    name: 'ConversationList',
    component: ConversationListComponent,
    option: {
      title: 'Trò chuyện',
    },
  },
  {
    name: 'Search',
    component: SearchNavigator,
  },
];
