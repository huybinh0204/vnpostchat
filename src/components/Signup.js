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
import Dialog from 'react-native-dialog';
import Entypo from 'react-native-vector-icons/Entypo';

class Signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoAnime: new Animated.Value(0),
      phone: 0,
      hidePassword: true,
      hPs: true,
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

  hidePass = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };
  hP = () => {
    this.setState({hPs: !this.state.hPs});
  };

  _onPressSignup = async () => {
    if (false) {
      this.setState({dialogVisibleSignup: true});
    } else {
      this.props.navigation.navigate('CheckSignup');
    }
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
                  top: 20,
                }}>
                <View style={{alignItems: 'center'}}>
                  <Image
                    source={require('../assets/images/welcometitle.png')}
                  />
                </View>

                <View style={{alignItems: 'center'}}>
                  <Text>Chào mừng bạn đến với</Text>
                  <View style={{flexDirection: 'row'}}>
                    <Text style={{color: '#284EAC', fontWeight: 'bold'}}>
                      VNPOST - SMART
                    </Text>
                    <Text>, ứng dụng chat của</Text>
                  </View>
                  <Text
                    style={{
                      fontWeight: 'bold',
                    }}>
                    Tổng công ty Bưu điện Việt Nam
                  </Text>
                </View>

                <View style={{width: '85%', alignSelf: 'center'}}>
                  <View style={styles.pass}>
                    <Image
                      source={require('../assets/images/icon_name.png')}
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Họ và tên"
                      onChangeText={name => this.setState({name})}
                    />
                  </View>

                  <View style={styles.pass}>
                    <Image
                      source={require('../assets/images/icon_phone.png')}
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.textInput}
                      placeholder="Số điện thoại"
                      onChangeText={phone => this.setState({phone})}
                    />
                  </View>

                  <View style={styles.pass}>
                    <Image
                      source={require('../assets/images/icon_password-1.png')}
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.textInput}
                      underlineColorAndroid="transparent"
                      placeholder="Mật khẩu"
                      keyboardType="numeric"
                      onChangeText={pass => this.setState({pass})}
                      secureTextEntry={this.state.hidePassword}
                      value={this.state.password}
                    />
                    <TouchableOpacity
                      onPress={this.hidePass}
                      style={{
                        position: 'absolute',
                        height: 25,
                        width: 25,
                        opacity: 0.3,
                        right: 5,
                        bottom: '10%',
                      }}>
                      <Entypo
                        name={this.state.hidePassword ? 'eye-with-line' : 'eye'}
                        size={22}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={styles.pass}>
                    <Image
                      source={require('../assets/images/icon_password-1.png')}
                      style={styles.icon}
                    />
                    <TextInput
                      style={styles.textInput}
                      underlineColorAndroid="transparent"
                      placeholder="Xác nhận mật khẩu"
                      keyboardType="numeric"
                      onChangeText={cfpass => this.setState({cfpass})}
                      secureTextEntry={this.state.hPs}
                      value={this.state.pw}
                    />
                    <TouchableOpacity
                      onPress={this.hP}
                      style={{
                        position: 'absolute',
                        height: 25,
                        width: 25,
                        opacity: 0.3,
                        right: 5,
                        bottom: '10%',
                      }}>
                      <Entypo
                        name={this.state.hPs ? 'eye-with-line' : 'eye'}
                        size={22}
                      />
                    </TouchableOpacity>
                  </View>

                  <Text
                    style={{
                      fontFamily: 'OpenSans',
                      fontSize: 10,
                      color: '#00000090',
                    }}>
                    Mật khẩu tối thiểu 6 ký tự bao gồm chữ và số
                  </Text>
                </View>

                <View style={{alignItems: 'center'}}>
                  <TouchableOpacity
                    onPress={this._onPressSignup}
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
                  visible={this.state.dialogVisibleSignup}
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
                    Số điện thoại đã tồn tại. Vui lòng đăng nhập để tiếp tục
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
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  pass: {
    alignSelf: 'stretch',
    justifyContent: 'center',
    marginTop: 10,
  },
  icon: {
    position: 'absolute',
    marginLeft: 5,
  },
  textInput: {
    paddingLeft: 30,
    fontSize: 15,
    borderColor: '#284EAC',
    borderWidth: 1,
    borderRadius: 10,
    height: 40,
    fontFamily: 'OpenSans',
  },
});

export default Signup;
