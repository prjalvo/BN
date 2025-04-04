import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilNotes,
  cilCalendarCheck,
  cilFire,
  cilSpeedometer,
  cilStar,
  cilNewspaper,
  cilMagnifyingGlass,
  cilPlus,
  cilCog,
  cilGroup,
  cilBook,
  cilEqualizer,
  cilVoiceOverRecord,
  cilUserFollow,
  cilUser,
  cilSitemap,
  cilHouse
} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'
import { getCookie } from './function';


const _nav = [
  {
    component: CNavItem,
    name: 'Home',
    to: '/dashboard',        
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'light',      
    },
  },
  {
    component: CNavTitle,
    name: 'Gestão',    
  }, 

  {
    component: CNavGroup,
    name: 'Usuários',
    icon: <CIcon icon={cilGroup} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Ver',
        to: '/admin/user/list',
        icon: <CIcon icon={cilMagnifyingGlass} customClassName="nav-icon" />,
      },
      {
        component: CNavItem,
        name: 'Criar',
        to: '/admin/user/create',
        icon: <CIcon icon={cilPlus} customClassName="nav-icon" />,
      },     
    ],
  },  
  {
    component: CNavTitle,
    name: 'Integrações',
  },
  {
    component: CNavGroup,
    name: 'Execução',
    icon: <CIcon icon={cilCog} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Status',
        to: '/admin/logs/list',
        icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
      }     
    ],
  },

  
]

export default _nav
