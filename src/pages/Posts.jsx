

import { useEffect, useState } from 'react';
import GetPosts from '../services/getPosts';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  const getPosts = async () => {
    const postsRes = await GetPosts();
    if (postsRes) {
      setPosts(postsRes.data);
      console.log(postsRes.data)
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <div className="p-2">
      <div className="container">
        <div className="row">
          <h4>Posts</h4>

          {posts?.map(post => (
            <div className="col-md-4 col-sm-6 col-12 my-2" key={post.id}>
              <div className="card">
                <img className="card-img-top w-100" src={post.image} alt="post" />
                <div className="card-body">
                  <div className="container">
                    <div className="row align-items-center">
                      <div className="col-md-2 col-sm-3 col-3">
                        <img
                          src="https://www.w3schools.com/howto/img_avatar.png"
                          alt="Avatar"
                          className="avatar rounded-circle img-fluid w-100"
                        />
                      </div>
                      <div className="col-md-10 col-sm-9 col-9">
                        <h5 className="card-title"> {`${post.firstName} ${post.lastName}`}</h5>
                      </div>
                    </div>
                  </div>
                  <p className="card-text h-2">{post.writeup}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Posts;