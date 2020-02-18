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
import GlobalHeader from "../components/GlobalHeader";

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
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
        <ScrollView>
          <GlobalHeader
            arrow={true}
            //  RedDrawerIcon={true}
            //twoWords
            //BlueDrawerIcon={true}
            // backgroundColor="white"
            RightDrawer={true}
            //RightCart={true}
            headingText="Home"
            navigation={this.props.navigation}
          />
          <View
            style={{
              // padding: 10,
              alignItems: "center",
              paddingBottom: 60
            }}
          >
            {this.state.Images.map((data, i) => {
              return (
                <TouchableOpacity
                  style={{
                    // paddingVertical: 20,
                    width: "92%",
                    alignSelf: "center",
                    backgroundColor: "white",
                    shadowColor: "#000",
                    marginVertical: 10,
                    shadowOffset: {
                      width: 0,
                      height: 3
                    },
                    shadowOpacity: 0.29,
                    shadowRadius: 4.65,

                    elevation: 7
                  }}
                  onPress={() =>
                    this.props.navigation.navigate("Productdetails")
                  }
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
              );
            })}
          </View>
        </ScrollView>
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
