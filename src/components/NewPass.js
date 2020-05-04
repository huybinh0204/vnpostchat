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
import Entypo from 'react-native-vector-icons/Entypo';
import Dialog from 'react-native-dialog';

class NewPass extends Component {
  constructor(props) {
    super(props);
    this.state = {
      logoAnime: new Animated.Value(0),
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

  CheckNewPass = () => {
    this.props.navigation.navigate('Login');
  };
  state = {
    dialogVisible: false,
  };

  showDialogPass = () => {
    this.setState({dialogVisible: true});
  };

  render() {
    return (
      <SafeAreaView
        style={{
          flex: 1,
          //marginTop: 20,
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
                    top: 40,
                  }}>
                  <View style={{alignItems: 'center', marginTop: 20}}>
                    <Text style={{fontFamily: 'OpenSans', marginTop: 20}}>
                      Vui lòng đặt lại mật khẩu mới
                    </Text>
                  </View>

                  <View
                    style={{alignItems: 'center', justifyContent: 'center'}}>
                    <View
                      style={{
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        justifyContent: 'center',
                      }}>
                      <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        placeholder="Mật khẩu"
                        keyboardType="numeric"
                        onChangeText={password => this.setState({password})}
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
                          right: '10%',
                          bottom: '10%',
                        }}>
                        <Entypo
                          name={
                            this.state.hidePassword ? 'eye-with-line' : 'eye'
                          }
                          size={22}
                        />
                      </TouchableOpacity>
                    </View>

                    <View
                      style={{
                        alignItems: 'center',
                        alignSelf: 'stretch',
                        justifyContent: 'center',
                      }}>
                      <TextInput
                        style={styles.input}
                        underlineColorAndroid="transparent"
                        keyboardType="numeric"
                        placeholder="Xác nhận mật khẩu"
                        onChangeText={pw => this.setState({pw})}
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
                          right: '10%',
                          bottom: '10%',
                        }}>
                        <Entypo
                          name={this.state.hPs ? 'eye-with-line' : 'eye'}
                          size={22}
                        />
                      </TouchableOpacity>
                    </View>
                  </View>

                  <Text
                    style={{
                      fontFamily: 'OpenSans',
                      fontSize: 10,
                      color: '#00000090',
                      left: '8%',
                    }}>
                    Mật khẩu tối thiểu 6 ký tự bao gồm chữ và số
                  </Text>

                  <View style={{alignItems: 'center'}}>
                    <TouchableOpacity
                      onPress={this.showDialogPass}
                      style={{
                        fontFamily: 'OpenSans',
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
                        Xác nhận
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
                      ĐỔI MẬT KHẨU THÀNH CÔNG
                    </Dialog.Title>
                    <Dialog.Description
                      style={{fontFamily: 'OpenSans', textAlign: 'center'}}>
                      Bạn đã đổi mật khẩu thành công. Vui lòng đăng nhập để tiếp
                      tục sử dụng
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
          </TouchableWithoutFeedback>
        </ImageBackground>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    width: '85%',
    borderRadius: 10,
    borderColor: '#284EAC',
    height: 40,
    padding: 10,
    marginTop: 20,
    fontFamily: 'OpenSans',
    borderWidth: 1,
    fontWeight: 'bold',
  },
});

export default NewPass;
