import React, { useState, useEffect } from 'react';
import './postDetail.scss'
import avatarImg from '../../../assets/undraw_profile_pic_re_upir.svg';
import medicamentoImg from '../../../assets/depositphotos_426142004-stock-illustration-medicines-pills-bottles-sketch-medicine.jpg';
// import { getDatabase, ref, child, get } from "firebase/database";
// import { getAuth } from "firebase/auth";
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { BASEURL } from '../../../constants';
import { Icon } from '@fluentui/react/lib/Icon';

export default function PostDetail() {

  //user data----------------------------------------------------------------------------------

  // const auth = getAuth();
  // const user = auth.currentUser;
  // if (user !== null) {
    // const displayName = user.displayName;
    // const email = user.email;
    // const photoURL = user.photoURL;
    // const emailVerified = user.emailVerified;
    // console.log(user);
    // const uid = user.uid;
  // }

  // post data--------------------------------------------------------------------------------

  // const [data, setData] = useState();
  const [post, setPost] = useState();
  let { id } = useParams();

  useEffect(() => {
    async function fetchPost() {
      await axios.get(BASEURL + `/post/${id}`)
        .then(res => {
          setPost(res.data);
        }).catch(err => console.log(err));
    }
    fetchPost();
  }, [id])
  // let postData;

  // const dbRef = ref(getDatabase());

  // useEffect(() => {
  //   postData = get(child(dbRef, `medicines/${id}`)).then((snapshot) => {
  //     if (snapshot.exists()) {
  //       setData(snapshot.val());
  //       return snapshot.val();
  //     } else {
  //       console.log("No data available");
  //     }
  //   }).catch((error) => {
  //     console.error(error);
  //   });
  // }, []);

  const contact = () => {
    const phone = '+5491122560566';
    const currentURL = window.location.href;
    window.open(`https://wa.me/${phone}?text=Hola,%20estoy%20interesado%20en%20la%20medicación%20que%20publicaste%20en%20Hermes.%20${currentURL}`, '_blank').focus();
  }

  const LocationIcon = () => <Icon iconName="World" />;

  return (
    <main className='container mb-3'>
      {
        post ? 
        <div>        
          <section className='container'>
            <p className='text-muted'>{post.publication_date}</p>
            <div className='d-flex w-50 align-items-center mb-3'>
              <img src={avatarImg} alt="" className='img-fluid w-25' />
              <h2 className='mx-3'>{post.author}</h2>
            </div>
            <p>{post.description}</p>
          </section>
          <section className='container details-container border'>
            <div className='container py-3'>
              <img src={medicamentoImg} alt="" className='img-fluid' />
            </div>
            <div className='container mt-3 d-flex flex-column justify-content-evenly'>
              <h3><strong>{post.drug_name}</strong></h3>
              {/* <h4>N° de identificación (GTIN): {data.gtin}</h4> */}
              <h4>Presentación {post.presentation}</h4>
              <h5><LocationIcon /> {post.meeting_place}</h5>
              {/* <h5>Fecha de expiración (AAAA/MM/DD): <span>{data.date}</span></h5> */}
              <div>
                <button className='btn btn-primary text-white mb-3' onClick={() => contact()}>Contactar</button>
              </div>
            </div>
          </section>
        </div>
        :
        <div className="d-flex justify-content-center vh-100">
          <div className="spinner-border text-primary my-auto" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      }
      
    </main>
  )
}