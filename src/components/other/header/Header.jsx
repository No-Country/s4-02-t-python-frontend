import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { BASEURL } from '../../../constants';
import axios from 'axios';
import { UserContext } from '../../../App';
import { NavLink } from 'react-router-dom';
import brandImg from '../../../assets/logotipo.png';
import { Icon } from '@fluentui/react/lib/Icon';

import './header.scss';

export default function Header({toggleSidebar}) {

  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  function signOut () {
    // axios.post(BASEURL + '/users/logout', {
    //   username: u
    // }).then(res => {
    //   console.log(res);
    // }).catch(err => {
    //   console.log(err);
    // });
    setUser(user => !user);
    navigate('/login');
  };

  const search = () => {
    navigate('/posts');
  };

  const MyIcon = () => <Icon iconName="GlobalNavButton" />;

  return (
    <nav className="navbar navbar-expand-lg bg-white container justify-content-between">
      <div className="col-2">
        <NavLink to="/" className="brand-img"><img src={brandImg} alt="logo" height="60" className="mx-3 img-fluid"/></NavLink>
      </div>
      
      <div className="search-container col-6">
        <input className="form-control me-2" type="search" placeholder="¿Que medicamento Buscas?"
        onKeyPress={() => search()}/>
      </div>

      <div className='navbar-mobile'>
        <button onClick={toggleSidebar} className="btn"><MyIcon /></button>
      </div>
      <div className='navbar-desktop'>
        {user ?
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
