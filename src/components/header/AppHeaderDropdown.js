import React from 'react'
import {
  CAvatar,
  CBadge,
  CDropdown,
  CDropdownDivider,
  CDropdownHeader,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
  CFormLabel,
  CCol
} from '@coreui/react'
import {
  cilBell,
  cilCreditCard,
  cilCommentSquare,
  cilEnvelopeOpen,
  cilFile,
  cilLockLocked,
  cilSettings,
  cilTask,
  cilUser,
} from '@coreui/icons'
import CIcon from '@coreui/icons-react'

import avatar8 from './../../assets/images/avatars/User.png'
import { getCookie } from './function';
import { GetUserLogin } from '../services';

let nome = getCookie("nome");


const handleLogoutClick = () => {
  GetUserLogin.logout()
  window.location.assign("/admin")
};

const AppHeaderDropdown = () => {

  
  return (
    <CDropdown variant="nav-item">
      <CDropdownToggle placement="bottom-end" className="py-0" caret={false}>
      <CCol sd={1} style={{ marginRight:"10%",flexDirection: 'col'}} > 
       
        <CAvatar src={avatar8} size="md" />
      </CCol>  
      </CDropdownToggle>
      <CDropdownMenu className="pt-0" placement="bottom-end">       
       
        <CDropdownHeader className="bg-light fw-semibold py-2">{nome}</CDropdownHeader>
        <CDropdownItem href="/admin/user/create">
         <CIcon icon={cilUser} className="me-2" />
          Perfil
        </CDropdownItem>
        <CDropdownItem href="#">
          <CIcon icon={cilSettings} className="me-2" />
          Configurações
        </CDropdownItem>       
        <CDropdownDivider />
        <CDropdownItem onClick={handleLogoutClick}>
          <CIcon icon={cilLockLocked} className="me-2" />
          Sair
        </CDropdownItem>
      </CDropdownMenu>
    </CDropdown>
  )
}

export default AppHeaderDropdown
