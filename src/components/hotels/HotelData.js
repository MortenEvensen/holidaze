import React, { useState, useEffect } from 'react';
import { BASE_URL } from "../../constants/api";
import Search from "./HotelSearch";
import HotelSpecific from "./HotelSpecific";

function HotelData() {

        const [hotels, setHotels] = useState([]);
        const [filteredHotels, setFilteredHotels] = useState([]);
        useEffect(function () {
            fetch(BASE_URL)
                .then(function (response) {
                    return response.json();
                })
                .then(function (json) {
                    setHotels(json);
                    setFilteredHotels(json);
                })
                .catch(function (error) {
                    console.log(error)
                })
        }, []);

        const filterHotels = function (e) {
            const searchValue = e.target.value.toLowerCase();
            const filteredArray = hotels.filter(function (item) {
                const lowerCaseName = item.establishmentName.toLowerCase();
                if (lowerCaseName.includes(searchValue)) {
                    return true;
                }
            });
            setFilteredHotels(filteredArray)
        }

	return (
			<>
			<div className="search">
				<Search handleSearch={filterHotels}/>
			</div>
				{filteredHotels.map(hotel => {
					const { id, establishmentName, imageUrl, description, price } = hotel;

					return (
						<HotelSpecific id={id} name={establishmentName} image={imageUrl} description={description} price={price}/>
					);
				})}
			</>
	)
}

export default HotelData;