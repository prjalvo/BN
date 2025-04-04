import React, { Component } from 'react';
import { GetLogProcessosDetails } from '../../../../services';
import { format } from 'date-fns';
import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CTable,
  CTableBody,
  CTableHead,
  CTableHeaderCell,
  CTableRow,
  CTableDataCell,
  CSpinner,
  CForm,
  CFormInput
} from '@coreui/react';
import CIcon from '@coreui/icons-react';
import { cilMagnifyingGlass,cilReload  } from '@coreui/icons';
import axios from 'axios';
const today = new Date();
const formattedDate = `${today.getFullYear()}-${String(today.getMonth() + 1).padStart(2, '0')}-${String(today.getDate()).padStart(2, '0')}`;


export default class List extends Component {
  constructor(props) {
    super(props);
    let userdata = this.props.location.state || {};
    this.state = {
      getList: [],
      isLoaded: false,
      showDetails: false,
      selectedLog: [],
      historicalData2: [],      
      filterDate: formattedDate,
      filterProcesso: userdata.processo,
      filterStatus: '',
      tipo:""
    };
  }

  async componentDidMount() {
    this.getLog()
  }



  async getLog() {
    this.setState({ isLoaded: true });
    let list = await GetLogProcessosDetails.LogProcessosList();
    console.log(list)
    if (list) {
      this.setState({ getList: list.data });
    }
    this.setState({ isLoaded: false });
  }

  handleShowDetails = (item) => {
    this.setState((prevState) => ({
      showDetails: !prevState.showDetails,
      selectedLog: prevState.showDetails ? [] : item.detalhe_logs || [],
      historicalData2: []      
    }));

    this.setState({ tipo:item.nome });    
  }

   

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const { getList, isLoaded, showDetails, selectedLog, filterDate, filterProcesso, filterStatus} = this.state;

    // Filtrar getList com base nos filtros
    const filteredGetList = getList.filter(item => {
      return (
        (!filterDate || format(new Date(item.createdAt), 'yyyy-MM-dd') === filterDate) &&
        (!filterProcesso || item.nome.toLowerCase().includes(filterProcesso.toLowerCase())) &&
        (!filterStatus || item.status.toLowerCase().includes(filterStatus.toLowerCase())) 
   
      );
    });

    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4">
            <CCardHeader>Consulta Logs Execução</CCardHeader>            
            <CCardBody>
              <CForm>
                <CRow className="mb-3">
                  <CCol md={2}>
                    <CFormInput
                      type="date"
                      name="filterDate"
                      value={filterDate}
                      onChange={this.handleInputChange}
                    />
                  </CCol>
                  <CCol md={2}>
                    <CFormInput
                      type="text"
                      placeholder="Processo"
                      name="filterProcesso"
                      value={filterProcesso}
                      onChange={this.handleInputChange}
                    />
                  </CCol>
                  <CCol md={2}>
                    <CFormInput
                      type="text"
                      placeholder="Status"
                      name="filterStatus"
                      value={filterStatus}
                      onChange={this.handleInputChange}
                    />
                  </CCol>
                  
                </CRow>
              </CForm>
              {isLoaded && <CSpinner color="success" style={{ flexDirection: 'row', marginLeft: '50%', alignItems: "center" }} />}
              <CTable align="middle" className="mb-0 border card-body-table table" hover responsive small bordered style={{ fontFamily: "Arial" }}>
                <CTableHead color="dark">
                  <CTableRow color="dark">
                    <CTableHeaderCell>Atualizar</CTableHeaderCell>
                    <CTableHeaderCell>Data</CTableHeaderCell>
                    <CTableHeaderCell>Processo</CTableHeaderCell>
                    <CTableHeaderCell>Mensagem</CTableHeaderCell>
                    <CTableHeaderCell>Status</CTableHeaderCell>               
                    <CTableHeaderCell className="text-center">Detalhes</CTableHeaderCell>
                  </CTableRow>
                </CTableHead>
                <CTableBody>
                  {filteredGetList.map((item, index) => (
                    <CTableRow key={index} color="success" style={{ color: "green" }}>
                      <CTableDataCell className="text-center" onClick={() => this.getLog()}>
                        <CIcon icon={cilReload} title='Detalhes' />
                      </CTableDataCell>
                      <CTableDataCell>{format(new Date(item.createdAt), 'dd/MM/yyyy HH:mm:ss')}</CTableDataCell>
                      <CTableDataCell>{item.nome}</CTableDataCell>
                      <CTableDataCell>{item.mensagem}</CTableDataCell>
                      <CTableDataCell>{item.status}</CTableDataCell>                   
                      <CTableDataCell className="text-center" onClick={() => this.handleShowDetails(item)}>
                        <CIcon icon={cilMagnifyingGlass} title='Detalhes' />
                      </CTableDataCell>
                    </CTableRow>
                  ))}
                </CTableBody>
              </CTable>
              
            </CCardBody>
          </CCard>
        </CCol>

        {showDetails && (
          <CCol xs={12}>
            <CCard className="mb-4">
              <CCardHeader>Detalhes Logs NFs</CCardHeader>
              {isLoaded && <CSpinner color="success" style={{ flexDirection: 'row', marginLeft: '50%', alignItems: "center" }} />}
              <CCardBody>
                <CTable align="middle" className="mb-0 border card-body-table table" hover responsive small bordered style={{ fontFamily: "Arial" }}>
                  <CTableHead color="dark">
                    <CTableRow color="dark">
                      <CTableHeaderCell>Data</CTableHeaderCell>
                      <CTableHeaderCell>Mensagem</CTableHeaderCell>
                      <CTableHeaderCell>Status</CTableHeaderCell>
                      <CTableHeaderCell>NFE</CTableHeaderCell>
                      <CTableHeaderCell>Chave</CTableHeaderCell>                  
                    </CTableRow>
                  </CTableHead>
                  <CTableBody>
                    {selectedLog.map((item, index) => (
                      <CTableRow key={index} color="success" style={{ color: "green" }}>
                        <CTableDataCell>{format(new Date(item.createdat), 'dd/MM/yyyy HH:mm:ss')}</CTableDataCell>
                       <CTableDataCell>{item.mensagem}</CTableDataCell>
                        <CTableDataCell>{item.status}</CTableDataCell>
                        <CTableDataCell>{item.nnf}</CTableDataCell>
                        <CTableDataCell>{item.chavenfe}</CTableDataCell>                     
                      </CTableRow>
                    ))}
                  </CTableBody>
                </CTable>
              </CCardBody>
            </CCard>
          </CCol>
        )}        
      </CRow>
    );
  }
}


