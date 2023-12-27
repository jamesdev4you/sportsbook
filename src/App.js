import React from 'react';
import NavBar from './PageComponents/NavBar/navbar';
import Home from './PageComponents/Home/home';
import Mybets from './PageComponents/MyBets/mybets';
import Dashboard from './PageComponents/Dashboard/dashboard';
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <>


<Routes>
      <Route path='/' element={<Home />} />
      <Route path='/mybets' element={<Mybets />} />
      <Route path='/dashboard' element={<Dashboard />} />
      <Route path="*" element={<Home/>} />
    </Routes>

    </>
  );
}

export default App;
