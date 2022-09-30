import React from 'react';
import isologo from '../../../assets/header/isologo.png';

export default function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-light">
      <a href="/"><img src={isologo} alt="logo" height="150" /></a>
      <input class="form-control me-2 w-50" type="search" placeholder="¿Que medicamento Buscas?" />
      <a href="/register" class="btn btn-primary text-white" role="button">Registrarse</a>
      <a href="/login" class="btn btn-primary text-white" role="button">Iniciar Sesión</a>
    </nav>
  )
}
