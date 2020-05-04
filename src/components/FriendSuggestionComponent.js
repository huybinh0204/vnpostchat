import React, {Component} from 'react';
import {FriendSuggestionListData} from '../assets/data/Data';
import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity,
  PermissionsAndroid,
  Platform,
} from 'react-native';
import Contacts from 'react-native-contacts';

class FriendSuggestionListItem extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'row', backgroundColor: '#fff'}}>
        <View style={{marginVertical: 10}}>
          <Image
            style={{
              width: 64,
              height: 64,
              marginLeft: 20,
              alignItems: 'center',
              borderRadius: 30,
            }}
            source={{uri: this.props.image}}
          />
        </View>
        <View style={{flex: 1, flexDirection: 'row', alignItems: 'center'}}>
          <View style={{marginLeft: 10}}>
            <Text style={{fontFamily: 'OpenSans', fontSize: 15}}>
              {this.props.name}
            </Text>
            <Text
              style={{
                color: '#00000050',
                fontFamily: 'OpenSans',
                fontSize: 13,
              }}>
              {this.props.phone}
            </Text>
          </View>
        </View>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: 20,
          }}>
          <TouchableOpacity
            style={{borderRadius: 10, backgroundColor: '#284EAC', width: 80}}>
            <Text
              style={{
                color: '#fff',
                fontFamily: 'OpenSans',
                padding: 5,
                textAlign: 'center',
              }}>
              Kết bạn
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default class FriendSuggestion extends Component {
  constructor(props) {
    super(props);
    // this.search = this.search.bind(this);
    this.state = {
      contacts: [],
      searchPlaceholder: 'Search',
    };
  }
  componentDidMount() {
    PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.READ_CONTACTS, {
      title: 'Contacts',
      message: 'This app would like to view your contacts.',
    }).then(() => {
      this.loadContacts();
    });
  }

  loadContacts() {
    Contacts.getAll((err, contacts) => {
      if (err === 'denied') {
        console.warn('Permission to access contacts was denied');
      } else {
        this.setState({contacts});
      }
    });
    Contacts.getCount(count => {
      this.setState({searchPlaceholder: `Search ${count} contacts`});
    });
  }

  search(text) {
    const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    const emailAddressRegex = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
    if (text === '' || text === null) {
      this.loadContacts();
    } else if (phoneNumberRegex.test(text)) {
      Contacts.getContactsByPhoneNumber(text, (err, contacts) => {
        this.setState({contacts});
      });
    } else if (emailAddressRegex.test(text)) {
      Contacts.getContactsByEmailAddress(text, (err, contacts) => {
        this.setState({contacts});
      });
    } else {
      Contacts.getContactsMatchingString(text, (err, contacts) => {
        this.setState({contacts});
      });
    }
  }
  render() {
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.contacts}
          renderItem={({item}) => (
            <FriendSuggestionListItem
              image={item.thumbnailPath}
              name={item.displayName}
              phone={item.phoneNumbers[0].number}
            />
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}
