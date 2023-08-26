import React, { useState, useEffect, useLayoutEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Pagination, LeftSide, Loading } from "../Features.jsx";
import { Link } from "../Features.jsx";
import scripts from "../js/script.js";


export default function Home() {
  const [pages, setPages] = useState(window.pagination||{});
  const [posts, setPosts] = useState(window.posts||[]);
  const location = useLocation();

  useEffect(() => {
      setPosts(datas().posts);
      setPages(datas().pagination);
  }, [location]);

  useLayoutEffect( ()=> {
    scripts();
  });

  return (<section className="articles">
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
     <Pagination pages={pages} params={params} />
     </section>);
}