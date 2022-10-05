// import './App.css';
import React from 'react';
import './App.scss';
// import './fonts/Gilroy-Regular.ttf';
import Home from './components/pages/home/Home';
import Register from './components/pages/register/Register';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/other/header/Header';
import NotFound from './components/pages/404/NotFound';
import Login from './components/pages/login/Login';
import Footer from './components/other/footer/Footer';

const userContext = React.createContext('false');

function App() {

  return (
    <div className="App">
      <Router>
        <userContext.Provider value="false">
          <Header/>
        </userContext.Provider>
        <hr className='mt-0 mb-3'/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;