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
  Table, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Alert, Label,
} from 'reactstrap';
import { Formik, FormikProps, Form, Field, ErrorMessage, FastField } from 'formik'
import { CustomTooltips } from '@coreui/coreui-plugin-chartjs-custom-tooltips';
import { getStyle, hexToRgba } from '@coreui/coreui/dist/js/coreui-utilities'
import { Link } from 'react-router-dom';
import * as firebase from 'firebase';
import "firebase/firestore"
import * as _ from 'lodash';
import * as Yup from 'yup';
// import { isThisSecond } from 'date-fns';
let shopList = []
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
    this.gettingProps = this.gettingProps.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);

    this.state = {
      dropdownOpen: false,
      shopList: [],
      radioSelected: 2,
      a: "",
      open: false,
      massege: '',
      visible: false,
    };
  }
  makeList = async (id) => {
    console.log(id)
    shopList = []
    var data = await firebase
      .firestore().collection("Category").doc(id.toString()).get()
      .then((doc)=>{
        shopList.push({
          shopName: doc.id,
          id: doc.data().name,
          location: doc.data().shops,

        })

      })
      .catch((erroe)=>{
        console.log(erroe)
      })
    console.log(data)
  }

  componentDidMount = async () => {
    shopList = []


    this.state.shopList = []



    firebase
      .firestore()
      .collection("Category")
      .get()
      .then(querySnapshot => {
        const Matches = [];

        console.log(querySnapshot)

        for (var i = 0; i < querySnapshot.docs.length; i++) {
          this.makeList(querySnapshot.docs[i].id)
          console.log(querySnapshot.docs[i].id)

        }
        // console.log('new data',data)
        //this.setState({ shopList:shopList });
        setTimeout(
          function () {
            this.setState({ shopList: [] })
            this.setState({ shopList: shopList })
          }
            .bind(this),
          400
        );

      })
      .catch(function (error) {
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
  async deleteShop(sid, index) {
    var data = await firebase
      .firestore().collection("Category").doc(sid).delete()
      .then(e => {
        alert("Shop Successfully Deleted")
        setTimeout(
          function () {
            this.gettingProps(index)
          }
            .bind(this),
          100
        );



      })
      .catch(error => {
        alert('Shop not Deleted')
      })



  }
  gettingProps = (index) => {
    const prod = this.state.shopList;
    _.pullAt(prod, index);

    this.setState({
      shopList: prod
    });
  }
  handleSubmit = (values, { 
    props = this.props, 
    setSubmitting 
  }) => {
    let ids = this.state.myCatId;
    firebase.firestore().collection("Category").doc(ids.toString()).update({
      name:values.name
    })
    .then((upd)=>{
      alert("Category Successfully Updated")
      this.componentDidMount()
    })
    .catch((error)=>{
      console.log(error)
    });


  }
  updateProduct(id){
    this.setState({myCatId:id})
        this.setState({
          open: true
        })
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
                      <th>Name</th>
                      <th>Category Id</th>
                      <th>No of Shops</th>
                      <th>Delete</th>
                      <th>Update</th>
                      {/* <th>Add</th> */}
                      {/* <th className="text-center">Status</th>
                    <th>Time</th> */}
                    </tr>
                  </thead>
                  <tbody>

                    {this.state.shopList.map((shopList, index) =>
                      <tr>
                        <th scope="row"><Link to={'/shop/' + shopList.id}>{index}</Link></th>

                        <th scope="row"><Link to={'/shop/' + shopList.id}>{shopList.id}</Link></th>
                        <th scope="row"><Link to={'/shop/' + shopList.id}>{shopList.shopName}</Link></th>
                        <td>
                          {shopList.location.length}
                        </td>

                        <td>
                          <Button color="success" onClick={() => this.deleteShop(shopList.shopName, index)}>Delete</Button>{' '}
                          {/* <Button color="danger" onClick={() =>this.reject(shopList.id)}>Reject</Button>{' '} */}
                        </td>
                        <td>
                        <Button color="success" onClick={()=>this.updateProduct(shopList.shopName)}>
                       Update</Button>{' '}
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
        <Modal isOpen={this.state.open} >
          <ModalHeader>Add Product</ModalHeader>
          <ModalBody>
            <Formik
              initialValues={{
                name: '',
              }}
              validationSchema={Yup.object().shape({
                name: Yup
                  .string()

                  .required(),
              })}

              onSubmit={this.handleSubmit}
              render={formProps => {
                return (
                  <Form className="form-horizontal">
                    <FormGroup row>
                      <Col md="3">
                        <Label htmlFor="text-input">Category Name:</Label>
                      </Col>
                      <Col xs="12" md="9">
                        <Field
                          type="text"
                          name="name"
                          placeholder="Product Name"
                          id="text-input"
                          className="form-control"
                        />
                        <ErrorMessage name="name" />
                      </Col>
                    </FormGroup>






                    {/* <p>Progress: {this.state.uploadProgress}</p> */}

                    {/* <p>Filenames: {this.state.filenames.join(", ")}</p> */}

                    <Col md="12" style={{ float: 'right', marginTop: 20 }}>
                      <button
                        type="submit"
                        className="btn btn-primary btn-block custonbtn"

                        disabled={this.state.good || formProps.isSubmitting}>
                        Add
                    </button>
                      <Button color="secondary" style={{ marginRight: 10, float: 'right' }} onClick={() => this.setState({ open: false })}>Cancel</Button>

                    </Col>
                    <br />
                    <Alert color={this.state.msgType} style={{ marginTop: 65 }} isOpen={this.state.visible} toggle={this.onDismiss}>
                      {this.state.massege}
                    </Alert>
                  </Form>
                );
              }}

            />
          </ModalBody>

        </Modal>
      </div>
    );
  }
}

export default ShopList;
