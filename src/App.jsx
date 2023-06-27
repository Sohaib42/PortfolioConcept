import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import Carousel from './components/Carousel'
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import About from './components/About';
import Background from './components/Background';

function App() {
  return (
    <div>
      <Background />
      <Router>
        <Navigation />
        <About />
        <Routes>
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
