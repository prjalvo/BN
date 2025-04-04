import React, { useState, Component  } from 'react'
import AutoSelect from "../../../../common/autoselect";

import {
  CButton,
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CForm,
  CFormCheck,
  CFormInput,
  CFormFeedback,
  CFormLabel,
  CFormSelect,
  CFormTextarea,
  CInputGroup,
  CInputGroupText,
  CRow,
  CAlert,
  CSpinner,
  CAvatar
} from '@coreui/react'
import swal from 'sweetalert';

import { NotificationManager } from 'react-notifications';
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import axios from 'axios';

import { GetUserLogin,GetCargoDetails,GetAreasDetails } from '../../../../services';

import avatar8 from '../../../../../assets/images/avatars/User.png'
const Arrays = (data, fieldName, fieldValue) => {
  let arrayItem = [];
  if (data && Array.isArray(data)) {
      data.map((item, key) => {
          arrayItem.push({ label: item[fieldName], value: item[fieldValue] });
          return null;
      });
  }
  return arrayItem;
};

export default class Create extends Component {

  static propTypes = {
    match: PropTypes.object,
    location: PropTypes.object,
    history: PropTypes.object,
    state: PropTypes.object,
  };
  
  constructor(props) {
      super(props);
      let userdata = this.props.location.state;
      this.state = {            
        getList: [],getLista: [],getListd: [],getLists: [],isLoaded: false, 
        id: userdata.id, email: userdata.email, firstName: userdata.firstName,
        password: null, confirmPassword: null,role: userdata.role,isLoaded:false
          
      }
  }

  
  handleChange(e) {
      this.setState({ [e.target.name]: e.target.value })      
  }
  

  async componentDidMount() {  
  
  }

  handleSubmit = async event => {
                  event.preventDefault();                 
                  
                  this.setState({ isLoaded: true })

                  const { password, confirmPassword } = this.state;
                  // perform all neccassary validations
                  if (password !== confirmPassword && password !==null && confirmPassword !== null) {
                    swal({
                      title: "Senhas não conferem?",         
                      icon: "info",
                      //buttons: true,
                      confirmBtnBsStyle:"success",
                      dangerMode: false,          
                  })
                  } else {
                      let { id, firstName, email,role,password } = this.state;                                            
                      let data = {id: id, firstName: firstName,  email: email,role:role,password:password}
                      // make API call
                      let user = await GetUserLogin.getUserUpdate(data);
                      if (user) {
                          this.setState({ isLoaded: false })
                          this.props.history.goBack();
                          //NotificationManager.success("Update successfull", 'Message');
                      } else {
                          NotificationManager.error("Check Input field!", 'Input');
                      }
          
                  }
                  this.setState({ isLoaded: false })          
  }

    
  render() {

      const {  firstName, email,password,confirmPassword, role} = this.state ;
      let isLoaded = this.state.isLoaded
 
      return (


  <CRow>
  <CCol xs={12}>
  <CCard className="mb-4">
    <CCardHeader color="sucess">
          <strong>Alteração de Usuário</strong> 
    </CCardHeader>
  <CCardBody>
         
  <CForm
    className="row g-3 needs-validation"
    Validate
    validated={this.validated}
    onSubmit={this.handleSubmit}
  >

     <CCol md={4}>
      <CFormInput
        type="text"        
        feedbackValid="Looks good!"
        id="validationCustom01"
        label="Nome"
        required        
        value={firstName}   
        name="firstName"      
        onChange={(e) => this.handleChange(e)} 
      />
    </CCol>
    <CCol md={3}>
    <CFormInput
        type="text"        
        feedbackValid="Looks good!"
        id="validationCustom01"
        label="E-mail"
        required        
        value={email}   
        name="email"      
        onChange={(e) => this.handleChange(e)} 
      />
    </CCol>
    
    <CCol md={1}>
    <CFormSelect label="Permissão" size="sm" defaultValue={role} className="mb-3" aria-label="Small select example" name="role" onChange={(e) => this.handleChange(e)}>      
      <option value="admin">Admin</option>
      <option value="líder">Líder</option>      
      <option value="AT">Acesso Total</option>
    </CFormSelect>
    </CCol>

    <CCol md={2}>
    <CFormInput
        type="text"        
        feedbackValid="Looks good!"
        id="validationCustom01"
        label="Senha"
        //required        
        value={password}   
        name="password"      
        onChange={(e) => this.handleChange(e)} 
      />
    </CCol>

    <CCol md={2}>
    <CFormInput
        type="text"        
        feedbackValid="Looks good!"         
        label="Confirmar Senha"
        //required        
        value={confirmPassword}   
        name="confirmPassword"      
        onChange={(e) => this.handleChange(e)} 
        
      />
    </CCol>

    <CCol xs={12} >
      <CButton color="success" type="submit">
        Confirmar
      </CButton>

      <CButton color="success" type="button" style={{ flexDirection: 'row', marginLeft: '1%',}} onClick={(e) =>this.props.history.goBack()}>
        Cancelar
      </CButton>
    </CCol>
  </CForm>

  </CCardBody>
  </CCard> 
  </CCol>
    {
       isLoaded ? <CSpinner color="success" style={{ flexDirection: 'row', marginLeft: '50%',alignItems:"center" }}  /> : ''
    }
  </CRow>
)
}

}
