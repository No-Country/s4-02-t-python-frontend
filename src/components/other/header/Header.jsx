import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';
import { NavLink } from 'react-router-dom';
import brandImg from '../../../assets/logotipo.png';

import './header.scss';

export default function Header() {

  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  function signOut () {
    setUser(user => !user);
    navigate('/login');
  }

  return (
    <nav className="navbar navbar-expand-lg bg-white container justify-content-between">
      <div className="col-2">
        <a href="/"><img src={brandImg} alt="logo" height="60" className="mx-3 img-fluid"/></a>
      </div>
      
      <div className="search-container col-6">
        <input className="form-control me-2" type="search" placeholder="¿Que medicamento Buscas?"/>
      </div>

      {user ?
        <div className="navbar-nav justify-content-end">
          <NavLink to="/donar" className="btn btn-secondary m-2">Donar</NavLink>
          <button onClick={() => signOut()} className='btn btn-outline-primary border-0 m-2'>Cerrar sesión</button>
        </div>
      :
        <div className="navbar-nav justify-content-end">
          <NavLink to="/register" className="btn btn-secondary m-2">Registrarse</NavLink>
          <NavLink to="/login" className="btn btn-secondary m-2" activeclassnmame="active">Iniciar Sesión</NavLink>
        </div>
      }
    </nav>
  )
}
