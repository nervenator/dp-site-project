import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AuthState from './context/auth/AuthState';
import ImageState from './context/images/ImageState';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Navbar from './components/layout/Navbar';
import Container from './components/layout/Container';
import Home from './components/pages/Home';
import ChannelPage from './components/pages/ChannelPage';
import Gallery from './components/pages/Gallery';
import LoginForm from './components/pages/LoginForm';
import './styles/App.scss';

function App() {
  return (
    <div className='App'>
      <AuthState>
        <ImageState>
          <Header />
          <Container>
            <Router>
              <Navbar />
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/twitch' component={ChannelPage} />
                <Route exact path='/art' component={Gallery} />
                <Route exact path='/login' component={LoginForm} />
              </Switch>
            </Router>
          </Container>
          <Footer />
        </ImageState>
      </AuthState>
    </div>
  );
}

export default App;
