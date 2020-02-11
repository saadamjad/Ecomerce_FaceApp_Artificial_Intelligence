import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';
import Pagination from '../Base/Paginations/Pagnations';
import {getAllBeds} from './../Apis.js'
//import bedsData from './bedsData'
const addbed = 'bed/add'

function BedRow(props) {
  const beds = props.beds
  const bedLink = `/beds/${beds.id}`
  const updatebed = `bed/update/${beds.id}`
 

  const getBadge = (status) => {
    return status === 'Active' ? 'success' :
      status === 'Inactive' ? 'secondary' :
        status === 'Pending' ? 'warning' :
          status === 'Banned' ? 'danger' :
            'primary'
  }

  return (
    <tr key={beds.id.toString()}>
      <th scope="row"><Link to={bedLink}>{beds.id}</Link></th>
      <td ><Link to={bedLink}>{beds.bed_no}</Link></td>
      <td>{beds.status?'Enable':'Disable'}</td>
      {/* <td >{beds.hospital_id}</td> */}
      <td ><Link to={updatebed}><span class="cui-pencil" aria-hidden="true"></span></Link></td>
    </tr>
  )
}

class Beds extends Component {

  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      totalPages: 0,
      totalRecords: 0
    };
  }


  componentDidMount() {
    this.getAllBeds(1)
  
  }
  getAllBeds=async(page)=>{
    const responseData= await getAllBeds(page);
    console.log(responseData,'response')
      if(responseData.status == 200){
        this.setState({
          
              isLoaded: true,
              items: responseData.data.result,
              totalPages: responseData.data.pages,
              totalRecords: responseData.data.count
            
        })
      } else if (responseData.status == 404) {
        console.warn(responseData.data.message);
      } 
  }
  onPageChanged = data => {
    //const { allCountries } = this.state;
   
    const { currentPage, totalPages, pageLimit } = data;
    this.getAllBeds(currentPage)
    console.log(data);
  };

  render() {

    const bedList = this.state.items; //bedsData.filter((bed) => bed.id < 10)
    const Totrecords = parseInt(this.state.totalRecords); // total beds records.
    let pagination;

    if(Totrecords !== 0 ){
      pagination = <Pagination totalRecords={Totrecords} pageLimit={5} pageNeighbours={1} onPageChanged={this.onPageChanged} />
    }

    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={2}>
          </Col>
          <Col xl={8}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Beds 
                <Link to={addbed}><button onClick={this.showHospitalInfo} className='btn btn-success  upActionbtn'>+ Add Bed</button></Link>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">Id</th>
                      <th scope="col">Bed No</th>
                      <th scope="col">Status</th>
                      {/* <th scope="col">Hospital Id</th> */}
                      <th scope="col">Edit Bed</th>
                    </tr>
                  </thead>
                  <tbody>
                    {bedList.map((beds, index) =>
                      <BedRow key={index} beds={beds}/>
                    )}
                  </tbody>
                </Table>
              </CardBody>              
              {pagination}
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Beds;
