import { useState } from 'react'

import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ToGet from './components/ToGet'
import Create from './components/Create'
import Update from './components/Update'


function App() {


  return (
    <BrowserRouter>
    <>
      <Routes>
        <Route path='/' element={<ToGet/>} />
        <Route path='/create' element={<Create/>} />
        <Route path='/update/:id' element={<Update />} />
      </Routes>
    </>
    </BrowserRouter>
  )
}

export default App