import React, { useState, useEffect } from 'react';

function Messages() {

	const [jsonHotels, setJsonHotels] = useState([]);
	useEffect(function() {
		fetch("http://localhost/hotel-api/contact.json")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				
				setJsonHotels(data)
				
			})
			
	}, []);
    
 return (
 <>
     {jsonHotels.map(hotel => {
			const { clientName, email, message } = hotel;	
     return (
              <div>
                <br />
                <p>Name: {hotel.clientName}</p>     
                <p>Email: {hotel.email}</p>
                <p>Message: {hotel.message}</p>
                    <br />
            </div>
 
        )
    })}
     
    
</>
 
 
 
 )   
    
}

export default Messages;