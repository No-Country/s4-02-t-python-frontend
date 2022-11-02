import React, { useEffect, useState } from 'react';
import './App.scss';

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
import Account from './components/pages/account/Account';

export const UserContext = React.createContext();

function App() {

  const [user, setUser] = useState('');
  const [sidebar, setSidebar] = useState(false);
  const [filter, setFilter] = useState('');
  
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

  const filterSearch = (filterQuery) => {
    setFilter(filterQuery);
  };
  
  //iconos
  initializeIcons();

  return (
    <div className="App">
      <UserContext.Provider value={[user, setUser]}>
      <Router>
        <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar} />
        <Header toggleSidebar={toggleSidebar} filterSearch={filterSearch}/>
        <hr className='mt-0 mb-3'/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/account" element={<Account />} />
          <Route path="/donar" element={<CreatePost />} />
          <Route path="/posts" element={<PostsList key={filter} filterQuery={filter} />} />
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