import React from 'react';
import img from '../../../assets/login/doctor-prescription.jpg';
import LoginForm from '../../other/login/LoginForm';

export default function Login() {
  return (
  <main class="container d-flex">
    <LoginForm/>
    
    {/* info */}
    <div class="col-5 mx-auto">
      <img src={img} alt="staff" class="img-fluid" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur temporibus enim nisi, numquam blanditiis. Saepe velit delectus ab dolorum eius reiciendis hic numquam, qui beatae quae! Repellat, nostrum reprehenderit!</p>
    </div>
  </main>
  )
}