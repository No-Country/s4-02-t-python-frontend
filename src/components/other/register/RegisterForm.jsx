import React, { useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useForm } from "react-hook-form";
import { app } from '../../../App';
import Modal from 'react-bootstrap/Modal';

export default function RegisterForm() {

  const [modalShow, setModalShow] = useState(false);
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data)

    const email = data.email;
    const password = data.password;
    const displayName = data.displayName;
    
    console.log({email, password});

    const auth = getAuth(app);
    createUserWithEmailAndPassword(auth, email, password, displayName)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;

      updateProfile(auth.currentUser, { displayName })
      // const user = auth.currentUser;
      // user.updateDisplayName({
      //   displayName: displayName
      // })

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      setModalShow(true);
      // ..
  });
  };

  const handleModalClose = () => {
    setModalShow(false);
  }

  return (
  <form className="container mx-auto" >
    <div className="mb-3">
      <h1>Crear una cuenta</h1>
    </div>
    <div className="mb-3">
      <label htmlFor="first-name" className="form-label m-0">Nombre(s)</label>
      <input type="text" id="first-name" className="form-control form-control-sm" required {...register("displayName")}></input>
    </div>
    <div className="mb-3">
      <label htmlFor="last-name" className="form-label m-0">Apellido(s)</label>
      <input type="text" id="last-name" className="form-control form-control-sm" required {...register("lastName")}></input>
    </div>
    <div className="mb-3">
      <label htmlFor="email" className="form-label m-0">Correo electrónico</label>
      <input type="text" id="email" className="form-control form-control-sm" autoComplete="off" {...register("email")}></input>
    </div>
    <div className="mb-3">
      <label htmlFor="password" className="form-label m-0">Contraseña</label>
      <input type="password" id="password" className="form-control form-control-sm" autoComplete="new-password" {...register("password")}></input>
    </div>
    <div className="mb-3">
      <label htmlFor="country" className="form-label m-0">Pais</label>
      <input type="text" id="country" className="form-control form-control-sm" {...register("country")}></input>
    </div>
    <div className="mb-3">
      <label htmlFor="city" className="form-label m-0">Ciudad</label>
      <input type="text" id="city" className="form-control form-control-sm" {...register("city")}></input>
    </div>
    <div className="mb-3 text-center">
      <button type="button" className="btn btn-primary text-white" onClick={handleSubmit(onSubmit)}>Crear</button>
    </div>
    <div className="mb-3 text-center">
      <p>Ya tengo una cuenta, <a href="login">iniciar sesión</a></p>
    </div>

    <Modal show={modalShow}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Complete todos los campos</Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary text-white' onClick={handleModalClose}>Cerrar</button>
        </Modal.Footer>
      </Modal>
  </form>
  )
}
