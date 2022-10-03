import React from 'react';

export default function LoginForm() {
  return (
    <form class="col-5 mx-auto">
    <div class="mb-3">
      <h1>Iniciar sesión</h1>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label m-0">Correo electrónico</label>
      <input type="text" id="email" class="form-control form-control-sm"></input>
    </div>
    <div class="mb-3">
      <label for="password" class="form-label m-0">Contraseña</label>
      <input type="password" id="password" class="form-control form-control-sm"></input>
    </div>
    <div class="mb-3 text-center">
      <button type="button" class="btn btn-primary text-white">Entrar</button>
    </div>
  </form>
  )
}
