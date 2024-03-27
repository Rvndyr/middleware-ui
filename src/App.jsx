import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import Nav from './components/Nav'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard';


function App() {

  return (
    <>
    <Nav />

    <Routes>
      <Route exact path='/Login' element={<Login/>} />
      <Route exact path='/' element={<Dashboard/>} />

    </Routes>
    </>
  )
}

export default App
