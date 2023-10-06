// src/components/AppRouter.tsx

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './Home';
import { Settings } from './Settings';
import { Models } from './Models';

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/models" element={<Models />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
