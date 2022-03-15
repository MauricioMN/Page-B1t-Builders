import React from 'react'
import { Navbar } from './components/navbar/Navbar'
import { Banner } from './components/banner/Banner'
import { Palestrantes } from './components/palestrantes/Palestrantes'
import { Content } from './components/content/Content'


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
