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
import { Header, Body, Left, Right, Content, Container } from "native-base";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import GlobalHeader from "../components/GlobalHeader";
import ImagePicker from "react-native-image-picker";
// import Footer1 from './../../components/Footer';

import Feather from "react-native-vector-icons/Feather";
import firebase from "react-native-firebase";
export default class AllProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      myTeam: [
        {
          name: "Alex",

          price: "900",
          description: "Ceo",
          image: require("../../assets/images/s1.jpeg")
        },

        {
          image: require("../../assets/images/S2.jpeg"),
          name: "Rosmeary ",

          price: "960",
          description: "manager"
        },

        {
          image: require("../../assets/images/S3.jpeg"),
          name: "zufiya",

          price: "100",
          description: "analysist"
        }
      ]
    };
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#f0f0f0" }}>
        {/* <ScrollView style={{ flex: 1, backgroundColor: "#f0f0f0" }}> */}
        <GlobalHeader
          arrow={true}
          headingText="My Team"
          navigation={this.props.navigation}
        />

        {this.state.myTeam.map((data, i) => {
          return (
            <View
              style={{
                width: "100%",
                // paddingVertical: 20,
                flexDirection: "row",
                //   alignItems: "center",
                justifyContent: "center",
                // borderWidth: 1,
                marginVertical: 10,
                height: 100
              }}
            >
              <View
                style={{
                  width: "30%",
                  //   borderWidth: 1,
                  alignItems: "center",
                  justifyContent: "center"
                }}
              >
                <View
                  style={{
                    width: 70,
                    height: 70,
                    borderRadius: 70,
                    overflow: "hidden"
                  }}
                >
                  <Image
                    source={data.image}
                    style={{
                      height: "100%",
                      width: "100%",
                      borderRadius: 50
                    }}
                    resizeMode="stretch"
                  />
                </View>
              </View>
              <View
                style={{
                  //   alignItems: "center",
                  justifyContent: "center",
                  //   borderWidth: 1,
                  width: "50%"
                }}
              >
                <Text style={{ fontSize: 20 }}> {data.name} </Text>
                <Text style={{ color: "#9890a5" }}> {data.description} </Text>
              </View>
            </View>
          );
        })}

        {/* </ImageBackground> */}
        {/* </ScrollView> */}
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
