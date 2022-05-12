import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from './pages/Homepage';
import Navigation from './components/Navigation';
import CoinPage from './pages/CoinPage';
import UserContextProvider from './context/UserContext';
import FavCoinContextProvider from './context/FavCoinContext';

import ProtectedRoute from './components/ProtectedRoute';
import TrendingPage from './pages/TrendingPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage';
import AboutCrypto from './pages/About-crypto/AboutCrypto';
import Footer from './components/Footer';

function App() {
  return (
    <div id='App'>
      <UserContextProvider>
        <FavCoinContextProvider>
          <BrowserRouter>
            <Navigation />
            <Switch>
              <Route exact path='/'>
                <Homepage />
              </Route>

              <Route exact path='/login'>
                <LoginPage />
              </Route>

              <ProtectedRoute exact path='/profile' component={ProfilePage} />

              <Route path='/crypto/:id'>
                <CoinPage />
              </Route>

              <Route path='/about-crypto'>
                <AboutCrypto />
              </Route>

              <Route path='/trending'>
                <TrendingPage />
              </Route>
            </Switch>
            <Footer />
          </BrowserRouter>
        </FavCoinContextProvider>
      </UserContextProvider>
    </div>
  );
}

export default App;
