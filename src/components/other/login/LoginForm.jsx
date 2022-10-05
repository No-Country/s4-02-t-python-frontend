import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { useNavigate } from 'react-router-dom';

export default function LoginForm() {

  const [ user, setUser ] = useContext(UserContext);
  const navigate = useNavigate();

  function signIn () {
    setUser(user => !user);
    navigate('/donar');
  }

  return (
    <form className="col-5 mx-auto">
    <div className="mb-3">
      <h1>Iniciar sesión</h1>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label m-0">Correo electrónico</label>
      <input type="text" id="email" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label m-0">Contraseña</label>
      <input type="password" id="password" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3 text-center">
      <button type="button" className="btn btn-primary text-white" 
      onClick={() => signIn()}>Entrar</button>
    </div>
  </form>
  )
}
