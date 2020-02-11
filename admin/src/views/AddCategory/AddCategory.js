import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, FormGroup, Alert, Label, Table, Modal, ModalHeader, ModalBody, ModalFooter, Button } from 'reactstrap';


//import bedsData from './bedsData'
import { Formik, FormikProps, Form, Field, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import * as firebase from 'firebase';
import "firebase/firestore"
import FileUploader from "react-firebase-file-uploader";
// import { push_uniq } from 'terser';
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

class AddCategory extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      open: false,
      msgType: 'success',
      good: true,
      massege: '',
      username: "",
      avatar: "",
      isUploading: false,
      progress: 0,
      avatarURL: "",
      downloadURLs: [],
      isLoading: false,

      visible: false
    };
  }
  handleSubmit = (values, {
    props = this.props,
    setSubmitting
  }) => {
    console.log(values)
    if (this.state.avatarURL == undefined) {
      this.setState({ showImageError: true })
      setSubmitting(false);
    }
    else {



      console.log(values.shopName, this.state.avatarURL, values.sex, values.hips, values.hips, values.chest, values.sleeves, values.arms, values.ownerName, values.catagory, values.location, values.discount, values.price, values.stock)
      var imageList = this.state.avatarURL
      // productList=  productList.push(Math.floor(Math.random()*10000000))
      // console.log(productList.push(Math.floor(Math.random()*10000000)))
      var CategoryID = Math.floor(Math.random() * 10000000)
      firebase.firestore().collection("Category").doc(CategoryID.toString()).set({
        name: values.CategoryName,
        shops: [],
        image: imageList

      }).then(function (doc) {
        console.log("Document successfully written!", doc);
        this.props.history.push('/shoplist')
      })
        .catch(function (error) {
          console.error("Error writing document: ", error);
        });


      //    this.componentDidMount()
      this.setState({ downloadURLs: [], good: true, showImageError: false, visible: true, msgType: 'success', massege: 'Category Created Successfully', open: false })
      setSubmitting(false);
    }


  }
  componentDidMount() {
    this.setState({ isLoading: false })
    // this.getShop(this.props.match.params.id)

  }
  //   getShop=async(id)=>{
  //   let shopDetails;
  //     setTimeout(
  //       function() {
  //         this.setState({shopDetails:shopDetails,isLoading:false})
  //       }
  //       .bind(this),
  //       4000
  //   );
  //     firebase.firestore().collection("Shop").doc(this.props.match.params.id)
  //     .onSnapshot(function(doc) {
  //         shopDetails= doc.data()
  //         console.log(doc.data());


  //     });
  //   }

  handleChangeUsername = event =>
    this.setState({ username: event.target.value });
  handleUploadStart = () => this.setState({ isUploading: true, progress: 0 });
  handleProgress = progress => this.setState({ progress });
  handleUploadError = error => {
    this.setState({ isUploading: false });
    console.error(error);
  };
  handleUploadSuccess = filename => {
    this.setState({ avatar: filename, progress: 100, isUploading: false });
    firebase
      .storage()
      .ref("images")
      .child(filename)
      .getDownloadURL()
      .then(url => this.setState({ avatarURL: url, good: false }));
  };

  showHospitalInfo = () => {
    this.setState({ showHospitalInfo: true })
  }
  render() {

    const bed = this.state.items; //bedsData.find( bed => bed.id.toString() === this.props.match.params.id)

    let roleName = '-';


    return (

      <div className="animated fadeIn">
        <Row>
          <Col xs="2">
          </Col>
          <Col xs="8">
            <Card>
              <CardHeader>
                <strong>Add Category</strong>
              </CardHeader>
              <CardBody>
                <Formik
                  initialValues={{
                    CategoryName: '',

                  }}
                  validationSchema={Yup.object().shape({
                    CategoryName: Yup
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
                              name="CategoryName"
                              placeholder="Category Name"
                              id="text-input"
                              className="form-control"
                            />
                            <ErrorMessage name="CategoryName" />
                          </Col>
                        </FormGroup>

                        <FormGroup row>
                          <Col md="3">
                            <Label htmlFor="text-input">Upload Images</Label>
                          </Col>
                          <Col xs="12" md="9">
                            <FileUploader
                              accept="image/*"
                              name="avatar"
                              randomizeFilename
                              storageRef={firebase.storage().ref("images")}
                              onUploadStart={this.handleUploadStart}
                              onUploadError={this.handleUploadError}
                              onUploadSuccess={this.handleUploadSuccess}
                              onProgress={this.handleProgress}
                            />
                          </Col>
                        </FormGroup>


                        {/* <p>Progress: {this.state.uploadProgress}</p> */}

                        {/* <p>Filenames: {this.state.filenames.join(", ")}</p> */}
                        <div>
                          {this.state.showImageError && <p style={{ color: 'red' }}>Please select atleast one image</p>}
                        </div>
                        <div>
                          {this.state.avatarURL && <img style={{ height: 60, width: 60 }} src={this.state.avatarURL} />}
                        </div>

                        <Col md="12" style={{ float: 'right', marginTop: 20 }}>
                          <button
                            type="submit"
                            className="btn btn-primary btn-block custonbtn"
                            disabled={this.state.good || formProps.isSubmitting}
                          >
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
                {/* <Alert color={this.state.msgType} style={{marginTop:65}}isOpen={this.state.visible} toggle={this.onDismiss}> */}
                
                {/* </Alert> */}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default AddCategory;
