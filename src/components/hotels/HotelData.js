import React, { useState, useEffect } from 'react';
import { BASE_URL } from "../../constants/api";
import HotelSpecific from "./HotelSpecific"

function HotelData() {

	const [hotels, setHotels] = useState([]);
	useEffect(function() {
		fetch(BASE_URL)
			.then(function(response) {
				return response.json();
			})
			.then(function(json) {
				setHotels(json)
				console.log(hotels);
			})
			.catch(function(error) {
				console.log(error)
			})
	}, []);

	return (
			<>
				{hotels.map(hotel => {
					const { id, establishmentName, imageUrl, description, price } = hotel;

					return (
						<HotelSpecific id={id} name={establishmentName} image={imageUrl} description={description} price={price}/>
					);
				})}
			</>
	)
}

export default HotelData;