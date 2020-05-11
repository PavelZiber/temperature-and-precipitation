import React from 'react'

export const Layout: React.FC = ({ children }) => (
  <div className='p-grid p-justify-center'>
    <div className='p-col-11'>{children}</div>
  </div>
)
