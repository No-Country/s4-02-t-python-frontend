import React from 'react';
import notFoundImg from '../../../assets/404/undraw_no_data_re_kwbl.svg';

export default function NotFound() {
  return (
  
  <main className='container col-12 text-center my-3'>
    <img src={notFoundImg} alt="not-found" className='img-fluid w-50 my-3' />
    <h1 className='my-3'>¡Ups, la página que estás buscando no existe!</h1>
  </main>

  )
}
