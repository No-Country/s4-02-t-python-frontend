import React from 'react';
import brandImg from '../../../assets/isotipo.png';

export default function Footer() {
  return (
    <footer className='container mx-auto'>
        <div className='row'>
            <div className='col'>
                <img src={brandImg} alt="" />
            </div>
            <div className='col'>
                <strong>Acerca de</strong>
                <p>POLITICAS DE COOKIES</p>
                <p>CONTRATACION</p>
                <p>CONDICIONES DE USO</p>
            </div>
            
            <div className='col'>
                <strong>Ayuda</strong>
                <p>SOPORTE</p>
                <p>CONTACTANOS</p>
                <p>SUCURSALES</p>
            </div>
            <div className='col'>
                <strong>Nuestras redes</strong>
                <p>FACEBOOK</p>
                <p>TWITTER</p>
                <p>INSTAGRAM</p>
            </div>
        </div>
    </footer>
  )
}
