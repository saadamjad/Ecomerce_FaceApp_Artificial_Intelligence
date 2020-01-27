import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  TouchableWithoutFeedback,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {Header, Body, Left, Right} from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

// import Footer1 from './../../components/Footer';

import Feather from 'react-native-vector-icons/Feather';
import firebase from 'react-native-firebase';
export default class AllProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: [],
      shoes: [],
      Jewellary: [],
    };
  }

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: '#ffff'}}>
        <ScrollView>
          <Header
            style={{
              marginBottom: 10,
              backgroundColor: 'white',
              height: 50,
              borderBottomColor: 'black',
              borderBottomWidth: 1,
              elevation: this.props.elevation,
              justifyContent: 'center',
              paddingBottom: 15,
            }}>
            <Left style={{flex: 1}}>
              <TouchableOpacity
                onPress={() => this.props.navigation.openDrawer()}
                style={{
                  top: -10,
                  width: '20%',
                  height: '100%',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  {/* <Feather name={"align-justify"} size={25} color={'black'} /> */}
                  <Image
                    style={{width: 30, height: 30, top: 4, marginLeft: 2}}
                    source={require('../../assets/images/icondraw.png')}
                  />
                </View>
              </TouchableOpacity>
            </Left>

            <Body
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 20, top: 0, height: 0}}>
                {' '}
                All products
              </Text>
            </Body>
            <Right style={{flex: 1, justifyContent: 'center'}}>
              <TouchableWithoutFeedback style={{justifyContent: 'flex-start'}}>
                {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
                <Image
                  style={[
                    {width: 55, height: 55, top: -7, marginLeft: 0, left: 8},
                  ]}
                  source={require('../../assets/images/heartico.png')}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate('MyCart')}
                style={{justifyContent: 'flex-start'}}>
                {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
                <Image
                  style={[
                    {width: 50, height: 50, top: -10, marginLeft: 0, left: 7},
                  ]}
                  source={require('../../assets/images/cartico.png')}
                />
              </TouchableWithoutFeedback>
            </Right>
          </Header>

          <View>
            <Image
              style={{
                alignSelf: 'flex-end',
                height: 40,
                width: 200,
                marginRight: 10,
              }}
              source={require('../../assets/images/filter.png')}
            />
          </View>
          <TouchableOpacity
            style={{}}
            onPress={() => this.props.navigation.navigate('Productdetails')}>
            <Image
              style={{
                height: 200,
                width: '100%',
                marginRight: 10,
                marginTop: 10,
              }}
              source={require('../../assets/images/product.png')}
            />

            {/* <Image style={{height:200,width:'100%',marginRight:10,marginTop:10}} source={require('../../assets/images/product.png')}/> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{}}
            onPress={() => this.props.navigation.navigate('Productdetails')}>
            <Image
              style={{
                height: 200,
                width: '100%',
                marginRight: 10,
                marginTop: 10,
              }}
              source={require('../../assets/images/product.png')}
            />

            {/* <Image style={{height:200,width:'100%',marginRight:10,marginTop:10}} source={require('../../assets/images/product.png')}/> */}
          </TouchableOpacity>
          <TouchableOpacity
            style={{}}
            onPress={() => this.props.navigation.navigate('Productdetails')}>
            <Image
              style={{
                height: 200,
                width: '100%',
                marginRight: 10,
                marginTop: 10,
              }}
              source={require('../../assets/images/product.png')}
            />

            {/* <Image style={{height:200,width:'100%',marginRight:10,marginTop:10}} source={require('../../assets/images/product.png')}/> */}
          </TouchableOpacity>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    // borderBottomColor: "#000",
    backgroundColor: 'white',
    alignSelf: 'center',
    width: '90%',
    borderRadius: 15,
    elevation: 1,
  },
});
