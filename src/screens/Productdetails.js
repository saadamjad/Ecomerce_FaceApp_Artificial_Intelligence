import React from 'react';
import {
  ImageBackground,
  Image,
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  SafeAreaView,
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native';
import {Header, Body, Left, Right} from 'native-base';

import Feather from 'react-native-vector-icons/Feather';
export default class Signup extends React.Component {
  state = {
    plus: '',
    minus: '',
    calculate: 0,
    quantity: 0,
    orange: false,
    green: false,
    blue: false,
    CartMap: [
      {
        Name: 'Lorem Ipsum ',

        price: '500',
        //    Image: require("../../assets/images/images(3).jpg"),
        heartcolor: 'transparent',
      },
      {
        Name: 'Lorem Ipsum ',

        price: '500',
        //Image: require("../../assets/images/shirt.jpg"),

        heartcolor: 'transparent',
      },
      {
        Name: 'Lorem Ipsum ',

        price: '500',
        //  Image: require("../../assets/images/images.jpg"),
        heartcolor: 'transparent',
      },
      {
        Name: 'Lorem Ipsum ',
        heartcolor: 'transparent',
        price: '500',
        // Image: require('../../assets/images/images.jpg'),
      },
    ],
  };

  render() {
    return (
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <ScrollView
          contentContainerStyle={{flexGrow: 1, paddingBottom: 75}}
          showsVerticalScrollIndicator={false}>
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
                    source={require('./../../assets/images/icondraw.png')}
                  />
                </View>
              </TouchableOpacity>
            </Left>

            <Body
              style={{
                flex: 1,
                alignItems: 'center',
              }}>
              <Text style={{color: 'black', fontSize: 20, height: 20}}>
                {' '}
                Product Details
              </Text>
            </Body>
            <Right style={{flex: 1, justifyContent: 'center'}}>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.openDrawer()}
                style={{justifyContent: 'flex-start'}}>
                {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
                <Image
                  style={[
                    {width: 55, height: 55, top: -7, marginLeft: 0, left: 8},
                  ]}
                  source={require('./../../assets/images/heartico.png')}
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
                  source={require('./../../assets/images/cartico.png')}
                />
              </TouchableWithoutFeedback>
            </Right>
          </Header>

          <View style={{alignSelf: 'center', width: '93%', flex: 1}}>
            <View
              style={{
                width: '100%',
                //  marginTop: 45,
                height: 150,
                alignSelf: 'center',
                borderWidth: 1,
                borderColor: '#d3ecf1',
                borderRadius: 5,
                overflow: 'hidden',
              }}>
              <Image
                source={require('./../../assets/images/docter2.jpg')}
                // E:\PersonalWork\uniproject\uniproject\assets\docter3.jpg
                style={{height: '100%', width: '100%'}}
                resizeMode="cover"
              />
              <View
                style={{
                  position: 'absolute',
                  right: 10,
                  top: 10,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <View
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 35,
                    backgroundColor: '#cae2e6',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Feather name={'heart'} size={17} color={'#2c3e52'} />
                </View>

                <View
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 35,
                    marginTop: 10,
                    backgroundColor: '#cae2e6',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <Feather name={'plus'} size={17} color={'#2c3e52'} />
                </View>
              </View>
            </View>
            {/* Small picture View */}

            <View style={{flexDirection: 'row', marginTop: 10, paddingLeft: 2}}>
              <View
                style={{
                  height: 50,
                  width: 55,
                  borderWidth: 1,
                  marginRight: 13,
                  borderColor: '#d3ecf1',
                }}>
                <Image
                  source={require('./../../assets/images/docter2.jpg')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  height: 50,
                  width: 55,
                  borderWidth: 1,
                  marginRight: 13,
                  borderColor: '#d3ecf1',
                }}>
                <Image
                  source={require('./../../assets/images/docter2.jpg')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  height: 50,
                  width: 55,
                  borderWidth: 1,
                  marginRight: 13,
                  borderColor: '#d3ecf1',
                }}>
                <Image
                  source={require('./../../assets/images/docter2.jpg')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  height: 50,
                  width: 55,
                  borderWidth: 1,
                  marginRight: 13,
                  borderColor: '#d3ecf1',
                }}>
                {/* <Image
                  source={require("../../assets/images/shirts.jpg")}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="cover"
                /> */}
                <Image
                  source={require('./../../assets/images/docter2.jpg')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="cover"
                />
              </View>
              <View
                style={{
                  height: 50,
                  width: 55,
                  borderWidth: 1,
                  marginRight: 13,
                  borderColor: '#d3ecf1',
                }}>
                {/* <Image
                  source={require("../../assets/images/shirt.jpg")}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="cover"
                /> */}
                <Image
                  source={require('./../../assets/images/docter2.jpg')}
                  style={{height: '100%', width: '100%'}}
                  resizeMode="cover"
                />
              </View>
            </View>

            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <View style={{width: '70%'}}>
                <Text style={{color: '#2b3b48', fontSize: 15}}>
                  Price
                  <Text style={{color: '#243d51', fontSize: 15}}> $50</Text>
                </Text>
              </View>

              <View style={{}}>
                <Text
                  style={{
                    textAlign: 'right',
                    marginLeft: 5,
                    color: '#4d4d4d',
                  }}>
                  #1234567889
                </Text>
              </View>
            </View>

            <View style={{alignSelf: 'center'}}>
              <Text style={{color: '#7e7e7e', fontSize: 11}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </Text>
            </View>

            <Text style={{marginTop: 10, color: '#464646'}}>
              Specifications
            </Text>
            <Text style={{marginTop: 10, color: '#334d5c', fontWeight: '500'}}>
              Sizes:
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginTop: 10,
                  color: '#464646',
                  marginRight: 15,
                  fontWeight: '400',
                }}>
                length:
              </Text>
              <Text style={{marginTop: 10, color: '#464646', marginRight: 65}}>
                5 Lorem
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  color: '#464646',
                  marginRight: 15,
                  fontWeight: '400',
                }}>
                Sleeve Length:
              </Text>
              <Text style={{marginTop: 10, color: '#464646', marginRight: 15}}>
                5 Lorem
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginTop: 10,
                  color: '#464646',
                  marginRight: 15,
                  fontWeight: '400',
                }}>
                length:
              </Text>
              <Text style={{marginTop: 10, color: '#464646', marginRight: 65}}>
                5 Lorem
              </Text>
              <Text
                style={{
                  marginTop: 10,
                  color: '#464646',
                  marginRight: 15,
                  fontWeight: '400',
                }}>
                Sleeve Length:
              </Text>
              <Text style={{marginTop: 10, color: '#464646', marginRight: 15}}>
                5 Lorem
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  marginTop: 10,
                  color: '#464646',
                  marginRight: 15,
                  fontWeight: '400',
                }}>
                length:
              </Text>
              <Text style={{marginTop: 10, color: '#464646', marginRight: 65}}>
                5 Lorem
              </Text>
            </View>

            <TouchableOpacity
              style={{
                height: 47,
                borderRadius: 2,
                width: '100%',
                backgroundColor: 'black',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => this.props.navigation.navigate('Addtocart')}>
              <Text style={{color: 'white', fontSize: 15, fontWeight: '500'}}>
                Add to cart
              </Text>
            </TouchableOpacity>

            <Text style={{color: '#1f425e', fontSize: 15, paddingVertical: 10}}>
              Related
            </Text>

            <View
              style={{
                width: '100%',
                flexDirection: 'row',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
              }}>
              {this.state.CartMap.map((item, index) => {
                return (
                  <View
                    style={{
                      width: '32%',
                      height: 105,
                      borderWidth: 0.4,
                      borderColor: '#d9d0ed',
                      marginBottom: 30,
                    }}>
                    <View
                      style={{
                        width: '100%',
                        height: '100%',
                        borderWidth: 0,
                        overflow: 'hidden',
                      }}>
                      <Image
                        source={item.Image}
                        style={{height: '100%', width: '100%'}}
                        resizeMode="cover"
                      />

                      <Feather
                        name={'heart'}
                        size={20}
                        color={'#1f4461'}
                        style={{position: 'absolute', right: 15, top: 10}}
                      />
                    </View>
                    <Text style={{fontSize: 12}}>
                      {item.Name}

                      <Text
                        style={{
                          fontSize: 12,
                          color: '#3b3b3b',
                          fontWeight: '500',
                        }}>
                        {' '}
                        {item.price}{' '}
                      </Text>
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>
          {/* <Footer1 index={1} navigation={this.props.navigation} /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
