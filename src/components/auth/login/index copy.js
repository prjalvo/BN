import React, { useState, Component } from 'react'
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
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'

import { NotificationManager } from 'react-notifications';
import Loader from '../../loader';
import { GetUserLogin } from '../../services';
import { render } from '@testing-library/react';

// const DefaultLayout = React.lazy(() => import('../../../layout/DefaultLayout'))

const Login = () => {
  const [name, setName] = useState('')
  const [senha, setSenha] = useState('')
  const [toDashboard, setToDashboard] = React.useState(false)
  const [isLoaded, setisLoaded] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault();
    setisLoaded(true);
    let data = { email: name, password: senha };
    console.log(data)
    let user = await GetUserLogin.getUserLogin(data);
    
    if(user){
         GetUserLogin.authenticate(user, () => {
            window.location.reload()               
        })
       
        setToDashboard(true)    
        setisLoaded(false);
        window.location.assign("../admin/home");     
        
    
    }else{
        
        setisLoaded(false);
        NotificationManager.error("Favor! Verificar seu login  & Senha","Input Field");
    }

     if (toDashboard) {
      setisLoaded(false);      
      return <Redirect to="../admin/home" /> 
     }
}

  return (       
         
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <CForm className="row g-3 needs-validation" noValidate onSubmit={handleSubmit}>
                    <h1>Login</h1>
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
                        onChange={(e) => {
                          setName(e.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CInputGroup className="mb-4">
                      <CInputGroupText>
                        <CIcon icon={cilLockLocked} />
                      </CInputGroupText>
                      <CFormInput
                        type="password"                        
                        placeholder="Senha"
                        autoComplete="current-password"
                        onChange={(e) => {
                          setSenha(e.target.value)
                        }}
                      />
                    </CInputGroup>
                    <CRow>
                      <CCol xs={6}>
                        <CButton color="primary" className="px-4" type="submit">
                          Entrar
                        </CButton>
                      </CCol>
                      <CCol xs={6} className="text-right">
                        <CButton color="link" className="px-0">
                          Esqueceu sua senha ?
                        </CButton>
                      </CCol>
                      {
                        isLoaded ? <CSpinner color="success" style={{ flexDirection: 'row', marginLeft: '50%',alignItems:"center" }}  /> : ''
                      }
                    </CRow>
                  </CForm>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-success py-5">
                <CCardBody className="text-center">
                  <div>
                    <h2>Aplicativo de Gestão Rede Verde - IBA</h2>
                    <p>
                      Caso ainda não seja cadastrado. Favor clicar no botão abaixo.
                    </p>
                    <Link to="/auth/register">
                      <CButton color="primary" className="mt-3" active  style={{ flexDirection: 'row', marginRight: '20'}} >
                        Registre-se!
                      </CButton>
                    </Link>                    
                  </div>

                  <div>
                    <h2>Aplicativo de Vídeo Conferência - IBA</h2>
                    <p>
                      Favor clicar no botão abaixo.
                    </p>
                    
                      <CButton color="primary" className="mt-3" active tabIndex={-1} href='https://ibaverde.vercel.app/' target="_blank">
                        Entrar!
                      </CButton>
                    
                  </div>
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
