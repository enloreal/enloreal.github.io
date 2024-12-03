import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
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
      <NavigationMenu />
      <Switch>
        <Route
          exact
          path="/"
          render={(props) => (
            <MainPage {...props} isLoggedIn={isLoggedIn} handleLogin={handleLogin} handleLogout={handleLogout} />
          )}
        />
        <Route path="/practice" component={PracticePage} />
        <Route
          exact
          path="/dictionary"
          render={(props) => <DictionaryPage {...props} words={words} />}
        />
        <Route
          path="/dictionary/:word"
          render={(props) => <WordDetails {...props} words={words} />}
        />
        <Route path="/help" component={HelpPage} />
        <Route
          path="/protected"
          render={() =>
            isLoggedIn ? <ProtectedPage /> : <Redirect to="/" />
          }
        />
        <Route component={NotFound} />
      </Switch>
    </>
  );
}

export default App;