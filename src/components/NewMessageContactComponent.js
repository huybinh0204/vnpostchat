import React, {Component} from 'react';
import {FlatList, Image, Text, TouchableOpacity, View} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {ContactListData} from '../assets/data/Data';
import SectionListContacts from 'react-native-sectionlist-contacts';
import NewMessageContactListItem from './NewMessageContactListItem';

class NewMessageContactComponent extends Component {
  render() {
    return (
      <View style={{flex: 1, flexDirection: 'column', marginTop: 6}}>
        <SectionListContacts
          sectionListData={ContactListData.sort((a, b) =>
            a.name.localeCompare(b.name),
          )}
          initialNumToRender={ContactListData.length}
          sectionItemViewStyle={{height: 60}}
          sectionHeaderTextStyle={{
            fontSize: 18,
            backgroundColor: '#F2F2F2',
            height: 30,
          }}
          showsVerticalScrollIndicator={false}
          showAlphabet={false}
          renderItem={(item, index) => {
            return (
              <NewMessageContactListItem
                name={item.name}
                image={item.image}
                checked={this.props.checked}
                tickBoxCheck={this.props.tickBoxCheck}
                id={item.id}
              />
            );
          }}
          otherAlphabet="#"
          keyExtractor={item => item.id}
        />
        {/*{this.state.data.length ? null : (*/}
        {/*  <View style={{height: 60, flexDirection: 'row'}}>*/}
        {/*    <HorizontalScrollView*/}
        {/*      data={this.state.data}*/}
        {/*      callBack={this.callBack.bind(this)}*/}
        {/*    />*/}
        {/*  </View>*/}
        {/*)}*/}
      </View>
    );
  }
}

export default NewMessageContactComponent;
