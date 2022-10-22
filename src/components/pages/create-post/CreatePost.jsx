import React from 'react';
import CreatePostForm from '../../other/create-post/CreatePostForm';
// import profilePic from '../../../assets/avatar.png';
import legalImg from '../../../assets/create-post/undraw_contract_re_ves9.svg';

export default function CreatePost() {

  // if (document.cookie != 'visited'){
  //   alert('Hey there, new user!');
  //   document.cookie = 'visited';
  // }

  return (
    <main className='container d-flex flex-row'>
        <CreatePostForm/>

        {/* info */}
        <div className="info-container container col-4 mx-auto text-center bg-light">
            <h2 className='my-3'>Legales</h2>
            <img src={legalImg} alt="legal" className="h-25 mb-3" />
            {/* <h3 className='my-3'>Importante</h3> */}
            {/* <div class="callout callout-info">asdasdasd</div> */}
            <p><b>Importante: </b>Al enviar el formulario usted es responsable y acepta que Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur temporibus enim nisi, numquam blanditiis. Saepe velit delectus ab dolorum eius reiciendis hic numquam, qui beatae quae! Repellat, nostrum reprehenderit!</p>
        </div>
        
    </main>
  )
}
