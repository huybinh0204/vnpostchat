import React, {Component} from 'react';
import {
  SafeAreaView,
  StatusBar,
  Keyboard,
  Image,
  ImageBackground,
  TouchableWithoutFeedback,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Animated,
  ScrollView,
} from 'react-native';
import {Text, View, Form, Item} from 'native-base';
import CountdownCircle from 'react-native-countdown-circle';

const CheckPass1 = props => {
  return (
    <View>
      <Text
        style={{
          textAlign: 'center',
          marginBottom: 20,
          color: '#284EAC',
          fontFamily: 'OpenSans',
          textDecorationLine: 'underline',
          textDecorationStyle: 'dotted',
          textDecorationColor: '#284EAC',
          fontWeight: 'bold',
        }}>
        Tôi không nhận được mã
      </Text>
    </View>
  );
};

const CheckPass2 = props => {
  return (
    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
      <Text
        style={{color: '#284EAC', fontFamily: 'OpenSans', fontWeight: 'bold'}}>
        Gửi lại (
      </Text>
      <CountdownCircle
        seconds={120}
        radius={18}
        borderWidth={0}
        color="#fff"
        bgColor="#fff"
        shadowColor="#fff"
        textStyle={{
          color: '#284EAC',
          fontSize: 16,
          fontFamily: 'OpenSans',
          fontWeight: 'bold',
          bottom: 7,
        }}
        //onTimeElapsed={this.EndTime}
      />
      <Text
        style={{color: '#284EAC', fontFamily: 'OpenSans', fontWeight: 'bold'}}>
        s)
      </Text>
    </View>
  );
};

class CheckPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoAnime: new Animated.Value(0),
      time: true,
    };
  }

  componentDidMount() {
    Animated.parallel([
      Animated.spring(this.state.logoAnime, {
        toValue: 1,
        tension: 2,
        friction: 1,
        duration: 3000,
      }).start(),
    ]);
  }

  CheckCodePass = async () => {
    this.setState({time: !this.state.time});
  };
  EndTime = () => {
    this.setState({time: true});
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          //marginTop: 20,
        }}>
        <StatusBar
          barStyle="dark-content"
          hidden={false}
          backgroundColor="#284EAC"
          translucent={true}
        />

        <ImageBackground
          source={require('../../assets/images/Group.png')}
          style={{flex: 3}}>
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View
              style={{
                flex: 1,
              }}>
              <View style={{flex: 10}}>
                <View
                  style={{
                    marginLeft: 30,
                    marginRight: 30,
                    borderRadius: 20,
                    borderColor: 'black',
                    backgroundColor: '#ffffff',
                    elevation: 10,
                    shadowColor: '#000000',
                    shadowOpacity: 0.3,
                    top: 40,
                  }}>
                  <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text style={{fontFamily: 'OpenSans', marginTop: 20}}>
                      Mã OTP đã được gửi về số điện thoại
                    </Text>
                    <Text style={{fontFamily: 'OpenSans'}}>
                      của bạn. Vui lòng nhập mã để đặt lại
                    </Text>
                    <Text style={{fontFamily: 'OpenSans'}}>mật khẩu</Text>
                  </View>

                  <View
                    style={{width: '85%', alignSelf: 'center', marginTop: 20}}>
                    <TextInput
                      style={{
                        textAlign: 'center',
                        fontSize: 15,
                        borderColor: '#284EAC',
                        borderWidth: 1,
                        borderRadius: 10,
                        height: 40,
                        fontFamily: 'OpenSans',
                        fontWeight: 'bold',
                      }}
                      placeholder="Nhập mã OTP"
                      keyboardType="numeric"
                      onChangeText={OTP => this.setState({OTP})}
                    />
                  </View>

                  <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('NewPass')}
                      style={{
                        backgroundColor: '#FCB71E',
                        borderRadius: 20,
                        elevation: 5,
                        shadowColor: '#646464',
                        shadowOpacity: 0.2,
                        marginTop: 20,
                        marginBottom: 20,
                        width: '35%',
                      }}>
                      <Text
                        style={{
                          textAlign: 'center',
                          fontWeight: 'bold',
                          padding: 10,
                        }}>
                        Tiếp tục
                      </Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity onPress={this.CheckCodePass}>
                    {this.state.time ? <CheckPass1 /> : <CheckPass2 />}
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  flex: 2,
                  marginBottom: 10,
                }}>
                <Animated.View
                  style={[
                    {
                      opacity: this.state.logoAnime,
                      top: this.state.logoAnime.interpolate({
                        inputRange: [0, 1],
                        outputRange: [5, 0],
                      }),
                    },
                    {
                      position: 'absolute',
                      alignSelf: 'center',
                    },
                  ]}>
                  <Image
                    style={{alignItems: 'center', width: 110, height: 110}}
                    source={require('../../assets/images/footer_character.png')}
                  />
                </Animated.View>
              </View>
            </View>
          </TouchableWithoutFeedback>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

export default CheckPass;
