import axios from 'axios';
import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useForm } from "react-hook-form";
// import { useNavigate } from 'react-router-dom';
import { BASEURL } from '../../../constants';
import Modal from 'react-bootstrap/Modal';

export default function CreatePostForm() {
  
  const [medicines, setMedicines] = useState([]);
  const [modalShow, setModalShow] = useState(false);
  // const navigate = useNavigate();
  let medicineName;

  useEffect(() => {
    async function fetchMedicines() {
      await axios.get(BASEURL + '/medicines')
        .then(res => {
          setMedicines(res.data);
        })
    }
    fetchMedicines();
  }, [])

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => {
    console.log(data);

    // const formData = new FormData();
    // formData.append("image", data.image[0]);

    // console.log(formData.getAll("image"));

    // for (var pair of formData.entries()) {
    //   console.log(pair[0]+ ', ' + pair[1]); 
    // }

    // buscando el nombre correspondiente
    // medicineName = medicines.find(medication => medication._id.$oid === data.name);

    const config = {
      headers:{
        'Content-Type': 'application/json',
        "Access-Control-Allow-Origin": "*"
      }
    };

    axios.post(BASEURL + '/post/create_post', {
      publication_type: "donacion de medicamento",
      // image: medicineName.name,
      // drug_name: medicineName._id.$oid,
      image: data.name,
      drug_name: data.name,
      description: data.description,
      presentation: data.presentation,
      meeting_place: data.location,
    }, config).then(res => {
      console.log(res);
    }).catch(err => {
      console.log(err);
      setModalShow(true);
    })
    
    // navigate(`/post/${newPostRef.key}`);
    // console.log(newPostRef.key);
    // ref.endAt().limitToLast(1).on('child_added', function(snapshot) {
    //   console.log(snapshot.name(), snapshot.val());
    // });
  };

  const handleModalClose = () => {
    setModalShow(false)
  }

  return (
    <form className="container mx-auto form-group needs-validation" noValidate>
    <div className="mb-3">
      <h1>Donar un medicamento</h1>
    </div>
    <div className="mb-3">
      <label htmlFor="name" className="form-label m-0">Nombre del medicamento</label>
      <select name="name" id="name" className='form-select' {...register("name")}>
        {medicines.map(medication => <option value={medication._id.$oid} key={medication._id.$oid} required>{medication.name}</option>)}
      </select>
    </div>
    {/* <div className="mb-3">
      <label htmlFor="gtin" className="form-label m-0">Identificador (GTIN)</label>
      <input type="text" id="gtin" className="form-control form-control-sm" {...register("gtin")}></input>
    </div> */}
    {/* <div className="mb-3">
      <label htmlFor="expiration-date" className="form-label m-0">Fecha de expiración</label>
      <input type="date" id="expiration-date" className="form-control form-control-sm" {...register("date")}></input>
    </div> */}
    {/* <div className="mb-3">
      <label htmlFor="batch-number" className="form-label m-0">N° de tanda/lote</label>
      <input type="text" id="batch-number" className="form-control form-control-sm" {...register("batch")}></input>
    </div> */}
    {/* <div className="mb-3">
      <label htmlFor="serial-number" className="form-label m-0">N° de serie</label>
      <input type="text" id="serial-number" className="form-control form-control-sm" {...register("serial")}></input>
    </div> */}
    <div className="mb-3">
      <label htmlFor="presentation" className="form-label m-0">Presentación (ej: Tabletas, comprimidos, pastillas, cápsulas, jarabe)</label>
      <input type="text" id="presentation" className="form-control form-control-sm" required {...register("presentation")}></input>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label m-0">Descripción</label>
      <input type="text" id="description" className="form-control form-control-sm" required {...register("description")}></input>
    </div>
    <div className="mb-3">
      <label htmlFor="location" className="form-label m-0">Ubicación</label>
      <input type="text" id="location" className="form-control form-control-sm" required {...register("location")}></input>
    </div>
    {/* <div className="mb-3">
      <label htmlFor="attachment" className="form-label m-0">Agregar imagen</label>
      <input type="file" id="attachment" className="form-control form-control-sm" {...register("image")}></input>
    </div> */}
    <div className="mb-3 text-center">
      <button type="submit" className="btn btn-primary text-white" onClick={handleSubmit(onSubmit)}>Publicar</button>
    </div>

    <Modal show={modalShow}>
        <Modal.Header closeButton>
          <Modal.Title>Error</Modal.Title>
        </Modal.Header>
        <Modal.Body>Ocurrió un error inesperado: '500 (INTERNAL SERVER ERROR)'</Modal.Body>
        <Modal.Footer>
          <button className='btn btn-primary text-white' onClick={handleModalClose}>Cerrar</button>
        </Modal.Footer>
      </Modal>
  </form>
  )
}
