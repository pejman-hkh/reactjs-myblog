import React, { useState } from 'react';
import $ from "../js/nodelist.js";

function Alert({...props}) {
	return <div className="alert"></div>
}

export function Form({ children, ...props }) {
	let submitted = true;
	function submitHandler( e ) {
		e.preventDefault();
		const alert = $(e.target).find(".alert");
		const data = new FormData(e.target);
		if( ! submitted )
			return;
		
		submitted = false;
		fetch(props.action+'?ajax',
		{
		    method: "POST",
		    body: data
		})
		.then(function(res){ return res.json(); })
		.then(function(data){
			submitted = true;
			if( data.status == 1 )
				alert.removeClass('alert-danger').addClass('alert-success');
			else
				alert.removeClass('alert-success').addClass('alert-danger');

			alert.html(data.msg)
			window.scrollTo( 0, alert[0].getBoundingClientRect().top + window.scrollY );
		});
	}

	return <form {...props} onSubmit={(e)=>submitHandler(e)}><Alert></Alert>{children}</form>
}

export default Form;