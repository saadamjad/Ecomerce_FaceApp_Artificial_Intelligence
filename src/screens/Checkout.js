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

import Feather from "react-native-vector-icons/Feather";
export default class Checkout extends React.Component {
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
        source: require("../../assets/images/dummyimg.png")
      },
      {
        Name: "Mini Skirt",
        Orderno: "#122345",
        price: "500",
        source: require("../../assets/images/dummyimg.png")
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
        source: require("../../assets/images/dummyimg.png")
      }
    ]
  };

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
        <ScrollView
          contentContainerStyle={{ flexGrow: 1, paddingBottom: 10 }}
          showsVerticalScrollIndicator={false}
        >
          {/* <GlobalHeader
            arrow={true}
            // // RedDrawerIcon={true}
            // // twoWords
            // BlueDrawerIcon={true}
            // backgroundColor="white"
            // RightCart={true}
            // headingText="Home"
          /> */}
          <View
            style={{
              paddingVertical: 20,
              borderWidth: 0,
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 0
            }}
          >
            <Image
              source={require("../../assets/images/Cap.png")}
              style={{ right: 10, height: 80, width: 80, marginTop: 20 }}
              resizeMode="contain"
            />
            <Text style={{ color: "black", fontSize: 23, marginTop: 10 }}>
              $ 500
            </Text>
            <Text style={{ color: "black", fontSize: 16, marginTop: 8 }}>
              VISA CARD DETAILS{" "}
            </Text>
          </View>
          <View style={{ paddingLeft: 25, paddingRight: 25 }}>
            <View
              style={{
                borderBottomWidth: 1,
                paddingVertical: 10,
                marginBottom: 10,
                borderColor: "#dcdcdc"
              }}
            >
              <Text style={{ color: "#555", fontSize: 14 }}>Coupon </Text>
              <Text
                style={{
                  color: "#224257",
                  fontSize: 16,
                  marginTop: 5,
                  fontWeight: "500"
                }}
              >
                123456789{" "}
              </Text>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                paddingVertical: 10,
                marginBottom: 10,
                borderColor: "#dcdcdc"
              }}
            >
              <Text style={{ color: "#555", fontSize: 14 }}>Card Number </Text>
              <View style={{ flexDirection: "row" }}>
                <Text
                  style={{
                    color: "#224257",
                    fontSize: 15,
                    marginTop: 5,
                    width: 60
                  }}
                >
                  {" "}
                  0123
                </Text>
                <Text
                  style={{
                    color: "#224257",
                    fontSize: 15,
                    marginTop: 5,
                    width: 60
                  }}
                >
                  {" "}
                  0123
                </Text>
                <Text
                  style={{
                    color: "#224257",
                    fontSize: 15,
                    marginTop: 5,
                    width: 60
                  }}
                >
                  {" "}
                  0123
                </Text>
                <Text
                  style={{
                    color: "#224257",
                    fontSize: 15,
                    marginTop: 5,
                    width: 760
                  }}
                >
                  {" "}
                  0123
                </Text>
              </View>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                paddingVertical: 10,
                marginBottom: 10,
                borderColor: "#dcdcdc"
              }}
            >
              <Text style={{ color: "#555", fontSize: 14 }}>
                {" "}
                Cardholder Name{" "}
              </Text>
              <Text
                style={{
                  color: "#224257",
                  fontSize: 16,
                  marginTop: 5,
                  fontWeight: "500"
                }}
              >
                John Don{" "}
              </Text>
            </View>

            <View
              style={{
                borderBottomWidth: 1,
                paddingVertical: 10,
                borderColor: "#dcdcdc",
                flexDirection: "row"
              }}
            >
              <View style={{ width: "50%" }}>
                <Text style={{ color: "#555", fontSize: 14 }}>
                  Expiry Date{" "}
                </Text>
                <View style={{ flexDirection: "row" }}>
                  <Text
                    style={{
                      color: "#224257",
                      fontSize: 15,
                      marginTop: 5,
                      width: 30
                    }}
                  >
                    05
                  </Text>
                  <Text
                    style={{
                      color: "#224257",
                      fontSize: 15,
                      marginTop: 5,
                      width: 30
                    }}
                  >
                    {" "}
                    /
                  </Text>
                  <Text
                    style={{
                      color: "#224257",
                      fontSize: 15,
                      marginTop: 5,
                      width: 30
                    }}
                  >
                    {" "}
                    21
                  </Text>
                </View>
              </View>
              <View
                style={{
                  width: "50%",
                  justifyContent: "space-around",
                  paddingLeft: 25
                }}
              >
                <Text style={{ color: "#555", fontSize: 14 }}> CVV </Text>
                <View style={{ flexDirection: "row" }}>
                  <TouchableOpacity
                    style={{
                      height: 10,
                      marginRight: 5,
                      width: 10,
                      borderRadius: 10,
                      backgroundColor: "#3d3d3d"
                    }}
                  ></TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      height: 10,
                      marginRight: 5,
                      width: 10,
                      borderRadius: 10,
                      backgroundColor: "#3d3d3d"
                    }}
                  ></TouchableOpacity>
                  <TouchableOpacity
                    style={{
                      height: 10,
                      marginRight: 5,
                      width: 10,
                      borderRadius: 10,
                      backgroundColor: "#3d3d3d"
                    }}
                  ></TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          <TouchableOpacity
            style={{
              marginTop: 20,
              marginHorizontal: "5%",
              height: 45,
              width: "90%",
              backgroundColor: "#25acfd",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 5
            }}
            onPress={() => this.props.navigation.navigate("Myaccount")}
          >
            <Text style={{ color: "white", fontSize: 18, fontWeight: "500" }}>
              PAY SECURE
            </Text>
          </TouchableOpacity>
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
