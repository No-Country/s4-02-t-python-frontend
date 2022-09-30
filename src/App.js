// import './App.css';
import './App.scss';
import Home from './components/pages/home/Home';
import Register from './components/pages/register/Register';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/other/header/Header';
import NotFound from './components/pages/404/NotFound';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
    errorElement: <NotFound />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
]);

function App() {
  return (
    <div class="App">
      <Header/>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
