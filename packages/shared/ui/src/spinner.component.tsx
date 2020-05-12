import React from 'react'
import { ProgressSpinner } from 'primereact/progressspinner'

export const Spinner: React.FC = () => (
  <div className='p-grid p-dir-col p-align-center'>
    <div className='p-col'>
      <ProgressSpinner />
    </div>
  </div>
)
