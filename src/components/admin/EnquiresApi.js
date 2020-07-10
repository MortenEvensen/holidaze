import React, { useState, useEffect } from 'react';

function EnquiresApi() {

	const [jsonHotels, setJsonHotels] = useState([]);
	useEffect(function() {
		fetch("http://localhost/hotel-api/get-enquiries.php")
			.then(function(response) {
				return response.json();
			})
			.then(function(data) {
				
				setJsonHotels(data)
				
			})
			
	}, []);
    
 return (
 <>
 	<div className="contact-wrap">
     {jsonHotels.map(hotel => {
			const { clientName, email, establishment, checkin, checkout } = hotel;	
     return (
              <div>
                <div className="contact-message-wrap">
                	<p><span className="bold">Name:</span> {hotel.clientName}</p>     
                	<p><span className="bold">Establishment:</span> {hotel.establishment}</p>
                	<p><span className="bold">Email:</span> {hotel.email}</p>
                	<p><span className="bold">Check in:</span> {hotel.checkin}</p>
                	<p><span className="bold">Check out:</span> {hotel.checkout}</p>
                </div>
                    <br />
            </div>
 
        )
    })}
     </div>
    
</>
 
 
 
 )   
    
}

export default EnquiresApi;