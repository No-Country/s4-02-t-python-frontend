import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function CreatePostForm() {

  const navigate = useNavigate();

  // hardcodeado, change later
  const postId = 1;

  const post = () => {
    navigate(`/post/${postId}`);
  }

  return (
    <form className="container mx-auto">
    <div className="mb-3">
      <h1>Donar un medicamento</h1>
    </div>
    <div className="mb-3">
      <label htmlFor="product-name" className="form-label m-0">Nombre del medicamento</label>
      <input type="text" id="product-name" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3">
      <label htmlFor="gtin" className="form-label m-0">Identificador (GTIN)</label>
      <input type="text" id="gtin" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3">
      <label htmlFor="expiration-date" className="form-label m-0">Fecha de expiración</label>
      <input type="date" id="expiration-date" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3">
      <label htmlFor="batch-number" className="form-label m-0">N° de tanda/lote</label>
      <input type="text" id="batch-number" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3">
      <label htmlFor="serial-number" className="form-label m-0">N° de serie</label>
      <input type="text" id="serial-number" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3">
      <label htmlFor="description" className="form-label m-0">Descripción</label>
      <input type="text" id="description" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3">
      <label htmlFor="attachment" className="form-label m-0">Agregar imagen</label>
      <input type="file" id="attachment" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3 text-center">
      <button type="button" className="btn btn-primary text-white" onClick={() => post()}>Publicar</button>
    </div>
  </form>
  )
}
