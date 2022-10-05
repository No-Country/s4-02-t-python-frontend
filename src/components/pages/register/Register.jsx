import React from 'react'
import './register.scss';
import RegisterForm from '../../other/register/RegisterForm';
import img from '../../../assets/register/staff.jpg';

export default function Register() {
  return (
  <main className="container d-flex">
    <RegisterForm/>
    
    {/* info */}
    <div className="info-container container col-5 mx-auto">
      <img src={img} alt="staff" className="img-fluid" />
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit tenetur temporibus enim nisi, numquam blanditiis. Saepe velit delectus ab dolorum eius reiciendis hic numquam, qui beatae quae! Repellat, nostrum reprehenderit!</p>
    </div>
  </main>
  )
}