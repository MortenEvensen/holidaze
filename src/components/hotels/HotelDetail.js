import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { BASE_URL } from "../../constants/api";

function HotelDetail() {
	const [detail, setDetail] = useState([]);

	let { id } = useParams();

	const url = BASE_URL;
	console.dir(url)


	useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(json => setDetail(json[id - 1]))
            .catch(error => console.log(error))
    }, []);

    return (
    	<>
    	

    		<div className="hotel-wrap">
        		<div className="image-wrap">
        			<img src={detail.imageUrl}/>
        		</div>
        		<div className="text-wrap">
        			<h2>{detail.establishmentName}</h2>
        			<p>Description: {detail.description}</p>
        			<p>Price: {detail.price}$</p>
     
        		</div>
        	</div>
    	</>


    )
}

export default HotelDetail;