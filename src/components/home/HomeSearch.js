import React, { useState, useEffect } from 'react';
import { BASE_URL } from "../../constants/api";
import Select from 'react-select';
import Search from "./../hotels/HotelSearch";
import HomeSpecificHotel from "./HomeSpecificHotel";

function HomeSearch() {
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
				<h3 className="search-text">Search Hotels</h3>
				<Search handleSearch={filterHotels}/>
			</div>
				{filteredHotels.map(hotel => {
					const { id, establishmentName, imageUrl, description, price } = hotel;
					return (
						<HomeSpecificHotel id={id} name={establishmentName} image={imageUrl} description={description} price={price}/>
					);
				})}
        </>
	)
}

export default HomeSearch;