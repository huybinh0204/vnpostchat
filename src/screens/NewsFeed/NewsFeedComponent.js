import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  Alert,
  FlatList,
  TouchableHighlight,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Modal,
  StyleSheet,
} from 'react-native';
import {CheckBox} from 'react-native-elements';
import Video from 'react-native-video';

import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const MessageOption = [
  {
    id: '1',
    text: 'Chỉnh sửa quyền riêng tư',
  },
  {
    id: '2',
    text: 'Xoá trạng thái',
  },
  {
    id: '3',
    text: 'Chỉnh sửa trạng thái',
  },
];
function SetStatus({navigation}, id) {
  navigation.navigate('NewStatus', {id: id});
}
class LikeBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      likeCount: 0,
    };
  }
  render() {
    return (
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <CheckBox
          checkedIcon={<AntDesign name="heart" size={20} color="red" />}
          uncheckedIcon={<AntDesign name="hearto" size={20} color="red" />}
          checked={this.state.checked}
          onPress={() => {
            this.setState({checked: !this.state.checked});
            if (this.state.checked == false) {
              this.setState({likeCount: this.state.likeCount + 1});
            } else {
              this.setState({likeCount: this.state.likeCount - 1});
            }
          }}
        />
        <Text>{this.state.likeCount}</Text>
      </View>
    );
  }
}
class NewsFeedComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: Array(10)
        .fill('')
        .map((e, i) => ({
          id: i,
          content: 'hello' + i,
          like: 5,
        })),
    };
  }
  renderHeader() {
    return (
      <View style={styles.headerWrapper}>
        <View style={styles.headerContainer}>
          <Image
            source={{uri: 'https://randomuser.me/api/portraits/men/47.jpg'}}
            style={{height: 40, width: 40, borderRadius: 20, marginLeft: '5%'}}
          />
          <TouchableWithoutFeedback
            onPress={() =>
              this.props.navigation.navigate('NewStatus', {id: 1})
            }>
            <View style={{marginHorizontal: 10, height: '100%', width: '90%'}}>
              <Text style={{color: '#898989'}}>Hôm nay bạn thấy thế nào</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{flex: 1, flexDirection: 'row', justifyContent: 'center'}}>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() =>
                this.props.navigation.navigate('NewStatus', {id: 1})
              }>
              <Entypo name="camera" size={24} color="#FCb71e" />
              <Text style={styles.headerButtonText}>Thêm ảnh</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.headerButton}
              onPress={() =>
                this.props.navigation.navigate('NewStatus', {id: 1})
              }>
              <Entypo name="video-camera" size={24} color="#FCb71e" />
              <Text style={styles.headerButtonText}>Thêm video</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }

  render() {
    this.props.navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('NewMessageNavigator')}>
          <MaterialIcons name="notifications-none" color="white" size={28} />
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
      <View style={styles.container}>
        <FlatList
          data={this.state.data}
          ListHeaderComponent={() => this.renderHeader()}
          renderItem={({item}) => (
            <View style={styles.post}>
              <View style={styles.userAvatar}>
                <Image
                  source={{
                    uri:
                      'https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg',
                  }}
                  style={styles.avatar}
                />
                <View style={{flexDirection: 'row', marginLeft: 10}}>
                  <View style={{width: '85%'}}>
                    <Text style={styles.username}>Username</Text>
                    <Text style={styles.postTime}>
                      {/*{moment(item.datetime_news, 'YYYYMMDD').fromNow()}*/}
                      <Text>timeago</Text>
                    </Text>
                  </View>
                  <View>
                    <TouchableWithoutFeedback>
                      <Entypo name="dots-three-horizontal" size={24} />
                    </TouchableWithoutFeedback>
                  </View>
                </View>
              </View>

              <Text style={styles.content}>Content {item.id}</Text>
              {item.id === 2 ? (
                <Video
                  source={{
                    uri:
                      'http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                  }}
                  style={styles.backgroundVideo}
                />
              ) : (
                <Image
                  source={{
                    uri:
                      'https://media.giphy.com/media/UBxjJL9qz6sBq/giphy.gif',
                  }}
                  style={{height: 200, width: '100%'}}
                />
              )}

              <View style={styles.postButton}>
                <LikeBox />
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    margin: 10,
                  }}>
                  <FontAwesome name="commenting-o" size={24} color="#284eac" />
                </View>
              </View>
            </View>
          )}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerWrapper: {
    borderRadius: 7,
    borderBottomWidth: 0.5,
    backgroundColor: 'white',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: 'white',
  },
  headerButton: {
    flex: 1,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0.5,
    borderColor: '#ebebeb',
    flexDirection: 'row',
  },
  headerButtonText: {
    fontWeight: 'bold',
    marginLeft: 15,
    color: '#284eac',
  },
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  post: {
    borderRadius: 7,
    borderBottomWidth: 0.5,
    padding: 10,
    backgroundColor: '#ffffff',
    borderColor: 'rgba(0,0,0,0)',
    borderWidth: 1,
    shadowColor: 'rgba(0, 0, 0, 0.1)',
    shadowOpacity: 0.8,
    elevation: 6,
    shadowRadius: 15,
    shadowOffset: {width: 1, height: 13},
    marginVertical: 5,
  },
  userAvatar: {
    flexDirection: 'row',
    alignContent: 'center',
    padding: 10,
  },
  avatar: {
    height: 40,
    width: 40,
    borderRadius: 20,
  },
  username: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#284eac',
  },
  postTime: {
    color: 'grey',
    fontSize: 12,
  },
  content: {
    marginVertical: 10,
  },
  postButton: {
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: '20%',
  },
  backgroundVideo: {
    width: 300,
    height: 150,
  },
});
export default NewsFeedComponent;
