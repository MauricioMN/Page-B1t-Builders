import React from 'react'
import './Banner.scss'

export const Banner = () => {
  return (
    <div className="banner">
      <div className="content">
        <h2>Palestra e Mesa redonda</h2>
        <h1>Construindo as melhores aplicações com JavaScript moderno</h1>
        <div className="div-buttons">
          <span className='button-noaction'><strong>Data:</strong> 12/10/2025</span >
          <span className='button-noaction'><strong>Horário:</strong> 16h</span >
          <span className='button-noaction'><strong>Local:</strong> São Paulo</span >
          <span className='button-action'><strong>INSCREVA-SE</strong></span >
        </div>
      </div>
    </div>
  )
}
