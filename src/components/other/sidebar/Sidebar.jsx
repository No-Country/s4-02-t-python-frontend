import React, { useContext } from 'react';
import './sidebar.scss';
import { UserContext } from '../../../App';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Sidebar({sidebar, toggleSidebar}) {

  const [user, setUser] = useContext(UserContext);

  const navigate = useNavigate();

  function signOut () {
    setUser(user => !user);
    navigate('/login');
  }

  return (
    <div className={sidebar == true ? 'open' : 'closed'}>
        <div className="">
          <div className='row'>
            <button onClick={toggleSidebar} className="btn text-white m-2">X</button>
          </div>
          <div className='' onClick={toggleSidebar}>
            {user ?
              <div className='row'>
                <NavLink to="/donar" className="btn text-white m-2">Donar</NavLink>
                <NavLink to="/edit-profile" className="btn text-white m-2">Editar Perfil</NavLink>
                <button onClick={() => signOut()} className='btn text-white m-2'>Cerrar sesión</button>
              </div>
            :
              <div className='row'>
                <NavLink to="/register" className="btn text-white m-2">Registrarse</NavLink>
                <NavLink to="/login" className="btn text-white m-2">Iniciar Sesión</NavLink>
              </div>
            }
            <div className='row'>
              <NavLink to="/sobre-nosotros" className="btn text-white m-2">Sobre nosotros</NavLink>
              <NavLink to="/ayuda" className="btn text-white m-2">Ayuda</NavLink>
            </div>
          </div>
        </div>
    </div>
  )
}
