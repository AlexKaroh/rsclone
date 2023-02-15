import './App.css';
import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppContext } from './index';
import IAppContext from './interfaces/IAppContext';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Footer from './components/Footer/Footer';
import AuthLogin from './components/Auth/AuthLogin';
import AuthSignup from './components/Auth/AuthSignup';
import Library from './components/Library/Library';
import Learn from './components/Learn/Learn';
import GameCards from './components/GameCards/GameCards';

function App() {
  const { wordStore } = useContext<IAppContext>(AppContext);
  wordStore.getAllWords();

  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/library/" element={<Library />} />
          <Route path="/learn/" element={<Learn />} />
          <Route path="/games/" element={<GameCards />} />
          <Route path="/login/" element={<AuthLogin />} />
          <Route path="/signup/" element={<AuthSignup />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
