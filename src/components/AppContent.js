import React, { Suspense } from 'react'
import { Navigate, Route, BrowserRouter } from 'react-router-dom'
import { CContainer, CSpinner } from '@coreui/react'
import { getCookie } from '../function';
// routes config


const AppContent = () => {
  return (
    <CContainer lg>
      <Suspense fallback={<CSpinner color="primary" />}>
        <BrowserRouter>
          {routes.map((route, idx) => {
            return (
              route.element && (
                <Route
                  key={idx}
                  path={route.path}
                  exact={route.exact}
                  name={route.name}
                  element={<route.element />}
                />
              )
            )
          })}

       
        </BrowserRouter>
      </Suspense>
    </CContainer>
  )
}

export default React.memo(AppContent)
