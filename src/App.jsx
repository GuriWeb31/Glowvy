import React from 'react';
import "./App.css";


import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './screens/Inc/Navbar';
import Footer from './screens/Inc/Footer';
import Banner from './screens/Banner';
import WhyChoose from './screens/WhyChoose';
import Benifits from './screens/Benifits';
import TopSelling from './screens/TopSellling';
import Videos from './screens/Videos';
import CustomerReviews from './screens/CutomerReviews';
import BestSelling from './screens/BestSelling';
import Newsletter from './screens/Newsletter';


function Home() {
  return (
    <>
      <Banner />  
      <WhyChoose />
      <Benifits />
      <TopSelling />  
      <Videos />
      <CustomerReviews />
      <BestSelling />
      <Newsletter />
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
