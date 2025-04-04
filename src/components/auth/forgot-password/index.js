import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import {
  CButton,
  CForm,
  CFormInput,
  CFormLabel,
  CFormText,
  CRow,
  CCol,
  CCard,
  CCardBody,
  CCardGroup,
} from '@coreui/react';
import axios from 'axios';

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      // Fazer a solicitação HTTP para enviar o token de redefinição de senha
      const response = await axios.post('https://ibabackend-prjalvo.vercel.app/api/auth/forgotpassword', { email });
      console.log(response.data); // Token de redefinição de senha enviado com sucesso
    } catch (error) {
      console.log(error);
    }

    setEmailSent(true);
  };

  if (emailSent) {
    return <Redirect to="/auth/login" />;
  }

  return (
    <div className="d-flex flex-row justify-content-center align-items-center min-vh-100">
      <CRow>
        <CCol md={6} className="mx-auto">        
          <CCard className="text-white bg-success py-3">
          <CCardBody className="text-center">

          <CForm onSubmit={handleSubmit}>
            <h1 className="text-center mb-4">Esqueceu sua senha?</h1>
            <CFormText className="text-white mb-4 ">
              Insira o seu endereço de e-mail registrado para receber um link de redefinição de senha.
            </CFormText>
            <CFormInput
              type="email"
              placeholder="Endereço de E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <CButton color="primary" className="w-100 mt-3" type="submit">
              Enviar
            </CButton>
            <CFormText className="text-white text-center mt-3">
              <CButton
                color="link"
                className="px-0"
                onClick={() => setEmailSent(true)}
              >
                Voltar para o Login
              </CButton>
            </CFormText>
          </CForm>
          </CCardBody>
          </CCard>
        </CCol>
      </CRow>
    </div>
  );
};

export default ForgotPassword;