import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

export function Contact() {

    const form = useRef(null)
	const { register, handleSubmit, errors } = useForm();
  	function onSubmit(){ 

    const data = new FormData(form.current)		
    fetch("http://localhost/hotel-api/contact-success.php", {
    	method: "POST",
    
    	body: data
    })
    .then(function(response) {
        console.log('Success:', response);
    return response.json();
  	})
    .then(data => {
 	 	console.log('Success:', JSON.stringify(data));
	})
	.catch((error) => {
  		console.error('Error:', error);
	});   
  };
 
	return (
	<>	
			<div className="form-wrap">
            			<h2 className="contact-header">Contact</h2>
            			<form ref={form} onSubmit={handleSubmit(onSubmit)}>
            				<div className="input-wrap">
            					<label htmlFor="clientName">Name</label>
            						< br/ >
         						<input name="clientName" ref={register({ required: true })} />
        						{errors.name && <p className="error">Name is required.}</p>}
         							< br/ >	
         						<label htmlFor="email">Email</label>
         							< br/ >
         						<input name="email" ref={register({ required: true })} />
         						{errors.email && <p className="error">Email is required.}</p>}		
        					</div>
        					<div className="message-wrap">
            					<label htmlFor="message">Message</label>
            						< br/ >
         						<textarea name="message" ref={register({ required: true })} />
         						{errors.message && <p className="error">Message is required.}</p>}			
         					</div>
            					<input className="button" name="submit" type="submit" />
        				</form>                 
        		</div>    		              
        </>                
    );	
}

export default Contact;