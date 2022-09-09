import React from 'react';
import {
  BrowserRouter as Router,
  Navigate,
Routes,
Route } from 'react-router-dom'
import Main from './Pages/main';
import './index.css';
import SeriesPage from './Pages/seriesPage';
import MeetingsListPage from './Pages/meetingsListPage';
import MeetingsPage from './Pages/meetingsPage';
import LivePage from './Pages/livePage';
import Locations from './Pages/locations';
import Gallery from './Pages/Gallery';
import OurSociety from './Pages/OurSociety';
import AboutUs from './Pages/AboutUs';
import PageNotFound from './Pages/PageNotFound';
import Navbar from './Components/HomeComponents/Navbar';
import Footer from './Components/HomeComponents/Footer';



function App() {

  
  return (
    <>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/meetings' element={<MeetingsListPage CurrSermonType="meetings"/>}></Route>
            <Route path='/meetings/:videoId' element={<MeetingsPage/>}></Route>
            <Route path='/series' element={<MeetingsListPage CurrSermonType="series"/>}></Route>
            <Route path='/series/:playlistId' element={<SeriesPage/>}></Route>
            <Route path='/live' element={<LivePage/>}></Route>
            <Route path='/locations' element={<Locations/>}></Route>
            <Route path='/gallery' element={<Gallery/>}></Route>
            <Route path='/oursociety' element={<OurSociety/>}></Route>
            <Route path='/about' element={<AboutUs/>}></Route>
            <Route path='/index.html' element={<Navigate to='/' replace/>}></Route>
            <Route path='*' element={<PageNotFound/>}></Route>
            
          </Routes>
          <Footer/>
        </Router>

    </>
  );
}

export default App;
