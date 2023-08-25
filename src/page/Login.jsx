import React, { useState, useEffect } from 'react';
import { RightSide } from "../Features.jsx";
import { Form } from "../components/Form.jsx";
import { useLocation } from "react-router-dom";

export default function Login({...props}) {

  const location = useLocation();

  useEffect(() => {
   
  }, [location]);

	return (<div class="container">
	        <div class="row">
	            <div class="col-lg-8 col-xs-12">
	                <section class="articles">
	 
	                    <article class="blue-article">
	                        <div class="articles-header">
	                            <h1>{title}</h1>
	                                                                        
	                            <Form method="post" action="">
	                            
	                                <div class="form-group mb-2">
	                                <label>Username</label>
	                                <input type="text" class="form-control" name="username" />
	                                </div>

	                                <div class="form-group mb-2">
	                                <label>Password</label>
	                                <input type="password" class="form-control" name="password" />
	                                </div>

	                                <div class="form-group mb-2">
	                                <button type="submit" class="btn btn-primary">Login</button>
	                                </div>  


	                            </Form>
	                        </div>
	                    </article>

	                </section>
	            </div>

	            <RightSide />
	        </div>
	    </div>);
}