import React from 'react'
import { DescContent } from './DescContent'
import { FormContent } from './FormContent'
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
