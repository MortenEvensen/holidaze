import React from "react";
import { Link } from "react-router-dom";

function HotelSpecific({ id, name, image, description, price }) {
	return (
		<>
		<Link to={"hotel/" + id}>
			<div className="hotel-wrap">
        		<div className="image-wrap">
        			<img alt={name} src={image}/>
        		</div>
        		<div className="text-wrap">
        			<h2>{name}</h2>
        			<p>{description}</p>
        			<p>Price: {price}$</p>
        			
        		</div>
        	</div>
        </Link>
		</>
	)
}

export default HotelSpecific;