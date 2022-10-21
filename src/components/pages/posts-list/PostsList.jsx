import axios from 'axios';
import React from 'react';
import { BASEURL } from '../../../constants';
import PostCard from '../../other/post-card/PostCard';

export default function PostsList() {

  let image;

  axios.get(BASEURL + '/post')
        .then(res => {
            console.log(res);
            image = res.data[0].image;
            console.log(image);
        }).catch(err => {
          console.log(err);
        })

  return (
    <main className='container d-grid gap-3'>
        <PostCard name="Juan Molina" location="Bogota, Colombia" image={image} />
        <PostCard name="Yuribileisy Casa Nova" location="Venezuela, Caracas" />
        <PostCard name="Juan Molina" location="Bogota, Colombia" />
    </main>
  )
}
