import React, { useContext } from 'react';
// import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { UserContext } from '../../../App';
import { useForm } from "react-hook-form";
import { BASEURL } from '../../../constants';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import axios from 'axios';

export default function LoginForm() {

  const [user, setUser] = useContext(UserContext);
  const [modalShow, setModalShow] = useState(false);

  const navigate = useNavigate();

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {

    axios.post(BASEURL + '/users/login', {
      email: data.email,
      password: data.password,
    }).then(res => {
      if (res.data.message === 'User loging successfull...') {
        // console.log(res);
        localStorage.setItem('user', 'user');
        localStorage.setItem('email', data.email);
        setUser('user');
        navigate('/posts');
      } else if (res.data.message === 'Invalid crendentials') {
        setModalShow(true);
      } else {
        alert(res);
      }
    }).catch(err => {
      console.log(err);
    });
  }

  const handleModalClose = () => {
    setModalShow(false)
  }

  return (
    <form className="container mx-auto">
      <div className="mb-3">
        <h1>Iniciar sesión</h1>
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label m-0">Correo electrónico</label>
        <input required type="text" id="email" className="form-control form-control-sm" {...register("email")}></input>
      </div>
      <div className="mb-3">
        <label htmlFor="password" className="form-label m-0">Contraseña</label>
        <input required type="password" id="password" className="form-control form-control-sm" {...register("password")}></input>
      </div>
      <div className="mb-3 text-center">
        <button type="button" className="btn btn-primary text-white"
          onClick={handleSubmit(onSubmit)}>Entrar</button>
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
