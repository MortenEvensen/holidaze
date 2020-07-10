import React, { useState, useEffect, useRef } from 'react';
import { useForm } from 'react-hook-form';

export function Enquiry() {

    const form = useRef(null)
	const { register, handleSubmit, errors } = useForm();
  	function onSubmit(){ 

    const data = new FormData(form.current)     
    fetch("http://localhost/hotel-api/enquiry-success.php", {
        method: "POST",
    
        body: data
    })
    .then(function(response) {
        console.log('Success:', form);
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
        	   <h2 className="contact-header">Enquery</h2>
        	   <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        	        <div className="input-wrap">
        		        <label htmlFor="establishment">Establishment</label>
        		            < br/ >
                        <input name="establishment" ref={register({ required: true })} /> {/* register an input */}
                        {errors.establishment && <p className="error">Establishment is required.</p>}
                            < br/ >
                        <label htmlFor="clientName">Name</label>
                            < br/ >
     				    <input name="clientName" ref={register({ required: true })} /> {/* register an input */}
     				    {errors.name && <p className="error">Name is required.</p>}
     			            < br/ >	
     			        <label htmlFor="email">Email</label>
     			            < br/ >
     				    <input name="email" ref={register({ required: true })} />
     				    {errors.email && <p className="error">Email is required.</p>}	
                            < br/ >	   		    		       	
        	            <label htmlFor="checkin">Check in</label>
                            < br/ >
                        <input name="checkin" ref={register({ required: true })} />
                        {errors.email && <p className="error">Check in date is required.</p>} 
                            < br/ >  
     		             <label htmlFor="checkout">Check out</label>
                            < br/ >
                        <input name="checkout" ref={register({ required: true })} />
                        {errors.email && <p className="error">Check out date is required.</p>}  	
     		                 < br/>
        		        <input className="button" name="submit" type="submit" />
                    </div>
    		    </form>
    	   </div>
        </>
    );
}

export default Enquiry;