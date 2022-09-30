import React from 'react';
import { NavLink } from 'react-router-dom';
import isologo from '../../../assets/header/isologo.png';

import './header.scss';

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <a href="/"><img src={isologo} alt="logo" height="60" /></a>

      <input class="form-control me-2 w-50" type="search" placeholder="¿Que medicamento Buscas?" />

      <div class="navbar-nav">
        <NavLink to="/register" className="btn btn-primary text-white">Registrarse</NavLink>
        <NavLink to="/login" className="btn btn-primary text-white" activeClassName="active">Iniciar Sesión</NavLink>
      </div>
    </nav>
  )
}
