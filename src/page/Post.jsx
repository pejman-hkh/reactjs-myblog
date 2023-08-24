import React, { useState, useEffect } from 'react';
import { useLocation } from "react-router-dom";
import { Pagination, RightSide, Loading } from "../Features.jsx";
import { Link } from "../Features.jsx";
import Form from "../components/Form.jsx";
import scripts from "../js/script.js";

export default function Post() {

	const [hpost, setHPost] = useState(window.hpost||{});
    const rand = window.rand;
	
    const location = useLocation();
	useEffect(() => {
		setHPost(datas().hpost);
        scripts();
        window.iData++;
	}, [location]);

	return (<div className="container">
        <div className="row">
            <div className="col-lg-8 col-xs-12">
                <section className="articles">
                
                    <article className="blue-article">
                        <div className="articles-header">
                            <time>{hpost.jdate}</time>
                   
                            {hpost.cats.map( (cat) => (
                            	<span key={cat.id} className="articles-header-category">
                            	<Link to="#" className="blue" title="">{cat.title}</Link>
                            	</span>
                            ))}
                      
                        </div>
                        <div className="articles-content">
                            <h1><Link to={hpost.link} title="">{hpost.title}</Link></h1>
                            <p dangerouslySetInnerHTML={{ __html: hpost.mnote }}>
                    
                            </p>
                        </div>
     
                        <div className="articles-footer">
                         
                           
                        </div>
                    </article>
                
                 
                </section>
                <section className="articles-info">
                
                    <div className="row">


                        <div className="col-lg-12 col-xs-12">
                            <section className="articles">

                                <article className="green-article">
                                    <div className="articles-header">
                                                                        
                                        <Form id="cf" method="post" action={siteUrl+"/comment"}>
                                        <input type="hidden" name="parentid" value="0" />
                                        <input type="hidden" name="itemid" value={hpost.id} />
                                        <input type="hidden" name="a" value={rand} />

                                        <input className="col-xs-12 form-control" type="text" placeholder="نام" name="name" />
                                        <input className="col-xs-12 form-control" type="email" placeholder="ایمیل" name="email" />
                                        <br />
                                        <textarea className=" col-xs-12 form-control" id="" rows="6" placeholder="پیام" name="note"></textarea>
                                        <br />
                                        <button type="submit" className="btn"><i className="pe-7s-paper-plane"></i> ثبت</button>
                                        </Form>
                                    </div>
                                </article>

                            </section>
                        </div>


                        <div className="col-lg-12 col-xs-12">
                            <div className="comments">
                                <ol>
                            
                                    {hpost.comments.map((comment) => (
	                                    <li key={comment.id} className="comment">
	                                      
	                                        <div className="comment-content">
	                                            <h3>{comment.name} <a href="#cf" className="reply" data-id={comment.id}>(پاسخ)</a> </h3>
	                                            <time>{comment.jdate}</time>
	                                            <p dangerouslySetInnerHTML={{ __html: comment.mnote }}></p>
	                                            <ol>
	                                            {comment.answers.map( (answer) => (
	                                                <li key={answer.id} className="">	                                                   
	                                                    <div className="comment-content">
	                                                    <h3>{answer.name}</h3>
	                                                    <time>{answer.jdate}</time>
	                                                    <p dangerouslySetInnerHTML={{ __html: answer.mnote }}></p>
	                                                    </div>
	                                                </li>
	                                            ))}
	                                          
	                                            </ol>

	                                        </div>
	                                    </li>
                                    ))}
                               
                                </ol>
                            </div>
                        </div>
                    </div>
                </section>

            </div>

            <RightSide />
        </div>
    </div>);
}
