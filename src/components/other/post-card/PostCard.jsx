import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import avatarImg from '../../../assets/undraw_profile_pic_re_upir.svg';
import medicamentoImg from '../../../assets/depositphotos_426142004-stock-illustration-medicines-pills-bottles-sketch-medicine.jpg';
import { UserContext } from '../../../App';

export default function PostCard(props) {

    const [user, setUser] = useContext(UserContext);

    const navigate = useNavigate();
    const goToDetail = () => {
        if(user){
            navigate(`/post/${props.postId}`);
        } else {
            navigate('/login');
        }
        
    }

  return (
    <div className='card w-75 mx-auto'>
        <section className='container'>
            <p className='text-muted my-2'>{props.publicationDate}</p>
            <div className='d-flex w-50 align-items-center my-3'>
                <img src={avatarImg} alt="" className='img-fluid w-25'/>
                <div className='mt-3'>
                    <h3 className='mx-3'>{props.author}</h3>
                    <p className='mx-3'>{props.meetingPlace}</p>
                </div>
            </div>
            <p className='mx-3'>{props.description}</p>
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
