import React from 'react';
import { useNavigate } from 'react-router-dom';
import avatarImg from '../../../assets/avatar.png';
import medicamentoImg from '../../../assets/unsplash_8epPqtF9x5I.png';

export default function PostCard(props) {

    const navigate = useNavigate();
    const goToDetail = () => {
        navigate('/post/1');
    }

  return (
    <div className='card w-50 mx-auto'>
        <section className='container'>
            <div className='d-flex w-50 align-items-center my-3'>
                <img src={avatarImg} alt="" className='img-fluid w-25'/>
                <div className='mt-3'>
                    <h3 className='mx-3'>{props.name}</h3>
                    <p className='mx-3'>{props.location}</p>
                </div>
            </div>
            <p className='mx-3'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
        </section>
        <section className='container d-flex flex-column mb-3'>
            <img src={medicamentoImg} alt="" className='img-fluid m-3'/>
            <div className='text-center'>
                <button className='btn btn-primary text-white' onClick={() => goToDetail()}>Ver en detalle</button>
            </div>
            
        </section>
    </div>
  )
}
