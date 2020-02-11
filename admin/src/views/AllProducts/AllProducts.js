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
        apiKey: "AIzaSyC-UlcRlq6BHEDeym427KnzProOJ0cfmsw",
        authDomain: "arfurniture-2316a.firebaseapp.com",
        databaseURL: "https://arfurniture-2316a.firebaseio.com",
        projectId: "arfurniture-2316a",
        storageBucket: "arfurniture-2316a.appspot.com",
        messagingSenderId: "783485902330",
        appId: "1:783485902330:web:180b6b3a196c5882ce9843",
        measurementId: "G-3ERQ1SMFP2"
    });
}

class AllProducts extends Component {
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
            .firestore().collection("Products").doc(id.toString()).get()
            .then((doc) => {
                shopList.push({
                    shopName: doc.id,
                    id: doc.data().name,
                    location: doc.data().price,
                    quantity: doc.data().quantity,

                })

            })
            .catch((erroe) => {
                console.log(erroe)
            })
        console.log(data)
    }

    componentDidMount = async () => {
        shopList = []


        this.state.shopList = []



        firebase
            .firestore()
            .collection("Products")
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

    updateProduct(id) {
        this.setState({ myCatId: id })
        firebase.firestore().collection("Products").doc(id.toString()).get()
            .then((doc) => {
                this.setState({
                    open: true,
                    docs: doc.data()
                })
            })

    }
    handleSubmit = (values, { 
        props = this.props, 
        setSubmitting 
      }) => {
          console.log(values.name)
        let ids = this.state.myCatId;
        console.log("+++++++++++++++++++++++++++++++++++++++++++++")
        firebase.firestore().collection("Products").doc(ids.toString()).update({
            description:values.description,
            name:values.name,
            quantity:values.quantity,
            type:values.productType,
            price:values.price
          
        })
        .then((upd)=>{
          alert("Product Successfully Updated")
          this.componentDidMount()
        })
        .catch((error)=>{
          console.log(error)
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
                                            <th>Name</th>
                                            <th>Product Id</th>
                                            <th>Price</th>
                                            <th>Quantity</th>
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
                                                    {shopList.location}
                                                </td>
                                                <td>
                                                    {shopList.quantity}
                                                </td>

                                                <td>
                                                    <Button color="success" onClick={() => this.deleteShop(shopList.shopName, index)}>Delete</Button>{' '}
                                                    {/* <Button color="danger" onClick={() =>this.reject(shopList.id)}>Reject</Button>{' '} */}
                                                </td>
                                                <td>
                                                    <Button color="success" onClick={() => this.updateProduct(shopList.shopName)}>
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
                                productType: Yup
                                    .string()

                                    .required(),
                                quantity: Yup
                                    .number()
                                    .required(),
                                price: Yup
                                    .number()
                                    .required(),
                            })}

                            onSubmit={this.handleSubmit}
                            render={formProps => {
                                return (
                                    <Form className="form-horizontal">
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label htmlFor="text-input">Product Name:</Label>
                                            </Col>
                                            <Col xs="12" md="9">
                                                <Field
                                                    type="text"
                                                    name="name"
                                                    placeholder={this.state.docs.name}
                                                    id="text-input"
                                                    className="form-control"
                                                />
                                                <ErrorMessage name="name" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label htmlFor="text-input">Product Type:</Label>
                                            </Col>
                                            <Col xs="12" md="9">
                                                <Field
                                                    type="text"
                                                    name="productType"
                                                    placeholder="Product Type"
                                                    id="text-input"
                                                    className="form-control"
                                                />
                                                <ErrorMessage name="productType" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label htmlFor="text-input">Description</Label>
                                            </Col>
                                            <Col xs="12" md="9">
                                                <Field
                                                    type="text"
                                                    name="description"
                                                    placeholder="Description"
                                                    id="text-input"
                                                    className="form-control"
                                                />
                                                <ErrorMessage name="description" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label htmlFor="text-input">Quantity</Label>
                                            </Col>
                                            <Col xs="12" md="9">
                                                <Field
                                                    type="text"
                                                    name="quantity"
                                                    placeholder="Quantity"
                                                    id="text-input"
                                                    className="form-control"
                                                />
                                                <ErrorMessage name="quantity" />
                                            </Col>
                                        </FormGroup>
                                        <FormGroup row>
                                            <Col md="3">
                                                <Label htmlFor="text-input">Price</Label>
                                            </Col>
                                            <Col xs="12" md="9">
                                                <Field
                                                    type="text"
                                                    name="price"
                                                    placeholder="Price"
                                                    id="text-input"
                                                    className="form-control"
                                                />
                                                <ErrorMessage name="price" />
                                            </Col>
                                        </FormGroup>



                                      
                                        

                                        <Col md="12" style={{ float: 'right', marginTop: 20 }}>
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block custonbtn"

                                                disabled={this.state.good || formProps.isSubmitting}>
                                                Add
                                    </button>
                                            <Button color="secondary" style={{ marginRight: 10, float: 'right' }} onClick={() => this.setState({ open: false })}>Cancel</Button>

                                        </Col>
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

export default AllProducts;
