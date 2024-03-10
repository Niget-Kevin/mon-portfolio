import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home/Home';
import Error from './Pages/Error/Error';
import Achivement from './Pages/Achivement/Achivement';
import './App.scss';
import './style/mixins.scss'


function App() {
  return (
    <React.StrictMode>
      <Router>
        <div className='main_container'>
          <main className=''>
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Achivement/:id" element={<Achivement/>} />    
              <Route path="*" element={<Error />} /> 
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </React.StrictMode>
  );
}


export default App;
