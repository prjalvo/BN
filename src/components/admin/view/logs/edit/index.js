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

import { GetFiliaisDetails } from '../../../../services';


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
        isLoaded: false,id: userdata.id, nome:userdata.nome,depositante:userdata.depositante,
        cd_estabelecimento:userdata.cd_estabelecimento,cnpj:userdata.cnpj
          
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

                  
                      let { nome, depositante,cd_estabelecimento,cnpj } = this.state;                                            
                      let data = {nome:nome, depositante:depositante,cd_estabelecimento:cd_estabelecimento,cnpj:cnpj}
                      // make API call
                      let filial = await GetFiliaisDetails.FilialUpdate(data);
                      if (filial) {
                          this.setState({ isLoaded: false })
                          this.props.history.goBack();
                          //NotificationManager.success("Update successfull", 'Message');
                      } else {
                          NotificationManager.error("Check Input field!", 'Input');
                      }
          
                 
                  this.setState({ isLoaded: false })          
  }

    
  render() {

      const {  nome, depositante,cd_estabelecimento,cnpj} = this.state ;
      let isLoaded = this.state.isLoaded
 
      return (


  <CRow>
  <CCol xs={12}>
  <CCard className="mb-4">
    <CCardHeader color="sucess">
          <strong>Alteração de Filial</strong> 
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
        value={nome}   
        name="nome"      
        onChange={(e) => this.handleChange(e)} 
      />
    </CCol>
    <CCol md={3}>
    <CFormInput
        type="text"        
        feedbackValid="Looks good!"
        id="validationCustom01"
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
        id="validationCustom01"
        label="Cod. Estabelecimento"
        required        
        value={cd_estabelecimento}   
        name="cd_estabelecimento"      
        onChange={(e) => this.handleChange(e)} 
      />
    </CCol>

         

    <CCol md={2}>
    <CFormInput
        type="text"        
        feedbackValid="Looks good!"
        id="validationCustom01"
        label="CNPJ"
        //required        
        value={cnpj}   
        name="cnpj"      
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
