import React from 'react';
import {
  BrowserRouter as Router,
Routes,
Route } from 'react-router-dom'
import Main from './Pages/main';
import './index.css';
import MeetingsPage from './Pages/meetingsPage';
import SeriesPage from './Pages/seriesPage';
import Navbar from './Components/HomeComponents/Navbar';
import Footer from './Components/HomeComponents/Footer';


function App() {
  return (
    <>
    
        <Router>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/meetings' element={<MeetingsPage CurrSermonType="meetings"/>}></Route>
            <Route path='/series' element={<MeetingsPage CurrSermonType="series"/>}></Route>
            <Route path='/series/:playlistId' element={<SeriesPage/>}></Route>
          </Routes>
        </Router>
      
    </>
  );
}

export default App;
