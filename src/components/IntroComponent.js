import React, {Component} from 'react';
import {View, Image} from 'react-native';
import {NavigationActions, StackActions} from 'react-navigation';

class IntroComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  componentDidMount() {
    setTimeout(() => {
      this.props.navigation.navigate('Login');
    }, 1000);
  }
  navigateLogin = screen => {
    const resetAction = StackActions.reset({
      index: 0,
      actions: [NavigationActions.navigate({routeName: screen})],
    });
    this.props.navigation.dispatch(resetAction);
  };
  render() {
    return (
      <View
        style={{
          backgroundColor: '#284eac',
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          style={{
            width: 250,
            height: 150,
          }}
          source={require('../assets/images/logo.png')}
        />
      </View>
    );
  }
}

export default IntroComponent;
