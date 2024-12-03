import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import MainPage from './MainPage';
import PracticePage from './PracticePage';
import DictionaryPage from './DictionaryPage';
import HelpPage from './HelpPage';
import WordDetails from './components/WordDetails';
import { words } from './components/Words';
import ProtectedPage from './components/ProtectedPage';
import NotFound from './components/NotFound';
import NavigationMenu from './components/NavigationMenu';
import './styles/GeneralStyles.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
    </Router>
  );
}

function AppContent({ isLoggedIn, handleLogin, handleLogout }) {

  return (
    <>
      {<NavigationMenu />}
      <Routes>
        <Route path="/" element={<MainPage isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />} />
        <Route path="/practice" element={<PracticePage />} />
        <Route path="/dictionary" element={<DictionaryPage words={words} />} />
        <Route path="/dictionary/:word" element={<WordDetails words={words} />} />
        <Route path="/help" element={<HelpPage />} />
        <Route
          path="/protected"
          element={isLoggedIn ? <ProtectedPage /> : <Navigate to="/" />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;