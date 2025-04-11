import CIcon from '@coreui/icons-react';
import { CSidebar, CSidebarBrand, CSidebarNav, CSidebarToggler } from '@coreui/react';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { AppSidebarNav } from './AppSidebarNav';

import SimpleBar from 'simplebar-react';

import 'simplebar/dist/simplebar.min.css';

// sidebar nav config
import navigation from '../_nav';

import { sygnet } from './../assets/brand/sygnet';

const AppSidebar = () => {
  const dispatch = useDispatch();
  const unfoldable = useSelector(state => state.sidebarUnfoldable);
  const sidebarShow = useSelector(state => state.sidebarShow);

  return (
    <CSidebar
      position="fixed"
      unfoldable={unfoldable}
      visible={sidebarShow}
      onVisibleChange={visible => {
        dispatch({ type: 'set', sidebarShow: visible });
      }}
    >
      <CSidebarBrand className="d-none d-md-flex" to="/">
        {' '}
        <h4>SIMPLES</h4>
        {/* <CIcon className="sidebar-brand-full" icon={logoNegative} height={35} /> */}
        <CIcon className="sidebar-brand-narrow" height={35} icon={sygnet} />
      </CSidebarBrand>
      <CSidebarNav>
        <SimpleBar>
          <AppSidebarNav items={navigation} />
        </SimpleBar>
      </CSidebarNav>
      <CSidebarToggler
        className="d-none d-lg-flex"
        onClick={() => dispatch({ type: 'set', sidebarUnfoldable: !unfoldable })}
      />
    </CSidebar>
  );
};

export default React.memo(AppSidebar);
