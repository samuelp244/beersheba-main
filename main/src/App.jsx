import React from 'react';
import {
  BrowserRouter as Router,
Routes,
Route } from 'react-router-dom'
import Main from './Pages/main';
import './index.css';
import MeetingsPage from './Pages/meetingsPage';


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
          <Route path='/meetings' element={<MeetingsPage/>}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
