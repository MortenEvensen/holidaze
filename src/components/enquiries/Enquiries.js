import React, { useState, useEffect, useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export function Enquiry() {

    const form = useRef(null)
	const { register, handleSubmit, errors, control } = useForm();
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
     				    {errors.clientName && <p className="error">Name is required.</p>}
     			            < br/ >	
     			        <label htmlFor="email">Email</label>
     			            < br/ >
     				    <input name="email" ref={register({ required: true })} />
     				    {errors.email && <p className="error">Email is required.</p>}	
                            < br/ >                                                
                     <section>
                        <label htmlFor="checkin">Checkin date: </label>
                            < br/>
                        <Controller
                          as={ReactDatePicker}
                          control={control}
                          valueName="selected" // DateSelect value's name is selected
                          onChange={([selected]) => selected}
                          name="checkin"
                          className="input"
                          placeholderText="Select date"
                        />
                        {errors.checkin && <p className="error">Check in date is required.</p>} 
                    </section>
                    <section>
                         <label htmlFor="checkout">Checkout date: </label>
                            < br/>
                        <Controller
                          as={ReactDatePicker}
                          control={control}
                          valueName="selected" // DateSelect value's name is selected
                          onChange={([selected]) => selected}
                          name="checkout"
                          className="input"
                          placeholderText="Select date"
                        />
                        {errors.checkout && <p className="error">Check in date is required.</p>} 
                    </section>

        		        <input className="button" name="submit" type="submit" />
                    </div>
    		    </form>
    	   </div>
        </>
    );
}

export default Enquiry;