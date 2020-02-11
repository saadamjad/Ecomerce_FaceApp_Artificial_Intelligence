import React, { Component } from 'react';
import { Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
// import HospitalAdmission from '../QrCode/QrCode';
// import {getBed,getRoom,getUser,getWard,getHospital,getDepartment} from './../Apis.js'
//import bedsData from './bedsData'

class Bed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      showHospitalInfo:false
    };
  }

  componentDidMount() {
    this.getShop(this.props.match.params.id)
  
  }
  getShop=async(id)=>{
    
   
  }

 


  

  showHospitalInfo=()=>{
    this.setState({showHospitalInfo:true})
  }
  render() {

    const bed = this.state.items; //bedsData.find( bed => bed.id.toString() === this.props.match.params.id)

    let roleName = '-';

    if(bed.roles !== undefined && bed.roles.length !== 0){
      roleName = bed.roles[0].name;
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col lg={3}>
          </Col>
          <Col lg={6}>
            <Card>
              <CardHeader>
                <strong><i className="icon-info pr-1"></i>bed id: {this.props.match.params.id}</strong>
                {/* <button onClick={this.showHospitalInfo} className='btn btn-success  bedbtn'>Enter Admission Info</button> */}
              </CardHeader>
              <CardBody>
              
                  <Table responsive striped hover>
                  <tbody>                    
                    <tr>
                      <td>Bed No:</td>
                      <td><strong>{bed.bed_no}</strong></td>
                    </tr>
                    <tr>
                      <td>Hospital Name:</td>
                      <td><strong>{this.state.hospitalName}</strong></td>
                    </tr>
                    
                    <tr>
                      <td>Room No:</td>
                      <td><strong>{this.state.roomName}</strong></td>
                    </tr>
                    <tr>
                      <td>Ward Name:</td>
                      <td><strong>{this.state.wardName}</strong></td>
                    </tr>
                    <tr>
                      <td>Department Name:</td>
                      <td><strong>{this.state.departName}</strong></td>
                    </tr>
                    <tr>
                      <td>Created By:</td>
                      <td><strong>{this.state.creatorName}</strong></td>
                    </tr>
                    <tr>
                      <td>Modified By:</td>
                      <td><strong>{this.state.modifierName}</strong></td>
                    </tr>
               
                    <tr>
                      <td>Status:</td>
                      <td><strong>{bed.status==1?'Enable':'Disable'}</strong></td>
                    </tr>
                    <tr>
                      <td>Status Reason:</td>
                      <td><strong>{bed.status_reason}</strong></td>
                    </tr>
                  
                  
                
                  </tbody>
                </Table>
              
                 
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Bed;
