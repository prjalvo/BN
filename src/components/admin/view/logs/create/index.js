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

import { GetFiliaisDetails } from '../../../../services';


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
        getList: [],nome:'',depositante:'',cd_estabelecimento:0,cnpj:'',isLoaded:false
          
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
          title: "Deseja Adicionar uma nova Filial ?",         
          icon: "info",
          buttons: true,
          dangerMode: false,
      })
          .then(async (success) => {
              if (success) {                 
                
                  this.setState({ isLoaded: true })                      
                      let {  nome,depositante,cd_estabelecimento,cnpj} = this.state;                      
                      let data = { nome:nome,depositante:depositante,cd_estabelecimento:cd_estabelecimento,cnpj:cnpj}
                      // make API call
                      let user = await GetFiliaisDetails.AddFilial(data);
                      if (user) {
                          this.setState({ isLoaded: false })
                          this.props.history.push({ pathname: `/admin/filiais/list`})                                                    
                      } else {
                          NotificationManager.error("Check Input field!", 'Input');
                      }
                  this.setState({ isLoaded: false })
              }
          });
  }


  
  
  render() {
      
      const {  nome,depositante,cd_estabelecimento,cnpj} = this.state ;
      let isLoaded = this.state.isLoaded
      return (


  <CRow>
  <CCol xs={12}>
  <CCard className="mb-4">
    <CCardHeader color="sucess">
          <strong>Cadastro de Filiais</strong> 
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
            value={nome}   
            name="nome"      
            onChange={(e) => this.handleChange(e)} 
          />
        </CCol>
        <CCol md={3}>
        <CFormInput
            type="text"        
            feedbackValid="Looks good!"
            id="validationCustom02"
            label="Depositante"
            required        
            value={depositante}   
            name="depositante"      
            onChange={(e) => this.handleChange(e)} 
          />
        </CCol>

        <CCol md={3}>
        <CFormInput
            type="text"        
            feedbackValid="Looks good!"
            id="validationCustom02"
            label="cd_estabelecimento"
            required        
            value={cd_estabelecimento}   
            name="cd_estabelecimento"      
            onChange={(e) => this.handleChange(e)} 
          />
        </CCol>

       
        <CCol md={3}>
        <CFormInput
            type="text"        
            feedbackValid="Looks good!"
            id="validationCustom02"
            label="CNPJ"
            required        
            value={cnpj}   
            name="cnpj"      
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
