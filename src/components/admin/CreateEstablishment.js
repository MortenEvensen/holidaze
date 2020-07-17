import React, { useRef, useState, useEffect } from "react";
import { useForm, Controller } from 'react-hook-form';
import { BASE_URL } from "../../constants/api";
import ReactModal from 'react-modal';


function CreateEstablishment() {

    const customStyles = {
    content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

    const form = useRef(null);
    const [modalIsOpen,setIsOpen] = React.useState(false);
    const { register, handleSubmit, errors } = useForm();
    const [id, setId] = useState([]);
    useEffect(() => {
        fetch(BASE_URL)
            .then(response => response.json())
            .then(json => setId(json))
            .catch(error => console.log(error))
    }, []);

    function closeModal(){
        setIsOpen(false);
    }
    
    function onSubmit(){ 
        setIsOpen(true)
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
        <>		
			<div className="form-wrap">
            			<form ref={form} onSubmit={handleSubmit(onSubmit)}>
            				<div className="input-wrap">

            					<label htmlFor="establishmentName">Name of establishment: </label>
            						< br/ >
         						<input name="establishmentName" ref={register({ required: true })}/>
                                {errors.establishmentName && <p className="error">Establishment name is required.</p>}
         							< br/ >	
         						<label htmlFor="establishmentEmail">Establishment email: </label>
         							< br/ >
         						<input name="establishmentEmail" ref={register({ required: true })}/>
                                {errors.establishmentEmail && <p className="error">Establishment email is required.</p>}
         							< br/ >	

            					<label htmlFor="imageUrl">Image URL: </label>
            						< br/ >
         						<input name="imageUrl" ref={register({ required: true })}/>
                                {errors.imageUrl && <p className="error">Image Url is required.</p>}
         							< br/ >
         						<label htmlFor="price">Price per night: </label>
         							< br/ >
         						<input name="price" type="number" ref={register({ required: true })}/>
                                {errors.price && <p className="error">Price is required.</p>}
         							< br/ >	
         						<label htmlFor="maxGuests">Maximum guests: </label>
         							< br/ >
         						<input name="maxGuests" type="number" min="0" max="100"  ref={register({ required: true })}/>
                                {errors.maxGuests && <p className="error">Maximum number of guests is required.</p>}
                                    < br/ > 
                                <label htmlFor="googleLat">Google Latitude </label>
                                    < br/ >
                                <input name="googleLat" type="text" ref={register({ required: true })}/>
                                {errors.googleLat && <p className="error">Google maps latitude is required.</p>}
                                    < br/ > 
                                <label htmlFor="googleLong">Google Longitude: </label>
                                    < br/ >
                                <input name="googleLong" type="text" ref={register({ required: true })}/>
                                {errors.googleLong && <p className="error">Google maps longitude is required.</p>}
                                    < br/ > 
                                <label htmlFor="selfCatering">Self catering: </label>
                                    < br/ >
                                 <select name="selfCatering">
                                    <option value="true">true</option>
                                    <option value="false">false</option>
                                     
                                </select>
            					<label htmlFor="description">Description: </label>
            						< br/ >
         						<textarea name="description" ref={register({ required: true })}/>
         						{errors.description && <p className="error">Description is required.</p>}		
         					
                             < br/ >
                            <label htmlFor="id">Id: </label>
                             < br/ >
                            <input name="id" readOnly value={id.length + 1} ref={register({ required: true })}/>
                            {errors.id && <p className="error">Id is required.</p>}
                            < br/ >
            				<input className="button" name="submit" type="submit" />
                            </div>
        				</form>
                        <ReactModal 
                            isOpen={modalIsOpen}
                            style={customStyles}>
                            <div className="modal-wrap">
                                <h2>New establishment has been added!</h2>
                                <p>It can be found in the hotels page.</p>
                                <button className="button" onClick={closeModal}>Close</button>
                            </div>
                        </ReactModal>                 
        		</div>    		              
        </>                
    );	
}

export default CreateEstablishment