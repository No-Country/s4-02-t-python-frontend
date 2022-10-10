import React from 'react';
import './home.scss';
import Carousel from 'react-bootstrap/Carousel';

import figureImg from '../../../assets/home/figure.png';
import proyectoHermesImg from '../../../assets/home/proyecto-hermes.png';
import buscarImg from '../../../assets/home/undraw_web_search_re_efla1.png';
import contactoImg from '../../../assets/home/undraw_profile_details_re_ch9r1.png';
import conversarImg from '../../../assets/home/undraw_personal_text_re_vqj31.png';
import reuneteImg from '../../../assets/home/undraw_term_sheet_re_ju7s1.png';
import testimonialAvatar from '../../../assets/home/pfp1.png';
import testimonialAvatarSecond from '../../../assets/home/pfp2.png';


export default function Home() {
  return (
    <main className='container'>
      <img src={figureImg} alt="figure" className='figure-img img-fluid position-absolute end-0 mh-100'/>
      <section className='container col-5 ms-0 pt-3 vh-100'>
        <h1 className='mt-3'><strong>¿Sabias que puedes donar medicamentos en la app
          <span className='text-primary'> Hermes?</span>
        </strong></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='text-center'>
          <button type="button" className="btn btn-dark d-block">Registrate</button>
          <button type="button" className="btn btn-secondary d-block"><u>Iniciar Sesión</u></button>
        </div>
      </section>

      {/* proyecto hermes */}
      <section className='container d-flex py-3'>
        <div>
          <img src={proyectoHermesImg} alt="proyecto-hermes" className='img-fluid vw-100' />
        </div>
        <article className='container my-auto'>
          <h2><strong>Proyecto Hermes</strong></h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
        </article>
      </section>

      {/* como funciona hermes */}
      <section className='container'>
        <div className='container col-6 text-center pb-3'>
          <h2><strong>¿Como funciona Hermes?</strong></h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        
        {/* grilla 2x2 */}
        <section className='row row-cols-2 mb-3'>
          <article className='d-flex'>
            <div className='col-4'>
              <img src={buscarImg} alt="proyecto-hermes" className='img-fluid' />
            </div>
            
            <div className='container'>
              <h4><strong>1. Buscar</strong></h4>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
          </article>

          <article className='d-flex'>
            <div className='col-4'>
              <img src={contactoImg} alt="proyecto-hermes" className='img-fluid' />
            </div>
            
            <div className='container'>
              <h4><strong>2. Contacto</strong></h4>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </article>

          <article className='d-flex'>
            <div className='col-4'>
              <img src={conversarImg} alt="proyecto-hermes" className='img-fluid' />
            </div>
            
            <div className='container'>
              <h4><strong>3. Conversar</strong></h4>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
          </article>

          <article className='d-flex'>
            <div className='col-4'>
              <img src={reuneteImg} alt="proyecto-hermes" className='img-fluid' />
            </div>
            
            <div className='container'>
              <h4><strong>4. Reunete</strong></h4>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </article>
        </section>
      </section>
      
      {/* testimonios */}
      <section className='container bg-primary rounded mb-3'>
        <div className='container'>
          <h2 className='text-white p-3'><strong>Testimonios</strong></h2>
        </div>
        <Carousel className='mx-auto' variant='dark'>
          <Carousel.Item className='mb-3'>
            <div className='d-flex w-50 mx-auto bg-white rounded p-3'>
              <img
                className="img-fluid h-50"
                src={testimonialAvatar}
                alt="First slide"
              />
              <div className='ms-3'>
                <h5>Darrell Steward</h5>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className='mb-3'>
            <div className='d-flex w-50 mx-auto bg-white rounded p-3'>
              <img
                className="img-fluid h-50"
                src={testimonialAvatarSecond}
                alt="First slide"
              />
              <div className='ms-3'>
                <h5>Esther Howard</h5>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className='mb-3'>
            <div className='d-flex w-50 mx-auto bg-white rounded p-3'>
              <img
                className="img-fluid h-50"
                src={testimonialAvatar}
                alt="First slide"
              />
              <div className='ms-3'>
                <h5>Esther Howard</h5>
                <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </section>
    </main>
  )
}