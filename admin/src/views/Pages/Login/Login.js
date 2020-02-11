import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { Formik, FormikProps,Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'reactstrap';
import {
  Badge,
  Button,
  ButtonDropdown,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Container,
  CardGroup,
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
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
        email:'',
        password:'',
        wrongPass:false,
        msgType:'success',
        massege:'',
        visible:false
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
    fetch('http://iotapp.ephlux.com:3000/api/user/authentication',{
        method: 'POST',       
        headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjE4LCJpYXQiOjE1NDgxMDM2OTV9._BdaJ6Hc-oHlmV_OL_FUdHmzIO6cC8riT3IfsSXbf0w',
        },
        body: JSON.stringify(values),
        mode: 'cors'
        }).then(res => res.json())
        .then(response => {
            console.log(response)
            if(!response.message)
            {
              fetch('http://iotapp.ephlux.com:3000/api/user_role/'+response.user_id, { 
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer '+response.token,
                },
                })
                .then(res => res.json())
                .then((res) => {
                 
                  // window.location='#/dashboard'
                    // console.log(res)
                    if(res.roles)
                    {
                      if(res.roles[0].name=='admin')
                      {
                        localStorage.setItem('token',response.token)
                        localStorage.setItem('id',response.user_id)
                        this.props.history.push('/dashboard')
                      
                        // window.location='#/dashboard'
                      }
                      else{
                       
                        this.setState({ visible:true,massege:'You Dont have Admin Rights ',msgType:'danger'})
                        setSubmitting(false);
                       
                      }
                    }
                    else{
                      this.setState({ visible:true,massege:'You Dont have Admin Rights ',msgType:'danger'})
                      setSubmitting(false);
                    }
                   
          
                });
            }
            else{
              console.log('wrong Usernam and pass')
              setSubmitting(false);
              this.setState({
                wrongPass:true
              })
            }
           
        })
        .catch(error =>{
            console.log(error)
        })
    }
    componentDidMount(){
      if(localStorage.getItem('token')!=null||localStorage.getItem('token')!=undefined)
      { 
        this.props.history.push('/dashboard')
      }
    }
  render() {

    return (
      <div className="app flex-row align-items-center">
        <Container>
          <Row className="justify-content-center">
            <Col md="5">
              <CardGroup>
                <Card className="p-4">
                  <CardBody>
                    <Form>
                      <h1>Login</h1>
                      <p className="text-muted">Sign In to your account</p>
                      <Formik
                            initialValues={{
                                email: '',
                                password: '',
                               
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
                            validationSchema={Yup.object().shape({
                            email: Yup
                                .string()
                                .email()
                                .required(),
                            password: Yup
                                .string()
                                .min(6)
                                .required(),
                            })}
                            onSubmit={this.handleSubmit}
                            render={formProps => {
                                return(
                                <Form className="form-horizontal">
                             
                                  
                                   
                                    <FormGroup row>
                                      <InputGroup className="mb-3">
                                        <InputGroupAddon addonType="prepend">
                                          <InputGroupText>
                                            <i className="icon-user"></i>
                                          </InputGroupText>
                                        </InputGroupAddon>
                                       <Field 
                                            type="text" 
                                            name="email" 
                                            placeholder="Email address" 
                                            className="form-control"
                                                /> 
                                           
                                      </InputGroup>
                                      <span className="error"><ErrorMessage name="email" /></span>
                                                                  
                                    </FormGroup>
                                   
                                   
                                    <FormGroup row>
                                      <InputGroup className="mb-4">
                                        <InputGroupAddon addonType="prepend">
                                          <InputGroupText>
                                            <i className="icon-lock"></i>
                                          </InputGroupText>
                                        </InputGroupAddon>
                                          <Field 
                                            
                                            type="password" 
                                            name="password" 
                                            placeholder="Password" 
                                            className="form-control"
                                            /> 
                                          
                                      </InputGroup>               
                                      <span className="error"><ErrorMessage name="password" /></span>     
                                    </FormGroup>
                                   
                                 
                                    <div className="loginBtn">
                                    <Button 
                                        type="submit"
                                        color="primary" className="px-4"
                                        
                                        disabled={formProps.isSubmitting}>
                                        Login
                                    </Button>
                                     <span className={this.state.wrongPass?'error':'hide'}>Wrong Username Password</span>
                                    </div>
                             
                                    </Form>
                                );
                            }}

                            />
                    
                    </Form>
                    <Alert color={this.state.msgType} style={{marginTop:20}}isOpen={this.state.visible} toggle={this.onDismiss}>
                                {this.state.massege}
                    </Alert>
                  </CardBody>
                </Card>
                {/* <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                  <CardBody className="text-center">
                    <div>
                      <h2>Sign up</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua.</p>
                      <Link to="/register">
                        <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                      </Link>
                    </div>
                  </CardBody>
                </Card> */}
              </CardGroup>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default Login;
