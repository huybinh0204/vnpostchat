import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableHighlight,
  View,
  Dimensions,
  Image,
} from 'react-native';
import {SwipeListView} from 'react-native-swipe-list-view';

const FriendRequestListData = [
  {
    name: 'Wendy Tisdale',
    image: 'https://www.boxymo.ie/news/img/zenvo.jpg',
    phone: '0123172368',
  },
  {
    name: 'Bastian Brown',
    image: 'https://www.boxymo.ie/news/img/zenvo.jpg',
    phone: '0348234455',
  },
];

export default function FriendRequestComponent() {
  const [listData, setListData] = useState(
    FriendRequestListData.map((_, i) => ({
      key: `${i}`,
      name: FriendRequestListData[`${i}`].name,
      image: FriendRequestListData[`${i}`].image,
      phone: FriendRequestListData[`${i}`].phone,
    })),
  );

  const closeRow = (rowMap, rowKey) => {
    if (rowMap[rowKey]) {
      rowMap[rowKey].closeRow();
    }
  };

  const deleteRow = (rowMap, rowKey) => {
    closeRow(rowMap, rowKey);
    const newData = [...listData];
    const prevIndex = listData.findIndex(item => item.key === rowKey);
    newData.splice(prevIndex, 1);
    setListData(newData);
  };

  const onRowDidOpen = rowKey => {
    console.log('This row opened', rowKey);
  };

  const renderItem = data => (
    <View style={styles.rowFront} underlayColor={'#AAA'}>
      <View style={{justifyContent: 'center'}}>
        <Image
          style={{
            width: 64,
            height: 64,
            margin: 5,
            alignItems: 'center',
            borderRadius: 32,
          }}
          source={{uri: data.item.image}}
        />
      </View>
      <View style={{width: 200}}>
        <Text style={{fontSize: 16, margin: 5, fontWeight: 'bold'}}>
          {data.item.name}
        </Text>
        <Text style={{color: 'grey', margin: 5}}>{data.item.phone}</Text>
      </View>

      <TouchableOpacity
        style={{
          backgroundColor: '#284eac',
          width: 80,
          height: 30,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: '#ffffff'}}>Đồng ý</Text>
      </TouchableOpacity>
    </View>
  );

  const renderHiddenItem = (data, rowMap) => (
    <View style={styles.rowBack}>
      <TouchableOpacity
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        onPress={() => deleteRow(rowMap, data.item.key)}>
        <Text style={styles.backTextWhite}>Delete</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <SwipeListView
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        rightOpenValue={-75}
        stopLeftSwipe={100}
        // previewRowKey={'0'}
        // previewOpenValue={-40}
        // previewOpenDelay={3000}
        disableRightSwipe={true}
        closeOnRowBeginSwipe={true}
        onRowDidOpen={onRowDidOpen}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  backTextWhite: {
    color: '#FFF',
  },
  rowFront: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    borderBottomColor: '#f2f2f2',
    borderBottomWidth: 1,
    justifyContent: 'center',
    height: 80,
  },
  rowBack: {
    alignItems: 'center',
    backgroundColor: '#284eac',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    height: 80,
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },

  backRightBtnRight: {
    backgroundColor: '#284eac',
    right: 0,
  },
});
