import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import MainPage from './MainPage';
import PracticePage from './PracticePage';
import DictionaryPage from './DictionaryPage';
import HelpPage from './HelpPage';
import './styles/generalStyles.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/dictionary" element={<DictionaryPage />} />
        <Route path="/help" element={<HelpPage />} />
      </Routes>
    </Router>
  );
}

export default App;