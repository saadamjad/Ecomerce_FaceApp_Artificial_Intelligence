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
      clothes: [],
      shoes: [],
      Jewellary: [],
      Images: [
        {
          name: "hyadralic Acid",

          price: "900",
          description: "hyderating",
          image: require("../../assets/images/s1.jpeg")
        },

        {
          image: require("../../assets/images/S2.jpeg"),
          name: "Rosmeary ",

          price: "960",
          description: "oil ragulator"
        },

        {
          image: require("../../assets/images/S3.jpeg"),
          name: "Green Tea",

          price: "100",
          description: "Acne"
        },

        {
          image: require("../../assets/images/s4.jpeg"),
          name: "Collagen",

          price: "600",
          description: "firm"
        },

        {
          image: require("../../assets/images/s5.jpeg"),
          name: "Kazdu Root",

          price: "700",
          description: "sensitive"
        },

        {
          image: require("../../assets/images/s1.jpeg"),
          name: "hyadralic Acid",

          price: "900",
          description: "hyderating"
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
          //  RedDrawerIcon={true}
          //twoWords
          //BlueDrawerIcon={true}
          // backgroundColor="white"
          RightDrawer={true}
          //RightCart={true}
          headingText="Face history"
          navigation={this.props.navigation}
        />
        {/* <ImageBackground
          source={require("../../assets/images/background.png")}
          //   source={'../../src/ass'}
          style={{
            width: "100%",
            height: "100%",
            backgroundColor: "red",
            flex: 1
          }}
        > */}
        <View
          style={{
            height: 400
            //   borderWidth: 1
          }}
        >
          <Container>
            <Content>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  flexWrap: "wrap",
                  overflow: "hidden"
                }}
              >
                {this.state.Images.map((data, i) => {
                  return (
                    <View
                      style={{
                        height: 200,
                        borderWidth: 1,
                        width: "40%",
                        margin: 10,
                        borderColor: "#9890a5"
                      }}
                    >
                      <Image
                        source={data.image}
                        //   source={'../../src/ass'}
                        style={{
                          width: "100%",
                          height: "100%"
                        }}
                        resizeMode="stretch"
                      />
                    </View>
                  );
                })}
              </View>
            </Content>
          </Container>
        </View>

        <TouchableOpacity
          style={{
            height: 47,
            borderRadius: 2,
            width: "100%",
            backgroundColor: "#25acfd",
            justifyContent: "center",
            alignItems: "center",
            marginVertical: 5
          }}
          onPress={() => this.props.navigation.navigate("Addtocart")}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
            skin stats
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            height: 47,
            borderRadius: 2,
            marginVertical: 5,
            width: "100%",
            backgroundColor: "#25acfd",
            justifyContent: "center",
            alignItems: "center"
            // position: "absolute",
            // bottom: 0
          }}
          onPress={() => this.props.navigation.navigate("ImprovmentHistory")}
        >
          <Text style={{ color: "white", fontSize: 15, fontWeight: "500" }}>
            improvement report
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 47,
            borderRadius: 2,
            marginVertical: 5,
            width: "100%",
            backgroundColor: "white",
            justifyContent: "center",
            alignItems: "center",
            //   position: "absolute",
            //   right: 0,
            //   bottom: 0,
            flexDirection: "row"
          }}
          onPress={() => {
            ImagePicker.launchCamera(response => {
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
          <Text
            style={{
              color: "black",
              fontSize: 15,
              fontWeight: "500",
              margin: 10
            }}
          >
            add new
          </Text>
        </TouchableOpacity>
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
