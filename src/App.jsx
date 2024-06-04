import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import React from 'react';
import Home from './pages/home';
import Actu from './pages/actu';
import Photo from './pages/photo';
import Course from './pages/course';


import './App.css'



function App() {
  

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/actualite' element={<Actu />} />
        <Route path='/photo' element={<Photo />} />
        <Route path='/course' element={<Course />} />

      </Routes>
    </Router>
     
    </>
  )
}

export default App
