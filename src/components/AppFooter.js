import React from 'react'
import { CFooter } from '@coreui/react'

const AppFooter = () => {
  return (
    <CFooter>
      <div>        
        <span className="ms-1">&copy; 2023 633Tech.</span>
      </div>
      <div className="ms-auto">
        <span className="me-1">Powered by</span>
        <a href="https://coreui.io/react" target="_blank" rel="noopener noreferrer">
        633Tech 
        </a>
      </div>
    </CFooter>
  )
}

export default React.memo(AppFooter)
