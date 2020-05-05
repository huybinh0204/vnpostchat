import React, {Component} from 'react';
import {View, Text, Image, FlatList, TouchableOpacity} from 'react-native';
import {GroupListData} from '../../assets/data/Data';
import Fontisto from 'react-native-vector-icons/Fontisto';
import AntDesign from 'react-native-vector-icons/AntDesign';

class GroupListItem extends Component {
  render() {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() =>
          this.props.navigation.navigate('ChatScreen', {
            name: this.props.groupName,
          })
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
          <View style={{justifyContent: 'center'}}>
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
                {this.props.groupName}
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
            <Text
              style={{
                flexDirection: 'row',
                fontSize: 16,
                margin: 5,
                marginTop: 10,
                color: 'grey',
              }}>
              {this.props.time}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

export default class GroupListComponent extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity>
          <AntDesign name="addusergroup" color="white" size={30} />
        </TouchableOpacity>
      ),
      headerRightContainerStyle: {
        marginRight: 14,
      },
      headerLeft: () => (
        <TouchableOpacity>
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
          data={GroupListData.sort((a, b) =>
            a.groupName.localeCompare(b.groupName),
          )}
          renderItem={({item}) => (
            <GroupListItem
              image={item.image}
              groupName={item.groupName}
              time={item.time}
              lastMessage={item.lastmessage}
              navigation={this.props.navigation}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
