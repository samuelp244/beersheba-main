import React from 'react';
import {
  BrowserRouter as Router,
Routes,
Route } from 'react-router-dom'
import Main from './Pages/main';
import './index.css';
import SeriesPage from './Pages/seriesPage';
import MeetingsListPage from './Pages/meetingsListPage';
import MeetingsPage from './Pages/meetingsPage';



function App() {
  return (
    <>
    
        <Router>
          <Routes>
            <Route path='/' element={<Main />}></Route>
            <Route path='/meetings' element={<MeetingsListPage CurrSermonType="meetings"/>}></Route>
            <Route path='/meetings/:videoId' element={<MeetingsPage/>}></Route>
            <Route path='/series' element={<MeetingsListPage CurrSermonType="series"/>}></Route>
            <Route path='/series/:playlistId' element={<SeriesPage/>}></Route>
          </Routes>
        </Router>
      
    </>
  );
}

export default App;
