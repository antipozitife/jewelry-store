import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Main from './parts/main';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
      </Routes>
    </Router>
  );
}

export default App;