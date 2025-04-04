import React, { Component } from 'react'
import swal from 'sweetalert';
import { withRouter } from "react-router";
import PropTypes from "prop-types";

import {
  CCard,
  CCardBody,
  CCardHeader,
  CCol,
  CRow,
  CFormLabel,
  CFormSelect,
  CButton,
  CSpinner,
  CFormInput
} from '@coreui/react'


export default class List extends Component {

  static propTypes = {
    match: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired,
  };

  constructor(props) {
    super(props);
  }
  render() {

    const headerStyles = { display: "flex", justifyContent: "space-between" };

    return (
      <CRow>
        <CCol xs={12}>
          <CCard className="mb-4" >
            <CCardHeader style={headerStyles} >
              <strong>Em construção</strong>
            </CCardHeader>
            <CCardBody>

            </CCardBody>
          </CCard>
        </CCol >


      </CRow>

    )
  }
}
