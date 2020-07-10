import React, { Component, useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";
import Maps from "./../maps/Map";



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



    console.log("lat: " + detail.googleLat + ", lng: " + detail.googleLong )

    return (

    	<>

    		<div className="hotel-details-wrap">
        		
        		<div className="text-wrap">
        			<h2>{detail.establishmentName}</h2>
                <div className="image-details-wrap">
                    <img className="image" src={detail.imageUrl}/>
                </div>
        			<p>Description: {detail.description}</p>
        			<p>Price: {detail.price}$</p>
                    <p>Maximum guests: {detail.maxGuests}</p>
                    <p>Contact email: {detail.establishmentEmail}</p>
                    <p>Selfcatering: {detail.selfCatering}</p>
        		</div>

        	</div>
            
    	</>


    )
}

export default HotelDetail;