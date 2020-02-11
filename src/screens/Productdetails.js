import React from "react";
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
  TouchableWithoutFeedback
} from "react-native";
import { Header, Body, Left, Right } from "native-base";

import Feather from "react-native-vector-icons/Feather";
export default class Signup extends React.Component {
  state = {
    plus: "",
    minus: "",
    calculate: 0,
    quantity: 0,
    orange: false,
    green: false,
    blue: false,
    CartMap: [
      {
        Name: "Lorem Ipsum ",

        price: "500",
        //    Image: require("../../assets/images/images(3).jpg"),
        heartcolor: "transparent"
      },
      {
        Name: "Lorem Ipsum ",

        price: "500",
        //Image: require("../../assets/images/shirt.jpg"),

        heartcolor: "transparent"
      },
      {
        Name: "Lorem Ipsum ",

        price: "500",
        //  Image: require("../../assets/images/images.jpg"),
        heartcolor: "transparent"
      },
      {
        Name: "Lorem Ipsum ",
        heartcolor: "transparent",
        price: "500"
        // Image: require('../../assets/images/images.jpg'),
      }
    ]
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1,  }}
          showsVerticalScrollIndicator={false}
        >
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
                //    onPress={() => this.props.navigation.openDrawer()}
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
                    source={require("./../../assets/images/icondraw.png")}
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
              <Text style={{ color: "black", fontSize: 20, height: 20 }}>
                {" "}
                Product Details
              </Text>
            </Body>
            <Right style={{ flex: 1, justifyContent: "center" }}>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.openDrawer()}
                style={{ justifyContent: "flex-start" }}
              >
                {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
                <Image
                  style={[
                    { width: 55, height: 55, top: -7, marginLeft: 0, left: 8 }
                  ]}
                  source={require("./../../assets/images/heartico.png")}
                />
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                onPress={() => this.props.navigation.navigate("MyCart")}
                style={{ justifyContent: "flex-start" }}
              >
                {/* <Entypo name={'menu'} color={this.props.color} size={25} style={{margin: 15}} /> */}
                <Image
                  style={[
                    { width: 50, height: 50, top: -10, marginLeft: 0, left: 7 }
                  ]}
                  source={require("./../../assets/images/cartico.png")}
                />
              </TouchableWithoutFeedback>
            </Right>
          </Header>

          <View style={{ alignSelf: "center", width: "100%", flex: 1 }}>
            <View
              style={{
                width: "100%",
                //  marginTop: 45,
                height: 230,
                alignSelf: "center",
                borderWidth: 1,
                borderColor: "#d3ecf1",
                marginTop:-11,
                overflow: "hidden"
              }}
            >
              <Image
                source={require("./../../assets/images/docter2.jpg")}
                // E:\PersonalWork\uniproject\uniproject\assets\docter3.jpg
                style={{ height: "100%", width: "100%" }}
                resizeMode="cover"
              />
              <View
                style={{
                  position: "absolute",
                  right: 10,
                  top: 10,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                {/* <View
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 35,
                    backgroundColor: "#cae2e6",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Feather name={"heart"} size={17} color={"#2c3e52"} />
                </View> */}

                {/* <View
                  style={{
                    width: 35,
                    height: 35,
                    borderRadius: 35,
                    marginTop: 10,
                    backgroundColor: "#cae2e6",
                    alignItems: "center",
                    justifyContent: "center"
                  }}
                >
                  <Feather name={"plus"} size={17} color={"#2c3e52"} />
                </View> */}
              </View>
            </View>
            {/* Small picture View */}
                
          <View style={{paddingHorizontal:5,paddingVertical:10}}>
            <View>
                <Text style={{fontWeight:'bold',color:'#25acfd',fontSize:20}}>Woonder Skin Care</Text>
                <Text style={{fontWeight:'100',color:'#7b7b7b',fontSize:16}}>Profuct Info in 1 line</Text>
            </View>
            <View style={{ flexDirection: "row", paddingVertical: 10 }}>
              <View style={{ width: "70%" }}>
                <Text style={{ color: "#2b3b48", fontSize: 15 }}>
                  5 Star
               
                </Text>
              </View>

              <View style={{}}>
                <Text
                  style={{
                    textAlign: "right",
                    marginLeft: 5,
                    color: "black"
                  }}
                >
                  Price: <Text style={{fontWeight:'bold',color:'#25acfd'}}>170$</Text>
                </Text>
              </View>
            </View>
            <Text style={{fontWeight:'bold',fontSize:20,color:'black'}}>Product Feature</Text>
            <View style={{ alignSelf: "center" }}>
              <Text style={{ color: "#7e7e7e", fontSize: 13 }}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries,
              </Text>
            </View>

          </View> 
          
            <TouchableOpacity
              style={{
                height: 47,
                borderRadius: 2,
                width: "100%",
                backgroundColor: "#49ccc4",
                justifyContent: "center",
                alignItems: "center",
                position:'absolute',bottom:0, 
              }}
              onPress={() => this.props.navigation.navigate("Addtocart")}
            >
              <Text style={{color: "white", fontSize: 15, fontWeight: "500" }}>
                Add to cart
              </Text>
            </TouchableOpacity>

          
          </View>
          {/* <Footer1 index={1} navigation={this.props.navigation} /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
