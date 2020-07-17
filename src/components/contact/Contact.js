import React, { useRef } from 'react';
import { useForm } from 'react-hook-form';
import ReactModal from 'react-modal';

export function Contact() {

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

    const form = useRef(null);
    const [modalIsOpen, setIsOpen] = React.useState(false);
    const {
        register,
        handleSubmit,
        errors
    } = useForm();

    function onSubmit() {
        setIsOpen(true)

        const data = new FormData(form.current)
        fetch("http://localhost/hotel-api/contact-success.php", {
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
        <h2 className="contact-header">Contact</h2>
			<div className="form-wrap">	
            			<form ref={form} onSubmit={handleSubmit(onSubmit)}>
            				<div className="input-wrap">
            					<label htmlFor="clientName">Name</label>
            						< br/ >
         						<input name="clientName" ref={register({ required: true })} />
        						{errors.name && <p className="error">Name is required.</p>}
         							< br/ >	
         						<label htmlFor="email">Email</label>
         							< br/ >
         						<input name="email" ref={register({ required: true })} />
         						{errors.email && <p className="error">Email is required.</p>}		
        					           < br/ >
            					<label htmlFor="message">Message</label>
            						< br/ >
         						<textarea name="message" ref={register({ required: true })} />
         						{errors.message && <p className="error">Message is required.</p>}			
         					              < br/ >
            					<input className="button" name="submit" type="submit" />
                            </div>
        				</form>   
            </div> 
                <ReactModal 
                    isOpen={modalIsOpen}
                    style={customStyles}>
                        <div className="modal-wrap">
                            <h2>Thank you for your message!</h2>
                            <p>We will get back to you as soon as possible!</p>
                            <button className="button" onClick={closeModal}>Close</button>
                        </div>
                </ReactModal>    		              
    </>                
    );	
}

export default Contact;