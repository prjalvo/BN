import React, { useState, Component, useRef } from 'react'
import { Link  } from 'react-router-dom'
import {Redirect } from  'react-router-dom';

import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
  CSpinner,
  CInputGroupAppend,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser,cilTouchApp } from '@coreui/icons'

import { NotificationManager } from 'react-notifications';
import Loader from '../../loader';
import { GetUserLogin } from '../../services';
import { render } from '@testing-library/react';
import swal from 'sweetalert';
// const DefaultLayout = React.lazy(() => import('../../../layout/DefaultLayout'))

const Login = () => {
  // const [name, setName] = useState('')
  // const [senha, setSenha] = useState('')
  const [toDashboard, setToDashboard] = React.useState(false)
  const [isLoaded, setisLoaded] = useState(false)
  const [showPassword, setShowPassword] = useState(false);
  
  const formref = useRef(null)
  

  const handleSubmit = async (event) => {
    event.preventDefault();
    setisLoaded(true);
    
    let data = { email: formref.current.elements.username.value, password: formref.current.elements.senha.value };
    console.log(data)
    let user = await GetUserLogin.getUserLogin(data);
    
    if(user){
         GetUserLogin.authenticate(user, () => {
            window.location.reload()               
        })
       
        setToDashboard(true)    
        setisLoaded(false);
        window.location.assign("../integrador");     
        
    
    }else{
        
        setisLoaded(false);
        swal({
          title: "Favor! Verificar seu login  & Senha",         
          icon: "info",
          //buttons: true,
          //confirmBtnBsStyle:"success",
          dangerMode: false,          
      })
       // NotificationManager.error("Favor! Verificar seu login  & Senha","Input Field");
    }

     if (toDashboard) {
      setisLoaded(false);      
      return <Redirect to="../integrador" /> 
     }
   }

  
  return (       
         
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer style={{ marginTop: '1%'}}>
        <CRow className="justify-content-center" >
          <CCol md={5}>
            <CCardGroup>            
              <CCard className="p-4">
                <CCardBody>
                  <CForm className="row g-3 needs-validation" 
                    noValidate 
                    onSubmit={handleSubmit}
                    ref={formref}                    >

                    <h1>SIMPLES SAÚDE</h1>
                    <p className="text-medium-emphasis">Entrar em sua conta</p>
                    <CInputGroup className="mb-3">
                      <CInputGroupText>
                        <CIcon icon={cilUser} />
                      </CInputGroupText>
                      <CFormInput
                        type="text"
                        id="validationCustomUsername"
                        defaultValue=""
                        placeholder="Username"
                        autoComplete="username"                        
                        name="username"
                        // onChange={(e) => nomeform=e.target.value}
                        // onChange={(e) => {
                        //   setName(e.target.value)
                        // }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type={showPassword ? 'text' : 'password'}                        
                        placeholder="Senha"
                        autoComplete="current-password"
                        name="senha"
                        // onChange={(e) => {
                        //   setSenha(e.target.value)
                        // }}                        
                      />

                  
                      <CInputGroupText
                        style={{ cursor: 'pointer' }}
                        onClick={() => setShowPassword(!showPassword)}
                      >
                      <CIcon icon={showPassword ? cilTouchApp : cilTouchApp} />
                      </CInputGroupText>
                  
                      
                    </CInputGroup>
                    <CRow>
                      <CCol xs={4}>
                        <CButton color="primary" className="px-4" type="submit">
                          Entrar
                        </CButton>
                      </CCol>
                      <CCol  className="text-right">                       
                        <Link to="/auth/forgot-password">          
                        <h6>Esqueceu sua senha ?</h6>          
                        </Link>      
                      </CCol>
                      {
                        isLoaded ? <CSpinner color="success" style={{ flexDirection: 'row', marginLeft: '50%',alignItems:"center" }}  /> : ''
                      }
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>                           
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}


export default Login
