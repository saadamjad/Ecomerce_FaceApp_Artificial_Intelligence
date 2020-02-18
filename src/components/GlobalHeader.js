import React, { Component } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions
} from "react-native";

import { Header, Body, Left, Right } from "native-base";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import AntDesign from "react-native-vector-icons/AntDesign";

import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// import { bindActionCreators } from "redux";
// import * as reduxActions from "../redux/actions/actions";
// import { connect } from "react-redux";
// import Modal from "react-native-modal";
// import DrawerView from "./DrawerView";
export default class GlobalHeader extends Component {
  state = {
    visible: false
  };
  hideDrawer = () => {
    this.setState({ visible: false });
  };
  render() {
    const deviceWidth = Dimensions.get("window").width;
    const deviceHeight = Dimensions.get("window").height;

    return (
      // <GloabalHeader
      // // arrow={true}
      // // RedDrawerIcon={true}
      // // twoWords
      // BlueDrawerIcon={true}
      // backgroundColor="white"
      // RightCart={true}
      // headingText="Home"

      // />
      <Header
        style={{
          backgroundColor: this.props.backgroundColor
            ? this.props.backgroundColor
            : "#25acfd",
          elevation: this.props.elevation
        }}
      >
        <Left style={{ flex: 1 }}>
          <TouchableOpacity
            style={{
              width: "20%",
              height: "100%",
              justifyContent: "center",
              alignItems: "center",
              marginLeft: 10
            }}
            onPress={() => this.props.navigation.goBack()}
          >
            {this.props.arrow === true ? (
              <View style={styles.arrowView}>
                <FontAwesome
                  name={"chevron-left"}
                  size={this.props.Arrowsize ? this.props.Arrowsize : 20}
                  color={
                    this.props.arrowcolor ? this.props.arrowcolor : "white"
                  }
                />
              </View>
            ) : null}
          </TouchableOpacity>
        </Left>

        <Body
          style={
            this.props.twoWords === 1
              ? { flex: 2, alignItems: "center" }
              : { flex: 2, alignItems: "center" }
          }
        >
          {this.props.headingText !== "" ? (
            <Text numberOfLines={1} style={{ color: "white", fontSize: 17 }}>
              {this.props.headingText}
            </Text>
          ) : null}
        </Body>

        <Right
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
            // borderWidth: 1
          }}
        >
          {this.props.RightCart == true ? (
            <TouchableOpacity
              style={{
                // borderWidth: 1,
                width: "100%",
                // height: "100%",
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <AntDesign name="shoppingcart" size={25} color={"white"} />
              <View
                style={{
                  position: "absolute",
                  backgroundColor: "red",
                  right: 21,
                  top: -7,
                  height: 16,
                  width: 16,
                  borderRadius: 16,
                  alignItems: "center",
                  justifyContent: "center"
                  // borderWidth: 1
                }}
              >
                <Text style={{ color: "red", color: "white", fontSize: 10 }}>
                  1
                </Text>
              </View>
            </TouchableOpacity>
          ) : this.props.RightDrawer === true ? (
            <TouchableOpacity
              style={styles.arrowView}
              // onPress={() => this.setState({ visible: true })}
              // onPress={() => this.props.navigation.navigate("DrawerOpen")}
              onPress={() => this.props.navigation.toggleDrawer()}
            >
              <MaterialIcons name="view-headline" size={27} color={"white"} />
            </TouchableOpacity>
          ) : null}
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  avatarImage: {
    width: 40,
    height: 40,
    alignSelf: "flex-end",
    borderRadius: 40,
    alignItems: "center",
    justifyContent: "center",
    // overflow: "hidden",
    backgroundColor: "red"
  },
  arrowView: {
    width: 35,
    height: 35,
    borderRadius: 35,

    justifyContent: "center",
    alignItems: "center"
  },
  searchImage: {
    width: 20,
    height: 20,
    tintColor: "white",
    alignSelf: "flex-end"
  },
  Text: {
    fontSize: 17,
    fontWeight: "bold"
  }
});
