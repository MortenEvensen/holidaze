import React from 'react';
import { useForm } from 'react-hook-form';

export function Contact() {


	const { register, handleSubmit, errors } = useForm();
  	const onSubmit = (data) => {
    fetch("http://localhost:8080/hotel-api/contact-success.php", {
    	method: "POST",
    	body: JSON.stringify(data)
    })
    .then(console.log(data))
  };


    return (
        <>
        <div className="form-wrap">
        	<h2 className="contact-header">Contact</h2>
        	<form onSubmit={handleSubmit(onSubmit)}>
        	<div className="input-wrap">
        		<label htmlFor="clientName">Name</label>
        		< br/ >

     				<input name="clientName" ref={register({ required: true })} /> {/* register an input */}
     				{errors.name && <p className="error">Name is required.</p>}

     				

     			< br/ >	
     			<label htmlFor="email">Email</label>
     			< br/ >
     				<input name="email" ref={register({ required: true })} />
     				{errors.email && <p className="error">Email is required.</p>}
    				
    		</div>
    		<div className="message-wrap">
        	<label htmlFor="message">Message</label>
        	< br/ >
     			<textarea name="message" ref={register({ required: true })} />
     			{errors.message && <p className="error">Message is required.</p>}
     			
     		</div>
        		<input className="button" name="submit" type="submit" />
    		</form>
    	</div>
    	<div>
    		<p>Heihei</p>
    	</div>
        </>
    );
}

export default Contact;