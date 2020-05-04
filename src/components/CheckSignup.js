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
import CountdownCircle from 'react-native-countdown-circle';
import Dialog from 'react-native-dialog';
import {Text, View, Form, Item} from 'native-base';

const CheckSignup1 = props => {
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
          textDecorationColor: 'blue',
          fontWeight: 'bold',
        }}>
        Tôi không nhận được mã
      </Text>
    </View>
  );
};

const CheckSignup2 = props => {
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
        shadowColor="#fff"
        color="#fff"
        bgColor="#fff"
        textStyle={{
          color: '#284EAC',
          fontSize: 16,
          fontFamily: 'OpenSans',
          fontWeight: 'bold',
          bottom: 7,
        }}
        //onTimeElapsed={this.EndTimeSignup}
      />
      <Text
        style={{color: '#284EAC', fontFamily: 'OpenSans', fontWeight: 'bold'}}>
        s)
      </Text>
    </View>
  );
};

class CheckSignup extends Component {
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

  CheckCodeOTP = async () => {
    this.setState({time: !this.state.time});
  };

  state = {
    dialogVisible: false,
  };

  showDialog = () => {
    if (this.state.time === false) {
      this.setState({dialogVisibleConfirm: true});
    } else {
      this.setState({dialogVisible: true});
    }
  };
  reset = () => {
    this.setState({dialogVisibleConfirm: false});
  };

  EndTimeSignup = () => {
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
          source={require('../assets/images/Group.png')}
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
                      Mã OTP được gửi đến
                    </Text>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontFamily: 'OpenSans',
                        marginTop: 10,
                        color: '#284EAC',
                      }}>
                      0987654321
                    </Text>
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
                      onPress={this.showDialog}
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
                  <Dialog.Container
                    visible={this.state.dialogVisible}
                    style={{borderRadius: 20}}
                    footerStyle={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Dialog.Title
                      style={{
                        color: '#284EAC',
                        fontWeight: 'bold',
                        fontFamily: 'OpenSans',
                        textAlign: 'center',
                      }}>
                      ĐĂNG KÝ THÀNH CÔNG
                    </Dialog.Title>
                    <Dialog.Description
                      style={{fontFamily: 'OpenSans', textAlign: 'center'}}>
                      Bạn đã đăng ký tài khoản thành công. Vui lòng đăng nhập để
                      tiếp tục sử dụng
                    </Dialog.Description>
                    <Dialog.Button
                      label="Đăng nhập"
                      onPress={() => this.props.navigation.navigate('Login')}
                      style={{
                        elevation: 5,
                        shadowColor: '#646464',
                        shadowOpacity: 0.2,
                        color: 'black',
                        fontWeight: 'bold',
                        fontFamily: 'OpenSans',
                        backgroundColor: '#FCB71E',
                        borderRadius: 20,
                        paddingLeft: 20,
                        paddingRight: 20,
                      }}
                    />
                  </Dialog.Container>

                  <Dialog.Container
                    visible={this.state.dialogVisibleConfirm}
                    style={{borderRadius: 20}}
                    footerStyle={{
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                    <Dialog.Title
                      style={{
                        color: '#284EAC',
                        fontWeight: 'bold',
                        fontFamily: 'OpenSans',
                        textAlign: 'center',
                      }}>
                      LỖI
                    </Dialog.Title>
                    <Dialog.Description
                      style={{fontFamily: 'OpenSans', textAlign: 'center'}}>
                      Mã OTP không đúng, vui lòng thử lại
                    </Dialog.Description>
                    <Dialog.Button
                      label="Thử lại"
                      onPress={this.reset}
                      style={{
                        elevation: 5,
                        shadowColor: '#646464',
                        shadowOpacity: 0.2,
                        color: 'black',
                        fontWeight: 'bold',
                        fontFamily: 'OpenSans',
                        backgroundColor: '#FCB71E',
                        borderRadius: 20,
                        paddingLeft: 20,
                        paddingRight: 20,
                      }}
                    />
                  </Dialog.Container>

                  <TouchableOpacity onPress={this.CheckCodeOTP}>
                    {this.state.time ? <CheckSignup1 /> : <CheckSignup2 />}
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
                    source={require('../assets/images/footer_character.png')}
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

export default CheckSignup;
