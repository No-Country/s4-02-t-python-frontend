import axios from 'axios';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { BASEURL } from '../../../constants';
import PostCard from '../../other/post-card/PostCard';
import './postsList.scss';

export default function PostsList({ filterQuery }) {

  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(['']);
  const [filter, setFilter] = useState('');
  const [filterLoaded, setFilterLoaded] = useState(false);

  useEffect(() => {
    axios.get(BASEURL + '/post')
    .then(res => {
      setPosts(res.data);
      setFilteredPosts(posts.filter((post) => post.drug_name.includes(filter)));
      if (filteredPosts.length > 0) {
        setFilterLoaded(true);
      } else {
        setFilterLoaded(false);
      }
    }).catch(err => console.log(err));
  });

  useEffect(() => {
    setFilter(filterQuery);
  }, [filterQuery, filter])

  return (
    <main className='container d-grid gap-3 mb-3'>
      {
        posts.length > 0
        ?
        <>
          {
            filteredPosts.length > 0 ? 
              filteredPosts.map(post =>
                            <PostCard key={post._id.$oid}
                              author={post.author}
                              description={post.description}
                              drugName={post.drug_name}
                              meetingPlace={post.meeting_place}
                              presentation={post.presentation}
                              publicationDate={post.publication_date}
                              postId={post._id.$oid}
                              ></PostCard>
                              ).reverse()
            :
            <>
              {
                filterLoaded === false ?
                <div className='container vh-100 d-flex'>
                  <h2 className='m-auto'>No se han encontrado medicamentos con ese nombre</h2>
                </div>
                :
                <div className="d-flex justify-content-center vh-100">
                  <div className="spinner-border text-primary my-auto" role="status">
                    <span className="visually-hidden">Loading...</span>
                  </div>
                </div>
              }
            </>
            
          }
        </>
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
