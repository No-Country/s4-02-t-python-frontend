import './App.css';
import Home from './components/pages/home/Home';
import Register from './components/pages/register/Register';

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from './components/other/header/Header';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>,
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
