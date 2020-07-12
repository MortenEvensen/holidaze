import React, { useRef } from "react";
import { useForm, Controller } from 'react-hook-form';


function CreateEstablishment() {

	const form = useRef(null)
	const { register, handleSubmit, errors } = useForm();
  	function onSubmit(){ 

    const data = new FormData(form.current)		
    fetch("http://localhost/hotel-api/add-establishments-success.php", {
    	method: "POST",
    
    	body: data
    })
    .then(function(response) {
    return response.json();
  	})
    .then(data => {
 	 	console.log('Success:', data);
	})
	.catch((error) => {
  		console.error('Error:', error);
	});   
  };
 
	return (
	<>		<h2 className="contact-header">Add new establishment: </h2>
			<div className="form-wrap">
            			
            			<form ref={form} onSubmit={handleSubmit(onSubmit)}>
            				<div className="input-wrap">

            					<label htmlFor="establishmentName">Name of establishment: </label>
            						< br/ >
         						<input name="establishmentName" />
         							< br/ >	
         						<label htmlFor="establishmentEmail">Establishment email: </label>
         							< br/ >
         						<input name="establishmentEmail" />
         							< br/ >	

            					<label htmlFor="imageUrl">Image URL: </label>
            						< br/ >
         						<input name="imageUrl" />
         							< br/ >
         						<label htmlFor="price">Price per night: </label>
         							< br/ >
         						<input name="price" type="number" />
         							< br/ >	
         						<label htmlFor="maxGuests">Maximum guests: </label>
         							< br/ >
         						<input name="maxGuests" type="number"min="0" max="40"  />

        					</div>
        					<div className="message-wrap">
            					<label htmlFor="description">Description: </label>
            						< br/ >
         						<textarea name="description" />
         								
         					</div>
            					<input className="button" name="submit" type="submit" />
        				</form>                 
        		</div>    		              
        </>                
    );	
}

export default CreateEstablishment