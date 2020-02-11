import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, FormGroup,Alert,Label,Table,Modal, ModalHeader, ModalBody, ModalFooter ,Button } from 'reactstrap';
// import HospitalAdmission from '../QrCode/QrCode';
// import {getBed,getRoom,getUser,getWard,getHospital,getDepartment} from './../Apis.js'
//import bedsData from './bedsData'
import { Formik, FormikProps, Form, Field, ErrorMessage, FastField } from 'formik';
import * as Yup from 'yup';
import * as firebase from 'firebase';
import "firebase/firestore"
import FileUploader from "react-firebase-file-uploader";
// import { push_uniq } from 'terser';
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

class Order extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      open:false,
         msgType:'success',
         good:true,
      massege:'',
      username: "",
      avatar: "",
      isUploading: false,
      progress: 0,
      avatarURL: "",
      downloadURLs:[],
      isLoading:true,
  
      visible:false
    };
  }
  handleSubmit = (values, { 
    props = this.props, 
    setSubmitting 
  }) => {
    if(this.state.downloadURLs.length==0)
  {
    this.setState({showImageError:true})
    setSubmitting(false);
  }
  else{
    var id= this.props.match.params.id

    var productList  = this.state.shopDetails.product
    console.log(values)
    var imageList = this.state.downloadURLs
   // productList=  productList.push(Math.floor(Math.random()*10000000))
   // console.log(productList.push(Math.floor(Math.random()*10000000)))
 var  productId= Math.floor(Math.random()*10000000)
   firebase.firestore().collection('ShopAdmin').doc(this.props.match.params.id)
   .update({
     product:  firebase.firestore.FieldValue.arrayUnion(productId)
   })
     .then(function() {
         console.log("Document successfully updated!");
         firebase.firestore().collection("Products").doc(productId.toString()).set({
           name: values.name,
           type: values.productType,
           quantity:values.quantity,
           price:values.price,
           description:values.description,
           images:imageList
         })
         .then(function() {
             console.log("Document successfully written!");
         })
         .catch(function(error) {
             console.error("Error writing document: ", error);
         });
     });
   this.componentDidMount()
   this.setState({downloadURLs:[],good:true,showImageError:false, visible:true,msgType:'success',massege:'Product Add Successfully',open:false})
   setSubmitting(false);
  }
 
     
    }
  componentDidMount() {
    this.getShop(this.props.match.params.id)
  
  }
  getShop=async(id)=>{
  let shopDetails;
  //   setTimeout(
  //     function() {
  //       this.setState({shopDetails:shopDetails,isLoading:false})
  //     }
  //     .bind(this),
  //     1000
  // );
    firebase.firestore().collection("AllOrders").doc(this.props.match.params.id)
    .onSnapshot((doc)=> {
        shopDetails= doc.data()
        console.log(doc.data());
        this.setState({shopDetails:shopDetails,isLoading:false})
        
    });
  }

  handleUploadStart = () =>
  this.setState({
    isUploading: true,
    uploadProgress: 0
  });

handleProgress = progress =>
  this.setState({
    uploadProgress: progress
  });

handleUploadError = error => {
  this.setState({
    isUploading: false
    // Todo: handle error
  });
  console.error(error);
};
handleUploadSuccess = async filename => {
  const downloadURL = await firebase
    .storage()
    .ref("images")
    .child(filename)
    .getDownloadURL();
  console.log(downloadURL)
this.state.downloadURLs.push(downloadURL)
this.setState({downloadURLs:this.state.downloadURLs,good:false})
  // this.setState(oldState => ({
  //   filenames: [...oldState.filenames, filename],
  //   downloadURLs: [...oldState.downloadURLs, downloadURL],
  //   uploadProgress: 100,
  //   isUploading: false
  // }));
};

  showHospitalInfo=()=>{
    this.setState({showHospitalInfo:true})
  }
  getTime=(time)=>{
   var date =  new Date(time.seconds)
  //  date = new Date(date)
   var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
   return date.getDate() + ' ' + monthNames[date.getMonth()] + ', ' + date.getFullYear();
 
  }
  chnageStatus=(id)=>{
    firebase.firestore().collection('AllOrders').doc(this.props.match.params.id)
    .update({
      status:id
    })
      .then(()=> {
        console.log('success')
        this.componentDidMount()
      }).catch(function(e){
        console.log(e)
      })
     
  }
  render() {

    const bed = this.state.items; //bedsData.find( bed => bed.id.toString() === this.props.match.params.id)

    let roleName = '-';


    return (
      <div className="animated fadeIn">
        {this.state.isLoading==true?<p>Loading...</p>:
        <div>
        <Row>
          <Col lg={2}>
          </Col>
          <Col lg={8}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>Order id: {this.props.match.params.id}</strong>
                {/* <button onClick={this.showHospitalInfo} className='btn btn-success  bedbtn'>Enter Admission Info</button> */}
              </CardHeader>
              <CardBody>
              {/* <img className="imageUpload" style={{height:60,width:60,marginTop:20,marginBottom:20}} src={this.state.shopDetails&&this.state.shopDetails.image} />; */}
                  <Table responsive striped hover>
                  <tbody>                    
                    <tr>
                      <td>Order No:</td>
                      <td><strong>{this.state.shopDetails.products[0]!=null&&this.state.shopDetails.products[0].Orderno}</strong></td>
                    </tr>
                    <tr>
                      <td>Product Name:</td>
                      <td><strong>{this.state.shopDetails&&this.state.shopDetails.products[0].Name}</strong></td>
                    </tr>
                    <tr>
                      <td>Total Price:</td>
                      <td><strong>{this.state.shopDetails&&this.state.shopDetails.products[0].price+" OMR"}</strong></td>
                    </tr>
                    <tr>
                      <td>Time:</td>
                      <td><strong>{this.state.shopDetails&&this.state.shopDetails.time}</strong></td>
                    </tr>
                    <tr>
                      <td>User Name:</td>
                      <td><strong>{this.state.shopDetails&&this.state.shopDetails.data}</strong></td>
                    </tr>
                    <tr>
                      <td>Status:</td>
                      <td><strong>{this.state.shopDetails&&this.state.shopDetails.status}</strong></td>
                    </tr>
                   
                   
                   
               
                  
                  
                
                  </tbody>
                </Table> 
           
                <button onClick={()=>this.chnageStatus('Cancel')}  type="submit"  className="btn btn-danger btn-block custonbtn" style={{width:150,marginLeft:10,marginTop:10}}> Cancel Order</button>
                <button onClick={()=>this.chnageStatus('Delivered')}  type="submit"  className="btn btn-success btn-block custonbtn" style={{width:150,marginLeft:10}}> Delivered</button>
                <button onClick={()=>this.chnageStatus('Pending')}  type="submit"  className="btn btn-success btn-block custonbtn" style={{width:150,marginLeft:10}}> Pending </button>
                
              </CardBody>
            </Card>
          </Col>
        </Row>

       </div>
      }
      </div>
    )
  }
}

export default Order;
