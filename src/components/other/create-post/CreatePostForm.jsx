import React from 'react';
import { getDatabase, ref, push, set } from "firebase/database";
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";

export default function CreatePostForm() {
  
  const navigate = useNavigate();
  let userId;

  const auth = getAuth();
  onAuthStateChanged(auth, (user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/firebase.User
      userId = user.uid;
      console.log(user.email);
      // ...
    } else {
      // User is signed out
      // ...
      navigate('/login');
    }
  });

  const { register, handleSubmit } = useForm();
  const onSubmit = data => {
    console.log(data)
    const db = getDatabase();
    // const reference = ref(db, 'medicines/' + userId);
    
    const postListRef = ref(db, 'medicines');
    const newPostRef = push(postListRef);
    set(newPostRef, {
      name: data.name,
      gtin: data.gtin,
      date: data.date,
      description: data.description,
      userId: userId
    });

    navigate(`/post/${newPostRef.key}`);
    console.log(newPostRef.key);
    // ref.endAt().limitToLast(1).on('child_added', function(snapshot) {
    //   console.log(snapshot.name(), snapshot.val());
    // });
  };

  return (
    <form className="container mx-auto">
    <div className="mb-3">
      <h1>Donar un medicamento</h1>
    </div>
    <div className="mb-3">
      <label htmlFor="product-name" className="form-label m-0">Nombre del medicamento</label>
      <input type="text" id="product-name" className="form-control form-control-sm" {...register("name")}></input>
    </div>
    <div className="mb-3">
      <label htmlFor="gtin" className="form-label m-0">Identificador (GTIN)</label>
      <input type="text" id="gtin" className="form-control form-control-sm" {...register("gtin")}></input>
    </div>
    <div className="mb-3">
      <label htmlFor="expiration-date" className="form-label m-0">Fecha de expiración</label>
      <input type="date" id="expiration-date" className="form-control form-control-sm" {...register("date")}></input>
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
      <input type="text" id="description" className="form-control form-control-sm" {...register("description")}></input>
    </div>
    <div className="mb-3">
      <label htmlFor="attachment" className="form-label m-0">Agregar imagen</label>
      <input type="file" id="attachment" className="form-control form-control-sm"></input>
    </div>
    <div className="mb-3 text-center">
      <button type="button" className="btn btn-primary text-white" onClick={handleSubmit(onSubmit)}>Publicar</button>
    </div>
  </form>
  )
}
