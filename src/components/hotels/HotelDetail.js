import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import Maps from "./../maps/Map"



function HotelDetail(props) {
	const [detail, setDetail] = useState([]);
	let { id } = useParams();
	const url = BASE_URL;
	useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json[id - 1]))
            .catch(error => console.log(error))
    }, []);



   

    return (

    	<>

    		<div className="hotel-details-wrap ">
        		
        		<div className="text-wrap">
        			<h2>{detail.establishmentName}</h2>
                <div className="image-details-wrap">
                    <img className="image" alt={detail.establishmentName} src={detail.imageUrl}/>
                </div>
        			<p><span className="bold">Description: </span>{detail.description}</p>
        			<p><span className="bold">Price: </span>{detail.price}$</p>
                    <p><span className="bold">Maximum guests: </span>{detail.maxGuests}</p>
                    <p><span className="bold">Contact email: </span>{detail.establishmentEmail}</p>
                    <p><span className="bold">Self catering: </span>{detail.selfCatering}</p>
        		</div>
                
        	</div>
            <div className="map-wrap">
            <h2>Location: </h2>
            <Maps lat={detail.googleLat} lng={detail.googleLong}/>
            {detail.googleLat && detail.googleLong && <Maps lat={detail.googleLat} lng={detail.googleLong} />}
            </div>
    	</>


    )
}

export default HotelDetail;