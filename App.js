import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Routes, Route} from 'react-router-dom';
import HomePage from './Homepage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    </>
    
  );
}

export default App;
