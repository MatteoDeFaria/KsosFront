import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './page/404';
import Leaderboard from './page/Leadeboard';

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Leaderboard />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function App() {
  return (
    <div style={{ height: '100%' }}>
      <Navigation />
    </div>
  );
}

export default App;
