import React, { Component } from 'react'
import {
  CRow,
  CCol,
  CDropdown,
  CDropdownMenu,
  CDropdownItem,
  CDropdownToggle,
  CWidgetStatsA,
} from '@coreui/react'
import { getStyle } from '@coreui/utils'
import { CChartBar, CChartLine } from '@coreui/react-chartjs'
import CIcon from '@coreui/icons-react'
import { cilArrowBottom, cilArrowTop, cilOptions } from '@coreui/icons'

//import { GetOrderDetails, GetDashboardDetails } from '../../services';


import { getCookie } from '../../../function';

let id_lider = getCookie("id_lider");
let role = getCookie("role");
export default class Home extends Component {
constructor(props) {
    super(props);
    this.state = {
        getList: [],getList2: [], isloaded: false, status: null, statusList: null,groupList: null,membrosList:null,
        formulariosList:null,offset: 0,total_membros:0,total_celulas:0,
        total_batismo:0,total_membresia:0,total_lider_celula:0,total_disc_superv:0,total_kids_incl:0,
        total_intr_b_nt:0,total_ant_test:0,total_batalha_esp:0,total_tetelestai:0,
        total_vida:0,total_tsd:0,total_discipulado:0
       
    }
}


componentDidMount() {


}

  render() {
    const { getList, isloaded, status, statusList,total_celulas,membrosList,total_membros,
      total_batismo,total_membresia,total_lider_celula,total_disc_superv,total_kids_incl,
      total_intr_b_nt,total_ant_test,total_batalha_esp,total_tetelestai,
      total_vida,total_tsd,total_discipulado } = this.state;
  return (
    <CRow >
      <CCol sm={6} lg={3} >
        <CWidgetStatsA
          className="mb-4"
          color="success"          
          value={
            <>
              {total_celulas}         
            </>
          }
          title="Notas"        
          
        />
      </CCol>
      <CCol sm={6} lg={3} >
        <CWidgetStatsA
          className="mb-4"
          color="info"          
          value={
            <>
              {total_membros}         
            </>
          }
          title="Entrada"        
          
        />
      </CCol>
      <CCol sm={6} lg={3} >
        <CWidgetStatsA
          className="mb-4"
          color="success"          
          value={
            <>
              {total_lider_celula}         
            </>
          }
          title="Saída"        
          
        />
      </CCol>      
      <CCol sm={6} lg={3} >
        <CWidgetStatsA
          className="mb-4"
          color="info"          
          value={
            <>
              {total_lider_celula}         
            </>
          }
          title="Filiais"        
          
        />
      </CCol>      
    </CRow>
  )
}
}

