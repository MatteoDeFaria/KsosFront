import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './page/404';
import LeaderboardPage from './page/Leaderboard';

function Navigation() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LeaderboardPage />} />
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
