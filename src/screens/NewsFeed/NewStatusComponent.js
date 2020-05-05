import React, {Component, useState} from 'react';
import {Image, TextInput, TouchableOpacity, View, Text} from 'react-native';

const whiteImage = require('../../assets/images/icon_post-image-white.png');
const blueVideo = require('../../assets/images/icon_post-video-blue.png');
const whiteVideo = require('../../assets/images/icon_post-video-white.png');
const blueImage = require('../../assets/images/icon_post-image-blue.png');

const ImageList = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>ImageList</Text>
    </View>
  );
};
const VideoList = props => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>VideoList</Text>
    </View>
  );
};

class NewStatusComponent extends Component {
  render() {
    this.props.navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity onPress={() => this.props.navigation.goBack()}>
          <Image source={require('../../assets/images/icon_cancel.png')} />
        </TouchableOpacity>
      ),
      headerLeftContainerStyle: {
        marginLeft: 14,
      },
    });
    return (
      <View style={{flex: 1, flexDirection: 'column'}}>
        <TextInput
          style={{
            backgroundColor: 'white',
            height: 300,
            textAlignVertical: 'top',
          }}
          multiline
        />
        <View
          style={{
            height: 50,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              height: 50,
              width: 50,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image source={require('../../assets/images/icon_post-sticker.png')} />
          </View>
          <View style={{flexDirection: 'row'}}>
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.changeIconImage();
                }}>
                <Image source={this.props.showIcon ? whiteImage : blueImage} />
              </TouchableOpacity>
            </View>
            <View
              style={{
                width: 50,
                height: 50,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  this.props.changeIconVideo();
                }}>
                <Image source={this.props.showIcon ? blueVideo : whiteVideo} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        {this.props.showIcon ? <VideoList /> : <ImageList />}
      </View>
    );
  }
}

export default NewStatusComponent;
