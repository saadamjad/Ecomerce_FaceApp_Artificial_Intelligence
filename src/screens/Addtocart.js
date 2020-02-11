import React from "react";
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
  ScrollView
} from "react-native";
import { Header, Body, Left, Right, Container, Content } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";

import { Col, Row } from "react-native-easy-grid";

import Feather from "react-native-vector-icons/Feather";
export default class MyCart extends React.Component {
  state = {
    plus: "",
    minus: "",
    calculate: 0,
    quantity: 0,
    CartMap: [
      {
        Name: "Lorem Ipsum ",
        Orderno: "#122345",
        price: "500",
        source: require("../../assets/images/dummyimg.png")
      },
      {
        Name: "Trausers ",
        Orderno: "#122345",
        price: "50",
        source: require("../../assets/images/dummyimg(4).png")
      },
      {
        Name: "Mini Skirt",
        Orderno: "#122345",
        price: "500",
        source: require("../../assets/images/dummy.png")
      },
      {
        Name: "Shoes",
        Orderno: "#122345",
        price: "100",
        source: require("../../assets/images/dummyimg.png")
      },
      {
        Name: "T-shirts",
        Orderno: "#122345",
        price: "200",
        source: require("../../assets/images/dummyimg(4).png")
      },
      {
        Name: "T-shirts",
        Orderno: "#122345",
        price: "200",
        source: require("../../assets/images/dummyimg.png")
      },
      {
        Name: "T-shirts",
        Orderno: "#122345",
        price: "200",
        source: require("../../assets/images/dummyimg(4).png")
      }
    ]
  };

  addItem = () => {
    this.setState({
      quantity: this.state.quantity + 1
    });
  };

  subItem = () => {
    if (this.state.quantity > 1) {
      this.setState({
        quantity: this.state.quantity - 1
      });
    }
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <Container
        //  contentContainerStyle={{ flexGrow: 1 }}
        //showsVerticalScrollIndicator={false}
        >
          <Content style={{ marginBottom: 10 }}>
            <Header
              style={{
                marginBottom: 10,
                backgroundColor: "white",
                height: 50,
                borderBottomColor: "black",
                borderBottomWidth: 1,
                elevation: this.props.elevation,
                justifyContent: "center",
                paddingBottom: 15
              }}
            >
              <Left style={{ flex: 1 }}>
                <TouchableOpacity
                  // onPress={() => this.props.navigation.openDrawer()}
                  style={{
                    top: -10,
                    width: "20%",
                    height: "100%",
                    justifyContent: "center"
                  }}
                >
                  <View
                    style={{
                      width: 40,
                      height: 40,
                      alignItems: "center",
                      justifyContent: "center"
                    }}
                  >
                    {/* <Feather name={"align-justify"} size={25} color={'black'} /> */}
                    <Image
                      style={{ width: 30, height: 30, top: 4, marginLeft: 2 }}
                      source={require("../../assets/images/icondraw.png")}
                    />
                  </View>
                </TouchableOpacity>
              </Left>

              <Body
                style={{
                  flex: 1,
                  alignItems: "center"
                }}
              >
                <Text
                  style={{ color: "black", fontSize: 20, top: -6, height: 20 }}
                >
                  {" "}
                  MY CART
                </Text>
              </Body>
              <Right style={{ flex: 1, justifyContent: "center" }}>
                <TouchableWithoutFeedback
                  style={{ justifyContent: "flex-start" }}
                >
                  {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
                  <Image
                    style={[
                      { width: 55, height: 55, top: -7, marginLeft: 0, left: 8 }
                    ]}
                    source={require("../../assets/images/heartico.png")}
                  />
                </TouchableWithoutFeedback>
                <TouchableWithoutFeedback
                  onPress={() => this.props.navigation.navigate("MyCart")}
                  style={{ justifyContent: "flex-start" }}
                >
                  {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
                  <Image
                    style={[
                      {
                        width: 50,
                        height: 50,
                        top: -10,
                        marginLeft: 0,
                        left: 7
                      }
                    ]}
                    source={require("../../assets/images/cartico.png")}
                  />
                </TouchableWithoutFeedback>
              </Right>
            </Header>

            <View
              style={{
                width: "100%",
                paddingLeft: 15,
                paddingRight: 15,
                alignSelf: "center",
                borderWidth: 0,
                height: "100%"
              }}
            >
              {this.state.CartMap.map((item, index) => {
                return (
                  <View
                    style={{
                      flexDirection: "row",
                      marginVertical: 5,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 10,
                      },
                      shadowOpacity: 0.32,
                      shadowRadius: 6.46,
                      
                      elevation: 4,
                      width: "100%",
                      paddingVertical:1,
                      paddingLeft: 10,
                      borderWidth: 0,
               
                    }}
                  >
                    <View
                      style={{
                        width: "25%",
                        alignSelf: "center",
                        borderWidth: 0.3,
                        overflow: "hidden",
                        borderColor: "#8ca9af",
                        height: 80,
                 
                        overflow: "hidden"
                      }}
                    >
                      <Image
                        source={item.source}
                        style={{
                          height: "110%",
                          width: "120%",
                          alignSelf: "center"
                        }}
                        resizeMode="cover"
                      />
                    </View>
                    <View
                      style={{
                        width: "40%",
                        alignSelf: "center",
                        height: 100,
                        overflow: "hidden",
                        justifyContent: "center",
                        paddingLeft: 10
                      }}
                    >
                      <Text style={{ color: "#3b3d3c", fontSize: 17 ,fontWeight:'bold'}}>
                        {" "}
                        {item.Name}{" "}
                      </Text>
                      <Text style={{ color: "#47484a", paddingVertical: 6 }}>
                      
                       <Text  style={{ color: "#3b3d3c",fontWeight:'bold'}}> Price:</Text> {item.price}{" "}
                      </Text>
                      <Text style={{ color: "#3c3d3f", fontWeight: "500" }}>
                      <Text  style={{ color: "#3b3d3c",fontWeight:'bold'}}> Qty:</Text> 
                       <Text>{1}</Text>
                      </Text>
                    </View>
                    <View
                      style={{
                        width: "35%",
                        paddingTop: 20,
                        justifyContent: 'flex-start',
                        alignItems: "center",
                        flexDirection: "row",
                        alignSelf: "center",
                        borderWidth: 0,
                        height: 110,
                        overflow: "hidden"
                      }}
                    >
                      <TouchableOpacity
                        style={{ right: 15, bottom: 22, position: "absolute" }}
                      >
                        {/* <Image source={require('../../assets/images/times.png')}
                                                style={{ height: 15, width: 15, tintColor: '#898b8a' }}
                                                resizeMode="contain" */}
                        <Fontisto
                          name={"trash"}
                          color={"#878787"}
                          size={15}
                        />
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          borderWidth: 0,
                          height: 30,
                          width: "40.33%",
                          justifyContent: "center",
                          alignItems:'center',
                          backgroundColor:'#25acfd',marginBottom:-30
                        }}
                        onPress={this.subItem}
                      >
                       <Text style={{color:'white'}}>Buy</Text>
                      </TouchableOpacity>
                     
                  
                      {/*                                                      
                                                           
                                                            <View style={{height:30,width:30,backgroundColor:'white'}}>
                                                                
                                                            </View>
                                                            <Text style={{color:'#47484a',fontSize:30}}> + </Text> */}
                    </View>
                  </View>
                );
              })}
            </View>
          </Content>
        </Container>
        {/* <View
          style={{
            // padding: 10,
            // top: -100,
            width: "100%",
            backgroundColor: "white",
            // width: "93%",
            // alignSelf: "center",
            height: 120,
            // justifyContent: "center"
            paddingLeft: 10,
            paddingRight: 10,
            position: "absolute",
            bottom: 5
          }}
        >
          <Text
            style={{
              color: "#3c3c3c",
              fontWeight: "300",
              fontSize: 15,
              marginTop: 5
            }}
          >
            {" "}
            Order Summery{" "}
          </Text> */}
          {/* <Row>
            <Col style={{ alignItems: "center" }}>
              <Text
                style={{
                  color: "#3c3c3c",
                  fontWeight: "300",
                  fontSize: 12,
                  marginTop: 5
                }}
              >
                {" "}
                Sub Total{" "}
              </Text>
              <Text
                style={{
                  color: "#254460",
                  fontWeight: "500",
                  fontSize: 16,
                  marginTop: 1
                }}
              >
                {" "}
                4{" "}
              </Text>
            </Col>
            <Col style={{ alignItems: "center" }}>
              <Text
                style={{
                  color: "#3c3c3c",
                  fontWeight: "300",
                  fontSize: 12,
                  marginTop: 5
                }}
              >
                {" "}
                Shipping Tax{" "}
              </Text>
              <Text
                style={{
                  color: "#254460",
                  fontWeight: "500",
                  fontSize: 16,
                  marginTop: 1
                }}
              >
                {" "}
                $45
              </Text>
            </Col>
            <Col style={{ alignItems: "center" }}>
              <Text
                style={{
                  color: "#3c3c3c",
                  fontWeight: "300",
                  fontSize: 12,
                  marginTop: 5
                }}
              >
                {" "}
                Total Order{" "}
              </Text>
              <Text
                style={{
                  color: "#254460",
                  fontWeight: "500",
                  fontSize: 16,
                  marginTop: 1
                }}
              >
                {" "}
                $500{" "}
              </Text>
            </Col>
          </Row> */}

          <TouchableOpacity
            onPress={() => this.props.navigation.navigate("Checkout")}
            style={{
              height: 45,
              // top: 30,
              width: "100%",
              backgroundColor: "#49ccc4",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5,
            }}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              CHECKOUT
            </Text>
          </TouchableOpacity>
        {/* </View> */}

        {/* <View
          style={{ position: "absolute", bottom: 0, flex: 1, width: "100%" }}
        >
          <Footer1 index={1} navigation={this.props.navigation} />
        </View> */}
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    // borderBottomColor: "#000",
    backgroundColor: "white",
    alignSelf: "center",
    width: "90%",
    borderRadius: 15,
    elevation: 1
  }
});
