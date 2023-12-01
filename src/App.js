
import React from 'react';
import {  Route, Routes, BrowserRouter } from 'react-router-dom';
import Navbar from './Componenets/Navbar';

import Login from './Componenets/Login';
import Signup from './Componenets/SignUp';
import Favorites from './Componenets/Favourite';
import Home from './Componenets/HomePage'
import MovieDetails from './Componenets/MovieDetails';
function App() {
  return <BrowserRouter>
  <Navbar/>
  <Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/signup" element={<Signup/>}/>
  <Route path="/favorites" element={<Favorites/>}/>
  <Route path="/:id" element={<MovieDetails/>}/>
  </Routes>
  </BrowserRouter>;
}

export default App;

