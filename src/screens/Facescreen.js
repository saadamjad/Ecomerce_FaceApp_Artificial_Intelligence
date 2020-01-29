/* @flow */

import React, { Component } from "react";
import {
  Container,
  Header,
  Title,
  Content,
  Footer,
  FooterTab,
  Button,
  Left,
  Right,
  Body,
  Icon,
  Text,
  Form,
  Item,
  Label,
  Input,
  Picker,
  ListItem,
  Radio,
  Spinner,
  CheckBox
} from "native-base";
// import Fontisto from "react-native-vector-icons/Fontisto";
import {
  Image,
  Platform,
  View,
  KeyboardAvoidingView,
  AsyncStorage,
  Alert,
  ImageBackground
} from "react-native";

import { TouchableOpacity } from "react-native";
import Fontisto from "react-native-vector-icons/Fontisto";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import ImagePicker from "react-native-image-picker";

import { ScrollView } from "react-native-gesture-handler";
// import { TouchableOpacity } from 'react-native-gesture-handler';
export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Values: [
        {
          percent: "",
          name: "All",
          borderColor: "#c25777",
          backgroundColor: "#eaaac2",
          Icon: true
        },
        {
          percent: "10",
          name: "Acqnie",
          borderColor: "#33889f"
        },
        {
          percent: "500",
          name: "Winkles",
          borderColor: "#7bbd6f"
        },
        {
          percent: "80",
          name: "Texture",
          borderColor: "#6c458b"
        },
        {
          percent: "90",
          name: "Spots",
          borderColor: "blue"
        }
      ],
      avatarSource: []
    };
  }

  render() {
    const options = {
      title: "Select Avatar",
      customButtons: [{ name: "fb", title: "Choose Photo from Facebook" }],
      storageOptions: {
        skipBackup: true,
        path: "images"
      }
    };
    return (
      <View style={{ flex: 1 }}>
        <ImageBackground
          source={
            this.state.avatarSource.length == ""
              ? require("../../assets/images/dummy.jpeg")
              : this.state.avatarSource
          }
          //   source={'../../src/ass'}
          style={{ width: "100%", height: "100%" }}
        >
          <View
            style={{
              //  height: 200,
              width: "100%",
              position: "absolute",
              bottom: 0,
              paddingLeft: 0
              //   borderWidth: 1
            }}
          >
            <Text style={{ fontSize: 15, marginLeft: 15 }}>
              {" "}
              skin health
              <Text style={{ fontSize: 25, fontWeight: "300", color: "white" }}>
                {" "}
                90
              </Text>
            </Text>
            <Text style={{ fontSize: 15, marginLeft: 15 }}>
              {" "}
              skin Age
              <Text style={{ fontSize: 25, fontWeight: "300", color: "white" }}>
                {"  "}
                25
              </Text>
            </Text>
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                borderRadius: 120,
                backgroundColor: "white",
                overflow: "hidden",
                justifyContent: "center",
                alignItems: "center",
                alignSelf: "center"
              }}
              onPress={() => {
                ImagePicker.launchCamera(options, response => {
                  console.log("Response = ", response);

                  if (response.didCancel) {
                    console.log("User cancelled image picker");
                  } else if (response.error) {
                    console.log("ImagePicker Error: ", response.error);
                  } else if (response.customButton) {
                    console.log(
                      "User tapped custom button: ",
                      response.customButton
                    );
                  } else {
                    const source = { uri: response.uri };

                    // You can also display the image using data:
                    // const source = { uri: 'data:image/jpeg;base64,' + response.data };

                    this.setState({
                      avatarSource: source
                    });
                  }
                });
              }}
            >
              <FontAwesome5 name="camera" size={25} color={"#33d0a6"} />
            </TouchableOpacity>

            <ScrollView
              horizontal={true}
              style={{ height: 100, borderWidth: 0, paddingVertical: 10 }}
              showsHorizontalScrollIndicator={false}
            >
              {this.state.Values.map((item, i) => {
                return (
                  <View
                    style={{
                      width: 80,
                      //   height: 40,
                      borderWidth: 0,
                      alignItems: "center"
                    }}
                  >
                    <View
                      style={{
                        height: 60,
                        width: 60,
                        borderRadius: 60,
                        borderWidth: 3.4,
                        borderColor: item.borderColor,
                        justifyContent: "center",
                        alignItems: "center",
                        backgroundColor: item.backgroundColor
                      }}
                    >
                      {item.Icon ? (
                        <FontAwesome5
                          name={"skull"}
                          color={"white"}
                          size={35}
                          style={{
                            alignSelf: "center",
                            marginTop: 30,
                            justifyContent: "center"
                          }}
                        />
                      ) : null}

                      <Text style={{ fontSize: 20, color: "white" }}>
                        {" "}
                        {item.percent}{" "}
                      </Text>
                    </View>
                    <Text style={{ color: "white" }}>{item.name} </Text>
                  </View>
                );
              })}
            </ScrollView>

            <TouchableOpacity
              style={{
                color: "white",
                fontSize: 15,
                backgroundColor: "#49ccc4",
                paddingVertical: 10,
                borderRadius: 5,
                alignItems: "center",
                justifyContent: "center",
                width: "80%",
                alignSelf: "center",
                flexDirection: "row",
                marginVertical: 10
              }}
              onPress={() => this.props.navigation.navigate("Allproducts")}
            >
              <Fontisto name={"date"} color={"white"} size={15} />
              <Text
                style={{
                  color: "white",
                  fontSize: 18,
                  backgroundColor: "#49ccc4",
                  marginLeft: 13
                }}
              >
                check my skin Dairy{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      </View>
    );
  }
}
