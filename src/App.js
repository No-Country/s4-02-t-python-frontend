import React, { useEffect, useState } from 'react';
import './App.scss';

// import { initializeApp } from "firebase/app";
// import { getAuth } from "firebase/auth";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from './components/pages/home/Home';
import Register from './components/pages/register/Register';
import Header from './components/other/header/Header';
import NotFound from './components/pages/404/NotFound';
import Login from './components/pages/login/Login';
import Footer from './components/other/footer/Footer';
import CreatePost from './components/pages/create-post/CreatePost';
import PostDetail from './components/pages/post-detail/PostDetail';
import PostsList from './components/pages/posts-list/PostsList';
import Sidebar from './components/other/sidebar/Sidebar';

import { initializeIcons } from '@fluentui/font-icons-mdl2';


export const UserContext = React.createContext();

// const firebaseConfig = {
//   apiKey: "AIzaSyCiEDxGjzsAs0kl1iB-SFQrq6795PMESsg",
//   authDomain: "hermes-9f08e.firebaseapp.com",
//   databaseURL: "https://hermes-9f08e-default-rtdb.firebaseio.com",
//   projectId: "hermes-9f08e",
//   storageBucket: "hermes-9f08e.appspot.com",
//   messagingSenderId: "834436793034",
//   appId: "1:834436793034:web:a6c5c1df1608e0df626a33",
//   measurementId: "G-QPQCKTJ9EM"
// };

// export const app = initializeApp(firebaseConfig);
// const auth = getAuth(app);

function App() {

  const [user, setUser] = useState('');
  const [sidebar, setSidebar] = useState(false);
  
  useEffect(() => {
    const localUser = localStorage.getItem('user');
    if (localUser === '') {
      setUser('');
    } else {
      setUser('user');
    }
    
  }, [user])
  

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };
  
  initializeIcons();

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
        <Header toggleSidebar={toggleSidebar} />
        <hr className='mt-0 mb-3'/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/donar" element={<CreatePost />} />
          <Route path="/posts" element={<PostsList />} />
          <Route path="/post/:id" element={<PostDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer/>
      </Router>
      </UserContext.Provider>
    </div>
  );
}

export default App;