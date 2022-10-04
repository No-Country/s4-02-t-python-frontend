import React from 'react';

export default function RegisterForm() {
  return (
  <form className="mx-auto">
    <div className="mb-3">
      <h1>Crear una cuenta</h1>
    </div>
    <div className="mb-3">
      <label htmlFor="first-name" className="form-label m-0">Nombre(s)</label>
      <input type="text" id="first-name" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3">
      <label htmlFor="last-name" className="form-label m-0">Apellido(s)</label>
      <input type="text" id="last-name" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label m-0">Correo electrónico</label>
      <input type="text" id="email" className="form-control form-control-sm" autoComplete="off"></input>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label m-0">Contraseña</label>
      <input type="password" id="password" className="form-control form-control-sm" autoComplete="new-password"></input>
    </div>
    <div className="mb-3">
      <label htmlFor="address" className="form-label m-0">Ciudad</label>
      <input type="text" id="address" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3 text-center">
      <button type="button" className="btn btn-primary text-white">Crear</button>
    </div>
  </form>
  )
}
