import React, { useState } from 'react';
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

export const UserContext = React.createContext();

function App() {

  const [user, setUser] = useState(false);
  const [sidebar, setSidebar] = useState(false);

  const toggleSidebar = () => {
    setSidebar(!sidebar);
  };

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