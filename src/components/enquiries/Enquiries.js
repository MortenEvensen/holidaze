import React, { useRef } from 'react';
import { useForm, Controller } from 'react-hook-form';
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ReactModal from 'react-modal';

export function Enquiry() {

    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)'
        }
    };


    function closeModal() {
        setIsOpen(false);
    }

    const form = useRef(null)
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
        errors,
        control
    } = useForm();

    function onSubmit() {
        setIsOpen(true)
        const data = new FormData(form.current)
        fetch("http://localhost/hotel-api/enquiry-success.php", {
                method: "POST",
                body: data
            })
            .then(function (response) {
                return response.json();
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    };
    return (
        <>
        <h2 className="contact-header">Book your room: </h2>
            <div className="form-wrap">
        	   
        	   <form ref={form} onSubmit={handleSubmit(onSubmit)}>
        	        <div className="input-wrap">
        		        <label htmlFor="establishment">Name of establishment</label>
        		            < br/ >
                        <input name="establishment" ref={register({ required: true })} /> {/* register an input */}
                        {errors.establishment && <p className="error">Establishment name is required.</p>}
                            < br/ >
                        <label htmlFor="clientName">Your name</label>
                            < br/ >
     				    <input name="clientName" ref={register({ required: true })} /> {/* register an input */}
     				    {errors.clientName && <p className="error">Name is required.</p>}
     			            < br/ >	
     			        <label htmlFor="email">Your email</label>
     			            < br/ >
     				    <input name="email" ref={register({ required: true })} />
     				    {errors.email && <p className="error">Email is required.</p>}	
                            < br/ >                                                
                     <section>
                        <label htmlFor="checkin">Check-in date: </label>
                            < br/>
                        <Controller
                          as={ReactDatePicker}
                          control={control}
                          valueName="selected" // DateSelect value's name is selected
                          onChange={([selected]) => selected}
                          name="checkin"
                          className="input"
                          placeholderText="Select date"
                          ref={register({ required: true })}
                        />
                        {errors.checkin && <p className="error">Check in date is required.</p>} 
                    </section>
                    <section>
                         <label htmlFor="checkout">Check-out date: </label>
                            < br/>
                        <Controller
                          as={ReactDatePicker}
                          control={control}
                          valueName="selected" // DateSelect value's name is selected
                          onChange={([selected]) => selected}
                          name="checkout"
                          className="input"
                          placeholderText="Select date"
                          ref={register({ required: true })}
                        />
                        {errors.checkout && <p className="error">Check out date is required.</p>} 
                    </section>
                      <label htmlFor="adults">Number of adults: </label>  
                        <br/> 
                    <input name="adults" type="number"min="0" max="20" ref={register({ required: true })}/>
                     {errors.adults && <p className="error">Number of adults is required.</p>} 
                        <br/> 
                     <label htmlFor="children">Number of children: </label>  
                        <br/> 
                    <input name="children" type="number" min="0" max="20" ref={register({ required: true })}/>
                     {errors.children && <p className="error">Number of children is required.</p>} 
                        <br/> 
                        <label htmlFor="notes">Notes: </label>
                                    < br/ >
                                <textarea name="notes" />
                               
                                <br/>
        		        <input className="button" name="submit" type="submit" />
                    </div>
    		    </form>
    	   </div>
            <ReactModal 
                isOpen={modalIsOpen}
                style={customStyles}>
                <div className="modal-wrap">
                    <h2>Thank you for your booking request!</h2>
                    <p>You will soon recive an email with confirmation of your booking.</p>
                    <p>Thank you for using Holidaze for your booking!</p>
                    <button className="button" onClick={closeModal}>Close</button>
                </div>
            </ReactModal>
        </>
    );
}

export default Enquiry;