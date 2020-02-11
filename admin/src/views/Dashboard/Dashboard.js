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
class Dashboard extends Component {
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
    shopList=[]
     var  data= await firebase
      .firestore().collection("Shop").doc(id)
      .onSnapshot(function(doc) {

          console.log(doc.data());
          shopList.push({
            name :doc.data().name,
            product:doc.data().product,
            permission:doc.data().permission,
            email:doc.data().email,
            phone:doc.data().phone,
            typeOfBusiness:doc.data().typeOfBusiness,
            businessName:doc.data().businessName,
            id:doc.id,
            
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
  .collection("Shop")
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
      500
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

  loading = () => <div className="animated fadeIn pt-1 text-center">Loading...</div>

  render() {
console.log(this.state.shopList)
    return (
      <div className="animated fadeIn">
         {/* <Row>
          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-info">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card1' isOpen={this.state.card1} toggle={() => { this.setState({ card1: !this.state.card1 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem disabled>Disabled action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">134</div>
                <div>Total Shops</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData2} options={cardChartOpts2} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-primary">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card2' isOpen={this.state.card2} toggle={() => { this.setState({ card2: !this.state.card2 }); }}>
                    <DropdownToggle className="p-0" color="transparent">
                      <i className="icon-location-pin"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">67</div>
                <div>New Shops</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Line data={cardChartData1} options={cardChartOpts1} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-warning">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <Dropdown id='card3' isOpen={this.state.card3} toggle={() => { this.setState({ card3: !this.state.card3 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </ButtonGroup>
                <div className="text-value">43</div>
                <div>Approved Shops</div>
              </CardBody>
              <div className="chart-wrapper" style={{ height: '70px' }}>
                <Line data={cardChartData3} options={cardChartOpts3} height={70} />
              </div>
            </Card>
          </Col>

          <Col xs="12" sm="6" lg="3">
            <Card className="text-white bg-danger">
              <CardBody className="pb-0">
                <ButtonGroup className="float-right">
                  <ButtonDropdown id='card4' isOpen={this.state.card4} toggle={() => { this.setState({ card4: !this.state.card4 }); }}>
                    <DropdownToggle caret className="p-0" color="transparent">
                      <i className="icon-settings"></i>
                    </DropdownToggle>
                    <DropdownMenu right>
                      <DropdownItem>Action</DropdownItem>
                      <DropdownItem>Another action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                    </DropdownMenu>
                  </ButtonDropdown>
                </ButtonGroup>
                <div className="text-value">345</div>
                <div>Pending Shops</div>
              </CardBody>
              <div className="chart-wrapper mx-3" style={{ height: '70px' }}>
                <Bar data={cardChartData4} options={cardChartOpts4} height={70} />
              </div>
            </Card>
          </Col>
        </Row> */}
        <Row>
 
        </Row>



        <Row> 
      <Col>
            <Card>
              <CardHeader>
               Users Requests
              </CardHeader>
              <CardBody>
               
              
                <br />
                <Table hover responsive className="table-outline mb-0 d-none d-sm-table">
                  <thead className="thead-light">
                  <tr>
                    {/* <th className="text-center"><i className="icon-people"></i></th> */}
                    <th>Sno.</th>
                    <th>Email</th>
                    <th>Name</th>
                    <th>Business Name</th> 
                    <th>Type of Business</th>
                    <th>Phone</th>
                    {/* <th>Add</th> */}
                    {/* <th className="text-center">Status</th>
                    <th>Time</th> */}
                  </tr>
                  </thead>
                  <tbody>
                 
                  {this.state.shopList.map((shopList, index) =>
                       <tr>
                          <th scope="row">{index}</th>
                      <th scope="row">{shopList.email}</th>
                      <td >{shopList.name}</td>
                       <td>
                        {shopList.businessName}
                       </td>
                       <td>
                        {shopList.typeOfBusiness}
                       </td>
                       <td>
                        <strong>{shopList.phone}</strong>
                      </td>
                      {/* <td>
                      <Button color="success" onClick={() =>this.props.history.push('/addshop')}>Add Shop</Button>{' '}
                      {/* <Button color="danger" onClick={() =>this.reject(shopList.id)}>Reject</Button>{' '} 
                      </td> */}
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

export default Dashboard;
