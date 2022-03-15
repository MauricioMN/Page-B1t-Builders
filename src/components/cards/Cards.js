import React from 'react'
import { Card } from 'react-bootstrap'
import localData from '../../data.json'
import { DivCards } from './CardsStyle.js'

export const Cards = () => {
  return (
    <DivCards>
      {localData.map((render, index) => {
        return (
          <Card style={{ width: '18rem' }} key={index}>
            <div className="ellipse">
              <Card.Img
                variant="top"
                src={render.imageUrl}
                alt={render.imageAlt}
              />
            </div>
            <Card.Body>
              <Card.Title>{render.name}</Card.Title>
              <Card.Text>{render.job}</Card.Text>
            </Card.Body>
          </Card>
        )
      })}
    </DivCards>
  )
}
