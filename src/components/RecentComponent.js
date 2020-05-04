import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import TickBox from './TickBox';
import {ConversationListData} from '../assets/data/Data';

function ConversationListItem({name, image}) {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderBottomWidth: 0.5,
        borderBottomColor: 'grey',
        height: 60,
      }}>
      {/* <TickBox /> */}
      <View style={{justifyContent: 'center', width: 80}}>
        <Image
          style={{
            width: 48,
            height: 48,
            margin: 5,
            alignItems: 'center',
            borderRadius: 24,
          }}
          source={{uri: image}}
        />
      </View>
      <View style={{flex: 1, flexDirection: 'row'}}>
        <View style={{width: 230, justifyContent: 'center'}}>
          <Text
            style={{
              fontSize: 16,
              margin: 5,
              height: 20,
            }}>
            {name}
          </Text>
        </View>
      </View>
    </View>
  );
}
class RecentComponent extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={ConversationListData.sort((a, b) =>
            a.time.localeCompare(b.time),
          )}
          renderItem={({item}) => (
            <ConversationListItem image={item.image} name={item.name} />
          )}
        />
      </View>
    );
  }
}

export default RecentComponent;
