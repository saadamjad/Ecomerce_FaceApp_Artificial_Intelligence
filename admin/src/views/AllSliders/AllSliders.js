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
import * as _ from 'lodash';
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

class ShopList extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    // this.approved = this.approved.bind(this);
    // this.reject = this.reject.bind(this);
    this.onRadioBtnClick = this.onRadioBtnClick.bind(this);

    this.state = {
      dropdownOpen: false,
      shopList:[],
      radioSelected: 2,
      a:""
    };
  }
  makeList=async(id)=>{
    console.log(id)
    shopList=[]
     var  data= await firebase
      .firestore().collection("Slider").doc(id.toString()).get()
      .then((doc)=>{
        shopList.push({
          shopName :doc.id,
          location:doc.data().image,
          
        })
      })
      .catch((error)=>{
        console.log(error)
        alert('Slider not Deleted')
      })
      console.log(data)
  }
//   approved=async(id)=>{
//     console.log(id)
//     firebase.firestore().collection("Shop").doc(id).update({
//       "permission":"true"
//     })
//     this.componentDidMount()
//   }
//   reject=async(id)=>{
//     console.log(id)
//     firebase.firestore().collection("Shop").doc(id).update({
//       "permission":"false"
//     })
    
//     this.componentDidMount()
//   }
componentDidMount =async()=>{
  shopList=[]
  // const rootRef = firebase.database().ref();
  // const post = rootRef.child('Shop').orderByKey();
  
  //   post.once('value', snap => {
  //     snap.forEach(child => {
  //       console.log(child.key,child.val().name,child.val().product)
         

  //     });
  // }); 

  this.state.shopList=[]



  firebase
  .firestore()
  .collection("Slider")
  .get()
  .then(querySnapshot => {
    const Matches = [];

 console.log(querySnapshot)
 
    for(var i = 0 ; i<querySnapshot.docs.length;i++)
    {
      this.makeList(querySnapshot.docs[i].id)
      console.log(querySnapshot.docs[i].id)
   
    }
// console.log('new data',data)
    this.setState({ shopList:shopList });
    setTimeout(
      function() {
        this.setState({shopList:[]})
        this.setState({shopList:shopList})
      }
      .bind(this),
      800
  );
    
  })
  .catch(function(error) {
    console.log("Error getting documents: ", error);
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
  async deleteShop(sid,index){
    var  data= await firebase
    .firestore().collection("Slider").doc(sid).delete()
    .then(e=>{
      alert('Slider Deleted')
      setTimeout(
        function () {
          this.gettingProps(index)
        }
          .bind(this),
        100
      );
      
        
    })
    .catch(error=>{
        alert('Slider not Deleted')
    })

   

  }
  gettingProps = (index) => {
    const prod = this.state.shopList;
    _.pullAt(prod, index);

    this.setState({
      shopList: prod
    });
  }

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
console.log(this.state.shopList)
    return (
    
        
      <div className="animated fadeIn">
       {this.state.a}


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
                  
                    <th>Slider Id</th>
                    <th>No of Images</th>
                    <th>Delete Slider</th>
                    {/* <th>Add</th> */}
                    {/* <th className="text-center">Status</th>
                    <th>Time</th> */}
                  </tr>
                  </thead>
                  <tbody>
                 
                  {this.state.shopList.map((shopList, index) =>
                       <tr>
                          <th scope="row"><Link to={'/shop/'+shopList.id}>{index}</Link></th>

                         
                      <th scope="row"><Link to={'/shop/'+shopList.id}>{shopList.shopName}</Link></th>
                      <td>
                        {shopList.location.length}
                       </td>
                  
                       <td>
                      <Button color="success" onClick={() =>this.deleteShop(shopList.shopName,index)}>Delete Slider</Button>{' '}
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

export default ShopList;
