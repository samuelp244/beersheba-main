import React from 'react';
import {
  BrowserRouter as Router,
Routes,
Route } from 'react-router-dom'
import Main from './Pages/main';
import './index.css';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Main />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
