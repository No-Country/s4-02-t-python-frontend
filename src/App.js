// import './App.css';
import './App.scss';
import Home from './components/pages/home/Home';
import Register from './components/pages/register/Register';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from './components/other/header/Header';
import NotFound from './components/pages/404/NotFound';
import Login from './components/pages/login/Login';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home/>,
//     errorElement: <NotFound />,
//   },
//   {
//     path: "/register",
//     element: <Register/>,
//   },
// ]);

function App() {
  return (
    <div class="App">
      <Router>
        <Header/>
        <hr />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
