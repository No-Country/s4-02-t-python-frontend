import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import { NavLink } from 'react-router-dom';
import brandImg from '../../../assets/logotipo.png';
import { Icon } from '@fluentui/react/lib/Icon';

import './header.scss';
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';
import { BASEURL } from '../../../constants';

export default function Header({toggleSidebar, filterSearch}) {

  const [user, setUser] = useContext(UserContext);
  const [filter, setFilter] = useState('');

  const navigate = useNavigate();

  function signOut () {
    axios.get(BASEURL + '/users/logout')
    .then(res => {
      // console.log(res.data.message);
    }).catch(err => {
      console.log(err);
    });
    localStorage.setItem('user', '');
    setUser('');
    navigate('/login');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      navigate('/posts');
    }
  };

  const handleChange = (e) => {
    setFilter(e.target.value);
  }

  useEffect(() => {
    filterSearch(filter);
  }, [filter, filterSearch])

  const NavIcon = () => <Icon iconName="GlobalNavButton" />;

  return (
    <nav className="navbar navbar-expand-lg bg-white container justify-content-between">
      <div className="col-2">
        {
          user === 'user' ? 
          <NavLink to="/posts" className="brand-img"><img src={brandImg} alt="logo" height="60" className="mx-3 img-fluid"/></NavLink>
          :
          <NavLink to="/" className="brand-img"><img src={brandImg} alt="logo" height="60" className="mx-3 img-fluid"/></NavLink>
        }
      </div>
      
      <div className="search-container w-50">
        <input className="form-control me-2" type="search" placeholder="¿Que medicamento Buscas?" value={filter}
        onKeyDown={handleKeyDown}
        onChange={handleChange} />
      </div>

      <div className='navbar-mobile'>
        <button onClick={toggleSidebar} className="btn"><NavIcon /></button>
      </div>
      <div className='navbar-desktop'>
        {user === 'user' ?
          <div className="navbar-nav justify-content-end">
            <NavLink to="/donar" className="btn btn-secondary m-2">Donar</NavLink>
            <button onClick={() => signOut()} className='btn btn-outline-primary border-0 m-2'>Cerrar sesión</button>
          </div>
        :
          <div className="navbar-nav justify-content-end">
            <NavLink to="/register" className="btn btn-secondary m-2">Registrarse</NavLink>
            <NavLink to="/login" className="btn btn-secondary m-2">Iniciar Sesión</NavLink>
          </div>
        }
      </div>
    </nav>
  )
}
