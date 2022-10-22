import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BASEURL } from '../../../constants';
import PostCard from '../../other/post-card/PostCard';

export default function PostsList() {

  const [posts, setPosts] = useState([]);
  
  useEffect(() => {
    async function fetchPosts() {
      await axios.get(BASEURL + '/post')
        .then(res => {
          setPosts(res.data);
        }).catch(err => console.log(err));
    }
    fetchPosts();
  }, [])

  return (
    <main className='container d-grid gap-3 mb-3'>
      {posts ? posts.map(post => <PostCard key={post._id.$oid}
                                            author={post.author}
                                            description={post.description}
                                            drugName={post.drug_name}
                                            meetingPlace={post.meeting_place}
                                            presentation={post.presentation}
                                            publicationDate={post.publication_date}
                                            postId={post._id.$oid}
                                            ></PostCard>).reverse() : <div>Cargando...</div>}
    </main>
  )
}
