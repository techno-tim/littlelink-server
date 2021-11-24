import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../Home/Home';

const App = () => (
  <div className="container">
    <Routes>
      <Route exact path="/" element={<Home />} />
    </Routes>
  </div>
);

export default App;
