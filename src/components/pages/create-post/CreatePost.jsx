import React from 'react';
import CreatePostForm from '../../other/create-post/CreatePostForm';
import profilePic from '../../../assets/undraw_profile_pic_re_upir.svg';

export default function CreatePost() {
  return (
    <main className='container d-flex'>
        <CreatePostForm/>

        {/* info */}
        <div className="info-container container col-4 mx-auto text-center bg-light">
            <h2 className='my-3'>Publicando como: </h2>
            <img src={profilePic} alt="avatar" className="h-25" />
            <h3 className='my-3'>José Pérez</h3>
            {/* <div class="callout callout-info">asdasdasd</div> */}
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur temporibus enim nisi, numquam blanditiis. Saepe velit delectus ab dolorum eius reiciendis hic numquam, qui beatae quae! Repellat, nostrum reprehenderit!</p>
        </div>
    </main>
  )
}
