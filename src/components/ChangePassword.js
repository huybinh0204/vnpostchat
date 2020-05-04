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

class ChangePassword extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoAnime: new Animated.Value(0),
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

  CheckCodeOTP = async () => {};

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          //marginTop: 20,
          backgroundColor: '#284EAC',
        }}>
        <StatusBar
          barStyle="light-content"
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
                    top: '10%',
                  }}>
                  <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text
                      style={{
                        fontFamily: 'OpenSans',
                        marginTop: 20,
                        fontSize: 18,
                      }}>
                      Vui lòng nhập số điện thoại của bạn
                    </Text>
                    <Text style={{fontFamily: 'OpenSans', fontSize: 18}}>
                      để đặt lại mật khẩu
                    </Text>
                  </View>

                  <View
                    style={{width: '85%', alignSelf: 'center', marginTop: 30}}>
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
                      placeholder="Nhập số điện thoại"
                      keyboardType="numeric"
                      onChangeText={phone => this.setState({phone})}
                    />
                  </View>

                  <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={() => this.props.navigation.navigate('CheckPass')}
                      style={{
                        backgroundColor: '#FCB71E',
                        borderRadius: 20,
                        elevation: 5,
                        shadowColor: '#646464',
                        shadowOpacity: 0.2,
                        marginTop: 30,
                        marginBottom: 30,
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

export default ChangePassword;
