import React from 'react';
import avatarImg from '../../../assets/avatar.png';
import medicamentoImg from '../../../assets/analgesicos-1911212033.jpg';

export default function PostDetail() {
  return (
    <main className='container mb-3'>
        <section className='container'>
            <div className='d-flex w-50 align-items-center mb-3'>
                <img src={avatarImg} alt="" className='img-fluid w-25'/>
                <h2 className='mx-3'>Juan Molina</h2>
            </div>
            <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </section>
        <section className='container d-flex border'>
            <img src={medicamentoImg} alt="" className='img-fluid'/>
            <div className='container w-50 mt-3 d-flex flex-column justify-content-evenly'>
              <h3><strong>Aspirinas</strong></h3>
              <h4>N° de identificación (GTIN): (01) 0 5410013 11100 9</h4>
              <h5>Bogota, Colombia</h5>
              <h5>Fecha de expiración: <span>24/12/2023</span></h5>
              <div>
                <button className='btn btn-primary text-white'>Contactar</button>
              </div>
            </div>
        </section>
    </main>
  )
}
