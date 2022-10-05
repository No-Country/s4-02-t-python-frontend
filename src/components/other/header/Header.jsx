import React from 'react';
import { NavLink } from 'react-router-dom';
import isologo from '../../../assets/header/isologo.png';

import './header.scss';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg bg-white container justify-content-between">
      <div className="col-2">
        <a href="/"><img src={isologo} alt="logo" height="60" className="mx-3"/></a>
      </div>
      
      <div className="search-container col-6">
        <input className="form-control me-2" type="search" placeholder="¿Que medicamento Buscas?"/>
      </div>

      <div className="navbar-nav justify-content-end">
        {/* <span> */}
        <NavLink to="/register" className="btn btn-secondary m-2">Registrarse</NavLink>
        <NavLink to="/login" className="btn btn-secondary m-2" activeclassnmame="active">Iniciar Sesión</NavLink>
        {/* </span> */}
      </div>
    </nav>
  )
}
