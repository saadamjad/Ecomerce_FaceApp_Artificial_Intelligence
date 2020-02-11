import React, { Component } from 'react';
import { Formik, FormikProps, Form, Field, ErrorMessage } from 'formik';
import { Alert } from 'reactstrap';
import * as Yup from 'yup';
import {getWardSet,getDepartmentSet,getBedTypeSet,getHospitalSet,getRoomSet,getDepartment,updateBed, getBed} from './../Apis.js'

import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Col,
  Collapse,
  DropdownItem,
  DropdownMenu,
  DropdownToggle,
  Fade,
  FormGroup,
  FormText,
  FormFeedback,
  Input,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
  Label,
  Row,
} from 'reactstrap';



class UpdateBed extends Component {
    constructor(props) {
        super(props);
        this.state = {
           
            visible:false,
            
            showForm:false,
            msgType:'success',
            massege:''
          
        };
        this.onDismiss = this.onDismiss.bind(this);
      }
    onDismiss() {
        this.setState({ visible: false });
      }
    handleSubmit = (values, { 
        props = this.props, 
        setSubmitting 
      }) => {
       
        console.log(values);
        this.updateBed(values,setSubmitting,this.props.match.params.id)
       
    }

    updateBed=async(values,setSubmitting,id)=>{
          const responseData= await updateBed(values,id);
          console.log(responseData,'response')
          if(responseData.data.message)
          {
              this.setState({ visible:true,massege:'Bed Update Failed '+responseData.message,msgType:'danger'})
              setSubmitting(false);
          }
          else{
              this.setState({ visible:true,msgType:'success',massege:'Bed Update Successfully'})
              setSubmitting(false);
              return;
          }
      }

    
        componentDidMount=async()=>{
            const responseData= await getHospitalSet();
            console.log(responseData,'response')
            if(responseData.status == 200){
                this.setState({hospitalSets:responseData.data.result})
            } else if (responseData.status == 404) {
                console.warn(responseData.data.message);
            } 

            const responseDataDepart= await getDepartmentSet();
            console.log(responseDataDepart,'response')
            if(responseDataDepart.status == 200){
                this.setState({departmentSets:responseDataDepart.data.result})
            } else if (responseDataDepart.status == 404) {
                console.warn(responseDataDepart.data.message);
            } 
            
            const responseDataWard= await getWardSet();
            console.log(responseDataWard,'response')
            if(responseDataWard.status == 200){
                this.setState({wardSets:responseDataWard.data.result})
            } else if (responseDataWard.status == 404) {
                console.warn(responseDataWard.data.message);
            } 

            const responseDataBedType= await getBedTypeSet();
            console.log(responseDataBedType,'response')
            if(responseDataBedType.status == 200){
                this.setState({bedtypeSets:responseDataBedType.data.result})
            } else if (responseDataBedType.status == 404) {
                console.warn(responseDataBedType.data.message);
            } 

            
            const responseDataRoom= await getRoomSet();
            console.log(responseDataRoom,'response')
            if(responseDataRoom.status == 200){
                this.setState({roomSets:responseDataRoom.data.result})
            } else if (responseDataRoom.status == 404) {
                console.warn(responseDataRoom.data.message);
            } 
            const responseDataBed= await getBed(this.props.match.params.id);
            console.log(responseDataBed,'response')
            if(responseDataBed.status == 200){
                this.setState({
                
                    bed_no:responseDataBed.data.bed_no,
                    room_id:responseDataBed.data.room_id,
                    hospital_id:responseDataBed.data.hospital_id,
                    bed_type_id:responseDataBed.data.bed_type_id,
                    ward_id:responseDataBed.data.ward_id,
                    department_id:responseDataBed.data.department_id,
                    status:responseDataBed.data.status,
                    status_reason:responseDataBed.data.status_reason,
                    modified_by:responseDataBed.data.modified_by,
                    showForm:true,
                    
                })
            } else if (responseDataBed.status == 404) {
                console.warn(responseDataBed.data.message);
            } 

        }
    render() {
        console.log(this.state.visible)
       
        return(
            <div className="animated fadeIn">
                <Row>
                <Col xs="2">
                </Col>
                    <Col xs="8">
                    <Card>
                        <CardHeader>
                            <strong>Update bed</strong>
                        </CardHeader>
                        <CardBody> 
                            {this.state.showForm&&<Formik
                                    initialValues={{
                                        bed_no:this.state.bed_no,
                                        room_id:this.state.room_id,
                                        hospital_id:this.state.hospital_id,
                                        bed_type_id:this.state.bed_type_id,
                                        ward_id:this.state.ward_id,
                                        department_id:this.state.department_id,
                                        status:this.state.status,
                                        status_reason:this.state.status_reason,
                                       
                                        modified_by:localStorage.getItem('id'),
                                    }}
                            /*validate={values => {
                                let errors = {};
                                if (!values.email) {
                                  errors.email = 'Required';
                                } else if (
                                  !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                  errors.email = 'Invalid email address';
                                }
                                return errors;
                              }}*/
                            // validationSchema={Yup.object().shape({
                            // email: Yup
                            //     .string()
                            //     .email()
                            //     .required(),
                            // password: Yup
                            //     .string()
                            //     .min(6)
                            //     .required(),
                            // confirm_password: Yup
                            //     .string()
                            //     .min(6)
                            //     .required(),
                            // phone:Yup
                            //     .number()
                            //     .required(),
                            // alternate_phone:Yup
                            //     .number()
                            //     .required(),
                            // })}
                            
                                    onSubmit={this.handleSubmit}
                                    render={formProps => {
                                        return(
                                            <Form className="form-horizontal">
                                            <FormGroup row>
                                                <Col md="3">
                                                    <Label htmlFor="text-input">Bed No:</Label>
                                                </Col>
                                                <Col xs="12" md="9">
                                                    <Field 
                                                    type="text" 
                                                    name="bed_no" 
                                                    placeholder="bed No" 
                                                    id="text-input"
                                                    className="form-control"
                                                    /> 
                                                    <ErrorMessage name="first_name" />
                                                </Col>                                        
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col md="3">
                                                    <Label htmlFor="text-input">Hospital Name:</Label>
                                                </Col>
                                                <Col xs="12" md="9">
                                    
                                                    <Field 
                                                component="select" 
                                                    name="hospital_id" 
                                                    placeholder="Hospital Id" 
                                                    className="form-control"
                                                    >
                                                    {this.state.hospitalSets&&this.state.hospitalSets.map((hospital, index) =>
                                                    <option key={index} value={hospital.id}>{hospital.name}</option>
                                                    )}
                                                    </Field> 
                                                    <ErrorMessage name="short_name" />
                                                </Col>                                           
                                            </FormGroup>
                                            <FormGroup row>
                                        <Col md="3">                                                           
                                            <Label htmlFor="text-input">Room No:</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Field 
                                            component="select" 
                                            name="room_id" 
                                            placeholder="Room Id" 
                                            className="form-control"
                                            >
                                            {this.state.roomSets&&this.state.roomSets.map((room, index) =>
                                              <option key={index} value={room.id}>{room.room_no}</option>
                                          )}
                                        </Field> 
                                            <ErrorMessage name="alternate_phone" />
                                        </Col>                                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">                                                           
                                            <Label htmlFor="text-input">Bed Type:</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Field 
                                            component="select" 
                                            name="bed_type_id" 
                                            placeholder="Bed Type Id" 
                                            className="form-control"
                                            >
                                            {this.state.bedtypeSets&&this.state.bedtypeSets.map((bedtype, index) =>
                                              <option key={index} value={bedtype.id}>{bedtype.name}</option>
                                          )}
                                        </Field> 
                                            <ErrorMessage name="alternate_phone" />
                                        </Col>                                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Ward Name:</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Field 
                                             component="select" 
                                            name="ward_id" 
                                            placeholder="Ward Id" 
                                            className="form-control"
                                            >
                                                      {this.state.wardSets&&this.state.wardSets.map((ward, index) =>
                                                        <option key={index} value={ward.id}>{ward.name}</option>
                                                    )}
                                            </Field> 
                                            <ErrorMessage name="short_name" />
                                        </Col>                                        
                                    </FormGroup>
                                    <FormGroup row>
                                        <Col md="3">
                                            <Label htmlFor="text-input">Department Name:</Label>
                                        </Col>
                                        <Col xs="12" md="9">
                                            <Field 
                                            component="select" 
                                            name="department_id" 
                                            placeholder="Department Id" 
                                            className="form-control"
                                            >
                                                {this.state.departmentSets&&this.state.departmentSets.map((department, index) =>
                                                <option key={index} value={department.id}>{department.name}</option>
                                            )}
                                            </Field> 
                                            {/* <ErrorMessage name="phone" /> */}
                                        </Col>                                  
                                    </FormGroup>
                                            <FormGroup row>
                                                <Col md="3">                                                           
                                                    <Label htmlFor="text-input">Status:</Label>
                                                </Col>
                                                <Col xs="12" md="9">
                                                    <Field 
                                                    component="select" 
                                                    name="status" 
                                                    placeholder="Status" 
                                                    className="form-control"
                                                >
                                                    <option  value={1}>{'Enable'}</option>
                                                    <option  value={2}>{'Disable'}</option>
                                                </Field>
                                                    <ErrorMessage name="alternate_phone" />
                                                </Col>                                         
                                            </FormGroup>
                                            <FormGroup row>
                                                <Col md="3">                                                           
                                                    <Label htmlFor="text-input">Status Reason:</Label>
                                                </Col>
                                                <Col xs="12" md="9">
                                                    <Field 
                                                    type="text" 
                                                    name="status_reason" 
                                                    placeholder="Status Reason" 
                                                    className="form-control"
                                                    /> 
                                                    <ErrorMessage name="alternate_phone" />
                                                </Col>                                        
                                            </FormGroup>
                                 
                                            <Col md="3" style={{float:'right'}}>
                                            <button 
                                                type="submit"
                                                className="btn btn-success btn-block custonbtn" 
                                                
                                                disabled={formProps.isSubmitting}>
                                               Update Bed
                                            </button>
                                            </Col>
                                            </Form>
                                );
                            }}

                            />}
                             <Alert color={this.state.msgType} style={{marginTop:65}}isOpen={this.state.visible} toggle={this.onDismiss}>
                                {this.state.massege}
                            </Alert>
                        </CardBody>
                    </Card>
                    </Col>
                </Row>
            </div>
            
        );
    }

}

export default UpdateBed;