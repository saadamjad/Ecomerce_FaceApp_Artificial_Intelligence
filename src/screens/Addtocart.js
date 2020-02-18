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

import GlobalHeader from "../components/GlobalHeader";

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
      <SafeAreaView style={{ flex: 1, backgroundColor: "#efefef" }}>
        <Container
          //  contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <GlobalHeader
            arrow={true}
            // RedDrawerIcon={true}
            // twoWords
            BlueDrawerIcon={true}
            // backgroundColor="white"
            RightCart={true}
            headingText="add to cart"
            navigation={this.props.navigation}
          />
          <Content style={{}}>
            <View
              style={{
                width: "95%",
                alignSelf: "center",

                backgroundColor: "white",
                marginBottom: 80,
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
                      backgroundColor: "white",
                      marginVertical: 7,
                      shadowColor: "#000",
                      shadowOffset: {
                        width: 0,
                        height: 10
                      },
                      shadowOpacity: 0.32,
                      shadowRadius: 6.46,

                      elevation: 6,
                      width: "100%",
                      paddingVertical: 1,
                      paddingLeft: 10,
                      borderWidth: 0
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
                        width: "35%",
                        alignSelf: "center",
                        height: 100,
                        overflow: "hidden",
                        justifyContent: "center",
                        paddingLeft: 10
                      }}
                    >
                      <Text
                        style={{
                          color: "#3b3d3c",
                          fontSize: 17,
                          fontWeight: "bold"
                        }}
                      >
                        {" "}
                        {item.Name}{" "}
                      </Text>
                      <Text style={{ color: "#47484a", paddingVertical: 6 }}>
                        <Text style={{ color: "#3b3d3c", fontWeight: "bold" }}>
                          {" "}
                          Price:
                        </Text>{" "}
                        $ {item.price}{" "}
                      </Text>
                      <View style={{ flexDirection: "row" }}>
                        <Text style={{ color: "#3c3d3f", fontWeight: "500" }}>
                          <Text
                            style={{ color: "#3b3d3c", fontWeight: "bold" }}
                          >
                            Qty:
                          </Text>
                        </Text>
                        <Text
                          style={{
                            width: 50,
                            borderWidth: 1,
                            paddingVertical: 1,
                            marginLeft: 6,
                            // backgroundColor: "red",
                            textAlign: "center"
                          }}
                        >
                          {1}
                        </Text>
                      </View>
                    </View>
                    <View
                      style={{
                        width: "40%",
                        paddingTop: 20,
                        justifyContent: "flex-start",
                        alignItems: "center",
                        flexDirection: "row",
                        alignSelf: "center",
                        // borderWidth: 1,
                        height: 110,
                        overflow: "hidden"
                      }}
                    >
                      <TouchableOpacity
                        style={{ right: 15, bottom: 22, position: "absolute" }}
                      >
                        <Fontisto name={"trash"} color={"#878787"} size={15} />
                      </TouchableOpacity>

                      <TouchableOpacity
                        style={{
                          borderWidth: 0,
                          height: 30,
                          width: "60.33%",
                          justifyContent: "center",
                          alignItems: "center",
                          backgroundColor: "#25acfd",
                          marginBottom: -30
                        }}
                        onPress={() =>
                          this.props.navigation.navigate("Checkout")
                        }
                      >
                        <Text style={{ color: "white" }}>Buy</Text>
                      </TouchableOpacity>
                    </View>
                  </View>
                );
              })}
            </View>
          </Content>
          <TouchableOpacity
            style={{
              height: 47,
              borderRadius: 2,
              width: "100%",
              backgroundColor: "#25acfd",
              justifyContent: "center",
              alignItems: "center",
              position: "absolute",
              bottom: 0
            }}
            onPress={() => this.props.navigation.navigate("Checkout")}
          >
            <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
              Go to cart
            </Text>
          </TouchableOpacity>
        </Container>
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
