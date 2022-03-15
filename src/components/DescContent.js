import React from 'react'
import './DescContent.scss'

export const DescContent = () => {
  return (
    <div className="main-content">
      <div className="desc-content ">
        <div className="content-title">
          <h1>Conteúdo</h1>
          <span className="subItem"></span>
        </div>
        <div className="descItems">
          <p>
            A linguagem JavaScript evoluiu muito desde o início da web.
            Antigamente, o JavaScript servia apenas para coisas simples e
            firulas desnecessárias, hoje em dia é a principal tecnologia da web,
            junto com o advento das single page applications e das webapps, o
            JavaScript se tornou ainda mais necessário e o seu ritmo de evolução
            acelerou consideravelmente.
          </p>
          <span>Objetivo</span>
          <p>
            Explicar como funcionam as camadas de desenvolvimento web, dando um
            panorama do mercado de trabalho.
          </p>
          <span>A quem se destina o curso</span>
          <p>Profissionais frontend que querem ingresssar no mundo backend.</p>
          <span>Conteúdo da palestra</span>
          <ul>
            <li>A linguagem JavaScript antes e agora</li>
            <li>JavaScript no client-side</li>
            <li>JavaScript no server-side</li>
            <li>JavaScript no banco de dados</li>
            <li>Vantagens de ter uma mesma linguagem</li>
          </ul>
        </div>
      </div>
    </div>
  )
}
