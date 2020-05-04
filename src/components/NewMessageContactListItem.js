import React, {Component} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {CheckBox} from 'react-native-elements';

class NewMessageContactListItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <TouchableOpacity
        onPress={() => {
          console.log(this.props);
          this.props.tickBoxCheck();
        }}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            backgroundColor: '#fff',
            height: 80,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: '#fff',
            }}>
            <CheckBox
              checkedIcon={
                <Image
                  source={require('../assets/images/checkbox-checked.png')}
                />
              }
              uncheckedIcon={
                <Image
                  source={require('../assets/images/checkbox-unchecked.png')}
                />
              }
              checked={this.props.checked}
              onPress={() => {
                this.props.tickBoxCheck();
              }}
            />
          </View>
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
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <View style={{width: 200}}>
              <Text style={{fontSize: 16, margin: 5}}>{this.props.name}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    );
  }
}
export default NewMessageContactListItem;
