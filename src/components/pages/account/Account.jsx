import axios from 'axios';
import React, { useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form';
import { BASEURL } from '../../../constants';
import Modal from 'react-bootstrap/Modal';

export default function Account() {

    const email = localStorage.getItem('email');
    const [user, setUser] = useState([]);
    const [successModalShow, setSuccessModalShow] = useState(false);
    const [errorModalShow, setErrorModalShow] = useState(false);

    useEffect(() => {
        axios.get(BASEURL + `/users`)
            .then(res => {
                setUser(res.data.find(user => user.email === email));
            })
            .catch(err => console.log(err))
    }, [email])
    
    const { register, handleSubmit, reset } = useForm({
        defaultValues: useMemo(() => {
            return user;
        }, [user])
    });
    useEffect(() => {
        reset(user);
    }, [user, reset]);

    const onSubmit = (data) => {
        axios.put(BASEURL + `/users/${user._id.$oid}`, {
            first_name: data.first_name,
            last_name: data.last_name,
            email: data.email,
            password: data.new_password,
            country: data.country,
            city: data.city
        }).then(res => {
            if (res.data.message.includes('was updated successfully')) {
                setSuccessModalShow(true);
            } else if (res.data.message === 'Some fields without information') {
                setErrorModalShow(true);
            }
        }).catch(err => console.log(err));
    }

    const handleModalClose = () => {
        setSuccessModalShow(false);
        setErrorModalShow(false);
    }

  return (
    <main className='container'>
        <form className="container mx-auto">
            <div className="mb-3">
                <h1>Mi perfil</h1>
            </div>
            <div className="mb-3">
                <label htmlFor="first-name" className="form-label m-0">Nombre(s)</label>
                <input type="text" id="first-name" className="form-control form-control-sm" required {...register("first_name")}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="last-name" className="form-label m-0">Apellido(s)</label>
                <input type="text" id="last-name" className="form-control form-control-sm" required {...register("last_name")}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="email" className="form-label m-0">Correo electrónico</label>
                <input type="text" id="email" className="form-control form-control-sm" autoComplete="off" {...register("email")}></input>
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label m-0">Nueva contraseña</label>
                <input type="password" id="password" className="form-control form-control-sm" autoComplete="new-password" {...register("new_password")}></input>
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
                <button type="button" className="btn btn-primary text-white" onClick={handleSubmit(onSubmit)}>Editar</button>
            </div>

            <Modal show={successModalShow}>
                <Modal.Header closeButton>
                <Modal.Title>¡Hecho!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Los datos fueron actualizados correctamente</Modal.Body>
                <Modal.Footer>
                <button className='btn btn-primary text-white' onClick={handleModalClose}>Cerrar</button>
                </Modal.Footer>
            </Modal>
            <Modal show={errorModalShow}>
                <Modal.Header closeButton>
                <Modal.Title>Error</Modal.Title>
                </Modal.Header>
                <Modal.Body>Complete todos los campos correctamente</Modal.Body>
                <Modal.Footer>
                <button className='btn btn-primary text-white' onClick={handleModalClose}>Cerrar</button>
                </Modal.Footer>
            </Modal>
        </form>
    </main>
  )
}
