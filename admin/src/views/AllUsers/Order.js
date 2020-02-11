import React, { Component, lazy, Suspense } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import {
  Badge,
  Button,
  ButtonDropdown,
  ButtonGroup,
  ButtonToolbar,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardTitle,
  Col,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Progress,
  Row,
  Table,
} from 'reactstrap';
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import "firebase/firestore"
// import { isThisSecond } from 'date-fns';
let shopList=[]
if (!firebase.apps.length) {
  var app = firebase.initializeApp({     
    apiKey: "AIzaSyCjd8XruNDYbulayi6G4DSWGHSRwt6yz9g",
    authDomain: "amarseller-308a3.firebaseapp.com",
    databaseURL: "https://amarseller-308a3.firebaseio.com",
    projectId: "amarseller-308a3",
    storageBucket: "amarseller-308a3.appspot.com",
    messagingSenderId: "872088000028",
    appId: "1:872088000028:web:de0e3460fb77447ac031d9",
    measurementId: "G-KY5H5828PE"
 
 });
}

class Orders extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.approved = this.approved.bind(this);
    this.reject = this.reject.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      shopList:[],
      radioSelected: 2,
    };
  }
  makeList=async(id)=>{
    console.log(id)
    shopList=[]
     var  data= await firebase
      .firestore().collection("User").doc(id.toString())
      .onSnapshot(function(doc) {

          console.log(doc.data());
          shopList.push({
            shopName :doc.id,
            id:doc.username,
            location:doc.data().phone,
            
          })
          
      });
      console.log(data)
  }
  approved=async(id)=>{
    console.log(id)
    firebase.firestore().collection("Shop").doc(id).update({
      "permission":"true"
    })
    this.componentDidMount()
  }
  reject=async(id)=>{
    console.log(id)
    firebase.firestore().collection("Shop").doc(id).update({
      "permission":"false"
    })
    
    this.componentDidMount()
  }
componentDidMount =async()=>{
    let data = [];
    const inventory = await firebase
      .firestore()
      .collection("AllOrders")
      .get();
    inventory.docs.map((doc, index) => {
    //   console.log(doc._data.businessName +' '+doc._data.typeOfBusiness+' '+doc._data.permission )
      console.log(doc.data())
      data.push(doc);
    });
  
    this.setState({
      orders: data
    });
}
  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  }

  onRadioBtnClick(radioSelected) {
    this.setState({
      radioSelected: radioSelected,
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
// console.log(this.state.shopList)
    return (
      <div className="animated fadeIn">
       


        <Row> 
      <Col>
            <Card>
              <CardHeader>
               Shop Requests
              </CardHeader>
              <CardBody>
               
              
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    {/* <th className="text-center"><i className="icon-people"></i></th> */}
                    <th>Sno.</th>
                    <th>Order No</th>
                    <th>User Email</th>
                    {/* <th>Time</th> */}
                    <th>Product Name</th>
                    <th>Total Price</th>
                    {/* <th>Add</th> */}
                    {/* <th className="text-center">Status</th>
                    <th>Time</th> */}
                  </tr>
                  </thead>
                  <tbody>
                 
                  {this.state.orders&&this.state.orders.map((orders, index) =>
                       <tr>
                          <th scope="row"><Link to={'/orders/'+orders.id}>{index}</Link></th>
                          <th scope="row"><Link to={'/orders/'+orders.id}>{orders.data().products!=null&&orders.data().products[0].Orderno}</Link></th>
                          <th scope="row">{orders.data().data}</th>
                          {/* <th scope="row">{orders.data().time}</th> */}
                      <th scope="row">{orders.data().products!=null&&orders.data().products[0].Name}</th>
                      <th scope="row">{orders.data().products!=null&&orders.data().products[0].price+' OMR'}</th>
                      {/* <td>
                        {orders.data().product}
                       </td> */}
                  
                      <td>
                      {/* <Button color="success" onClick={() =>this.props.history.push('/addshop')}>Add Shop</Button>{' '} */}
                      {/* <Button color="danger" onClick={() =>this.reject(shopList.id)}>Reject</Button>{' '} */}
                      </td>
                     </tr>
                    )}
                
                  </tbody>
                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row> 
      </div>
    );
  }
}

export default Orders;
