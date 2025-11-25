import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './screens/Inc/Navbar';
import Footer from './screens/Inc/Footer';
import Banner from './screens/Inc/Banner';

function Home() {
  return (
    <>
      <Banner />
    </>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} /> 
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
