import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Feather, Ionicons, AntDesign, MaterialIcons } from '@expo/vector-icons';

const POLO_BLUE_COLOR = 'rgb(51,60,87)';
const FOLLOW_COLOR = 'rgb(71,113,246)';
const SEND_MESSAGE_COLOR = 'rgb(120,213,250)';

const imgData = [
  { id: 1, imgSource: require('./assets/1.jpg') },
  { id: 2, imgSource: require('./assets/2.jpg') },
  { id: 3, imgSource: require('./assets/3.jpg') },
  { id: 4, imgSource: require('./assets/4.jpg') },
  { id: 5, imgSource: require('./assets/5.jpg') },
  { id: 6, imgSource: require('./assets/6.jpg') },
  { id: 7, imgSource: require('./assets/7.jpg') },
  { id: 8, imgSource: require('./assets/8.jpg') }
];

export default function App() {
  const centerImgData = Math.floor(imgData.length / 2);
  return (
    <View style={styles.container}>
      {/* <Text>Open up App.js to start working on your app!</Text> */}
      {/* header */}
      <View style={styles.viewHeader}>
        <TouchableOpacity style={styles.backButton}>
          <MaterialIcons name="arrow-back" size={22} color="teal" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.setUpButton}>
        <MaterialIcons name="apps" size={22} color="teal" />
        </TouchableOpacity>
      </View>
      {/* avatar */}
      <View style={styles.avataGroup}>
        <View style={styles.avataWrapper}>
          <Image
            style={styles.avataImg}
            source={require('./assets/donald_trum.jpg')}
          />
        </View>

        <View style={styles.textInfo}>
          <Text style={styles.nameText}> Donald Trump </Text>
          <Text style={styles.jobText}> President </Text>
          <View style={styles.buttonWrapper}>
            <TouchableOpacity style={styles.followButton}>
              <Text style={styles.followText}>Follow</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.messageButton}>
              <Ionicons name="md-send" size={22} color="white" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* text contaier */}
      <View style={styles.likeGroup}>
        <View style={styles.countGroup}>
          <Text style={styles.countText}>210</Text>
          <Text style={styles.textGroup}>Photos</Text>
        </View>
        <View style={styles.countGroup}>
          <Text style={styles.countText}>15K</Text>
          <Text style={styles.textGroup}>Followers</Text>
        </View>
        <View style={styles.countGroup}>
          <Text style={styles.countText}>605</Text>
          <Text style={styles.textGroup}>Following</Text>
        </View>
      </View>
      {/* pictures contaier */}
      <View style={styles.imagGroup}>
        <ScrollView contentContainerStyle={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <View style={styles.imagLeft}>
            {imgData.slice(0, centerImgData).map(item => {
              return <Image style={styles.image} source={item.imgSource} key={item.id} />
            })}
          </View>
          <View style={styles.imagRight}>
            {imgData.slice(centerImgData).map(item => {
              return <Image style={styles.image} source={item.imgSource} key={item.id} />
            })}
          </View>
        </ScrollView>
      </View>
      {/* end contaier */}
      <View style={styles.viewEnd}>
        <TouchableOpacity style={styles.opButton}>
          <MaterialIcons name="dehaze" size={22} color="teal" />

        </TouchableOpacity>
        <TouchableOpacity style={styles.plusButton}>
          <AntDesign name="pluscircleo" size={22} color="teal" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.userButton}>
          <AntDesign name="user" size={22} color="teal" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  viewHeader: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  backButton:{
    marginLeft: 15,
  },
  setUpButton:{
    marginRight:15,
  },
  //avata
  avataGroup: {
    flex: 3,
    flexDirection: 'row',

  },
  avataImg: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  textInfo: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
  },
  followButton: {
    backgroundColor: FOLLOW_COLOR,
    width: 90,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  followText: {
    color: 'white',
    // fontWeight: 'bold',
  },
  messageButton: {
    marginLeft: 5,
    backgroundColor: SEND_MESSAGE_COLOR,
    width: 55,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,

    elevation: 6,
  },
  buttonWrapper: {
    flexDirection: 'row',
  },
  avataWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  nameText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  jobText: {
    fontSize: 18,
    color: 'gray',
    fontStyle: 'italic',
  },
  //like
  likeGroup: {
    flex: 1.8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  countGroup: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  countText: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  textGroup: {
    fontSize: 14,
    color: 'gray',
  },
  //pictures
  imagGroup: {
    flex: 9,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 20,
    marginTop: 5,
  },
  imagLeft: {
    marginRight: 5,
  },
  imagRight: {
    marginLeft: 5,
  },
  //end pictures
  viewEnd: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  userButton:{
    width:30,
    height:25,
  }
});
