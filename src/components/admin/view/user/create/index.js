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
  CCardImage,
  CCardTitle,
  CCardText,
  CContainer,
  CAvatar
} from '@coreui/react'
import swal from 'sweetalert';

import { NotificationManager } from 'react-notifications';
import { withRouter } from "react-router";
import PropTypes from "prop-types";
import axios from 'axios';

import avatar8 from '../../../../../assets/images/avatars/User.png'

import { GetUserLogin,GetCargoDetails,GetAreasDetails } from '../../../../services';


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
      this.state = {            
        getList: [],getLista: [],getListd: [],getLists: [], selectLocation:'',isLoaded: false, id: null, email: null,phone:null, firstName: null,
        password: null,confirmPassword: null,role: 'Admin',isLoaded:false
          
      }
  }

  handleChange(e) {
      this.setState({ [e.target.name]: e.target.value })      
  }
   
  async componentDidMount() {  
  }
 
  handleSubmit = async event => {
      event.preventDefault();  
   
      swal({
          title: "Deseja Adicionar uma novo usuário ?",         
          icon: "info",
          buttons: true,
          dangerMode: false,
      })
          .then(async (success) => {
              if (success) {  
                
                
                  this.setState({ isLoaded: true })                  
                  
                  const { password, confirmPassword } = this.state;
                  // perform all neccassary validations
                  if (password !== confirmPassword) {
                      alert("Passwords don't match");
                  } else {
                      let {  firstName, email,role,password } = this.state;                      
                      let data = { firstName: firstName,  email: email, role:role, password:password}
                      // make API call
                      let user = await GetUserLogin.getUserRegister(data);
                      if (user) {
                          this.setState({ isLoaded: false })
                          this.props.history.push({ pathname: `/admin/user/list`})                                                    
                      } else {
                          NotificationManager.error("Check Input field!", 'Input');
                      }
          
                  }


                  this.setState({ isLoaded: false })
              }
          });
  }


  
  
  render() {
      
      const {  firstName, email,password,confirmPassword,role} = this.state ;
      let isLoaded = this.state.isLoaded
      return (


  <CRow>
  <CCol xs={12}>
  <CCard className="mb-4">
    <CCardHeader color="sucess">
          <strong>Cadastro de Liderança</strong> 
    </CCardHeader>
  <CCardBody>  
                    
                 
  <CForm
    className="row g-3 needs-validation"
    Validate
    validated={this.validated}
    onSubmit={this.handleSubmit}
  >       
       
         <CCol md={3}>
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
            id="validationCustom02"
            label="E-mail"
            required        
            value={email}   
            name="email"      
            onChange={(e) => this.handleChange(e)} 
          />
        </CCol>
        

        <CCol md={2}>
        <CFormSelect label="Permissão" size="sm" className="mb-3" aria-label="Small select example" name="role" onChange={(e) => this.handleChange(e)}>      
          <option value="admin" defaultValue={true}>Admin</option>
          <option value="líder">Líder</option>      
          <option value="AT">Acesso Total</option>
        </CFormSelect>
        </CCol>

      

        <CCol md={2}>
        <CFormInput
            type="password"        
            feedbackValid="Looks good!"
            id="validationCustom01"
            label="Senha"
            required        
            value={password}   
            name="password"      
            onChange={(e) => this.handleChange(e)} 
          />
        </CCol>

        <CCol md={2}>
        <CFormInput
            type="password"        
            feedbackValid="Looks good!"         
            label="Confirmar Senha"
            required        
            value={confirmPassword}   
            name="confirmPassword"      
            onChange={(e) => this.handleChange(e)} 
            
          />
        </CCol>

        <CCol xs={12}>
          <CButton color="success" type="submit">
            Confirmar
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
