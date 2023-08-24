import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Pagination, RightSide, Loading } from "../Features.jsx";
import { useParams } from 'react-router';
import { Link } from "../Features.jsx";

export default function Home() {
  const [pages, setPages] = useState(window.pagination||{});
  const [posts, setPosts] = useState(window.posts||[]);
  const params= useParams();
  const location = useLocation();

  useEffect(() => {
      setPosts(datas().posts);
      setPages(datas().pagination);
      window.iData++;
  }, [location]);

  return (
    <div className="container">
        <div className="row">
            <div className="col-lg-8 col-xs-12">
                <section className="articles">
                    {posts.map( post => 
                      <article key={post.id} className="blue-article">
                          <div className="articles-header">
                              <time >{post.jdate}</time>
                              {post.cats.map( cat => 
                                <span key={post.id+"_"+cat.id} className="articles-header-category"><a href="#" className="blue" title="">{cat.title}</a></span>
                              )}
                          </div>
                          <div className="articles-content">
                              <h1><Link to={post.link} title="">{post.title}</Link></h1>
                              <p dangerouslySetInnerHTML={{ __html: post.mnote }}>
                                 
                              </p>
                          </div>
       
                          <div className="articles-footer">
                              <Link title="" className="btn" to={post.link}>ادامه</Link>
                          </div>
                      </article>
                    
                    )}
                   <Pagination pages={pages} />
                </section>
            </div>
            <RightSide />
        </div>
    </div>
    );
}