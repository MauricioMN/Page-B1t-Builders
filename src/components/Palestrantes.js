import React from 'react'
import { Cards } from './Cards'
import './Palestrantes.scss'

export const Palestrantes = () => {
  return (
    <div>
      <div className="content">
        <div className="content-items">
          <h1>Palestrantes</h1>
          <span className="subItem"></span>
        </div>
        <Cards />
      </div>
    </div>
  )
}
