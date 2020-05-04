import React, {Component} from 'react';
import {View, ScrollView, Text, TouchableOpacity, Image} from 'react-native';
class HorizontalScrollView extends Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <View style={{flex: 1, flexDirection: 'row'}}>
        {/*<ScrollView*/}
        {/*  ref={ref => (this.scrollView = ref)}*/}
        {/*  onContentSizeChange={(contentWidth, contentHeight) => {*/}
        {/*    this.scrollView.scrollToEnd({animated: true});*/}
        {/*  }}*/}
        {/*  horizontal={true}*/}
        {/*  style={{*/}
        {/*    flex: 1,*/}
        {/*    borderWidth: 0.5,*/}
        {/*    borderColor: '#f1f1f1',*/}
        {/*    backgroundColor: 'white',*/}
        {/*    flexDirection: 'row',*/}
        {/*  }}*/}
        {/*  indicatorStyle="black">*/}
        {/*  {datas.map((e, i) => (*/}
        {/*    <View style={{flex: 1, margin: 10, justifyContent: 'center'}}>*/}
        {/*      <TouchableOpacity onPress={() => this.removeData(i)}>*/}
        {/*        <Image*/}
        {/*          source={{uri: e}}*/}
        {/*          style={{height: 36, width: 36, borderRadius: 18}}*/}
        {/*        />*/}
        {/*      </TouchableOpacity>*/}
        {/*    </View>*/}
        {/*  ))}*/}
        {/*</ScrollView>*/}
        <TouchableOpacity
          style={{justifyContent: 'center', alignItems: 'flex-end'}}>
          <Image source={require('../assets/images/create-group-button.png')} />
        </TouchableOpacity>
      </View>
    );
  }

  removeData(e) {
    this.props.callBack(e);
  }
}

export default HorizontalScrollView;
