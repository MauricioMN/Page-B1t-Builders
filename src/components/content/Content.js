import React from 'react'
import { DescContent } from '../desc-content/DescContent'
import { FormContent } from '../form-content/FormContent'
import './Content.scss'

export const Content = () => {
  return (
    <div className="content">
      <div className="content-footer">
        <DescContent/>
        <FormContent />
      </div>
    </div>
  )
}
