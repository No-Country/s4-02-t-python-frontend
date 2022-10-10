import React from 'react';
import './footer.scss';
import brandImg from '../../../assets/footer/isologotipo.png';

export default function Footer() {
  return (
    <footer className='container mx-auto'>
        <div className='row'>
            <div className='col my-auto text-center'>
                <img src={brandImg} alt="" className='w-50' />
            </div>
            <div className='col'>
                <strong>Acerca de</strong>
                <div className='container-links mt-3'>
                    <p>POLITICAS DE COOKIES</p>
                    <p>CONTRATACION</p>
                    <p>CONDICIONES DE USO</p>
                </div>
            </div>
            
            <div className='col'>
                <strong>Ayuda</strong>
                <div className='container-links mt-3'>
                    <p>SOPORTE</p>
                    <p>CONTACTANOS</p>
                    <p>SUCURSALES</p>
                </div>
            </div>
            <div className='col'>
                <strong>Nuestras redes</strong>
                <div className='container-links mt-3'>
                    <p>FACEBOOK</p>
                    <p>TWITTER</p>
                    <p>INSTAGRAM</p>
                </div>
            </div>
        </div>
    </footer>
  )
}
