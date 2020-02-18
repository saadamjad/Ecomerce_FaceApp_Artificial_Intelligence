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
import firebase from "react-native-firebase";
export default class Shops extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: [],
      shoes: [],
      Jewellary: []
    };
    // this.props.navigation.addListener("willFocus", this.componentWillFocus);
  }
  // componentWillFocus = async () => {
  //   this.gettingClothes();
  //   this.gettingShoes();
  //   this.gettingJewellary();
  // };
  // componentDidMount() {
  //   this.gettingClothes();
  //   this.gettingShoes();
  //   this.gettingJewellary();
  // }
  // async gettingClothes() {
  //   let data = [];
  //   const inventory = await firebase
  //     .firestore()
  //     .collection("ShopAdmin")
  //     .get();
  //   inventory.docs.map((doc, index) => {
  //     console.log("inventory data", doc);
  //     // console.log(doc._data.businessName +' '+doc._data.typeOfBusiness+' '+doc._data.permission )
  //     if (doc._data.catagory == "Clothes") {
  //       console.log(doc._data.shopName);
  //       data.push(doc);
  //     }
  //   });
  //   console.log();
  //   this.setState({
  //     clothes: data
  //   });
  //   console.log("osama", this.state.clothes);
  // }
  // async gettingShoes() {
  //   console.log("========================================================");
  //   let data = [];
  //   const inventory = await firebase
  //     .firestore()
  //     .collection("ShopAdmin")
  //     .get();
  //   inventory.docs.map((doc, index) => {
  //     if (doc._data.catagory == "Shoes") {
  //       data.push(doc);
  //     }
  //   });
  //   this.setState({
  //     shoes: data
  //   });
  //   console.log("osama shoes", this.state.shoes);
  // }
  // async gettingJewellary() {
  //   console.log("========================================================");
  //   let data = [];
  //   const inventory = await firebase
  //     .firestore()
  //     .collection("ShopAdmin")
  //     .get();
  //   inventory.docs.map((doc, index) => {
  //     if (doc._data.catagory == "Jewellary and accessories") {
  //       data.push(doc);
  //     }
  //   });
  //   console.log(data);
  //   this.setState({
  //     Jewellary: data
  //   });
  // }

  render() {
    return (
      <SafeAreaView style={{ flex: 1, backgroundColor: "#ffff" }}>
        <ScrollView>
          <GlobalHeader
            arrow={true}
            // RedDrawerIcon={true}
            // twoWords
            //  DrawerIcon={true}
            // backgroundColor="white"
            // RightCart={true}
            headingText="Shops"
            navigation={this.props.navigation}
          />
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              marginVertical: 20,
              flexWrap: "wrap",
              backgroundColor: "white",
              alignItems: "center"
            }}
          >
            <TouchableOpacity
              style={{
                elevation: 0,
                // height: 100,
                alignSelf: "center",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 30,
                width: 150,
                borderRadius: 10,
                //  paddingVertical: 10,
                overflow: "hidden",
                shadowColor: "#f3f3f3",
                marginBottom: 17,
                height: 170,

                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 20,

                elevation: 4
              }}
              onPress={() => this.props.navigation.navigate("Catagories")}
            >
              <View style={{ height: "80%", width: "100%", borderWidth: 0 }}>
                <Image
                  source={require("../../assets/images/docter2.jpg")}
                  style={{ width: "100%", height: "90%" }}
                  resizeMode="cover"
                />
              </View>

              <Text
                style={{
                  borderBottomWidth: 1,
                  paddingVertical: 5,
                  height: "20%",
                  borderColor: "black",
                  color: "black"
                }}
              >
                shop 1
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                elevation: 0,
                // height: 100,
                alignSelf: "center",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 30,
                width: 150,
                borderRadius: 10,
                //  paddingVertical: 10,
                overflow: "hidden",
                shadowColor: "#f3f3f3",
                marginBottom: 17,
                height: 170,

                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 20,

                elevation: 4
              }}
              //   onPress={() => this.props.navigation.navigate("SelectCategory")}
            >
              <View style={{ height: "80%", width: "100%", borderWidth: 0 }}>
                <Image
                  source={require("../../assets/images/docter2.jpg")}
                  style={{ width: "100%", height: "90%" }}
                  resizeMode="cover"
                />
              </View>

              <Text
                style={{
                  borderBottomWidth: 1,
                  paddingVertical: 5,
                  height: "20%",
                  borderColor: "black",
                  color: "black"
                }}
              >
                shop 2
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                elevation: 0,
                // height: 100,
                alignSelf: "center",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 30,
                width: 150,
                borderRadius: 10,
                //  paddingVertical: 10,
                overflow: "hidden",
                shadowColor: "#f3f3f3",
                marginBottom: 17,
                height: 170,

                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 20,

                elevation: 4
              }}
              //   onPress={() => this.props.navigation.navigate("SelectCategory")}
            >
              <View style={{ height: "80%", width: "100%", borderWidth: 0 }}>
                {/* <Image
                  source={require("../../assets/images/docter2.jpg")}
                  style={{ width: "100%", height: "110%" }}
                  resizeMode="stretch"
                /> */}
                <Image
                  source={require("../../assets/images/docter3.jpg")}
                  style={{ width: "100%", height: "90%" }}
                  resizeMode="cover"
                />
              </View>

              <Text
                style={{
                  borderBottomWidth: 1,
                  paddingVertical: 5,
                  height: "20%",
                  borderColor: "black",
                  color: "black"
                }}
              >
                shop 2
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                elevation: 0,
                // height: 100,
                alignSelf: "center",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 30,
                width: 150,
                borderRadius: 10,
                //  paddingVertical: 10,
                overflow: "hidden",
                shadowColor: "#f3f3f3",
                marginBottom: 17,
                height: 170,

                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 20,

                elevation: 4
              }}
              //   onPress={() => this.props.navigation.navigate("SelectCategory")}
            >
              <View style={{ height: "80%", width: "100%", borderWidth: 0 }}>
                {/* <Image
                  source={require("../../assets/images/docter2.jpg")}
                  style={{ width: "100%", height: "110%" }}
                  resizeMode="stretch"
                /> */}
                <Image
                  source={require("../../assets/images/docter2.jpg")}
                  style={{ width: "100%", height: "90%" }}
                  resizeMode="cover"
                />
              </View>

              <Text
                style={{
                  borderBottomWidth: 1,
                  paddingVertical: 5,
                  height: "20%",
                  borderColor: "black",
                  color: "black"
                }}
              >
                shop 2
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                elevation: 0,
                // height: 100,
                alignSelf: "center",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 30,
                width: 150,
                borderRadius: 10,
                //  paddingVertical: 10,
                overflow: "hidden",
                shadowColor: "#f3f3f3",
                marginBottom: 17,
                height: 170,

                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 20,

                elevation: 4
              }}
              //   onPress={() => this.props.navigation.navigate("SelectCategory")}
            >
              <View style={{ height: "80%", width: "100%", borderWidth: 0 }}>
                {/* <Image
                  source={require("../../assets/images/docter2.jpg")}
                  style={{ width: "100%", height: "110%" }}
                  resizeMode="stretch"
                /> */}
                <Image
                  source={require("../../assets/images/docter2.jpg")}
                  style={{ width: "100%", height: "90%" }}
                  resizeMode="cover"
                />
              </View>

              <Text
                style={{
                  borderBottomWidth: 1,
                  paddingVertical: 5,
                  height: "20%",
                  borderColor: "black",
                  color: "black"
                }}
              >
                shop 2
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={{
                elevation: 0,
                // height: 100,
                alignSelf: "center",
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
                marginVertical: 30,
                width: 150,
                borderRadius: 10,
                //  paddingVertical: 10,
                overflow: "hidden",
                shadowColor: "#f3f3f3",
                marginBottom: 17,
                height: 170,

                shadowOffset: {
                  width: 0,
                  height: 4
                },
                shadowOpacity: 0.52,
                shadowRadius: 20,

                elevation: 4
              }}
              //   onPress={() => this.props.navigation.navigate("SelectCategory")}
            >
              <View style={{ height: "80%", width: "100%", borderWidth: 0 }}>
                {/* <Image
                  source={require("../../assets/images/docter2.jpg")}
                  style={{ width: "100%", height: "110%" }}
                  resizeMode="stretch"
                /> */}
                <Image
                  source={require("../../assets/images/docter3.jpg")}
                  style={{ width: "100%", height: "90%" }}
                  resizeMode="cover"
                />
              </View>

              <Text
                style={{
                  borderBottomWidth: 1,
                  paddingVertical: 5,
                  height: "20%",
                  borderColor: "black",
                  color: "black"
                }}
              >
                shop 2
              </Text>
            </TouchableOpacity>
          </View>
          {/* <View style={{ height: 50, position: 'absolute', top: 100, width: '93%', backgroundColor: 'white', alignSelf: "center", borderWidth: 1, flexDirection: 'row', borderRadius: 5, elevation: 1, alignItems: "center", borderColor: '#dfdfdf' }}>

                        <View style={{ width: 60, borderRightWidth: 1, height: 30, alignItems: "center", justifyContent: "center", borderColor: '#dfdfdf' }}>
                            <Feather name={"search"} size={17} color={'#7d7d7d'}
                            />
                        </View>

                        <TextInput
                            placeholder="search"
                            style={{ marginLeft: 10, }}
                            placeholderTextColor="#7d7d7d"
                        />



                    </View> */}

          {/* <View style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Shop')} style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('../../assets/images/company.jpg')}
                                    style={{ width: '100%', height: '100%' }}
                                    resizeMode="contain"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </View>
                        <View style={{ width: '31%', marginRight: 5, height: '100%', flex: 1, alignItems: "center" }} >
                            <TouchableOpacity onPress={() => this.props.navigation.navigate('Shop')} style={{ height: 100, elevation: 3, borderWidth: 1, borderColor: '#f6f6f6', width: '100%', alignItems: "center", justifyContent: "center", backgroundColor: 'white', overflow: 'hidden' }}>
                                <Image source={require('../../assets/images/NationalTrust.png')}
                                    style={{ width: '100%', height: '100%' }} resizeMode="contain"
                                />

                            </TouchableOpacity>
                            <Text style={{ fontSize: 11, color: '#999999', marginVertical: 5 }}>Lorem ipsum Lorems</Text>
                        </View> */}
        </ScrollView>
        <View
          style={{
            position: "absolute",
            bottom: 0,
            flex: 1,
            width: "100%"
          }}
        ></View>
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
