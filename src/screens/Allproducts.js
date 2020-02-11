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
import { Header, Body, Left, Right } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";

// import Footer1 from './../../components/Footer';

import Feather from "react-native-vector-icons/Feather";
import firebase from "react-native-firebase";
export default class AllProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: [],
      shoes: [],
      Jewellary: [],
      Images: [
        { image: require("../../assets/images/product.png") },

        { image: require("../../assets/images/product.png") },

        { image: require("../../assets/images/product.png") },

        { image: require("../../assets/images/product.png") },

        { image: require("../../assets/images/product.png") },

        { image: require("../../assets/images/product.png") }
      ]
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
        <ScrollView>
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
                //  onPress={() => this.props.navigation.openDrawer()}
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
              <Text style={{ color: "black", fontSize: 20, top: 0, height: 0 }}>
                {" "}
                All products
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
                    { width: 50, height: 50, top: -10, marginLeft: 0, left: 7 }
                  ]}
                  source={require("../../assets/images/cartico.png")}
                />
              </TouchableWithoutFeedback>
            </Right>
          </Header>

          <View
            style={{
              padding:10,alignItems:'center',
              
            }}
          >
            {this.state.Images.map((data, i) => {
              return (
                <View  style={{paddingVertical:20,shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 3,
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,
                
                elevation: 7}}>
                <TouchableOpacity >
                    <Image  source={require("./../../assets/images/docter2.jpg")}
               
                style={{ height: 200,width:350}}
                resizeMode="cover"/>
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
          
        

          </View> 
          
                  </TouchableOpacity>

             </View>
              );
            })}
          </View>
        </ScrollView>
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
