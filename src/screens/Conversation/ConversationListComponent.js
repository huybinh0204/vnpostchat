import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import {ConversationListData} from '../../assets/data/Data';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
class ConversationListItem extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          this.props.navigation.navigate('ChatScreen', {name: this.props.name})
        }>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#fff',
            borderBottomWidth: 1,
            borderBottomColor: '#e1e1e1',
            height: 80,
          }}>
          <View style={{justifyContent: 'center', width: 80}}>
            <Image
              style={{
                width: 64,
                height: 64,
                margin: 5,
                alignItems: 'center',
                borderRadius: 32,
              }}
              source={{uri: this.props.image}}
            />
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={{width: '80%', marginTop: 10}}>
              <Text
                style={{
                  flexDirection: 'column',
                  fontSize: 16,
                  fontWeight: 'bold',
                }}>
                {this.props.name}
              </Text>
              <Text
                style={{
                  fontSize: 14,
                  color: 'grey',
                }}
                numberOfLines={2}>
                {this.props.lastMessage}
              </Text>
            </View>
            <View
              style={{
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'space-around',
              }}>
              <View
                style={{
                  backgroundColor: 'red',
                  width: 16,
                  height: 16,
                  borderRadius: 8,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Text style={{color: 'white'}}>1</Text>
              </View>
              <Text
                style={{
                  flexDirection: 'row',
                  fontSize: 12,
                  color: '#b7b7b7',
                }}>
                {this.props.time}
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default class ConversationListComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NewMessageNavigator')}>
          <Entypo name="new-message" color="white" size={24} />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        marginRight: 14,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('SearchNavigator')}>
          <Fontisto name="search" color="white" size={24} />
        </TouchableOpacity>
      ),
      headerLeftContainerStyle: {
        marginLeft: 14,
      },
    });
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={ConversationListData.sort((a, b) =>
            a.time.localeCompare(b.time),
          )}
          renderItem={({item}) => (
            <ConversationListItem
              image={item.image}
              name={item.name}
              time={item.time}
              lastMessage={item.lastMessage}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
