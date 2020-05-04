import React, {Component} from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  Text,
  Alert,
  ImageBackground,
  SafeAreaView,
  StatusBar,
  ScrollView,
  Keyboard,
  StyleSheet,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

export default class LoginComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hidePassword: true,
      phone: '',
      password: '',
      checkLogin: 0,
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.err == 1) {
      this.props.navigation.navigate('BottomTab');
    }
    if (nextProps.err == 0) {
      Alert.alert('sai thong tin');
    }
  }
  hidePass = () => {
    this.setState({hidePassword: !this.state.hidePassword});
  };
  render() {
    return (
      <ImageBackground
        source={require('../assets/images/login2.png')}
        style={{flex: 1}}>
        <SafeAreaView style={styles.safeArea}>
          <StatusBar
            barStyle="light-content"
            hidden={false}
            backgroundColor="#284EAC"
            translucent={true}
          />
          <ScrollView onPress={Keyboard.dismiss}>
            <View style={{flex: 1}}>
              <View style={styles.scrollView}>
                <Image
                  style={{width: 250, height: 150}}
                  source={require('../assets/images/logo.png')}
                />
              </View>

              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Số điện thoại"
                  keyboardType="numeric"
                  returnKeyType="next"
                  autoCorrect={false}
                  onSubmitEditing={() => this.refs.txtPassword.focus()}
                  onChangeText={phone => this.setState({phone})}
                  value={this.state.phone}
                />
                <View
                  style={{
                    alignItems: 'center',
                    alignSelf: 'stretch',
                    justifyContent: 'center',
                  }}>
                  <TextInput
                    style={styles.textInput}
                    underlineColorAndroid="transparent"
                    placeholder="Mật khẩu"
                    returnKeyType="go"
                    onChangeText={password => this.setState({password})}
                    secureTextEntry={this.state.hidePassword}
                    value={this.state.password}
                  />
                  <TouchableOpacity
                    onPress={() => this.hidePass()}
                    style={styles.hidePass}>
                    <Entypo
                      name={this.state.hidePassword ? 'eye-with-line' : 'eye'}
                      size={25}
                    />
                  </TouchableOpacity>
                </View>

                <TouchableOpacity
                  style={styles.changePassword}
                  onPress={() =>
                    this.props.navigation.navigate('ChangePassword')
                  }>
                  <Text style={styles.forgetPassword}>Quên mật khẩu?</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  onPress={() =>
                    // this.props.CheckLogin(this.state.phone, this.state.password)
                    this.props.navigation.navigate('HomeNavigator')
                  }
                  style={[
                    styles.button,
                    {
                      backgroundColor: '#FCB71E',
                      borderColor: '#FCB71E',
                      elevation: 5,
                      shadowColor: '#646464',
                      shadowOpacity: 0.2,
                    },
                  ]}>
                  <Text style={[styles.buttonText]}>Đăng nhập</Text>
                </TouchableOpacity>

                <TouchableOpacity
                  style={[
                    styles.button,
                    {
                      borderColor: '#ffffff',
                      marginBottom: 20,
                    },
                  ]}
                  onPress={() => this.props.navigation.navigate('Signup')}>
                  <Text style={[styles.buttonText, {color: '#fff'}]}>
                    Đăng ký
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        </SafeAreaView>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: '74%',
    borderRadius: 10,
    backgroundColor: '#ffffff',
    height: 40,
    padding: 10,
    marginTop: 20,
    fontFamily: 'OpenSans',
  },
  icon: {
    position: 'absolute',
    height: 30,
    width: 30,
    paddingBottom: 5,
    opacity: 0.3,
  },
  hidePass: {
    position: 'absolute',
    height: 25,
    width: 25,
    opacity: 0.3,
    right: '15%',
    bottom: '10%',
  },
  safeArea: {
    flex: 1,
    marginTop: 20,
  },
  scrollView: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#284EAC',
    margin: 40,
  },
  buttonText: {
    textAlign: 'center',
    padding: 10,
    fontSize: 16,
    fontFamily: 'OpenSans',
    fontWeight: 'bold',
  },
  forgetPassword: {
    color: '#ffffff',
    fontSize: 12,
    textAlign: 'right',
    fontFamily: 'OpenSans',
  },
  button: {
    width: '50%',
    marginTop: 20,
    borderRadius: 20,
    borderWidth: 1,
  },
  changePassword: {
    marginTop: 10,
    width: '75%',
  },
});
