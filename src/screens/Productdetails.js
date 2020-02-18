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
import GlobalHeader from "../components/GlobalHeader";

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
          contentContainerStyle={{ flexGrow: 1 }}
          showsVerticalScrollIndicator={false}
        >
          <GlobalHeader
            arrow={true}
            // RedDrawerIcon={true}
            // twoWords
            BlueDrawerIcon={true}
            // backgroundColor="white"
            RightCart={true}
            headingText="product details"
            navigation={this.props.navigation}
          />
          <View
            style={{
              width: "100%",
              flex: 1
            }}
          >
            {/* Small picture View */}

            <TouchableOpacity
              style={{
                // paddingVertical: 20,
                width: "100%",

                backgroundColor: "white",
                shadowColor: "#000",
                // marginVertical: 10,
                shadowOffset: {
                  width: 0,
                  height: 3
                },
                shadowOpacity: 0.29,
                shadowRadius: 4.65,

                elevation: 7
              }}
              onPress={() => this.props.navigation.navigate("Productdetails")}
            >
              <View style={{ height: 250, borderWidth: 0 }}>
                <Image
                  source={require("./../../assets/images/docter2.jpg")}
                  style={{ height: "100%", width: "100%" }}
                  resizeMode="cover"
                />
              </View>

              <View style={{ paddingHorizontal: 5, paddingVertical: 10 }}>
                <View>
                  <Text
                    style={{
                      fontWeight: "bold",
                      color: "#25acfd",
                      fontSize: 15
                    }}
                  >
                    Woonder Skin Care
                  </Text>
                  <Text
                    style={{
                      fontWeight: "100",
                      color: "#7b7b7b",
                      fontSize: 16
                    }}
                  >
                    Profuct Info in 1 line
                  </Text>
                </View>
                <View style={{ flexDirection: "row" }}>
                  <View style={{ width: "70%" }}>
                    <Text style={{ color: "#2b3b48", fontSize: 15 }}>
                      5 Star
                    </Text>
                  </View>

                  <View style={{}}>
                    <Text
                      style={{
                        textAlign: "right",
                        //marginLeft: 5,
                        color: "black"
                      }}
                    >
                      Rs:{" "}
                      <Text
                        style={{
                          fontWeight: "bold",
                          color: "#25acfd"
                        }}
                      >
                        170${" "}
                      </Text>
                      <Text
                        style={{
                          //marginLeft: 10,
                          // fontWeight: "bold",
                          color: "red",
                          textDecorationLine: "line-through"
                        }}
                      >
                        170$
                      </Text>
                    </Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>

            <View style={{ paddingHorizontal: 5, paddingVertical: 10 }}>
              <Text
                style={{ fontWeight: "bold", fontSize: 20, color: "black" }}
              >
                Product Feature
              </Text>
              <Text style={{ fontSize: 15, color: "black" }}>
                Product Feature
              </Text>
              <Text style={{ fontSize: 10, color: "black" }}>
                Product Gredients
              </Text>
              <View style={{ alignSelf: "center" }}>
                <Text style={{ color: "#7e7e7e", fontSize: 13 }}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries,
                </Text>
              </View>
            </View>

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
              onPress={() => this.props.navigation.navigate("Addtocart")}
            >
              <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
                Go to cart
              </Text>
            </TouchableOpacity>
          </View>
          {/* <Footer1 index={1} navigation={this.props.navigation} /> */}
        </ScrollView>
      </SafeAreaView>
    );
  }
}
