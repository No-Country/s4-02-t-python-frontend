import React, { useContext } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from '../../../App';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

export default function LoginForm() {

  const [user, setUser] = useContext(UserContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();

  const auth = getAuth();
  
  function signIn() {

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        console.log(user, user.city);

        setUser(user => !user);
        navigate('/donar');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        setModalShow(true);
      });


      
  }

  const handleEmail = (e) => {
    setEmail(e.target.value);
  }

  const handlePassword = (e) => {
    setPassword(e.target.value);
  }

  const handleModalClose = () => {
    setModalShow(false)
  }

  return (
    <form className="col-5 mx-auto">
      <div className="mb-3">
        <h1>Iniciar sesión</h1>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label m-0">Correo electrónico</label>
        <input required type="text" id="email" className="form-control form-control-sm" value={email} onChange={handleEmail}></input>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label m-0">Contraseña</label>
        <input required type="password" id="password" className="form-control form-control-sm" value={password} onChange={handlePassword}></input>
      </div>
      <div className="mb-3 text-center">
        <button type="button" className="btn btn-primary text-white"
          onClick={() => signIn()}>Entrar</button>
      </div>
      <div className="mb-3 text-center">
        <p>Aún no tengo una cuenta, <a href="register">registrarme</a></p>
      </div>

      <Modal show={modalShow}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Usuario y/o contraseña incorrectos</Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary text-white' onClick={handleModalClose}>Cerrar</button>
        </Modal.Footer>
      </Modal>
    </form>
  )
}
