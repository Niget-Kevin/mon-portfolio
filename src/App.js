import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './pages/Home/Home';
import './App.scss';

function App() {
  return (
    <React.StrictMode>
      <Router>
        <div>
          <main className='main_container'>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />    
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}


export default App;
