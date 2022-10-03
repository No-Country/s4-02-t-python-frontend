import React from 'react';
import { NavLink } from 'react-router-dom';
import isologo from '../../../assets/header/isologo.png';

import './header.scss';

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-light container justify-content-between">
      <div class="col-2">
        <a href="/"><img src={isologo} alt="logo" height="60" class="mx-3"/></a>
      </div>
      
      <div class="col-6">
        <input class="form-control me-2" type="search" placeholder="¿Que medicamento Buscas?"/>
      </div>

      <div class="navbar-nav col justify-content-end">
        <NavLink to="/register" className="btn btn-secondary m-2">Registrarse</NavLink>
        <NavLink to="/login" className="btn btn-secondary m-2" activeClassName="active">Iniciar Sesión</NavLink>
      </div>
    </nav>
  )
}
