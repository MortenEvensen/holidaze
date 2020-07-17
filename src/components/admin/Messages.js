import React, {
    useState,
    useEffect
} from 'react';

function Messages() {

    const [jsonHotels, setJsonHotels] = useState([]);
    useEffect(function () {
        fetch("http://localhost/hotel-api/get-contacts.php")
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {
                setJsonHotels(data)
            })
    }, []);
    
 return (
 <>
     <div className="contact-wrap">
        {jsonHotels.map(hotel => {
        const { clientName, email, message } = hotel;	
     return (
        <div>
           <div className="contact-message-wrap">
              <p><span className="bold">Name:</span> {hotel.clientName}</p>     
              <p><span className="bold">Email:</span> {hotel.email}</p>
              <p><span className="bold">Message:</span> {hotel.message}</p>
           </div>
           <br />
        </div>
            )
        })}
    </div>
</>
    )       
}

export default Messages;