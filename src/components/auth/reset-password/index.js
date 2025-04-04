import React, { useState } from 'react';
import { Redirect,useParams   } from 'react-router-dom';
import {
  CButton,
  CCard,
  CCardBody,
  CCol,
  CContainer,
  CForm,
  CFormGroup,
  CFormInput,
  CRow,
  CFormText
} from '@coreui/react';

import axios from 'axios';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [resetSuccessful, setResetSuccessful] = useState(false);
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  
  const handleSubmit = async (event) => {
    event.preventDefault();

    // Verifique se a senha e a confirmação da senha são válidas
    if (password === confirmPassword) {
      // Lógica para redefinir a senha aqui
      try {
        // Fazer a solicitação HTTP para enviar o token de redefinição de senha
        const response = await axios.post('https://ibabackend-prjalvo.vercel.app/api/auth/resetpassword', { token , password });
        alert(response.data.message);
        // Redirecione para a página de login após a redefinição bem-sucedida
         setResetSuccessful(true);
      } catch (error) {
         console.log(error);
      }
      
    } else {
      // Lógica para lidar com a validação da senha
    }
  };

  if (resetSuccessful) {
    return <Redirect to="/auth/login" />;
  }

  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={6}>
            <CCard>
              <CCardBody className="p-4">
                <CForm onSubmit={handleSubmit}>
                  <h1>Redefinir Senha</h1>
                  <p className="text-medium-emphasis">Digite sua nova senha:</p>
            
                    <CFormInput
                      type="password"
                      placeholder="Nova Senha"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
            
                    <CFormInput
                      type="password"
                      placeholder="Confirmar Nova Senha"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
            
                  <CButton type="submit" color="primary" className="w-100">
                    Redefinir Senha
                  </CButton>
                  <CFormText className="text-muted text-center mt-3">
              <CButton
                color="link"
                className="px-0"
                onClick={() => setResetSuccessful(true)}
              >
                Voltar para o Login
              </CButton>
            </CFormText>
                </CForm>
              </CCardBody>
            </CCard>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  );
};

export default ResetPassword;
