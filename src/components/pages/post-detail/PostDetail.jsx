import React, { useState, useEffect } from 'react';
import avatarImg from '../../../assets/avatar.png';
import medicamentoImg from '../../../assets/unsplash_8epPqtF9x5I.png';
// import { getDatabase, ref, child, get } from "firebase/database";
// import { getAuth } from "firebase/auth";
import { useParams } from 'react-router-dom';

export default function PostDetail() {

  const data = 1;

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
  // let { id } = useParams();
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

  return (
    <main className='container mb-3'>
      {
        data ? 
        <div>        
          <section className='container'>
            <div className='d-flex w-50 align-items-center mb-3'>
              <img src={avatarImg} alt="" className='img-fluid w-25' />
              {/* <h2 className='mx-3'>{user.displayName}</h2> */}
            </div>
            {/* <p>{data.description}</p> */}
          </section>
          <section className='container d-flex border'>
            <div className='container py-3'>
              <img src={medicamentoImg} alt="" className='img-fluid' />
            </div>
            <div className='container w-50 mt-3 d-flex flex-column justify-content-evenly'>
              {/* <h3><strong>{data.name}</strong></h3> */}
              {/* <h4>N° de identificación (GTIN): {data.gtin}</h4> */}
              <h5>Bogota, Colombia</h5>
              {/* <h5>Fecha de expiración (AAAA/MM/DD): <span>{data.date}</span></h5> */}
              <div>
                <button className='btn btn-primary text-white'>Contactar</button>
              </div>
            </div>
          </section>
        </div>
        :
        <div>Cargando...</div>
      }
      
    </main>
  )
}