import React from 'react';
import PostCard from '../../other/post-card/PostCard';

export default function PostsList() {
  return (
    <main className='container d-grid gap-3'>
        <PostCard name="Juan Molina" location="Bogota, Colombia" />
        <PostCard name="Yuribileisy Casa Nova" location="Venezuela, Caracas" />
        <PostCard name="Juan Molina" location="Bogota, Colombia" />
    </main>
  )
}
