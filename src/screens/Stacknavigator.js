import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import Home from "./Home";
import Login from "./Login";
import Signup from "./Signup";
import Face from "./Facescreen";
import Productdetails from "./Productdetails";
import Checkout from "./Checkout";
import Addtocart from "./Addtocart";
import Allproducts from "./Allproducts";
import Allshops from "./Allshops";
import Joinasseller from "./JoinasSeller";
import Myaccount from "./Myaccount";
import Drawer from "./Drawer";
import splash from "./Splashscreen";
import FaceHisotry from "./FaceHisotry";
import ImprovmentHistory from "./ImprovementReport";
import MyTeam from "./MyTeam";

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: () => ({
        header: null
      })
    },
    MyTeam: {
      screen: MyTeam,
      navigationOptions: () => ({
        header: null
      })
    },
    Drawer: {
      screen: Drawer,
      navigationOptions: () => ({
        header: null
      })
    },
    Login: {
      screen: Login,
      navigationOptions: () => ({
        header: null
      })
    },
    Signup: {
      screen: Signup,
      navigationOptions: () => ({
        header: null
      })
    },
    Face: {
      screen: Face,
      navigationOptions: () => ({
        header: null
      })
    },
    Productdetails: {
      screen: Productdetails,
      navigationOptions: () => ({
        header: null
      })
    },
    Checkout: {
      screen: Checkout,
      navigationOptions: () => ({
        header: null
      })
    },
    Addtocart: {
      screen: Addtocart,
      navigationOptions: () => ({
        header: null
      })
    },
    Allproducts: {
      screen: Allproducts,
      navigationOptions: () => ({
        header: null
      })
    },
    Allshops: {
      screen: Allshops,
      navigationOptions: () => ({
        header: null
      })
    },
    Joinasseller: {
      screen: Joinasseller,
      navigationOptions: () => ({
        header: null
      })
    },
    Myaccount: {
      screen: Myaccount,
      navigationOptions: () => ({
        header: null
      })
    },
    splash: {
      screen: splash,
      navigationOptions: () => ({
        header: null
      })
    },
    FaceHisotry: {
      screen: FaceHisotry,
      navigationOptions: () => ({
        header: null
      })
    },
    ImprovmentHistory: {
      screen: ImprovmentHistory,
      navigationOptions: () => ({
        header: null
      })
    }
  },
  {
    initialRouteName: "splash"
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}
