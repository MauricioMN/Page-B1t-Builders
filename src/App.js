import React from 'react'
import { Navbar } from './components/Navbar'
import { Banner } from './components/Banner'
import { Palestrantes } from './components/Palestrantes'
import { Content } from './components/Content'


function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <Palestrantes />
      <Content />
    </div>
  )
}

export default App
