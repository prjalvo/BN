import React, { Component } from 'react'


import { GetUserLogin } from '../../../../services';
import swal from 'sweetalert';
import Moment from 'moment';

import { withRouter } from "react-router";
import PropTypes from "prop-types";
import { NotificationManager } from 'react-notifications';

import {
    CCard,
    CCardBody,
    CCardHeader,
    CCol,
    CRow,
    CTable,
    CTableBody,
    CTableCaption,
    CTableDataCell,
    CTableHead,
    CTableHeaderCell,
    CTableRow,
    CButton,
    CSpinner
  } from '@coreui/react'


  import CIcon from '@coreui/icons-react'
  import {
    cilPencil,cilTrash,
  } from '@coreui/icons'

export default class List extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
  };

    constructor(props) {
        super(props);
        this.state = {
            getList: [],isLoaded:false,
            filters: {
              name: "",
              leaderOfCell: "",
              cargo: "",
              distrito: "",
              area: "",
              setor: "",
            },
        }
    }
   
   async componentDidMount() {
      this.getUser();
    }    

        

    async getUser() {
        this.setState({ isLoaded: true })
        let list = await GetUserLogin.getAllUserList();
        console.log(list)
        if (list) {        
        this.setState({ getList: list.data })
        this.setState({ isLoaded: false })
        }
        else{
          this.props.history.push({ pathname: `/auth/login`})           
        }
    }


    async handlDeleteById(id,cargo) {
        swal({
            title: "Excluir a usuário " + cargo + " ?",     
            icon: "warning",
            buttons: true,
            dangerMode: true,
        })
            .then(async (success) => {
                if (success) {
                    this.setState({ isLoaded: true })
                    let value = await GetUserLogin.getDeleteUserList(id);
                    if (value) {
                      NotificationManager.success("Create successfull", 'Message'); 
                      this.getUser();
                    }
                    this.setState({ isLoaded: false })
                }
            });
    }

    
    handlEditRow(row,nome,email,role) {      
      this.props.history.push({ pathname: `/admin/user/edit/${row}`,state: row,nome: nome,email: email,role: role })
    }


    render() {        
        let self = this.state.getList
        let isLoaded = this.state.isLoaded

        const { filters } = this.state;
        const headerStyles = { display: "flex", justifyContent: "space-between" };
        const filterStyles = { display: "flex", alignItems: "center" };
        


        return (
            
          <CRow>          
          <CCol xs={12}>
          <CCard className="mb-4" >
            <CCardHeader style={headerStyles} >           
                 Consulta Usuários
            </CCardHeader>
          <CCardBody>
         
               <CTable align="middle" className="mb-0 border card-body-table table" hover responsive small bordered style={{fontFamily: "Arial"}}>
                <CTableHead color="dark" >
                  <CTableRow color="dark">                   
                    <CTableHeaderCell >Nome</CTableHeaderCell>
                    <CTableHeaderCell >Nome Completo</CTableHeaderCell>
                    <CTableHeaderCell >E-mail</CTableHeaderCell> 
                    <CTableHeaderCell >Perfil</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Alterar</CTableHeaderCell>
                    <CTableHeaderCell className="text-center">Deletar</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {self.map((item, index) => (
                    <CTableRow v-for="item in tableItems" key={index} color="success" style={{color: "green"}}>                     
                      <CTableDataCell >{item.NomeUsuario}</CTableDataCell>                      
                      <CTableDataCell>{item.NomeCompleto}</CTableDataCell> 
                      <CTableDataCell>{item.Email}</CTableDataCell>                         
                      <CTableDataCell>{item.Perfil}</CTableDataCell>                       
                      <CTableDataCell className="text-center" onClick={(e) => this.handlEditRow(item,
                                                                                                item.firstName || null,
                                                                                                item.email || null,
                                                                                                item.role || null,                                                                                                
                                                                                                )}>                        
                      <CIcon  icon={cilPencil} title='Alterar'/>
                      </CTableDataCell>
                      <CTableDataCell className="text-center">                        
                      <CIcon icon={cilTrash} title='Deletar' onClick={(e) => this.handlDeleteById(item.id,item.firstName)}/> 
                      </CTableDataCell>
                    </CTableRow>
                  ))}

                      
                  
                </CTableBody>               
              </CTable>
               <CRow>
              </CRow>
              
              <CButton style={{ flexDirection: 'row', marginTop: 10 }} color="success" width={80} onClick={(e) => this.props.history.push({ pathname: `/admin/user/create`})}> Novo Usuário</CButton>                          
              
              </CCardBody>
            </CCard> 
            {
                isLoaded ? <CSpinner color="success" style={{ flexDirection: 'row', marginLeft: '50%',alignItems:"center" }}  /> : ''
            }
            
            </CCol >
            
            </CRow>

        )
    }
}
