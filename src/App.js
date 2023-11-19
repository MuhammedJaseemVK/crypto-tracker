import React from 'react';
import HeroSection from './components/HeroSection';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CryptoSection from './components/CryptoPage';

function App() {

  return (
    <div className='h-full w-full bg-violet-500'>
      <Router>
        <Routes>
          <Route path='/' exact element={<HeroSection />} />
          <Route path='/CryptoPage/:id' exact element={<CryptoSection/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App;
