import React, {Component} from 'react';
import {View, Text, Image, TouchableOpacity, Alert} from 'react-native';
import SectionListContacts from 'react-native-sectionlist-contacts';
import {ContactListData} from '../assets/data/Data';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';

class ContactListItem extends Component {
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
            height: 60,
          }}>
          <View style={{justifyContent: 'center'}}>
            <Image
              style={{
                width: 48,
                height: 48,
                margin: 5,
                alignItems: 'center',
                borderRadius: 24,
              }}
              source={{uri: this.props.image}}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={{width: '50%', marginLeft: 10}}>
              <Text style={{fontSize: 16, margin: 5}}>{this.props.name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}

class ContactListComponent extends Component {
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
        marginBottom: 4,
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
      <View style={{flex: 1, flexDirection: 'column'}}>
        <SectionListContacts
          sectionListData={ContactListData.sort((a, b) =>
            a.name.localeCompare(b.name),
          )}
          ListHeaderComponent={() => (
            <TouchableOpacity
              onPress={() =>
                this.props.navigation.navigate('FriendRequestComponent')
              }>
              <View
                style={{
                  height: 80,
                  flexDirection: 'row',
                  backgroundColor: '#fff',
                }}>
                <View style={{justifyContent: 'center', alignItems: 'center'}}>
                  <Image
                    style={{
                      width: 48,
                      height: 48,
                      marginLeft: 10,
                      alignItems: 'center',
                      borderRadius: 24,
                    }}
                    source={require('../assets/images/user.png')}
                  />
                </View>
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <View style={{width: 250}}>
                    <Text style={{fontSize: 16, margin: 5}}>
                      Lời mời kết bạn
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          )}
          initialNumToRender={ContactListData.length}
          sectionItemViewStyle={{height: 80}}
          sectionHeaderHeight={25}
          sectionHeight={50}
          sectionHeaderTextStyle={{
            fontSize: 18,
            backgroundColor: '#F2F2F2',
          }}
          showsVerticalScrollIndicator={false}
          showAlphabet={false}
          renderItem={(item, index, section) => (
            <ContactListItem
              image={item.image}
              name={item.name}
              navigation={this.props.navigation}
            />
          )}
          SectionListClickCallback={(item, index) => {
            // console.log('---SectionListClickCallback--:', item, index);
            Alert.alert('ádasdasd');
          }}
          otherAlphabet="#"
        />
      </View>
    );
  }
}

export default ContactListComponent;
