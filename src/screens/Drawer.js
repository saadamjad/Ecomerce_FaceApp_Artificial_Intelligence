import React from "react";
import { createDrawerNavigator } from "react-navigation-drawer";

import {
  Dimensions,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image
} from "react-native";
import LinearGradient from "react-native-linear-gradient";
// import Switch from "../Components/Switch";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";

import JoinAsSeller from "./JoinasSeller";
import Allproduct from "./Allproducts";
import Home from "./Home";
import Cart from "./Addtocart";

import Allshops from "./Allshops";
import Orderhistory from "./Checkout";
import { ceil } from "react-native-reanimated";
// import BottomTabNavigator from "./JoinasSeller";
// import More from "./JoinasSeller";
// import CustomerSupport from "./JoinasSeller";
// import AllProduct from "./Allproducts";

const WIDTH = Dimensions.get("window").width;

const DrawerConfig = {
  drawerWidth: WIDTH * 0.73,
  contentComponent: ({ navigation }) => {
    return <MenuDrawer navigation={navigation} />;
  },
  drawerPosition: "right"
};

export default createDrawerNavigator(
  {
    products: {
      screen: Allproduct
    },
    Join: {
      screen: JoinAsSeller
    },

    Cart: {
      screen: Cart
    },
    Home: {
      screen: Home
    },
    shops: {
      screen: Allshops
    },

    Orderhistory: {
      screen: Orderhistory
    }
  },

  DrawerConfig
);

class MenuDrawer extends React.Component {
  state = {
    switchValue: true
  };
  render() {
    return (
      <View style={styles.container}>
        <LinearGradient
          start={{ x: 0, y: 2 }}
          end={{ x: 0, y: 0 }}
          colors={["#25acfd", "#25acfd"]}
          style={{ height: "100%" }}
        >
          <View
            style={{
              height: 170,

              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <TouchableOpacity
              style={{
                width: 50,
                height: 50,
                alignSelf: "center",
                justifyContent: "center",
                borderRadius: 50,
                borderWidth: 0.5,
                borderColor: "#dcdcdc"
              }}
            >
              {/* <Image
              source={require("../../assets/images/dummyimg(2).png")}
              style={{
                width: "100%",
                height: "100%"
              }}
              resizeMode="contain"
            /> */}
            </TouchableOpacity>

            <Text style={{ fontSize: 19, color: "white", marginTop: 10 }}>
              Peter Malark
            </Text>
            <Text
              style={{ fontSize: 13, color: "white", marginTop: 10 }}
              onPress={() => this.props.navigation.navigate("Home")}
            >
              info@admin.com{" "}
            </Text>

            <View
              style={{
                height: 50,
                width: 50,
                // borderWidth: 1,
                position: "absolute",
                right: 10,
                top: 20,
                alignItems: "center",
                justifyContent: "center"
              }}
            >
              <SimpleLineIcons name="note" size={30} />
            </View>
          </View>

          <View style={{ backgroundColor: "white", height: "100%" }}>
            {/* <TouchableOpacity
            style={styles.ContentView}
            style={styles.ContentView}
            onPress={() => {
              this.props.navigation.navigate("Home");
            }}
          >
            <View style={styles.ContentViewInside1}>
              <Image
                source={require("../../assets/images/acount_blue.png")}
                style={{
                  width: "40%",
                  height: "40%",
                  marginLeft: 5
                }}
                resizeMode="contain"
              />
            </View>

            <View style={styles.ContentViewInside2}>
              <Text style={styles.ContentViewText}>Home</Text>
            </View>
          </TouchableOpacity>
     */}

            <TouchableOpacity
              style={styles.ContentView}
              style={styles.ContentView}
              onPress={() => {
                this.props.navigation.navigate("products");
              }}
            >
              <View style={styles.ContentViewInside1}>
                <Image
                  source={require("../../assets/images/acount_blue.png")}
                  style={{
                    width: "40%",
                    height: "40%",
                    marginLeft: 5
                  }}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.ContentViewInside2}>
                <Text style={styles.ContentViewText}>Products</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ContentView}
              style={styles.ContentView}
              onPress={() => {
                this.props.navigation.navigate("Cart");
              }}
            >
              <View style={styles.ContentViewInside1}>
                <Image
                  source={require("../../assets/images/acount_blue.png")}
                  style={{
                    width: "40%",
                    height: "40%",
                    marginLeft: 5
                  }}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.ContentViewInside2}>
                <Text style={styles.ContentViewText}>Cart</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ContentView}
              style={styles.ContentView}
              onPress={() => {
                this.props.navigation.navigate("Join");
              }}
            >
              <View style={styles.ContentViewInside1}>
                <Image
                  source={require("../../assets/images/acount_blue.png")}
                  style={{
                    width: "40%",
                    height: "40%",
                    marginLeft: 5
                  }}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.ContentViewInside2}>
                <Text style={styles.ContentViewText}>Join As seller</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ContentView}
              style={styles.ContentView}
              onPress={() => {
                this.props.navigation.navigate("shops");
              }}
            >
              <View style={styles.ContentViewInside1}>
                <Image
                  source={require("../../assets/images/acount_blue.png")}
                  style={{
                    width: "40%",
                    height: "40%",
                    marginLeft: 5
                  }}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.ContentViewInside2}>
                <Text style={styles.ContentViewText}> All shops </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.ContentView}
              style={styles.ContentView}
              onPress={() => {
                this.props.navigation.navigate("Orderhistory");
              }}
            >
              <View style={styles.ContentViewInside1}>
                <Image
                  source={require("../../assets/images/acount_blue.png")}
                  style={{
                    width: "40%",
                    height: "40%",
                    marginLeft: 5
                  }}
                  resizeMode="contain"
                />
              </View>

              <View style={styles.ContentViewInside2}>
                <Text style={styles.ContentViewText}>order history</Text>
              </View>
            </TouchableOpacity>
          </View>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1eabff"
  },
  View1: {
    height: 170,
    width: "100%",
    borderWidth: 1,
    flexDirection: "row"

    // backgroundColor: "#1eabff"
  },
  ProfilePic: {
    height: "100%",
    // borderRadius: 100,
    paddingRight: 5,

    borderWidth: 0,
    borderColor: "#575757",
    width: "45%",
    alignItems: "flex-end",
    justifyContent: "center"
  },
  ContentView: {
    paddingLeft: 15,
    height: 50,
    flexDirection: "row",
    width: "100%"
  },
  ContentViewInside1: {
    width: "15%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#575757"
  },
  ContentViewInside2: {
    paddingLeft: 0,
    width: "85%",
    borderBottomWidth: 1,
    borderBottomColor: "#575757",
    justifyContent: "center"
  },
  ContentViewText: {
    color: "black",
    fontSize: 12
  },
  Notification: {
    paddingLeft: 15,
    height: 50,
    flexDirection: "row",
    width: "100%"
  },
  NotificationInside1: {
    width: "15%",
    justifyContent: "center",
    borderBottomWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#575757"
  },
  NotificationInside2: {
    paddingLeft: 0,
    width: "60%",
    borderBottomWidth: 1,
    borderBottomColor: "#575757",
    justifyContent: "center"
  },
  NotificationInside3: {
    width: "25%",
    justifyContent: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#575757"
  }
});
