import React from 'react';
import './home.scss';
import figureImg from '../../../assets/home/figure.png';
import proyectoHermesImg from '../../../assets/home/proyecto-hermes.png';
import buscarImg from '../../../assets/home/undraw_web_search_re_efla1.png';
import contactoImg from '../../../assets/home/undraw_profile_details_re_ch9r1.png';
import conversarImg from '../../../assets/home/undraw_personal_text_re_vqj31.png';
import reuneteImg from '../../../assets/home/undraw_term_sheet_re_ju7s1.png';
import pfp1 from '../../../assets/home/pfp1.png';


export default function Home() {
  return (
    <main className='container'>
      <img src={figureImg} alt="figure" className='figure-img img-fluid position-absolute end-0 mh-100'/>
      <section className='container col-5 ms-0 vh-100'>
        <h1><strong>¿Sabias que puedes donar medicamentos en la app
          <span className='text-primary'> Hermes?</span>
        </strong></h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        <div className='text-center'>
          <button type="button" className="btn btn-dark d-block">Registrate</button>
          <button type="button" className="btn btn-secondary d-block"><u>Iniciar Sesión</u></button>
        </div>
      </section>

      {/* proyecto hermes */}
      <section className='container d-flex'>
        <div>
          <img src={proyectoHermesImg} alt="proyecto-hermes" className='img-fluid' />
        </div>
        <article className='container my-auto'>
          <h2><strong>Proyecto Hermes</strong></h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat.</p>
        </article>
      </section>

      {/* como funciona hermes */}
      <section className='container'>
        <div className='container col-6 text-center'>
          <h2><strong>¿Como funciona Hermes?</strong></h2>
          <p>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </div>
        
        {/* grilla 2x2 */}
        <section className='row row-cols-2 mb-3'>
          <article className='d-flex'>
            <div className='col-4'>
              <img src={buscarImg} alt="proyecto-hermes" className='img-fluid' />
            </div>
            
            <div>
              <h4><strong>1. Buscar</strong></h4>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
          </article>

          <article className='d-flex'>
            <div className='col-4'>
              <img src={contactoImg} alt="proyecto-hermes" className='img-fluid' />
            </div>
            
            <div>
              <h4><strong>2. Contacto</strong></h4>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </article>

          <article className='d-flex'>
            <div className='col-4'>
              <img src={conversarImg} alt="proyecto-hermes" className='img-fluid' />
            </div>
            
            <div>
              <h4><strong>3. Conversar</strong></h4>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
            </div>
          </article>

          <article className='d-flex'>
            <div className='col-4'>
              <img src={reuneteImg} alt="proyecto-hermes" className='img-fluid' />
            </div>
            
            <div>
              <h4><strong>4. Reunete</strong></h4>
              <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna</p>
            </div>
          </article>
        </section>
      </section>
      
      {/* testimonios */}
      <section id="carouselExampleControls" class="carousel slide bg-primary" data-bs-ride="carousel">
        <h2 className='py-3 text-white'><strong>Testimonios</strong></h2>

        <div class="carousel-inner">
        <div class="carousel-item active card mb-3 w-50">
          {/* <div class="card mb-3 w-50 carousel-item active"> */}
            <div class="row g-0">
              <div class="col-md-4 text-center mt-3">
                <img src={pfp1} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Darrell Steward1</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>

          <div class="carousel-item card mb-3 w-50">
          {/* <div class="card mb-3 w-50 carousel-item"> */}
            <div class="row g-0">
              <div class="col-md-4 text-center mt-3">
                <img src={pfp1} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Darrell Steward2</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>

          <div class="card mb-3 w-50 carousel-item">
            <div class="row g-0">
              <div class="col-md-4 text-center mt-3">
                <img src={pfp1} class="img-fluid rounded-start" alt="..." />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Darrell Steward3</h5>
                  <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>

      </section>

      {/* footer */}
      <section>FOOTER</section>


    </main>
    
  )
}