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
  Item,
  Label,
  Input,
  Picker,
  ListItem,
  Radio,
  Spinner
} from "native-base";
// import Fontisto from 'react-native-vector-icons/Fontisto'
import {
  Image,
  Platform,
  View,
  KeyboardAvoidingView,
  AsyncStorage,
  TouchableWithoutFeedback,
  ImageBackground
} from "react-native";

import { TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";
import Fontisto from "react-native-vector-icons/Fontisto";
import EvilIcons from "react-native-vector-icons/EvilIcons";
import Feather from "react-native-vector-icons/Feather";
import GlobalHeader from "../components/GlobalHeader";

// import Feather from 'react-native-vector-icons/Feather'
import { ScrollView } from "react-native-gesture-handler";
// import { TouchableOpacity } from 'react-native-gesture-handler';
var num;
export default class Seller extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenDate: new Date(),
      selected2: "",
      email: "",
      password: "",
      isloading: false,
      incorrect: false,
      businessName: "",
      name: "",
      phone: "",
      typeOfBusiness: "",

      email_valid: true
    };
  }

  addShop = () => {
    alert("wait for the admin approval");
    {
      this.props.navigation.navigate("Allshops");
    }
  };

  render() {
    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : null}
        style={{ flex: 1 }}
      >
        <Container contentContainerStyle={{ paddingBottom: 0 }}>
          <Content>
            <GlobalHeader
              arrow={true}
              // RedDrawerIcon={true}
              // twoWords
              // BlueDrawerIcon={true}
              backgroundColor="white"
              // RightCart={true}
              // headingText="Home"
              navigation={this.props.navigation}
            />
            <View
              style={{
                width: "100%",
                height: 70,
                borderWidth: 0,

                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <Image
                source={require("../../assets/images/logo.png")}
                style={{ width: 200, height: 140 }}
              />
            </View>

            <View
              style={{
                // backgroundColor: "red",
                alignSelf: "center",
                alignItems: "center",
                justifyContent: "center",
                // marginBottom: 20,
                // marginHorizontal: "5%",
                width: "90%"
              }}
            >
              <Text style={{ color: "#000000", fontSize: 18, marginTop: 10 }}>
                JOIN AS SELLER
              </Text>

              <Item
                regular
                style={{
                  alignSelf: "center",
                  marginTop: 20,
                  marginLeft: 20,
                  marginVertical: 10,
                  marginHorizontal: 20,
                  borderRadius: 5
                }}
              >
                <Input
                  // onChangeText={text => this.setState({name: text})}
                  value={this.state.name}
                  placeholder="Your Name"
                  style={{ fontSize: 14, marginLeft: 5 }}
                />
                <EvilIcons
                  color={"#000000"}
                  size={20}
                  style={{ marginRight: 10 }}
                  active
                  name="user"
                />
              </Item>
              <Item
                regular
                style={{
                  alignSelf: "center",
                  marginTop: 10,
                  marginLeft: 20,
                  marginVertical: 10,
                  marginHorizontal: 20,
                  borderRadius: 5
                }}
              >
                <Input
                  //  onChangeText={text => this.setState({email: text})}
                  value={this.state.email}
                  placeholder="Email"
                  style={{ fontSize: 14, marginLeft: 5 }}
                />
                <Fontisto
                  color={"#5e5e5e"}
                  size={15}
                  style={{ marginRight: 10 }}
                  active
                  name="email"
                />
              </Item>

              <Item
                regular
                style={{
                  alignSelf: "center",
                  marginTop: 10,
                  marginLeft: 20,
                  marginVertical: 10,
                  marginHorizontal: 20,
                  borderRadius: 5
                }}
              >
                <Input
                  // onChangeText={text => this.setState({businessName: text})}
                  value={this.state.businessName}
                  placeholder="Shop Name"
                  style={{ fontSize: 14, marginLeft: 5 }}
                />
                <Feather
                  color={"#5e5e5e"}
                  size={16}
                  style={{ marginRight: 10 }}
                  active
                  name="briefcase"
                />
              </Item>
              <Item
                regular
                style={{
                  alignSelf: "center",
                  marginTop: 10,
                  marginLeft: 20,
                  marginVertical: 10,
                  marginHorizontal: 20,
                  borderRadius: 5
                }}
              >
                <Input
                  //  onChangeText={text => this.setState({phone: text})}
                  value={this.state.phone}
                  placeholder="Phone Number"
                  style={{ fontSize: 14, marginLeft: 5 }}
                />
                <Feather
                  color={"#5e5e5e"}
                  size={16}
                  style={{ marginRight: 10 }}
                  active
                  name="phone"
                />
              </Item>
              <Item
                regular
                style={{
                  width: "88%",
                  alignSelf: "center",
                  marginTop: 10,
                  marginLeft: 20,
                  marginVertical: 10,
                  marginHorizontal: 20,
                  borderRadius: 5,
                  paddingRight: 10,
                  paddingLeft: 5
                }}
              >
                {/* <Picker
                  mode="dropdown"
                  iosIcon={<Icon name="arrow-down" />}
                  // style={{ width: undefined }}

                  placeholder="Select Shop Type"
                  //  placeholderStyle={{ color: "#5e5e5e" }}

                  // placeholderIconColor="#555"
                  selectedValue={this.state.selected2}
                  onValueChange={this.onValueChange2.bind(this)}>
                  <Picker.Item label="Select category" value="Clothes" />
                  <Picker.Item label="Clothes" value="Clothes" />
                  <Picker.Item label="Shoes" value="Shoes" />
                  <Picker.Item
                    label="Jewellary and accessories"
                    value="Jewellary and accessories"
                  />
                </Picker> */}
              </Item>
              <Button
                disabled={this.state.isloading == true ? true : false}
                onPress={() => this.addShop()}
                full
                style={{
                  // backgroundColor: "#000000",
                  // width: "100%",
                  // alignSelf: "center",
                  // // top: 27,
                  // // position: "relative",
                  // // paddingHorizontal: 90,
                  // // borderRadius: 20,
                  // alignItems: "center"
                  // marginTop: 0,
                  paddingVertical: 14,
                  backgroundColor: "#000000",
                  borderRadius: 40,
                  width: "85%",
                  alignSelf: "center",
                  alignItems: "center"
                }}
                backgroundColor={"#25acfd"}
              >
                {this.state.isloading == true ? (
                  <Spinner color={"white"} />
                ) : (
                  <Text
                    style={{
                      color: "white",
                      fontSize: 18,
                      //  alignSelf: "center",
                      textAlign: "center"
                    }}
                  >
                    Join
                  </Text>
                )}
              </Button>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  paddingVertical: 10
                }}
              >
                <Text
                  style={{
                    alignSelf: "center",
                    color: "#555",
                    //marginTop: -70,
                    fontSize: 13,

                    paddingBottom: 5
                  }}
                >
                  ______
                </Text>
                <Text
                  style={{
                    alignSelf: "center",
                    color: "#555",
                    //marginTop: -70,
                    fontSize: 13,
                    marginHorizontal: 10
                  }}
                >
                  Link Business
                </Text>
                <Text
                  style={{
                    alignSelf: "center",
                    color: "#555",
                    //marginTop: -70,
                    fontSize: 13,

                    paddingBottom: 5
                  }}
                >
                  ______
                </Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignSelf: "center",
                  marginBottom: 15
                }}
              >
                <Image
                  source={require("../../assets/images/facebook.png")}
                  style={{ height: 30, width: 30 }}
                />
                <Image
                  source={require("../../assets/images/googleplus.png")}
                  style={{
                    height: 30,
                    width: 30,
                    alignSelf: "center",
                    marginLeft: 10
                  }}
                />
              </View>
            </View>
          </Content>
        </Container>
      </KeyboardAvoidingView>
    );
  }
}
