import axios from 'axios';
import React, { useContext, useEffect, useMemo, useState } from 'react'
import { useForm } from 'react-hook-form';
import { BASEURL } from '../../../constants';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../../App';


export default function Account() {

    const email = localStorage.getItem('email');
    const [user, setUser] = useContext(UserContext);
    const [userData, setUserData] = useState([]);
    const [successModalShow, setSuccessModalShow] = useState(false);
    const [errorModalShow, setErrorModalShow] = useState(false);
    const [deleteModalShow, setDeleteModalShow] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(BASEURL + `/users`)
            .then(res => {
                setUserData(res.data.find(user => user.email === email));
            })
            .catch(err => console.log(err))
    }, [email])
    
    const { register, handleSubmit, reset } = useForm({
        defaultValues: useMemo(() => {
            return userData;
        }, [userData])
    });
    useEffect(() => {
        reset(userData);
    }, [userData, reset]);

    const onSubmit = (data) => {
        axios.put(BASEURL + `/users/${userData._id.$oid}`, {
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

    const handleModalOpen = () => setDeleteModalShow(true);

    const deleteAccount = () => {
        axios.delete(BASEURL + `/users/${userData._id.$oid}`)
            .then(res => console.log(res))
            .catch(err => console.log(err));
        localStorage.setItem('user', '');
        setUser('');
        navigate('/register');
    }

    const handleModalClose = () => {
        setSuccessModalShow(false);
        setErrorModalShow(false);
        setDeleteModalShow(false);
    }

  return (
    <main className='container'>
        <form className="container mx-auto">
            <div className='container d-flex justify-content-between'>
                <div className="mb-3">
                    <h1>Mi perfil</h1>
                </div>
                <div className="mb-3">
                    <button type="button" className="btn btn-danger text-white" onClick={() => handleModalOpen()}>Eliminar cuenta</button>
                </div>
            </div>

            <Modal show={deleteModalShow} onHide={setDeleteModalShow}>
                <Modal.Header closeButton>
                    <Modal.Title>¡Cuidado!</Modal.Title>
                </Modal.Header>
                <Modal.Body>Eliminar tu cuenta es una acción que no se puede revertir. ¿Estás seguro?</Modal.Body>
                <Modal.Footer>
                    <button className='btn btn-primary text-white' onClick={handleModalClose}>
                        Cancelar
                    </button>
                    <button className='btn btn-danger text-white' onClick={() => deleteAccount()}>
                        Si, quiero borrar mi cuenta
                    </button>
                </Modal.Footer>
            </Modal>

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
